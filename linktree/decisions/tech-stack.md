# Decision: Project Tech Stack & Architecture v2
Date: 2026-10-21

## Decision
- **Workspace Path:** `project/linktree/`
- **Frontend:** React + Vite with Tailwind CSS.
- **Layout:** Enhanced Hub (Links on top, project grid below).
- **Features:** 
    - Dark/Light mode toggle.
    - Dynamic bio and project fetching via GitHub REST API for user `mrayushsingh08-dot`.
- **Deployment:** Dockerized Nginx serving static assets, exposed via ngrok.
- **Development Strategy:** Phased approach (Static $\rightarrow$ Backend).

## Rationale
- **React/Vite/Tailwind:** Optimal for speed and modern UI/UX.
- **GitHub API:** Minimizes manual updates for the bio and project list.
- **Docker/Nginx:** Ensures a consistent environment from local to production.
- **Workspace separation:** Keeping the project in `project/linktree/` organizes the root directory.
