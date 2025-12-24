# Quickstart for RAG Chatbot

This guide provides the basic steps to get the RAG chatbot running locally.

## Prerequisites

- Python 3.9+
- Node.js 20+
- An account with Qdrant Cloud, Neon, and access to the Gemini API.

## Backend Setup

1.  **Clone the repository.**
2.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Set up environment variables:**
    Create a `.env` file and populate it with your API keys and database credentials.
    ```
    GEMINI_API_KEY=...
    QDRANT_API_KEY=...
    QDRANT_HOST=...
    NEON_DATABASE_URL=...
    ```
4.  **Run the ingestion script:**
    ```bash
    python ingest.py
    ```
5.  **Start the FastAPI server:**
    ```bash
    uvicorn main:app --reload
    ```

## Frontend Setup

1.  **Navigate to the Docusaurus project:**
    ```bash
    cd my-robotics-textbook-project
    ```
2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```
The floating chat button should now be visible on all pages.
