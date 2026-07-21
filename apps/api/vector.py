import os
import re 
import time  
from dotenv import load_dotenv
from google import genai
from supabase import create_client, Client

load_dotenv()

client = genai.Client()

supabase_url = os.environ.get("SUPABASE_URL")
supabase_key = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)


file_path = r"C:\Users\Jayso\OneDrive\Documenten\portfolio\github_projects\Portfolio\apps\api\personalisized-data\about_me.md"

if not os.path.exists(file_path):
    raise FileNotFoundError(f"Kan het bestand niet vinden op: {file_path}")

with open(file_path, "r", encoding="utf-8") as f:
    markdown_content = f.read()

def split_markdown_by_headers(text):
    """Knipt de tekst op basis van '#' en '##' koppen"""
    chunks = re.split(r'(?=(?:^|\n)(?:#|##)\s)', text.strip())
    return [chunk.strip() for chunk in chunks if chunk.strip()]

chunks = split_markdown_by_headers(markdown_content)

print(f"Starten met het verwerken van {len(chunks)} tekstblokken...")

for i, chunk in enumerate(chunks):
    print(f"[{i+1}/{len(chunks)}] Vectors genereren voor: '{chunk[:35]}...'")
    
    response = client.models.embed_content(
        model="gemini-embedding-2",
        contents=chunk,
        config={"output_dimensionality": 768}
    )
    
    vector = response.embeddings[0].values

    
    data_to_insert = {
        "text_content": chunk,
        "embedding": vector
    }
    
    supabase.table("portfolio_embeddings").insert(data_to_insert).execute()
    
    time.sleep(3)


print("\n Success")
