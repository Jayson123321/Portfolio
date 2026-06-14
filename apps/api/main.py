import os
import requests
from dotenv import load_dotenv
from models import ProjectModel
from fastapi import FastAPI

load_dotenv() 

app = FastAPI()

github_base_url = os.getenv("GITHUB_BASE_URL")

@app.get("/")
def root():
    return {"message": "Portfolio API"}

@app.get("/githubRepos")
def get_github_repos():
    response = requests.get(github_base_url)
    data = response.json()
    projects = [ProjectModel.from_github(repo) for repo in data]
    return projects