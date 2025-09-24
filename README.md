# Creative254 — Multipage Website

## Overview
A responsive multipage website showcasing services, portfolio, and contact form. This project demonstrates HTML5 semantics, CSS layout & animations, and JavaScript for interactivity.

## File Structure
project-root/
├─ index.html
├─ about.html
├─ services.html
├─ contact.html
│ └─ styles.css
│ └─ main.js
└─ README.md

## How to run locally
1. Clone the repo or copy files into a folder.
2. Open `index.html` in a browser (no server required for static site). For full testing, use a simple local server:
   - Python: `python -m http.server 8000` then open `http://localhost:8000`
   - Node: `npx serve .`

## Deployment
### GitHub Pages
1. Commit the code to a GitHub repo.
2. In repo settings → Pages: choose branch `main` (or `gh-pages`) and root folder → Save.
3. Wait a few minutes for the site to publish.

### Netlify
1. Drag & drop the project folder to Netlify Drop or connect your GitHub repo.
2. Netlify will auto-deploy. Add `/_redirects` or forms as needed.

### Vercel
1. Connect your GitHub repo to Vercel and import the project.
2. Deploy — Vercel handles static site deployments instantly.

## Best Practices & Notes
- Use semantic HTML and ARIA attributes for accessibility.
- Keep CSS modular and avoid inline styles where possible.
- Use analytics and A/B testing when scaling content.
