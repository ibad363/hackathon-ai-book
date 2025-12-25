from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas
from .db import get_db, engine
from .vector_store import get_qdrant_client
from .llm import get_llm_client
import google.generativeai as genai
import uuid

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/chat", response_model=schemas.ChatMessageResponse)
def chat(
    message: schemas.ChatMessageCreate,
    db: Session = Depends(get_db),
    qdrant_client = Depends(get_qdrant_client),
    llm_client = Depends(get_llm_client)
):
    # T021: Session management
    if message.session_id:
        session = db.query(models.ChatSession).filter(models.ChatSession.id == message.session_id).first()
        if not session:
            raise HTTPException(status_code=404, detail="Session not found")
    else:
        # A user_id is needed. For now, we'll use a fixed anonymous user.
        # In a real app, this would come from an authentication system.
        user_id = "anonymous" 
        session = models.ChatSession(user_id=user_id)
        db.add(session)
        db.commit()
        db.refresh(session)

    # T020: Save user message
    db_user_message = models.ChatMessage(
        session_id=session.id, role="user", content=message.content
    )
    db.add(db_user_message)
    db.commit()

    # T017: Retrieval step
    try:
        query_embedding = genai.embed_content(
            model="models/embedding-001",
            content=message.content,
            task_type="retrieval_query"
        )["embedding"]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate embedding: {e}")

    search_results = qdrant_client.search(
        collection_name="robotics_textbook",
        query_vector=query_embedding,
        limit=3
    )
    
    # T019: "I don't know" logic
    if not search_results:
        response_content = "I'm sorry, I don't have information about that topic based on the book's content."
    else:
        context = " ".join([result.payload['text'] for result in search_results])
        # T018: Generation step
        prompt = f"""
        You are a helpful assistant for a robotics textbook. 
        Answer the user's question based only on the following context.
        If the context does not contain the answer, say "I don't know".

        Context:
        {context}

        Question:
        {message.content}
        """
        try:
            response = llm_client.generate_content(prompt)
            response_content = response.text
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Failed to generate response from LLM: {e}")

    # T020: Save assistant message
    db_assistant_message = models.ChatMessage(
        session_id=session.id, role="assistant", content=response_content
    )
    db.add(db_assistant_message)
    db.commit()

    return schemas.ChatMessageResponse(
        content=response_content,
        session_id=session.id,
        role="assistant"
    )
