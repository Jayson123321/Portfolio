import os
import requests
from dotenv import load_dotenv
from models import ProjectModel
from fastapi import FastAPI
from sqlalchemy import insert, engine

load_dotenv() 

app = FastAPI()

github_base_url = os.getenv("GITHUB_BASE_URL")

@app.get("/")
def root():
    return {"message": "Portfolio API"}

@app.get("/insert_projects")
def get_github_repos():
    try:
        response = requests.get(github_base_url)
        data = response.json()
        projects = [ProjectModel.from_github(repo) for repo in data]
        with engine.begin() as conn:
            conn.execute(projects_table.insert(), projects)

    except Exception as e: 
        print(e)    
    return projects