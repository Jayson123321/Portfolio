from dataclasses import asdict
import os
import requests
from dotenv import load_dotenv
from models import ProjectModel
from fastapi import FastAPI
from sqlalchemy import insert, engine
from tables import projects_table, engine
load_dotenv() 

app = FastAPI()

github_base_url = os.getenv("GITHUB_BASE_URL")
github_repo_url = os.getenv("GITHUB_REPOS_URL")
github_token = os.getenv("GITHUB_ACCESS_TOKEN")
github_headers = {"Authorization": f"token {github_token}"}

REPO_BLACKLIST = {
    "wordpresswebsite",
    "airfa_ble_kivy",
    "wikidata"
}

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
 

    