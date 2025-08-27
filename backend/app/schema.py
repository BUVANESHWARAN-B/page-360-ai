from pydantic import BaseModel, HttpUrl
from typing import List, Dict

class PageStats(BaseModel):
    headings: List[Dict]
    images_without_alt: List[str]
    word_count: int
    text_sample: str

class AnalyzeUrlRequest(BaseModel):
    url: HttpUrl
    region: str = "Global"

class AnalyzeUrlResponse(BaseModel):
    page_stats: PageStats
    cookies_found: int
