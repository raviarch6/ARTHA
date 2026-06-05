# AGENTS.md — AI Development Guide

## Project Overview

ARTHA Automation website — a React SPA for a hydroponic green fodder systems company in Karnataka, India.

## Tech Stack

- React 18, Create React App
- CSS custom properties for theming (light/dark)
- lucide-react for icons
- Emoji throughout for visual flair

## Key Conventions

1. **No comments in code** — keep it clean
2. **Emoji for visual elements** — use freely in content
3. **CSS variables** — always use design tokens from `index.css`
4. **Mobile-first** — test at 320px, 540px, 768px, 900px, 1200px
5. **Accessibility** — semantic HTML, ARIA labels, skip-link, focus-visible
6. **Theme support** — components must work in both `data-theme="light"` and `data-theme="dark"`
7. **Reduced motion** — respect `prefers-reduced-motion: reduce`

## Component Pattern

Each section has a `.js` + `.css` file pair in `src/components/`. Import CSS directly in the JS file.

## Common Design Tokens

| Token | Example |
|---|---|
| `--color-primary` | #1a6b3a / #2ecc71 |
| `--font-display` | Fraunces for headings |
| `--font-sans` | Plus Jakarta Sans for body |
| `--space-*` | 4px scale (--space-1 through --space-32) |
| `--text-*` | xs through hero scale |
| `--radius-*` | md through full |

## Commands

- `npm start` — dev server
- `npm run build` — production build
- `npm test` — run tests

## Git Workflow

- `main` branch — production
- `staging` branch — pre-production
- Use conventional commit messages
- No force push
