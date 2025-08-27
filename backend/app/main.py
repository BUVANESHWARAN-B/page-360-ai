from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.schema import AnalyzeUrlRequest, AnalyzeUrlResponse, PageStats
from app.services.web_analyzer import fetch_webpage, get_page_statistics


app = FastAPI(title="Page360 API")

# Allow frontend (React dev server)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/v1/analyze/url", response_model=AnalyzeUrlResponse)
def analyze_url(payload: AnalyzeUrlRequest):
    try:
        html, cookies = fetch_webpage(payload.url)
        stats = get_page_statistics(html)
        return AnalyzeUrlResponse(
            page_stats=PageStats(**stats),
            cookies_found=len(cookies)
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
