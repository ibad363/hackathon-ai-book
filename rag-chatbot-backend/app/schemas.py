from pydantic import BaseModel
from typing import Optional
import uuid

class ChatMessageBase(BaseModel):
    content: str

class ChatMessageCreate(ChatMessageBase):
    session_id: Optional[uuid.UUID] = None

class ChatMessageResponse(ChatMessageBase):
    session_id: uuid.UUID
    role: str

    class Config:
        from_attributes = True
