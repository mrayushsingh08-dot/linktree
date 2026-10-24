# Linktree Project Guidance

## Project Overview
A Linktree-like personal hub application that integrates with the GitHub API to dynamically display user profile information and featured repositories.

**Tech Stack:**
- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **API**: GitHub REST API

## Build & Development Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run linting checks
- `npm run preview`: Preview production build locally

## Coding Standards & Architecture
- **Styling**: Use Tailwind CSS utility classes. Prefer a consistent color palette (current theme uses Obsidian/Charcoal for dark mode).
- **Architecture**:
  - Components are located in `src/`.
  - Context providers (like `ThemeContext`) manage global state.
  - **Decisions**: All major architectural and technical decisions are documented as Markdown files in the `decisions/` directory (e.g., `decisions/tech-stack.md`).
- **TypeScript**: Use strong typing for API responses and component props.

## Claude Code Integration
- **Automated Reviews**: This project utilizes a `FileChange` hook in `settings.json`.
- **Code Reviewer Agent**: A specialized subagent exists at `.claude/agents/code-reviewer.md`. It is used automatically via hooks or can be invoked manually for deep, adversarial reviews focusing on correctness, security, and performance.
- **Context**: Always reference `decisions/` before proposing significant architectural changes.
