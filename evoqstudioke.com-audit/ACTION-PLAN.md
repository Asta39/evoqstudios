# Action Plan — Evoq Studio SEO

## Phase 1: Critical Fixes (this week — mostly code, I can do these)

1. **Push the two pending commits** (`775a014` domain fix, `e742558` SSR fix) — nothing else in this plan matters until the live site reflects them. Blocked on your git credentials.
2. **Add canonical tag to homepage.** One-line fix: set `alternates: { canonical: "/" }` in `app/layout.jsx`'s metadata export.
3. **Trim homepage meta description to ≤160 chars.**
4. **Rewrite Zeno Books and Zeno Events meta descriptions** to 120-155 chars, describing the actual outcome (both pages have plenty of real content to draw from).
5. **Add FAQPage JSON-LD** to the 4 service pages + contact page, reusing the `faqs` arrays already in each file (near-zero content work, just markup).

## Phase 2: High-Impact (next 1-2 weeks)

6. **Submit corrected sitemap to Google Search Console**, request indexing on homepage + 4 service pages, once Phase 1 #1 is live.
7. **Run PageSpeed Insights (mobile + desktop) against the live production URL** and share the scores — I'll interpret and prioritize from there. Can't be measured accurately from a local dev server.
8. **Investigate the 400KB JS chunk** with `next build --analyze` or similar — likely framer-motion/hugeicons bundling, may be splittable.

## Phase 3: Content & Authority (month 2 — needs your input)

9. **4-6 location/service-intent pages** — needs your input on: real pricing ranges (even "from KES X"), which services you actually want to rank for locally, and whether you want these as `/services/[slug]-nairobi` or a new `/locations/` section.
10. **Add "Nairobi" / "Kenya" to service page titles/descriptions** where it reads naturally (e.g. "System Development in Nairobi | Evoq Studio") — quick once you confirm you want this framing on every service, not just the homepage.
11. **`llms.txt` file** — low effort, emerging convention for AI answer engines. I can draft this once you confirm you want it.

## Phase 4: Monitoring & Iteration (ongoing)

12. Re-run this audit after Phase 1 ships to confirm the score against the live domain.
13. Watch Search Console indexation status weekly for the first month post-push.
14. Revisit `sameAs` schema field if/when you have an active LinkedIn or X presence worth linking.

---

**Not doing without your input:** pricing copy, new page content/positioning, and social profile links — these are business decisions, not technical fixes, and I won't guess at them.
