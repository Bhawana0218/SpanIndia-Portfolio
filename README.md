# Portfolio Website

> A modern, high-performance single-page application built with React.js, TypeScript, and Bootstrap 5. Designed to showcase technical skills, projects, and professional experience — optimized for recruiter conversion and deployed via Netlify.

**Developer:** Bhawana Bisht

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 8 |
| **Styling** | Bootstrap 5, Custom CSS (Design System) |
| **Animations** | IntersectionObserver, CSS keyframes |
| **Form Handling** | Netlify Forms (serverless) |
| **PDF Generation** | Node.js script (build step) |
| **Deployment** | Netlify (SPA with `_redirects`) |

---

## Features

- **Typewriter Hero** — dynamic role cycling with animated gradient glow orbs
- **Animated Stat Counters** — smooth ease-out cubic count-up on scroll
- **Progress Bar Skills** — 16 skills across 4 categories with staggered entrance
- **Experience Timeline** — internship history with visual timeline markers
- **Project Gallery** — gradient card headers, colored tech tags, shine hover effect
- **Certifications & Achievements** — split-view layout with percentile badges
- **Resume Download** — auto-generated PDF during build
- **Contact Form** — serverless Netlify Forms with honeypot spam protection + loading state
- **Scroll-to-Top** — floating gradient button after 400px scroll
- **Scroll-Reveal** — fade-in/slide-up animations driven by IntersectionObserver
- **Active Nav Tracking** — highlights current section based on scroll position
- **Mobile-Responsive** — full responsiveness from 320px to 1920px; hamburger menu auto-closes on link click
- **Dark Theme** — custom design system with glassmorphism navbar, gradient text, and glow effects

---

## Lighthouse Scores

| Category | Score |
|----------|-------|
| **Performance** | 98 |
| **Accessibility** | 97 |
| **Best Practices** | 100 |
| **SEO** | 100 |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         # Glassmorphism navbar with active tracking
│   ├── Hero.tsx           # Typewriter intro + code block visual
│   ├── About.tsx          # Bio + animated stat counters
│   ├── Skills.tsx         # Animated progress bars
│   ├── Experience.tsx     # Timeline layout
│   ├── Projects.tsx       # Gradient card gallery
│   ├── Certifications.tsx # Certs + achievements
│   ├── Resume.tsx         # Download CTA
│   ├── Contact.tsx        # Netlify form with spinner
│   ├── ScrollToTop.tsx    # Back-to-top button
│   ├── Typewriter.tsx     # Role cycling component
│   └── Footer.tsx         # Social links
├── hooks/
│   └── useScrollReveal.ts # IntersectionObserver + animated counter
├── App.tsx                # Root layout
├── App.css                # Full design system (~700 lines)
└── main.tsx               # Entry point
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

---

## Deployment

### Netlify (recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy — the contact form activates automatically via `data-netlify="true"`
5. Add custom domain if desired

### Vercel

1. Import repository into Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

---

## Customization

- **Theme colors** — edit CSS custom properties in `:root` in `App.css`
- **Personal info** — update text in component files under `src/components/`
- **Projects** — edit the `projects` array in `src/components/Projects.tsx`
- **Skills** — update `skillCategories` in `src/components/Skills.tsx`
- **Resume PDF** — edit `scripts/generate-resume.js` and rebuild
- **Social links** — update URLs in `Hero.tsx` and `Footer.tsx`

---

## License

MIT — free to use, modify, and distribute.

---

**Built by [Bhawana Bisht](https://github.com/bhawanabisht)**
