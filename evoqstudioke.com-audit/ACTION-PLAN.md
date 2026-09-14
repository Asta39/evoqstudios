# Action Plan — evoqstudioke.com

## Phase 1: Critical/High — code-only, do now
1. Fix `og:image` fallback in `lib/seo.js` `buildMetadata()` so all 21 non-home pages get a social preview image.
2. Add descriptive `<h2>` for the homepage tagline (currently a bare `<p>` under an undescriptive `<h1>` wordmark).

## Phase 2: Medium — code-only, this week
3. Write proper 140–155 char meta descriptions for the 7 short project pages (Luxe Roam, Luna Politics, Nova Luxury Events, Adede & Co, Luna Graphics, Luxe & Allure Events, Brandmark Print Media).
4. Reduce `WorldMap` dot density (`height` prop) on the contact page, or pre-render it to a static SVG asset, to cut ~1MB of DOM/parse weight.
5. Trim homepage `<title>` from 70 to under 60 characters.

## Phase 3: Low / needs your input
6. Draft `llms.txt` — confirm you want it before I write it.

## Already confirmed live (no action needed)
- SSR across all pages, canonical tags, FAQPage schema, description-length fixes from the previous audit.
- `hello@evoqstudioke.com` rollout site-wide.
- Security headers (CSP/HSTS/nosniff/frame-options) all present.
- robots.txt AI-crawler allowlist (GPTBot/ClaudeBot/PerplexityBot/Google-Extended).
