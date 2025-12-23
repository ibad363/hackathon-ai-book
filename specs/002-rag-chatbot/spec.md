# Feature Specification: Integrated RAG Chatbot

**Feature Branch**: `002-rag-chatbot`
**Created**: 2025-12-23
**Status**: Draft
**Input**: User description: "Integrated RAG Chatbot for AI/Spec-Driven Book"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Access the Chatbot (Priority: P1)

As a reader of the Docusaurus book, I want to see a floating chat button on all pages so that I can easily ask questions about the book's content at any time.

**Why this priority**: This is the primary entry point for the entire feature. Without the button, users cannot interact with the chatbot.

**Independent Test**: The floating chat button is visible and clickable on every page of the deployed Docusaurus book. Clicking it opens a chat interface.

**Acceptance Scenarios**:

1.  **Given** I am on any page of the Docusaurus book, **When** the page loads, **Then** a floating chat button is visible.
2.  **Given** the floating chat button is visible, **When** I click it, **Then** a chat panel or modal overlay opens.

---

### User Story 2 - Get Answers from Book Content (Priority: P1)

As a user, I want to ask questions through the chat interface and receive answers that are strictly based on the content of the book, so that I can get accurate, contextual information.

**Why this priority**: This is the core value proposition of the RAG chatbot.

**Independent Test**: The chatbot can be asked questions about topics covered in the book, and it provides answers grounded in the book's content.

**Acceptance Scenarios**:

1.  **Given** I have the chat interface open, **When** I ask a question that is answered in the book, **Then** the chatbot provides a correct answer derived from the book's text.
2.  **Given** I have asked a question, **When** the chatbot is generating a response, **Then** I see a loading indicator.

---

### User Story 3 - Handle Out-of-Scope Questions (Priority: P1)

As a user, when I ask a question that cannot be answered from the book's content, I want the chatbot to respond that it doesn't know the answer, so I am not misled by fabricated information.

**Why this priority**: This ensures the chatbot is trustworthy and adheres to its designed constraints.

**Independent Test**: Ask the chatbot a question on a topic not covered in the book (e.g., "What is the weather today?"), and verify it responds with "I don't know" or a similar message.

**Acceptance Scenarios**:

1.  **Given** I have the chat interface open, **When** I ask a question whose answer is not in the book, **Then** the chatbot responds with a message indicating it cannot answer the question from the provided context (e.g., "I don’t know").

---

### Edge Cases

-   What happens if the backend API is unavailable? The frontend should display an error message.
-   How does the system handle very long user queries?
-   How does the system handle an empty user query? The send button should be disabled.

## Requirements *(mandatory)*

### Functional Requirements

-   **FR-001**: The system MUST provide a FastAPI backend with a `/ingest` endpoint to process and store book content.
-   **FR-002**: The `/ingest` endpoint MUST accept markdown content, chunk it, generate Gemini embeddings, and store them in a Qdrant Cloud vector database.
-   **FR-003**: The system MUST provide a `/chat` endpoint to handle user queries.
-   **FR-004**: The `/chat` endpoint MUST retrieve relevant context from Qdrant, use a Gemini-powered agent to generate a response, and persist the conversation in a Neon Serverless Postgres database.
-   **FR-005**: The RAG pipeline MUST respond with "I don’t know" (or a similar message) if no relevant context is found in Qdrant.
-   **FR-006**: The chatbot orchestration MUST use the OpenAI Agents SDK with Gemini as the LLM.
-   **FR-007**: The backend MUST be deployed on Render and exposed via a public HTTPS endpoint with CORS enabled for the GitHub Pages domain.
-   **FR-008**: The chatbot UI MUST be a floating button embedded on all pages of the Docusaurus site.

### Key Entities

-   **ChatSession**: Represents a single conversation. Attributes: `session_id`, `created_at`.
-   **UserMessage**: Represents a message sent by the user. Attributes: `message_id`, `session_id`, `content`, `timestamp`.
-   **AssistantMessage**: Represents a message sent by the chatbot. Attributes: `message_id`, `session_id`, `content`, `timestamp`.
-   **VectorEmbedding**: Represents a chunk of book content. Attributes: `vector_id`, `content_chunk`, `embedding`. Metadata: `page`, `heading`, `chunk_id`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-001**: The floating chat button is present on 100% of the book's pages.
-   **SC-002**: 95% of questions directly answerable from the book's text receive an accurate, grounded response.
-   **SC-003**: For 99% of questions not answerable from the book's text, the chatbot responds that it does not know the answer.
-   **SC-004**: The average response time for a query (from sending a message to receiving a response) is less than or equal to 3 seconds.
-   **SC-005**: The backend API is successfully deployed on Render and is reachable via its public URL.