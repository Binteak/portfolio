# ARR. Portfolio

Personal portfolio and interactive CV of **Álvaro Ruiz Ramírez**, Senior Full Stack Developer (Angular · Python) with 9 years in the banking sector, now applying LLMs and AI agents to real products.
 
**Live:** https://portfolio-xq8b.onrender.com/

## What you'll find

| Section | Content |
|---|---|
| **Hero** | Profile, current focus and quick links (GitHub, email) |
| **About** | Who I am, what I do and main specialisations |
| **Tech Stack** | Technologies grouped by area: frontend, backend, data, databases, DevOps, testing, applied AI and methodology |
| **Experience** | Timeline at EY and Quental with client projects for BBVA, Banco Santander and Liberbank |
| **Projects** | Personal projects with live demos and repositories |
| **Contact** | Ways to get in touch |

### Featured projects

- **Rumbo · AI Travel Agent**: hand-written agentic loop with tool use (Claude or Gemini) and hybrid RAG over its own Markdown guides (BM25 + embeddings, RRF, pgvector, retrieval evals in CI). Angular + FastAPI, PostgreSQL, Redis, Kubernetes. [Demo](https://rumbo-frontend.onrender.com) · [Repo](https://github.com/Binteak/rumbo-ai)
- **InmobiliAI**: LLM-based data extraction from real estate PDFs into reviewable listing drafts. [Demo](https://inmobiliai-frontend.onrender.com/) · [Repo](https://github.com/Binteak/inmobiliAI_frontend)
- **Banking Data Platform**: risk data workflow with quality controls and reporting. Angular, Django REST, PostgreSQL. [Demo](https://banking-data-platform-frontend.onrender.com/) · [Repo](https://github.com/Binteak/bankingDataPlatform_frontend)
- **Defence Operations Platform**: geospatial operations dashboard with Leaflet and Chart.js. [Demo](https://defense-application-frontend.onrender.com) · [Repo](https://github.com/Binteak/defense-application-frontend)
- **Internal Channel Bot**: Python Telegram bot integrated with Google Drive, Sheets and Calendar (in development).

> Demos are hosted on Render's free tier: the first load may take around 30–50 seconds while the service wakes up.

## Tech stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite**
- **JavaScript**
- **HTML5 / CSS3** with scoped styles per component
- **Render** for hosting, with automatic deploys from `main`

## Features

- Mobile-first, fully responsive design
- Single-page navigation between sections
- Experience timeline with client projects and technologies
- Project cards with live demo and repository links
- Lightweight: no UI framework, no router, content kept as plain data in each view

## Project structure

```
src/
├── App.vue                  # Layout and section navigation
├── main.js
├── style.css                # Global styles and fonts
├── assets/                  # Profile image, icons and company logos
└── app/
    ├── components/
    │   ├── Hero/
    │   └── Navbar/
    └── views/
        ├── About/
        ├── TechStack/
        ├── Experience/
        ├── Projects/
        └── Contact/
```

Each section lives in its own folder with a `.vue` file and its `.css`. Content (experience, projects, technologies) is defined as arrays at the top of each view, so updating the CV only means editing data, not markup.

## Run locally

Requires Node.js `^22.18.0` or `>=24.12.0`.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Author

**Álvaro Ruiz Ramírez**
Senior Full Stack Developer · Angular · Python · Applied AI

- LinkedIn: [linkedin.com/in/alvaroruizramirez](https://www.linkedin.com/in/alvaroruizramirez)
- GitHub: [github.com/Binteak](https://github.com/Binteak)
- Email: alruizra93@gmail.com
