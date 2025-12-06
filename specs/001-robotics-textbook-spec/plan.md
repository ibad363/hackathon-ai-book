# Implementation Plan: AI-Driven Robotics Textbook Creation

**Branch**: `001-robotics-textbook-spec` | **Date**: 2025-12-06 | **Spec**: ../specs/001-robotics-textbook-spec/spec.md
**Input**: Feature specification from `/specs/001-robotics-textbook-spec/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create a complete, structured textbook that teaches the “Physical AI & Humanoid Robotics” course using an AI/spec-driven workflow (Spec-Kit Plus + Gemini CLI) and publish it using Docusaurus on GitHub Pages.





**Language/Version**: JavaScript (Node.js for Docusaurus), Markdown/MDX, Python (for code snippets)  
**Primary Dependencies**: Docusaurus v3, React, MDX, GitHub, GitHub Actions, Gemini CLI, Spec-Kit Plus  
**Storage**: Git repository (for content), GitHub Pages (for hosting)  
**Testing**: Docusaurus build tests, Markdown linting, link checking  
**Target Platform**: GitHub Pages
**Project Type**: Docusaurus Website  
**Performance Goals**: Fast load times, High Lighthouse scores (for Docusaurus site)  
**Constraints**: Static site generation, Markdown/MDX content, AI/spec-driven workflow  
**Scale/Scope**: Complete textbook with multiple chapters and modules

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Writing Quality**: Does the plan account for clarity, readability (Flesch-Kincaid 8-10), and a professional, encouraging tone?
- [x] **Academic Standards**: Does the plan include steps for sourcing, citation (APA 7th), and academic integrity checks?
- [x] **Textbook Structure**: Does the plan for each chapter respect the required layout (Objectives, Concepts, Examples, etc.)?
- [x] **SDD-RI Workflow**: Does the plan adhere to the full `/sp.specify` -> `/sp.implement` workflow?
- [x] **Book Development**: Is the plan aligned with using Docusaurus, Markdown/MDX, and deploying to GitHub Pages?
- [x] **AI Collaboration**: Does the plan consider creating reusable templates or skills?
- [x] **Robotics & AI Content**: Are there checks for accuracy and safety principles in the content plan?

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (Docusaurus Project Root)
<!--
  The structure below is a typical Docusaurus setup.
  The plan should detail which chapters/lessons are being created or modified.
-->

```text
/project-root
├── specs/
│   ├── constitution.md
│   ├── book-spec.md
│   └── chapter-specs/
├── docs/
│   ├── intro.md
│   ├── modules/
│   │   ├── ros2/
│   │   ├── gazebo-unity/
│   │   ├── isaac/
│   │   └── vla/
│   ├── weekly-breakdown/
│   ├── hardware/
│   ├── assessments/
│   ├── capstone/
│   └── glossary/
├── static/
│   └── images/
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

**Structure Decision**: The project will follow a standard Docusaurus structure, with book content organized under `docs/` and specifications under `specs/`. Images will be stored in `static/images/`. This aligns with the plan's and constitution's requirements for a Docusaurus-based textbook.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |

---
## 1. High-Level Architecture

The project will use a “Spec → Draft → Review → Publish” pipeline:

1. Specification Layer (Spec-Kit Plus)
   - Project-wide constitution
   - Book-level spec
   - Chapter-level specs (auto-generated before writing each chapter)

2. Authoring Layer (Gemini CLI)
   - AI-assisted generation of markdown content
   - Local editing and refinement
   - Git-backed versioning

3. Documentation Layer (Docusaurus)
   - MDX files for chapters
   - Sidebar-driven navigation
   - Custom pages for Preface, Glossary, Capstone
   - Plugins for search and analytics

4. Deployment Layer (GitHub Pages)
   - CI/CD workflow
   - Auto-build and publish on push to `main`

---
## 2. Tech Stack & Tools

Core Tech:
- **Docusaurus v3**
- **MDX** for content
- **GitHub + GitHub Actions**
- **Gemini CLI** (writing automation)
- **Spec-Kit Plus** (structure governance)

Supporting Tools:
- Mermaid diagrams (flowcharts)
- Markdown linting (remark)
- Prettier for formatting

Optional:
- AI image generation for diagrams
- OG image generator for chapter headers

---
## 3. Repository Structure

Project root structure:

/project-root
/spec
constitution.md
book-spec.md
chapter-specs/
/docs
/intro
/modules
ros2/
gazebo-unity/
isaac/
vla/
/weekly-breakdown
/hardware
/assessments
/capstone
/glossary
/static
images/
docusaurus.config.js
sidebar.js
package.json
README.md

markdown
Copy code

Folder Logic:
- `/docs` contains all book content
- `/spec` contains all AI-generated specs
- `/static` stores images and diagrams

---
## 4. Content Architecture (Book Layout)

Book will follow this fixed structure:

1. Preface
2. Introduction to Physical AI
3. Module 1 — ROS 2 Fundamentals
4. Module 2 — Gazebo & Unity Simulation
5. Module 3 — NVIDIA Isaac Platform
6. Module 4 — Vision-Language-Action Systems
7. Weekly Breakdown (Week 1–13)
8. Assessments
9. Hardware Requirements
10. Lab Setup Architecture
11. Capstone “Autonomous Humanoid” Project
12. Glossary
13. References

Each module includes:
- Overview
- Core concepts
- Diagrams
- Step-by-step explanations
- Exercises
- Further reading

---
## 5. Specification-Driven Chapter Workflow

Each chapter follows this cycle:

1. Create chapter spec
   → `/sp.constitution`
   → `/sp.specify - chapter-level`

2. Generate first draft using Gemini CLI
   → "Write using the chapter spec only"

3. Review & refine
   → rewrite unclear sections
   → verify factual accuracy

4. Convert to MDX
   → Ensure headings follow Docusaurus structure
   → Add mermaid diagrams if applicable

5. Commit & push
6. Build preview
7. Adjust based on build errors

---
## 6. Decision Log (Key Design Decisions)

1. **Docusaurus** chosen for:
   - Easy publishing
   - MDX support
   - Ideal for technical textbooks

2. **Gemini CLI** chosen for:
   - Strong long-context writing
   - Clean structured markdown generation

3. **Spec-Kit Plus** chosen for:
   - Enforcing textbook consistency
   - Reducing drift across chapters

4. **GitHub Pages** for deployment:
   - Free
   - Fast
   - Native Docusaurus support

5. **GitHub Actions** CI/CD:
   - Auto build
   - Auto deploy

6. **All chapters in MDX**:
   - Allows interactive content
   - Future-proof for code-block demos

---
## 7. Deployment Plan (CI/CD)

GitHub Actions pipeline:

Trigger: Push to `main`
Steps:
1. Install Node
2. Install dependencies
3. Run `npm run build`
4. Deploy to GitHub Pages

Output:
Public URL: `https://username.github.io/repo-name`

---
## 8. Quality Assurance Plan

To meet specification:

Writing QA:
- Each chapter reviewed against its spec
- Clarity check
- Accuracy check
- Technical correctness

Technical QA:
- Docusaurus build must pass
- No broken links
- No sidebar errors
- Images load correctly

UX QA:
- Sidebar navigation must match textbook outline
- Mobile-friendly layout
- Search works across chapters

---
## 9. Risks & Mitigation

Risk 1: Long chapters may break navigation
Mitigation: Split into subpages

Risk 2: GitHub Pages build errors
Mitigation: Local build test before pushing

Risk 3: AI hallucination
Mitigation: Factual verification using robotics documentation

Risk 4: Inconsistent writing styles
Mitigation: Constitution + templates + spec-driven writing

---
## 10. Final Deliverables (per /sp.specify)

- Complete textbook in Docusaurus
- Hosted on GitHub Pages
- Specs directory with all specs
- Capstone project documentation
- Weekly learning schedule
- Hardware & lab setup guide
