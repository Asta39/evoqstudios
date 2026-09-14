# SEO Audit — evoqstudioke.com (Live Production)

Date: 2026-09-14
Scope: 22 URLs (full sitemap), fetched live from https://www.evoqstudioke.com
Method: Direct HTTP fetch + HTML parsing of the deployed site (post-deploy of latest commit `7339121`).

## SEO Health Score: 79/100

| Category | Score | Weight |
|---|---|---|
| Technical SEO | 88/100 | 22% |
| Content Quality | 82/100 | 23% |
| On-Page SEO | 72/100 | 20% |
| Schema / Structured Data | 88/100 | 10% |
| Performance | 65/100 (estimated) | 10% |
| AI Search Readiness (GEO) | 82/100 | 10% |
| Images | 60/100 | 5% |

Performance is a lab estimate from response timing and payload size only — no real Lighthouse/CrUX run was available in this session.

## What's Working

- robots.txt is clean: explicit `Allow: /` for GPTBot, ClaudeBot, PerplexityBot, Google-Extended — deliberate AI-crawler access, ahead of most competitors.
- sitemap.xml is well-formed, all 22 URLs present, correct `lastmod`/priority.
- Every page has a canonical tag, `index, follow`, and a unique `<title>`.
- Strong security headers site-wide: CSP, HSTS (`max-age=63072000`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Permissions-Policy`.
- Content is server-rendered (confirmed via raw `curl` — no client-side-only shell), so crawlers see full content immediately.
- Schema present and structurally valid on every page: `ProfessionalService`, `WebSite`, `BreadcrumbList`, `Service`, `FAQPage` (service pages + contact).
- No missing/empty `alt` attributes found on any sampled `<img>`.
- Case study pages have real word counts (437–695 words for standard projects, ~4,000 for the two Zeno deep-dives) — not thin content.
- Gzip compression active and effective (contact page: 1MB raw → 43KB on the wire).

## Findings

### 1. `og:image` missing on 21 of 22 pages (High)
Only the homepage returns an `og:image` meta tag. Every other page — all 4 service pages, all 10 project case studies, About, Capabilities, Architecture, Contact, Privacy, Terms — has no image in its Open Graph/Twitter card.

**Root cause**: `lib/seo.js:4` `buildMetadata()` sets its own `openGraph: { title, description, url }` object with no `images` key. Next.js merges page metadata into the root layout's metadata by top-level key — since every page defines its own `openGraph` object, it fully replaces the root layout's `openGraph.images`, not merges with it.

Impact: any link to a service or project page shared on WhatsApp, LinkedIn, X, or Slack renders with no preview image — this is the single highest-leverage fix in this audit given how often case-study links get shared.

**Fix**: add a default `images: [{ url: "/og-image.png", width: 1200, height: 630 }]` inside `buildMetadata()`, so every page inherits it unless it overrides.

### 2. Homepage has no descriptive H1/H2 (Medium)
`app/page.jsx` — homepage's only `<h1>` is the giant stylized wordmark `Evoq*`. The actual value proposition — *"Custom systems for companies that have outgrown their tools. Built by people who still enjoy the craft."* — is a plain `<p>`, not inside any heading tag. The first real `<h2>` appears further down the page.

Impact: the homepage has zero keyword-bearing heading content for the query that matters most ("Nairobi software development studio," "custom systems Kenya," etc.) at the top of the DOM.

**Fix**: keep the wordmark visually as-is, but wrap the tagline paragraph in an `<h2>` (or promote it into the `<h1>` alongside the wordmark via visually-hidden text) so the homepage's heading hierarchy actually carries the pitch.

### 3. 7 of 10 project case-study descriptions are too short (Medium)
| Page | Description length |
|---|---|
| Luxe Roam | 56 chars |
| Luna Politics | 68 chars |
| Nova Luxury Events | 65 chars |
| Adede & Co | 60 chars |
| Luna Graphics | 69 chars |
| Luxe & Allure Events | 69 chars |
| Brandmark Print Media | 73 chars |

Ideal range is ~120–155 characters. These currently use the project's one-line tagline as the meta description (same pattern already fixed for Zeno Books/Zeno Events last audit). Short descriptions mean Google fills in the rest from body text, which is unpredictable and usually reads worse in the SERP.

**Fix**: same treatment already applied to Zeno Books/Zeno Events — write a dedicated 140–155 char description per project grounded in real project facts (already documented in each project's `lib/projects.js` entry and case study body).

### 4. Contact page ships a ~1MB world-map SVG background (Medium — performance)
`app/company/contact/page.jsx` renders `<WorldMap>` (`components/ui/world-map.jsx`), which uses the `dotted-map` library at `height: 100` to generate a full world dot-grid as an inline SVG string, embedded directly in the page (not an external asset). Raw HTML for `/company/contact` is 1,013,592 bytes vs. 34–113KB for every other page.

Gzip brings the wire size down to ~43KB, so this is **not** a bandwidth problem — but it is ~1MB of DOM the browser has to parse and construct on every visit, adding real main-thread work before interactivity, on a page whose whole job is to get someone to submit a contact form quickly.

**Fix**: lower `height` (e.g. 40–50 instead of 100 — a decorative background doesn't need continent-level dot density), or pre-render the SVG once at build time into a static file and reference it via `<img src="/world-map-bg.svg">` instead of regenerating/inlining it per request.

### 5. Homepage title is 70 characters (Low)
`Evoq Studio — Software Engineering, Digital Platforms & AI Systems` is 70 characters including the site name. Google's SERP title truncation point varies but commonly clips titles over ~60 characters. Every other page's title is comfortably under 60.

**Fix**: optional trim, e.g. `Evoq Studio — Software Engineering & AI Systems` (49 chars), keeps the core positioning without risking a mid-word cut in the SERP.

### 6. No `llms.txt` (Low, deferred pending confirmation)
Still not present. Given the site already explicitly allows AI crawlers in robots.txt, an `llms.txt` would be a natural next step for AI-search visibility — same recommendation as the previous audit, still outstanding, still gated on your go-ahead since it's a net-new file with content to draft.

## Corrections vs. Assumptions

- The SSR fix, canonical fix, FAQPage schema, and description-length fixes from the last audit are all confirmed **live** on production — verified directly against the deployed HTML, not from memory of the local build.
- `hello@evoqstudioke.com` is now the email everywhere it's referenced site-wide (header, footer, contact page, legal pages, schema) — confirmed in the live HTML.
