# Evoq Studio — Full SEO Audit

**Audited:** `http://localhost:3000` (current codebase, post-fix — commits `775a014` and `e742558` not yet pushed to `www.evoqstudioke.com`)
**Date:** 2026-09-11
**Business type:** Professional Service (software/digital engineering studio), B2B, Nairobi-based
**Method:** Manual technical audit — raw HTML fetch per route, JSON-LD validation, image/heading/canonical checks, production build inspection. No Playwright/Lighthouse pipeline available in this skill install, so Core Web Vitals are estimated from bundle size and TTFB rather than measured lab data.

## SEO Health Score: 78/100

> This score reflects the **local codebase** with this session's fixes applied. The live domain is currently unpushed and would score much lower (dead canonical domain, ~15 bytes of crawlable HTML). Once pushed, the live site will match this score.

| Category | Weight | Score | Notes |
|---|---|---|---|
| Technical SEO | 22% | 85/100 | Domain now correct; one real gap: homepage missing canonical tag |
| Content Quality | 23% | 80/100 | Real, substantial per-page content now server-rendered; no location/service-intent pages |
| On-Page SEO | 20% | 75/100 | Titles/H1s clean; 2 meta descriptions too long/short |
| Schema/Structured Data | 10% | 75/100 | ProfessionalService + Service + Breadcrumb present; FAQPage missing despite ready content |
| Performance (CWV) | 10% | 70/100 (estimated) | Fast TTFB; one 400KB JS chunk worth investigating |
| AI Search Readiness | 10% | 80/100 | robots.txt explicitly allows GPTBot/ClaudeBot/PerplexityBot/Google-Extended — above average |
| Images | 5% | 100/100 | Every `<img>` across all sampled pages has alt text |

---

## Top 5 Critical/High Issues

1. **Homepage has no `<link rel="canonical">` tag.** Every other page gets one via `buildMetadata()`, but the homepage uses the root `layout.jsx` metadata object directly, which never sets `alternates.canonical`. Low risk on its own, but worth closing — Google should never have to guess the canonical URL for your most important page.
2. **Homepage meta description is 201 characters** — Google truncates around 155-160, so the back half of your sentence never shows in search results. (Confirmed: currently ends mid-thought in the SERP snippet.)
3. **Zeno Books (63 chars) and Zeno Events (49 chars) meta descriptions are too thin.** Both read as sentence fragments; there's room to describe the actual client outcome in the 120-155 char sweet spot.
4. **No FAQPage schema, despite real FAQ content already built and shipping** on all 4 service pages and the contact page (`FaqAccordion` component, 4-5 real Q&As each). This is a near-zero-effort win: wrap the existing `faqs` arrays in FAQPage JSON-LD to become eligible for FAQ rich results.
5. **Still zero location/service-intent content pages** (e.g. "Custom Software Development Nairobi", "ERP Development Kenya"). The site ranks for "Evoq Studio" by name; it has no page built to catch the long-tail, higher-intent searches that convert. This was flagged in the prior audit and remains unaddressed — needs content decisions from you (pricing, specifics per service) before I can build them.

## What's Already Good (confirmed, not assumed)

- **Domain now correct everywhere** — canonical, OG, JSON-LD, sitemap, robots.txt all point to the live `www.evoqstudioke.com` (this session's fix).
- **Real server-rendered content** — homepage HTML went from ~15 bytes to ~294KB of actual crawlable text (this session's fix). Verified via raw `curl`, not just DevTools.
- **Exactly one `<h1>` per page** across all 15 routes sampled — no duplicate/missing H1 issues anywhere.
- **Zero missing `alt` attributes** across every image on every page sampled (home, services, about, projects index, 2 project detail pages) — genuinely clean.
- **Service schema already implemented** on all 4 service pages (the previous audit incorrectly reported this as missing — it's real Schema.org `Service` type, correctly nested). Only `FAQPage` is genuinely absent.
- **BreadcrumbList schema** present on every non-homepage page.
- **robots.txt explicitly allowlists AI crawlers** (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — most sites don't bother with this; it's a real AI-search-readiness advantage.
- **Fast TTFB** (~180ms on dev server; Vercel edge in production will be comparable or better).
- **Titles are unique, properly templated** (`%s | Evoq Studio`), and within reasonable length on every page except the homepage default.

## Findings by Category

### Technical SEO (85/100)
- ✅ robots.txt valid, correctly disallows `/api/` and `/_next/`, explicitly allows AI crawlers.
- ✅ sitemap.xml valid, all 22 URLs on correct domain, sensible priority/changefreq values.
- ✅ HTTPS via Vercel, HSTS header present (`strict-transport-security: max-age=63072000`).
- ✅ Security headers solid: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, CSP all present (from `vercel.json`).
- ✅ Single 308 redirect apex→www (not the "two hops" the prior audit claimed — verified directly).
- ❌ Homepage missing canonical tag (see Critical #1).
- ⚠️ `favicon.ico` 404s on every page load (browser convention request; site uses `evoq-logo.png` via explicit `<link>` tags instead — cosmetic only, not a ranking factor, but free to fix).

### Content Quality (80/100)
- ✅ All page content now in server-rendered HTML (this session's fix) — previously near-zero.
- ✅ 10 real project case studies with genuine outcomes, quotes, and specifics (not filler).
- ✅ Zeno Books and Zeno Events case study pages have exceptionally deep, real content (module-by-module breakdowns sourced from actual product docs).
- ❌ No blog or location/service-intent pages — the site only has brand-name-searchable content, no long-tail acquisition surface.
- ⚠️ Two case study pages (Zeno Books, Zeno Events) have thin meta descriptions despite very rich on-page content — the description isn't representing the page well.

### On-Page SEO (75/100)
- ✅ Title tags unique and descriptive on all 15 sampled pages.
- ✅ Proper H1/H2 hierarchy, no duplicate H1s.
- ❌ Homepage description too long (201 chars, truncates in SERP).
- ❌ Zeno Books/Zeno Events descriptions too short (63/49 chars).
- ⚠️ "Nairobi Kenya" location keyword lives only in the `keywords` meta tag (which Google ignores entirely) and now in the homepage description (fixed this session) — but not yet in any service page title/description, where it would actually help local-intent queries.

### Schema & Structured Data (75/100)
- ✅ `ProfessionalService` schema on every page (name, telephone, email, geo, address, sameAs, knowsAbout) — valid JSON, confirmed via parse.
- ✅ `Service` schema on all 4 service pages.
- ✅ `BreadcrumbList` on all non-home pages.
- ✅ `WebSite` schema on every page.
- ❌ No `FAQPage` schema despite ready-made FAQ content on 5 pages.
- ⚠️ `sameAs` only lists GitHub + WhatsApp — no LinkedIn/X/Instagram (only worth adding if those profiles exist and are actively maintained; don't add a corporate LinkedIn page from three job changes ago).
- ⚠️ Schema `email` field is a Gmail address (`evoqcreativetech@gmail.com`) rather than a domain email — a very minor trust signal, cosmetic more than technical.

### Performance — estimated, not lab-measured (70/100)
- ✅ TTFB ~180ms on dev server.
- ⚠️ Largest JS chunk is 400KB uncompressed (likely framer-motion + hugeicons bundled together) — worth a bundle-analyzer pass if you want to chase Lighthouse score, not urgent.
- ℹ️ **This category needs a real PageSpeed Insights / Lighthouse run against the live production URL once pushed** — dev server timing isn't representative of production edge performance, and I don't have a Lighthouse pipeline available in this tool install. Recommend running PSI manually after deploy (Action Plan item).

### AI Search Readiness (80/100)
- ✅ robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended.
- ✅ Content now server-rendered and crawlable without JS execution (this session's fix) — AI crawlers that don't execute JS (most don't) can now actually read the site.
- ❌ No `llms.txt` file (emerging convention, low-cost to add, unclear ranking impact yet).
- ⚠️ No dedicated FAQ/Q&A structured content beyond the existing accordions — AI answer engines favor clearly-labeled Q&A pairs, which the FAQPage schema fix would also help with.

### Images (100/100)
- ✅ Every image across every sampled page (home: 3, about: 4, projects: 1, lexreg: 5, zeno-events: 10) has an `alt` attribute. Zero exceptions found.
- Not independently verified: alt text *quality* (descriptive vs. generic) — spot-checked and looked genuinely descriptive (e.g., "Zeno Books home dashboard — KPI cards, invoice/quote overview" style), not just filenames.

---

## Corrections to the Prior Audit

In the interest of not repeating stale or inaccurate claims:
- The prior audit said service pages have "no FAQ/Service schema" — **Service schema is present and valid** on all 4 service pages. Only FAQPage is genuinely missing.
- The prior audit said the domain redirect goes through "two hops" — **verified directly via `curl -IL`: it's a single 308 hop**, apex → www.
- The prior audit's other findings (dead canonical domain, broken OG image, thin/CSR content, missing location pages, Gmail in schema) were all **independently confirmed as real** against the actual codebase.
