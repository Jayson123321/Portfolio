from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional


@dataclass
class ProjectModel:
    id: int
    name: str
    full_name: str
    html_url: str
    description: Optional[str]
    language: Optional[str]
    stargazers_count: int
    open_issues_count: int
    created_at: datetime
    updated_at: datetime
    pushed_at: datetime
    homepage: Optional[str]
    topics: list[str] = field(default_factory=list)
    visibility: str = "public"
    archived: bool = False
    size: int = 0

    @classmethod
    def from_github(cls, data: dict) -> "ProjectModel":
        return cls(
            id=data["id"],
            name=data["name"],
            full_name=data["full_name"],
            html_url=data["html_url"],
            description=data.get("description"),
            language=data.get("language"),
            stargazers_count=data["stargazers_count"],
            open_issues_count=data["open_issues_count"],
            created_at=datetime.fromisoformat(data["created_at"].replace("Z", "+00:00")),
            updated_at=datetime.fromisoformat(data["updated_at"].replace("Z", "+00:00")),
            pushed_at=datetime.fromisoformat(data["pushed_at"].replace("Z", "+00:00")),
            homepage=data.get("homepage"),
            topics=data.get("topics", []),
            visibility=data.get("visibility", "public"),
            archived=data.get("archived", False),
            size=data.get("size", 0),
        )
    
