# Data Model: AI-Driven Robotics Textbook Creation

**Feature**: [001-robotics-textbook-spec](../spec.md)
**Date**: 2025-12-06

This data model describes the structural entities of the textbook, not a traditional database schema. It focuses on how content is organized and related.

## Entities

### Book

- **Description**: The top-level container for the entire textbook.
- **Attributes**:
    - `title`: "Physical AI & Humanoid Robotics Textbook"
    - `author`: "AI/Spec-Driven Book Creation"
    - `version`: (managed by Docusaurus and Git)
    - `preface`: Link to Preface content.
    - `introduction`: Link to Introduction content.
    - `modules`: List of Module entities.
    - `weeklyBreakdown`: Link to Weekly Breakdown section.
    - `assessments`: Link to Assessments section.
    - `hardwareRequirements`: Link to Hardware Requirements chapter.
    - `labSetupGuide`: Link to Lab Setup Guide chapter.
    - `capstoneProject`: Link to Capstone Project chapter.
    - `glossary`: Link to Glossary.
    - `references`: Link to References section.
- **Relationships**: Contains Preface, Introduction, Modules, Sections.

### Preface

- **Description**: The introductory section explaining the purpose and vision of the book.
- **Attributes**:
    - `content`: Markdown/MDX content.
- **Relationships**: Part of Book.

### Chapter (or Module)

- **Description**: A major thematic section of the book.
- **Attributes**:
    - `title`: Name of the chapter (e.g., "The Robotic Nervous System (ROS 2)").
    - `learningObjectives`: List of key learning outcomes.
    - `overview`: Summary of chapter content.
    - `coreConcepts`: Detailed explanations of key ideas.
    - `diagrams`: Descriptions/links to visual representations.
    - `stepByStepExplanations`: Guided instructions for concepts/tasks.
    - `realWorldExamples`: Practical applications in AI and Robotics.
    - `exercises`: List of Exercises.
    - `quizzes`: List of Quizzes (part of exercises).
    - `keyTakeaways`: Summary of main points.
    - `furtherReadingLinks`: External resources for deeper study.
- **Relationships**: Part of Book, contains multiple Sections, Exercises.

### Section

- **Description**: A generic content block within a Chapter or Lesson.
- **Attributes**:
    - `title`: Section heading.
    - `content`: Markdown/MDX text, code snippets, illustrations.
- **Relationships**: Part of Chapter/Lesson.

### Code Snippet

- **Description**: A block of executable code, typically Python or ROS2.
- **Attributes**:
    - `language`: (e.g., "python", "javascript").
    - `content`: The code itself.
    - `description`: Explanation of the code.
- **Relationships**: Embedded within Section content.

### Diagram / Illustration

- **Description**: A visual representation of a concept or system.
- **Attributes**:
    - `description`: Textual description of the diagram (for AI generation).
    - `imagePath`: (Optional) Path to generated image.
- **Relationships**: Referenced within Section content.

### Exercise / Activity

- **Description**: A task or question to reinforce learning.
- **Attributes**:
    - `type`: ("quiz", "coding", "conceptual", "hands-on").
    - `instructions`: Detailed steps for the exercise.
    - `expectedOutcome`: What the student should achieve.
- **Relationships**: Part of Chapter.

### Glossary Term

- **Description**: A definition for a key technical term.
- **Attributes**:
    - `term`: The technical word or phrase.
    - `definition`: Its meaning.
- **Relationships**: Part of Glossary, cross-referenced throughout the Book.

### Reference

- **Description**: A citation to an external source.
- **Attributes**:
    - `apa7thCitation`: Formatted citation string.
    - `url`: (Optional) Link to the source.
- **Relationships**: Part of References section.

## Relationships

- **Book** has **Preface**, **Introduction**, **Modules**, **Weekly Breakdown**, **Assessments**, **Hardware Requirements**, **Lab Setup Guide**, **Capstone Project**, **Glossary**, **References**.
- **Module** contains **Sections**, **Exercises**.
- **Section** can contain **Code Snippets**, **Diagrams/Illustrations**.
- **Glossary** contains **Glossary Terms**.
- **References** contains **References**.
