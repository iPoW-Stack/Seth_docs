# Seth Docs

Developer documentation site for the Seth (iPoW-Stack) blockchain. Built with Vite + React + Tailwind CSS and shipped as a static site.

## Quick Start

Requirements: Node.js (LTS)

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

If `3000` is already in use (e.g. Grafana), pick a different port:

```bash
npm run dev -- --port 3001
```

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build (dist/)
npm run preview  # preview production build
npm run lint     # type-check
```

## Content Structure

- `src/i18n.ts` holds all English/Chinese content and sidebar structure.
- `src/pages/*.tsx` renders each documentation page.
- `src/components/*` shared UI (navbar, sidebar, search, code block).
- `src/index.css` theme tokens and global styles.

To add a new page:

1. Create a new component in `src/pages/`.
2. Register its label in `src/i18n.ts` (sidebar + page copy).
3. Map it in `src/App.tsx` `renderPage()` switch.

## Deployment

`npm run build` outputs a static site in `dist/` that can be served by any static host.

## Notes

- This repo intentionally does not store PDF assets. Link to external storage instead.
- `.env.example` is reserved for future integrations; no secrets are required for docs-only usage.
