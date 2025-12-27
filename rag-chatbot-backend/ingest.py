import os
import argparse
from langchain_text_splitters import RecursiveCharacterTextSplitter
from qdrant_client import QdrantClient, models
from langchain_community.document_loaders import DirectoryLoader
import google.generativeai as genai
from dotenv import load_dotenv

# --- Configuration ---
load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
COLLECTION_NAME = "robotics_textbook"

# --- Argument Parsing ---
parser = argparse.ArgumentParser(description="Ingest markdown documents into Qdrant.")
parser.add_argument("source_dir", help="Directory containing markdown files to ingest.")
args = parser.parse_args()

# --- Initialize Clients ---
if not all([QDRANT_URL, QDRANT_API_KEY, GOOGLE_API_KEY]):
    raise ValueError("Required environment variables are not set. Please check your .env file.")

qdrant_client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
genai.configure(api_key=GOOGLE_API_KEY)

# --- Document Loading ---
print(f"Loading documents from: {args.source_dir}")
loader = DirectoryLoader(args.source_dir, glob="**/*.md", show_progress=True)
documents = loader.load()
print(f"Loaded {len(documents)} documents.")

# --- Text Splitting ---
print("Splitting documents into chunks...")
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
docs = text_splitter.split_documents(documents)
print(f"Created {len(docs)} chunks.")

# --- Qdrant Collection Setup ---
print(f"Ensuring Qdrant collection '{COLLECTION_NAME}' exists...")
try:
    qdrant_client.recreate_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
    )
    print(f"Collection '{COLLECTION_NAME}' created successfully.")
except Exception as e:
    print(f"Collection '{COLLECTION_NAME}' already exists or another error occurred: {e}")


# --- Embedding and Upserting ---
print("Generating embeddings and upserting to Qdrant...")
# Using the new Embeddings API from google.generativeai
# Note: This is a simplified example. In production, you'd handle batching and retries.
points = []
for i, doc in enumerate(docs):
    try:
        embedding = genai.embed_content(
            model="models/embedding-001",
            content=doc.page_content,
            task_type="retrieval_document"
        )["embedding"]
        
        points.append(
            models.PointStruct(
                id=i,
                vector=embedding,
                payload={
                    "text": doc.page_content,
                    "metadata": doc.metadata,
                },
            )
        )
        print(f"Embedded chunk {i+1}/{len(docs)}")
    except Exception as e:
        print(f"Could not generate embedding for chunk {i+1}. Error: {e}")

if points:
    qdrant_client.upsert(
        collection_name=COLLECTION_NAME,
        points=points,
        wait=True,
    )
    print("Upserted all points to Qdrant.")
else:
    print("No points were generated to upsert.")

print("Ingestion process completed.")
