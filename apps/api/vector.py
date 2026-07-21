import os
import re
import time
from dotenv import load_dotenv
from google import genai
from sqlalchemy import delete, insert
from tables import portfolio_embeddings, engine

load_dotenv()

client = genai.Client()

file_path = os.path.join(os.path.dirname(__file__), "personalisized-data", "about_me.md")

if not os.path.exists(file_path):
    raise FileNotFoundError(f"Kan het bestand niet vinden op: {file_path}")

with open(file_path, "r", encoding="utf-8") as f:
    markdown_content = f.read()

def split_markdown_by_headers(text):
    chunks = re.split(r'(?=(?:^|\n)(?:#|##)\s)', text.strip())
    return [chunk.strip() for chunk in chunks if chunk.strip()]

chunks = split_markdown_by_headers(markdown_content)

print(f"Starten met het verwerken van {len(chunks)} tekstblokken...")

rows = []
for i, chunk in enumerate(chunks):
    print(f"[{i+1}/{len(chunks)}] Vectors genereren voor: '{chunk[:35]}...'")

    response = client.models.embed_content(
        model="gemini-embedding-2",
        contents=chunk,
        config={"output_dimensionality": 768}
    )

    vector = response.embeddings[0].values
    rows.append({"text_content": chunk, "embedding": vector})

    time.sleep(3)

with engine.begin() as conn:
    conn.execute(delete(portfolio_embeddings))
    conn.execute(insert(portfolio_embeddings), rows)

print("\n Success")
