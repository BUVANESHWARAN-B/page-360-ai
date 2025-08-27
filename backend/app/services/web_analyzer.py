import requests
from bs4 import BeautifulSoup

def fetch_webpage(url: str, user_agent: str | None = None):
    headers = {"User-Agent": user_agent or "Mozilla/5.0"}
    s = requests.Session()
    r = s.get(url, headers=headers, timeout=30)
    r.raise_for_status()
    return r.text, r.cookies

def get_page_statistics(html: str):
    soup = BeautifulSoup(html, "html.parser")
    
    # Collect headings
    headings = []
    for i in range(1, 7):
        for h in soup.find_all(f"h{i}"):
            headings.append({"level": i, "text": h.get_text(strip=True)[:80]})

    # Collect images missing alt
    images_no_alt = [img.get("src", "") for img in soup.find_all("img") if not img.get("alt")]

    # Collect text sample
    text = soup.get_text(" ", strip=True)[:2000]

    return {
        "headings": headings,
        "images_without_alt": images_no_alt,
        "word_count": len(text.split()),
        "text_sample": text
    }
