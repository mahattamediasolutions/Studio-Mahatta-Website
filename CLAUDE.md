# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies (Node 18+ required)
npm run dev       # dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview production build locally
```

**Note:** On Windows, Node is not in Git Bash PATH. Run npm commands from cmd.exe or PowerShell.

Legacy Python test suite (targets the old vanilla HTML files, not the React app):
```bash
python test_index.py
```

## Architecture

This is a **single-page React 18 + Vite 5 + Tailwind CSS v3** app. It is a marketing/branding site for an independent film studio — one page, no routing, no backend.

`src/main.jsx` → `src/App.jsx` assembles sections in order: `Nav → Hero → About → Slate → Partnership → Leadership → Footer`

All section components live in `src/components/`. Each imports `useReveal` from `src/hooks/useReveal.js`, which attaches an `IntersectionObserver` to a `ref` and adds the `visible` class to `.reveal` children when they scroll into view.

**Scroll reveal pattern used in every component:**
```jsx
const ref = useReveal()
return <section ref={ref}>
  <div className="reveal">...</div>
  <div className="reveal reveal-delay-2">...</div>
</section>
```

Content data (projects, people, etc.) is defined as plain arrays at the top of each component file — there is no external data source or CMS.

## Design System

All design tokens are in `tailwind.config.js`. Key tokens:

| Token | Value | Use |
|---|---|---|
| `bg-ink` | `#0c0b09` | Page background |
| `bg-surface` | `#131210` | Slightly lighter background |
| `bg-card` | `#1a1916` | Card backgrounds |
| `text-gold` / `text-gold-light` | `#a8834e` / `#c4a06b` | Accent, active states |
| `text-text` | `#e2d9cc` | Primary body text |
| `text-text-muted` | `#7a7268` | Secondary text |
| `border-border` | `#2c2924` | Default borders |

Custom font sizes: `text-display`, `text-headline`, `text-title`, `text-eyebrow` (all defined in config with clamp values).

Custom spacing: `py-section` = `clamp(5rem, 10vw, 9rem)`.

Custom animation easing: `ease-cinematic` = `cubic-bezier(0.4, 0, 0.2, 1)`.

Global CSS utilities in `src/index.css`: `.reveal` / `.reveal.visible` animation, `.eyebrow` label style, `.img-placeholder` cinematic placeholder pattern.

## Design Constraints

Dark charcoal palette, warm gold accent only. **No gradients, no bright colors.** Serif headlines (`font-serif` = Cormorant Garamond), clean sans body (`font-sans` = Inter). Generous spacing, institutional tone, cinematic and minimal.

## Legacy Files

The root-level `about.html`, `contact.html`, `services.html`, `work.html`, `css/`, and `js/` are from the original vanilla HTML site. They are **not part of the React app** and are preserved for reference. `test_index.py` targets these legacy files.
