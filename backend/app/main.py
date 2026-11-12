
# pyrefly: ignore[missing-import]
from fastapi import FastAPI

app = FastAPI(
    title="Industrial Operations Copilot API",
    description="API for industrial operations monitoring and incident management.",
    version="0.1.0",
)


@app.get("/health", tags=["Health"])
def health_check():
    return {
        "status": "healthy",
        "service": "industrial-operations-copilot-api",
    }
