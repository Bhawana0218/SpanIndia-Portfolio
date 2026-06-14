# Portfolio — Rahul R

> Personal portfolio website built with React 19, TypeScript, and Tailwind CSS v4. Warm light theme with cream background, navy headings, and terracotta accent. Designed to avoid AI-generated patterns — plain prose, specific stories, real screenshots.


---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite` plugin), custom CSS variables |
| **Fonts** | Playfair Display (serif headings), Inter (sans body), JetBrains Mono (monospace) |
| **Theme** | Warm light — cream `#faf7f2`, navy `#1e293b`, terracotta `#b4442f` |
| **PDF Generation** | Node.js script (build step via `scripts/generate-resume.js`) |
| **Deployment** | Static host (Netlify / Vercel) |

---

## Features

- **Left-aligned hero** with hand-drawn SVG underline accent and production stats
- **Featured project case study** (Global Chat Application) with architecture breakdown and production incident story
- **Project gallery** (E-Commerce, Internship Portal, Data Pipelines) with real screenshot images and `fix:` callout tags
- **Production mistakes** section — plain narrative prose, one expanded story (502/Nginx debug sequence), no lesson boxes
- **Experience timeline** with visual dot markers and education/achievement cards
- **About + Skills** — neutral monospace badges grouped by category, no colored pill tags
- **Resume download** — auto-generated PDF during build, cache-busted on every click
- **Fully responsive** — `clamp()` spacing, collapsible nav links on ≤480px, fluid grids
- **Warm light theme** — consistent cream/terracotta/navy palette, serif headings, monospace code

---

## Project Structure

```
portfolio/
├── public/
│   ├── screenshots/          # Real screenshots of running apps
│   ├── resume.pdf            # Auto-generated on build
│   └── _redirects            # SPA redirect rules
├── scripts/
│   └── generate-resume.js    # Build-step PDF generator
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Fixed nav with serif logo + collapsible links
│   │   ├── Hero.tsx          # Headline, hand-drawn SVG underline, stats row
│   │   ├── CaseStudy.tsx     # Global Chat — why, architecture, $6 incident
│   │   ├── MoreProjects.tsx  # E-Commerce, Portal, Pipelines — text + screenshots
│   │   ├── Mistakes.tsx      # Single expanded 502/Nginx production story
│   │   ├── Experience.tsx    # Timeline (NIM, IBM) + education cards
│   │   ├── About.tsx         # Bio + skill groups (no colored tags)
│   │   └── Connect.tsx       # Contact links + location/availability
│   ├── App.tsx               # Root layout + footer
│   ├── index.css             # CSS variables, globals, responsive breakpoints
│   └── main.tsx              # Entry point
├── index.html                # Google Fonts link
├── vite.config.ts            # Vite + Tailwind v4 plugin
├── tsconfig.json
└── package.json
```

---


## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (generates resume PDF + production bundle)
npm run build

# Preview production build
npm run preview
```


## Customization

- **Theme colors** — edit CSS variables in `:root` in `src/index.css`
- **Personal info** — update text in component files under `src/components/`
- **Projects** — edit the `projects` array in `src/components/MoreProjects.tsx`
- **Resume PDF** — edit `scripts/generate-resume.js` and rebuild
- **Social links** — update URLs in `Hero.tsx`, `About.tsx`, `Connect.tsx`, and `Navbar.tsx`
- **Screenshots** — place PNGs in `public/screenshots/`

---

## Deployment

### Netlify

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `public/_redirects` file handles SPA routing automatically

### Vercel

1. Import repository into Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

---

## License

MIT — free to use, modify, and distribute.
