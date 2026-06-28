from sqlalchemy import create_engine, insert, Table, Column, Integer, String, Boolean, JSON, MetaData
import os
from dotenv import load_dotenv

load_dotenv()

db_password = os.getenv("DB_PASSWORD")
db_host = os.getenv("DB_HOST", "db")
engine = create_engine(f"postgresql://postgres:{db_password}@{db_host}:5432/Jaysonportfolio", echo=True)
metadata=MetaData()

projects_table = Table('projects_table', metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String),
    Column('full_name', String),
    Column('html_url', String),
    Column('description', String),
    Column('language', String),
    Column('stargazers_count', Integer),
    Column('open_issues_count', Integer),
    Column('created_at', String),
    Column('updated_at', String),
    Column('pushed_at', String),
    Column('homepage', String),
    Column('topics', JSON),
    Column('visibility', String),
    Column('archived', Boolean),
    Column('size', Integer),
)
metadata.create_all(engine)
