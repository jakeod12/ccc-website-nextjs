# CLAUDE.md — CleanCycleCarbon Website

## Project Overview
Marketing website for **CleanCycleCarbon** (CCC) — a company that captures and purifies industrial CO₂ to FDA-registered, beverage-grade quality. Live at https://cleancyclecarbon.com.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animation**: Framer Motion
- **Analytics**: Vercel Analytics + Speed Insights
- **Font**: Inter (Google Fonts, `--font-inter` CSS variable)
- **Deployment**: Vercel

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm start` — start production server

## Project Structure
```
app/
  layout.tsx          # Root layout (Nav, Footer, BackToTop, Analytics)
  page.tsx            # Homepage
  globals.css         # Brand tokens + Tailwind import
  about/page.tsx
  blog/
    page.tsx           # Blog listing
    [slug]/page.tsx    # Dynamic blog article pages
    lib.ts             # Blog data helpers (reads JSON from content/)
  co2-supply/page.tsx
  contact/
    layout.tsx
    page.tsx
  projects/page.tsx
  technology/page.tsx
  api/leads/route.ts  # Contact form → forwards to BD Tool API
  components/         # Shared UI components
    Nav.tsx, Footer.tsx, BackToTop.tsx,
    ScrollReveal.tsx, AnimatedCounter.tsx,
    ProcessFlow.tsx, LinkedInFeed.tsx,
    ShareButtons.tsx, icons.tsx
  robots.ts, sitemap.ts, error.tsx, not-found.tsx, loading.tsx
content/
  blog/*.json         # Blog articles (JSON with ContentBlock[] format)
  linkedin-posts.json # LinkedIn feed data
  blog-content-calendar.json
public/
  images/             # Team photos, facility images, logos, OG preview
  videos/             # Hero loop, facility, tech videos (mp4)
```

## Brand Tokens (CSS Variables)
- `--ccc-dark: #0F2D5A` (navy)
- `--ccc-med: #2D69B4` (blue)
- `--ccc-light: #96C3E1` (light blue)
- `--ccc-white: #FFFFFF`

## Key Patterns
- **Path alias**: `@/*` maps to project root
- **Blog content**: Stored as JSON files in `content/blog/`, loaded via `fs` at build time in `app/blog/lib.ts`
- **Lead capture**: Contact form POSTs to `/api/leads` which forwards to external BD Tool API at `bd-tool-nine.vercel.app`
- **Image optimization**: Next.js Image with AVIF/WebP, custom device/image sizes in `next.config.ts`
- **SEO**: Structured data (Organization schema), robots.ts, sitemap.ts, OpenGraph metadata per page

## Git
- **Repo**: github.com/jakeod12/ccc-website-nextjs
- **Branch**: main
