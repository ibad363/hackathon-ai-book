# Data Model for RAG Chatbot

This document defines the data models for the RAG chatbot's chat history, which will be stored in a Neon Serverless Postgres database.

## Entities

### `ChatSession`

Represents a single conversation session.

| Field       | Type      | Description                                     |
|-------------|-----------|-------------------------------------------------|
| `id`        | `UUID`    | Primary key for the session.                    |
| `created_at`| `TIMESTAMPTZ`| Timestamp when the session was created.      |
| `metadata`  | `JSONB`   | Optional metadata about the session (e.g., user agent). |

### `ChatMessage`

Represents a single message within a `ChatSession`.

| Field       | Type      | Description                                     |
|-------------|-----------|-------------------------------------------------|
| `id`        | `UUID`    | Primary key for the message.                    |
| `session_id`| `UUID`    | Foreign key linking to the `ChatSession`.       |
| `role`      | `TEXT`    | The role of the message sender (`user` or `assistant`). |
| `content`   | `TEXT`    | The text content of the message.                |
| `created_at`| `TIMESTAMPTZ`| Timestamp when the message was created.      |
| `metadata`  | `JSONB`   | Optional metadata (e.g., retrieved context).   |
