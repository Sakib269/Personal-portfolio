# Sakib Shadab — Portfolio

Personal portfolio site built with Next.js 14, Tailwind CSS, and shadcn/ui. Defaults to dark mode.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** + **shadcn/ui** components
- **next-themes** for dark/light toggle
- **lucide-react** for icons
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization checklist

| What to change | Where |
|---|---|
| Your email address | `components/sections/contact.tsx` → `href="mailto:..."` |
| GitHub / LinkedIn URLs | `components/sections/contact.tsx` |
| Real resume | Replace `public/resume.pdf` with your PDF |
| Project cards | `components/sections/projects.tsx` — edit the `PROJECTS` array |
| Experience bullets | `components/sections/experience.tsx` — edit the `EXPERIENCE` array |
| Site URL (for OG / sitemap) | Set `NEXT_PUBLIC_BASE_URL` env var in Vercel (or `.env.local` locally) |
| Domain | Update `metadataBase` in `app/layout.tsx` if not using the env var |

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo in [vercel.com/new](https://vercel.com/new).
3. Add env var: `NEXT_PUBLIC_BASE_URL=https://yourdomain.com`
4. Click **Deploy** — that's it.

Vercel auto-detects Next.js; no build config changes are needed.

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata, ThemeProvider
│   ├── page.tsx         # Composes all sections
│   ├── globals.css      # Tailwind base + CSS custom properties
│   ├── sitemap.ts       # Auto-generated /sitemap.xml
│   └── robots.ts        # /robots.txt
├── components/
│   ├── nav.tsx          # Sticky nav with theme toggle
│   ├── theme-provider.tsx
│   ├── ui/              # shadcn/ui primitives (Button, Badge, Card)
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── skills.tsx
│       └── contact.tsx
├── lib/
│   └── utils.ts         # cn() helper
└── public/
    └── resume.pdf       # Replace with your real resume
```

## Accessibility

- Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<ol>`)
- All interactive elements have visible focus rings
- Icon-only buttons have `aria-label`
- Color contrast meets WCAG AA in both dark and light modes
- Keyboard-navigable from top to bottom

## Lighthouse targets

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

All sections are server components except `Nav` (needs `useTheme` / scroll listener).
