# Quickstart Guide: AI-Driven Robotics Textbook

**Feature**: [001-robotics-textbook-spec](../spec.md)
**Date**: 2025-12-06

This guide provides instructions to set up and run the Docusaurus-based textbook project locally.

## 1. Prerequisites

Ensure you have the following installed:

-   **Node.js**: Version 18 or higher (LTS recommended).
-   **npm** (Node Package Manager): Usually comes with Node.js.
-   **Git**: For cloning the repository.

## 2. Local Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install dependencies:**
    Navigate to the root of your Docusaurus project (where `package.json` is located) and install the required Node.js packages:
    ```bash
    npm install
    ```

## 3. Running Locally

To start the local development server:

```bash
npm run start
```

This will start a development server and open a new browser window at `http://localhost:3000`. Any changes you make to the source files will be hot-reloaded.

## 4. Building the Project

To build a static version of the textbook for deployment:

```bash
npm run build
```

This command generates static content into the `build` directory, which can then be deployed to any static hosting service, such as GitHub Pages.

## 5. Deployment (GitHub Pages)

The project is configured for continuous deployment to GitHub Pages via GitHub Actions.

-   **Trigger**: Pushing changes to the `main` branch.
-   **Workflow**:
    1.  Installs Node.js.
    2.  Installs project dependencies (`npm install`).
    3.  Runs `npm run build` to generate the static site.
    4.  Deploys the built site to GitHub Pages.

For manual deployment (if needed, or for verification):
```bash
GIT_USER=<YOUR_GH_USERNAME> USE_SSH=true npm run deploy
```
Make sure to replace `<YOUR_GH_USERNAME>` with your GitHub username.

## 6. Content Creation & Editing

-   Textbook content is primarily located in the `docs/` directory.
-   Content files are written in Markdown (`.md`) or MDX (`.mdx`).
-   To create a new chapter or lesson, refer to the Docusaurus documentation and the project's `sidebars.js` file for navigation configuration.

For more details on Docusaurus, refer to its official documentation: [https://docusaurus.io/docs](https://docusaurus.io/docs)
