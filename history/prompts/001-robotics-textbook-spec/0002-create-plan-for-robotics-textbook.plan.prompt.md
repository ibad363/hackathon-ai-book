---
id: 0002
title: Create Plan for Robotics Textbook
stage: plan
date: 2025-12-06
surface: agent
model: gemini-pro
feature: 001-robotics-textbook-spec
branch: 001-robotics-textbook-spec
user: {{USER}}
command: /sp.plan
labels: [plan, textbook]
links:
  spec: specs/001-robotics-textbook-spec/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-robotics-textbook-spec/plan.md
  - specs/001-robotics-textbook-spec/research.md
  - specs/001-robotics-textbook-spec/data-model.md
  - specs/001-robotics-textbook-spec/quickstart.md
tests:
  null
---

## Prompt

/sp.plan Project: AI/Spec-Driven Book Creation  
Deliverable: Docusaurus-based textbook + GitHub Pages deployment  
Based on: /sp.specify requirements  

-----------------------------------------------------
1. High-Level Architecture
-----------------------------------------------------
The project will use a “Spec → Draft → Review → Publish” pipeline:

1. Specification Layer (Spec-Kit Plus)
   - Project-wide constitution  
   - Book-level spec  
   - Chapter-level specs (auto-generated before writing each chapter)

2. Authoring Layer (Claude Code)
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

-----------------------------------------------------
2. Tech Stack & Tools
-----------------------------------------------------
Core Tech:
- **Docusaurus v3**
- **MDX** for content
- **GitHub + GitHub Actions**
- **Claude Code** (writing automation)
- **Spec-Kit Plus** (structure governance)

Supporting Tools:
- Mermaid diagrams (flowcharts)
- Markdown linting (remark)
- Prettier for formatting

Optional:
- AI image generation for diagrams
- OG image generator for chapter headers

-----------------------------------------------------
3. Repository Structure
-----------------------------------------------------
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

-----------------------------------------------------
4. Content Architecture (Book Layout)
-----------------------------------------------------
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

-----------------------------------------------------
5. Specification-Driven Chapter Workflow
-----------------------------------------------------
Each chapter follows this cycle:

1. Create chapter spec  
   → `/sp.constitution`  
   → `/sp.specify - chapter-level`

2. Generate first draft using Claude Code  
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

-----------------------------------------------------
6. Decision Log (Key Design Decisions)
-----------------------------------------------------
1. **Docusaurus** chosen for:
   - Easy publishing  
   - MDX support  
   - Ideal for technical textbooks  

2. **Claude Code** chosen for:
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

-----------------------------------------------------
7. Deployment Plan (CI/CD)
-----------------------------------------------------
GitHub Actions pipeline:

Trigger: Push to `main`  
Steps:
1. Install Node  
2. Install dependencies  
3. Run `npm run build`  
4. Deploy to GitHub Pages  

Output:  
Public URL: `https://username.github.io/repo-name`

-----------------------------------------------------
8. Quality Assurance Plan
-----------------------------------------------------
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

-----------------------------------------------------
9. Risks & Mitigation
-----------------------------------------------------
Risk 1: Long chapters may break navigation  
Mitigation: Split into subpages  

Risk 2: GitHub Pages build errors  
Mitigation: Local build test before pushing  

Risk 3: AI hallucination  
Mitigation: Factual verification using robotics documentation  

Risk 4: Inconsistent writing styles  
Mitigation: Constitution + templates + spec-driven writing  

-----------------------------------------------------
10. Final Deliverables (per /sp.specify)
-----------------------------------------------------
- Complete textbook in Docusaurus  
- Hosted on GitHub Pages  
- Specs directory with all specs  
- Capstone project documentation  
- Weekly learning schedule  
- Hardware & lab setup guide

## Response snapshot

I have executed the implementation planning workflow for the "AI-Driven Robotics Textbook Creation" project.
The plan is detailed in `specs/001-robotics-textbook-spec/plan.md`.
The following artifacts were generated:
- `specs/001-robotics-textbook-spec/plan.md`
- `specs/001-robotics-textbook-spec/research.md`
- `specs/001-robotics-textbook-spec/data-model.md`
- `specs/001-robotics-textbook-spec/quickstart.md`
The agent context has also been updated with the new technologies.

## Outcome

- ✅ Impact: {{OUTCOME_IMPACT}}
- 🧪 Tests: {{TESTS_SUMMARY}}
- 📁 Files: {{FILES_SUMMARY}}
- 🔁 Next prompts: {{NEXT_PROMPTS}}
- 🧠 Reflection: {{REFLECTION_NOTE}}

## Evaluation notes (flywheel)

- Failure modes observed: {{FAILURE_MODES}}
- Graders run and results (PASS/FAIL): {{GRADER_RESULTS}}
- Prompt variant (if applicable): {{PROMPT_VARIANT_ID}}
- Next experiment (smallest change to try): {{NEXT_EXPERIMENT}}