from dataclasses import asdict
import os
import requests
from dotenv import load_dotenv
from models import ProjectModel
from fastapi import FastAPI
from sqlalchemy import insert, text
from tables import projects_table, engine
from pydantic import BaseModel
from google import genai

load_dotenv()

app = FastAPI()
client = genai.Client()
github_base_url = os.getenv("GITHUB_BASE_URL")
github_repo_url = os.getenv("GITHUB_REPOS_URL")
github_token = os.getenv("GITHUB_ACCESS_TOKEN")
github_headers = {"Authorization": f"token {github_token}"}

REPO_BLACKLIST = {
    "wordpresswebsite",
    "airfa_ble_kivy",
    "wikidata"
}

class HistoryMessage(BaseModel):
    role: str
    text: str

class ChatRequest(BaseModel):
    message: str
    history: list[HistoryMessage] = []

@app.get("/")
def root():
    return {"message": "Portfolio API"}

@app.get("/insert_projects")
def insert_github_projects():
    try:
        projectsResponse = requests.get(github_base_url, headers=github_headers)
        projectsData = projectsResponse.json()
        projects = [ProjectModel.from_github(repo) for repo in projectsData if not repo.get("fork") if repo.get("name") not in REPO_BLACKLIST]
        for project in projects:
            project.commits = fetch_repo_elements(project.name, "commits")
            project.languages = fetch_repo_elements(project.name, "languages")
            project.readme = fetch_repo_elements(project.name, "readme")
        projects_as_dict = [asdict(project) for project in projects]
        with engine.begin() as conn:
            conn.execute(projects_table.delete())
            conn.execute(projects_table.insert(), projects_as_dict)
        return projects

    except Exception as e:
        print(e)
        return []

def fetch_repo_elements(repo_name: str, resource: str):
    try:
        repoReponse = requests.get(github_repo_url + repo_name + "/" + resource, headers=github_headers)
        repoData = repoReponse.json()
        return repoData
    except Exception as e:
        print(e)
    return []

@app.get("/projects")
def get_projects():
    with engine.begin() as conn:
        result = conn.execute(projects_table.select())
        projects = [ProjectModel(**row._mapping) for row in result]
    return projects

@app.post("/api/chat")
def chat_with_assistant(request: ChatRequest):
    try:
        embedding_response = client.models.embed_content(
            model="gemini-embedding-2",
            contents=request.message,
            config={"output_dimensionality": 768}
        )
        query_vector = embedding_response.embeddings[0].values

        vector_str = "[" + ",".join(str(v) for v in query_vector) + "]"

        with engine.connect() as conn:
            result = conn.execute(
                text("""
                    SELECT text_content, 1 - (embedding <=> CAST(:embedding AS vector)) AS similarity
                    FROM portfolio_embeddings
                    WHERE 1 - (embedding <=> CAST(:embedding AS vector)) > :threshold
                    ORDER BY embedding <=> CAST(:embedding AS vector)
                    LIMIT :count
                """),
                {"embedding": vector_str, "threshold": 0.3, "count": 3}
            ).fetchall()

        context = "\n\n".join([row.text_content for row in result])

        if not context:
            context = "Geen specifieke informatie gevonden in de database over dit onderwerp."

        system_instruction = (
            "Je bent een enthousiaste, vriendelijke en proactieve AI-assistent op de portfolio-website van Jayson. "
            "Jouw taak is om vragen van bezoekers over Jayson te beantwoorden op basis van de meegeleverde context uit de database. "
            "Jayson volgt momenteel een HBO-opleiding richting AI Engineering en heeft een sterke basis in Software Development. "
            "Relevante onderwerpen: zijn studiepad, zijn Schiphol field engineering stage, "
            "zijn passie voor AI-technologieën, projecten zoals de Juf Aimee RAG/MCP-oplossing en zijn verkiezingen-visualisatie, en zijn toekomstplannen voor een AI Master. "
            "BELANGRIJK: Sluit elk antwoord altijd af met één concrete vervolgvraag die de bezoeker kan stellen, "
            "zodat ze weten wat ze nog meer kunnen ontdekken. Bijvoorbeeld: 'Wil je meer weten over zijn stage bij Schiphol?' of 'Zal ik je vertellen over zijn AI-projecten?' "
            "Wees altijd eerlijk: als het antwoord niet in de context staat, zeg dan beleefd dat je dat niet weet en verwijs door naar zijn GitHub of contactopties. "
            "Voorkom hallucinaties en verzin geen feiten, certificaten of projecten die niet in de context staan. "
            "Als een vraag helemaal niks met Jayson te maken heeft, geef dan een korte, vriendelijke afwijzing met een suggestie wat ze wél kunnen vragen."
        )

        history_text = ""
        if request.history:
            recent = request.history[-6:]
            history_text = "\nGesprekgeschiedenis:\n" + "\n".join([
                f"{'Bezoeker' if msg.role == 'user' else 'Assistent'}: {msg.text}"
                for msg in recent
            ]) + "\n"

        ai_response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"Context uit Jayson's database:\n{context}\n{history_text}\nVraag van de bezoeker: {request.message}",
            config={"system_instruction": system_instruction}
        )

        return {
            "reply": ai_response.text,
            "sources_used": len(result)
        }

    except Exception as e:
        print(f"Chatfout: {e}")
        return {"reply": "Oeps, er ging even iets mis in mijn brein. Probeer het zometeen nog eens!", "sources_used": 0}


@app.get("/api/chat/context")
def debug_chat_context(q: str):
    try:
        embedding_response = client.models.embed_content(
            model="gemini-embedding-2",
            contents=q,
            config={"output_dimensionality": 768}
        )
        query_vector = embedding_response.embeddings[0].values
        vector_str = "[" + ",".join(str(v) for v in query_vector) + "]"

        with engine.connect() as conn:
            result = conn.execute(
                text("""
                    SELECT text_content, 1 - (embedding <=> CAST(:embedding AS vector)) AS similarity
                    FROM portfolio_embeddings
                    WHERE 1 - (embedding <=> CAST(:embedding AS vector)) > 0.2
                    ORDER BY embedding <=> CAST(:embedding AS vector)
                    LIMIT 3
                """),
                {"embedding": vector_str}
            ).fetchall()

        return [{"text_content": row.text_content, "similarity": row.similarity} for row in result]
    except Exception as e:
        return {"error": str(e)}
