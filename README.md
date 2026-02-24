# Studio Mahatta — Independent Production Studio

Premium cinematic production studio website built with **React 18 + Vite + Tailwind CSS v3**.

## Tech Stack

| Layer      | Choice                    |
|------------|---------------------------|
| Framework  | React 18                  |
| Bundler    | Vite 5                    |
| Styling    | Tailwind CSS v3           |
| Fonts      | Cormorant Garamond + Inter (Google Fonts) |
| Animations | CSS transitions + IntersectionObserver   |

## Project Structure

```
src/
├── App.jsx                  # Root component
├── main.jsx                 # Entry point
├── index.css                # Tailwind directives + global styles
├── hooks/
│   └── useReveal.js         # IntersectionObserver scroll-reveal hook
└── components/
    ├── Nav.jsx              # Fixed navigation with mobile overlay
    ├── Hero.jsx             # Full-screen cinematic hero
    ├── About.jsx            # Two-column studio introduction
    ├── Slate.jsx            # 2×2 project grid with hover effects
    ├── Partnership.jsx      # Distribution & co-production section
    ├── Leadership.jsx       # Minimal team grid
    └── Footer.jsx           # Minimal footer
```

## Setup & Development

Requires **Node.js 18+** and **npm 9+**.

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Design Tokens (Tailwind config)

| Token          | Value     | Usage                    |
|----------------|-----------|--------------------------|
| `ink`          | `#0c0b09` | Page background          |
| `surface`      | `#131210` | Section backgrounds      |
| `card`         | `#1a1916` | Project cards            |
| `gold`         | `#a8834e` | Primary accent           |
| `gold-light`   | `#c4a06b` | Hover state              |
| `text`         | `#e2d9cc` | Primary text             |
| `text-muted`   | `#7a7268` | Secondary text           |
| `border`       | `#2c2924` | Dividers and outlines    |

## Production Slate

1. **Bhakt Prahlad** — Animated Feature · Final Post · 2026
2. **Making of the Scriptures** — Documentary Feature · Research · 2026–27
3. **History of Kashmir – Rise of Islam** — Docuseries · Development · 2027
4. **Operation Gulmarg** — Feature Film · Script & Previz · 2028
