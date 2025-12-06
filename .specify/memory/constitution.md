<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- List of modified principles: All principles have been replaced with a new set of standards.
- Added sections: Writing Quality, Academic & Technical Standards, Textbook Structure, Workflow, Book Development, AI Collaboration, Robotics & AI Content.
- Removed sections: All placeholder sections removed.
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->

# Constitution for Hackathon I: Physical AI & Humanoid Robotics Textbook Project

## 1. Writing Quality Standards (Global)

These rules apply to every chapter, lesson, appendix, summary, exercise, and explanation across the entire textbook.

### 1.1 Clarity & Readability

- **Target Flesch-Kincaid Grade Level:** 8–10
- Sentences must be short, direct, and active voice.
- Use technical terms, but each must be explained on first use.
- Avoid overlong paragraphs (max 5–6 lines per paragraph).

### 1.2 Tone

- Professional
- Educational
- Friendly, encouraging, and motivational
- Never condescending

## 2. Academic & Technical Standards

### 2.1 Source Credibility

Use only verified, reliable sources, including:
- Research papers
- Robotics documentation
- AI/LLM/Embodied AI papers
- Textbooks
- High-quality online references (e.g., ROS docs, NVIDIA, MIT, Google DeepMind)
- No hallucinated citations.

### 2.2 Citation Format

- Use APA 7th edition for all references.
- Every factual claim must have a source unless it is common knowledge.
- Code examples do not require citations unless borrowed.

### 2.3 Academic Integrity

- Zero plagiarism tolerance.
- All content must be originally generated.
- Rewriting from sources must involve deep transformation, not surface paraphrasing.

## 3. Textbook Structure Standards (Global Rules)

### 3.1 Chapter Layout (required for every chapter)

Each chapter must follow this structure:
- Learning Objectives
- Concept Explanation
- Real-World Examples (AI + Robotics)
- Key Takeaways
- Exercises / Activities
- Glossary (if needed)

### 3.2 Lesson Style

Must support AI-native learning (Panaversity standard). Include:
- Illustrations (described verbally)
- Code snippets (Python, ROS2, robotics frameworks)
- Critical thinking questions
- Hands-on experiments where possible

## 4. Spec-Kit Plus Workflow Standards (Global)

These rules apply to every phase of SDD-RI.

### 4.1 Use the Full SDD-RI Workflow

Every feature, chapter, and module must go through:
- /sp.specify
- /sp.clarify
- /sp.plan
- /sp.tasks
- /sp.implement

AI should never jump to writing chapters without a specification.

### 4.2 No Code Generation Without a Plan

All code examples (robotics, sensors, AI models) must:
- Be planned first
- Follow task breakdown
- Follow the textbook’s learning objectives

## 5. Book Development & Deployment Standards

### 5.1 Framework

- The book must be built with Docusaurus.
- Use Markdown + MDX.
- Must be deployable on GitHub Pages.

### 5.2 Consistency Rules

Across the book, maintain:
- Consistent formatting
- Consistent folder structure
- Consistent image naming & placement
- Consistent headings hierarchy (#, ##, ###, etc.)

## 6. AI Collaboration Standards

### 6.1 Reusability

- Create reusable skills, templates, or subagents using P+Q+P pattern.
- Save:
  - Chapter templates
  - Robotics code templates
  - Explanation frameworks

### 6.2 Verification

Every output must be checked for:
- Accuracy
- Clarity
- Technical correctness
- Factual validity
- Hallucination risk

## 7. Robotics & AI Content Rules

### 7.1 Accuracy Requirements

All robotics and AI content must:
- Follow real frameworks (ROS2, MoveIt, Gazebo, Isaac Sim, etc.)
- Avoid hypothetical robotics features
- Use industry-accurate terminology
- Reflect 2024–2025 standards of Physical AI and Humanoid Robotics

### 7.2 Safety Principles

All robotics descriptions must follow:
- Human safety
- Ethical handling of AI & robots
- Responsible deployment
- Realistic expectations

---

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06