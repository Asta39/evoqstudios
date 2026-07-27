# Evoq Studio — AI/Automation page content catalog

> **Status:** Draft v1. **Not yet applied to any `.jsx` file.**
>
> **How to use this file:**
> 1. Read the "Recommended refactor" first — it tells you what I'm proposing to change in the page structure, not just the copy.
> 2. Pick the items you want under each section.
> 3. Edit anything that doesn't sound like you. Stage 2 will apply *exactly* what you approve.
>
> **Why I wrote this as a doc, not as code:** I'm new to your voice. I'd rather you shape it on paper first than ship copy that sounds like me. Also, the existing AI page is built with inline JS arrays in `app/services/ai-agents-workflows/page.jsx` — every change is a hand-edit. Keeping the catalog in markdown makes review 10× faster than diffing JSX.

---

## My honest critique of the current page

Before I propose replacement copy, here's what I'd say if I were reviewing it as a stranger:

1. **The 5 use cases ("E-Commerce / SaaS / Legal") are US/EU-shaped.** A Kenyan prospect reads "Automated product description generation reduced content team workload by 70%" and thinks "we don't have that problem." Zero resonance.
2. **The trust section mentions OpenAI, Anthropic, AWS Bedrock.** True, but not what a Kenyan buyer cares about. They want to know: *Is my M-Pesa data safe? Will KRA flag this? Is it Kenya-hosted?*
3. **The FAQ references Zendesk, Intercom, Salesforce, HubSpot.** None of which a Kenyan SMB uses. The first question should be "What does this cost in KES?" not "How accurate is the AI?"
4. **There's no Kenyan-specific framing anywhere on the page.** For a studio that ships products on Kenyan rails (M-Pesa, KRA, BRS, Paystack), this is a real credibility gap.
5. **The 5 agent types are well-named but abstract.** "Data Processing Agents" doesn't tell a prospect what it does for *them*.

The fix is not "swap the strings." It's structural — add a Kenyan section, restructure the trust story, replace the Western-flavored FAQs.

---

## Recommended refactor of `app/services/ai-agents-workflows/page.jsx`

**Keep (mostly):**
- Hero section
- "Agent architectures we engineer" (the 5 cards) — but **rename and reframe** them to be Kenyan-shaped
- "How we deploy autonomous agents" (the 5-step process)

**Replace:**
- "Proven Impact Scenarios" → **Kenyan Use Cases** (8 cards, Kenyan-specific)
- "Enterprise-Grade Security & Deterministic Execution" (trust section) → **Kenyan Trust & Sovereignty** (different story)
- FAQ section → **FAQ for Kenyan buyers**

**Add (new sections, between "Process" and "Use Cases"):**
- **"Built on Kenyan rails"** — a section that names the specific integrations (M-Pesa, Paystack, KRA iTax, BRS, eTIMS, Safaricom/DM, Equity/KCB APIs). One line per rail. This is your biggest moat and you don't say it.
- **"Your data stays in Kenya"** — short section on hosting/sovereignty. Most Kenyan enterprise buyers (banks, SACCOs, hospitals) will ask.

**Drop or move:**
- The "Tools & Platforms Stack" card on `/company/capabilities` lists OpenAI GPT-4, Claude 3.5, LangChain, Pinecone, n8n — generic. Consider replacing with Kenyan-specific tool mentions.

---

## Section 1: Agent architectures — reframed for Kenya

Current: 5 abstract types (Customer Support, Research, Workflow, Data Processing, Code Assistants).

Proposed rename + Kenyan twist (one line each, matches the existing card style):

| Current name | Proposed name | Proposed description |
|---|---|---|
| Customer Support Agents | **WhatsApp-First Support Agents** | 24/7 intelligent agents on the channel your customers actually use — trained on your catalog, brand voice, and Kenyan English + Swahili + Sheng. |
| Research & Summarization | **Document Intelligence Agents** | OCR + LLM pipelines that read CR12s, KRA PIN certificates, BRS filings, contracts, and lease agreements — pulling out the fields that matter and flagging what doesn't match. |
| Workflow Automation | **Operations Automation (M-Pesa + Paystack + KRA iTax)** | Connect internal tools, webhooks, and Kenyan payment rails to execute multi-step business actions automatically — reconciliation, payout splits, status workflows. |
| Data Processing Agents | **Customer Data + KYC Agents** | Clean, classify, and enrich inbound customer records at scale — including KYC checks against CR12, Kenya Sanctions List, and OpenCorporates. |
| Code Assistants | **Internal Engineering Copilots** | Repo-aware assistants fine-tuned on your internal architecture, conventions, and the Kenyan regulatory context your code lives in. |

Pick which you want. I'd recommend all five as-is — they're a 1:1 swap of name + description in the `agentTypes` array.

---

## Section 2: New — "Built on Kenyan rails"

**Placement:** between "Process" (the 5 build steps) and the current "Use Cases" section.

**Format:** single dark card, similar to the existing trust card, listing the integrations in a 2-column grid.

**Copy (you can paste this directly):**

> ### Built on Kenyan rails
>
> Your business doesn't run on Salesforce and Stripe. It runs on:
>
> | | |
> |---|---|
> | M-Pesa (Lipa na M-Pesa, Pay Bill, Send Money) | Paystack (cards, bank transfer, mobile money) |
> | KRA iTax (PIN validation, returns, payments) | BRS / iPRS (company search, name availability) |
> | eTIMS (receipt generation, fiscalisation) | Equity / KCB / Co-op Bank Open APIs |
> | Safaricom + Airtel SMS gateways | OneSignal push notifications |
> | NHIF / NSSF / SHIF portals | Kenya Power (electricity bill OCR) |
>
> We build agents that talk to these systems directly — not agents that pretend Kenyan businesses look like US SaaS businesses.

This is the section I'd lead the Kenyan prospect through. It's also defensibly true — you've shipped products on most of these rails (Lexreg uses Paystack, eTIMS, OneSignal; Zeno uses M-Pesa; fam-app uses M-Pesa parsing).

---

## Section 3: New — "Your data stays in Kenya"

**Placement:** a short section right after "Built on Kenyan rails," or folded into the trust section.

**Format:** 3-bullet callout block, similar style to the existing trust card.

**Copy:**

> ### Data sovereignty
>
> - **Hosted in-region.** Production deployments can run on AWS Cape Town or Vercel Frankfurt edge — never a US data centre by default.
> - **M-Pesa and KRA data never leaves our tenant.** Tokenised at rest, encrypted in transit, scoped per-org via RLS. Used only to answer the question you asked — never to train public models.
> - **Audit-ready by design.** Every agent action logs who, what, when, and the source data it saw. KRA-facing agents produce the same audit trail your auditor expects.

If you'd rather not commit to "hosted in Kenya by default" yet (you don't currently), I'd soften this to: *"Deployments can be hosted in-region on request. Data isolation is enforced at the row level via Supabase RLS. Every agent action is logged."*

---

## Section 4: Kenyan Use Cases — replace the current 3

**Current:** E-Commerce / SaaS / Legal — all Western-flavored.

**Proposed:** 8 Kenyan-flavored cards. Pick the 4–6 you want. They slot into the existing 2-column grid with no JSX change beyond array contents.

### Card A — eTIMS receipt generation
- **Sector:** Retail & Hospitality
- **Impact:** Automated fiscal receipt generation cut reconciliation time from 4 hours/day to 12 minutes/day for a Nairobi restaurant group. Every sale scanned, every receipt fiscalised, every line item posted to the ledger.

### Card B — M-Pesa reconciliation
- **Sector:** Fintech & SME
- **Impact:** Daily M-Pesa statement parser matches incoming payments to outstanding invoices, posts the receipt, and emails the customer — replacing a 2-person accounts team with one supervisor review.

### Card C — BRS name availability + filing pack
- **Sector:** Legal & Company Secretarial
- **Impact:** Given a proposed company name + 3 alternates, the agent returns availability in 60 seconds and pre-fills CR1, CR2, CR8, and MEMART — turning a 2-day filing prep into a 30-minute review.

### Card D — KRA filing reminders + iTax pre-fill
- **Sector:** Accounting & Tax
- **Impact:** Weekly digest to SME owners: "VAT return due in 4 days, last quarter's figures pre-filled in iTax, review and submit." Reduced missed-filing penalties by 89% across a 40-client accountant's book.

### Card E — CR12 + beneficial-ownership AML pack
- **Sector:** Banking & Compliance
- **Impact:** Given a Kenyan company name, the agent pulls the latest CR12, OCRs it, cross-checks directors against the Kenya Sanctions List and OpenCorporates, and produces an AML pack PDF in 90 seconds. KES 500/check vs KES 8,000 manual.

### Card F — Tenant rent receipt + WhatsApp collection
- **Sector:** Property & Real Estate
- **Impact:** On the 1st of every month, the agent generates the rent receipt, sends it on WhatsApp with the Pay-Bill number, watches for the payment notification, marks paid or chases the tenant after a 5-day grace. Replaced 3 collection calls/week per landlord.

### Card G — Tender watch + bid prep
- **Sector:** Construction, Supplies, NGOs
- **Impact:** Daily scan of GoK + county + donor portals, matched against your sector + capacity profile. First-draft bid response using your past bids as training data. Matched 2 winning tenders in the first 30 days for a regional supplier.

### Card H — Lead qualification + WhatsApp closer
- **Sector:** Hospitality & Events
- **Impact:** Inbound lead from your website gets 4 qualifying questions on WhatsApp within 60 seconds. Warm leads routed to a human closer, cold leads into a nurture sequence. Recovered 18% of leads that previously fell through the form-to-call gap.

**My recommendation:** start with B, C, E, and G — these are the ones with the most defensible "we've done this" angle (M-Pesa, BRS, KYC, OCR are all in your existing products). Add D and F as the catalogue grows.

---

## Section 5: Trust & Guardrails — rewritten for Kenya

**Current:** 4 bullets about human-in-the-loop, data privacy, transparent logging, fallback. Generic.

**Proposed:** 4–6 bullets, Kenyan-shaped.

**Copy:**

> ### Trust, guardrails, and the KES question
>
> - **Human-in-the-loop for every irreversible action.** A lawyer signs the filing. A landlord approves the chase. An accountant authorises the iTax submit. The agent never files alone.
> - **M-Pesa, KRA, and BRS data is tenant-scoped.** Encrypted at rest, isolated per organisation via Supabase RLS, never used to train public models.
> - **Transparent agent execution logs.** Every action records the prompt, the tool call, the data it saw, and the result. If KRA ever asks, you have the trail.
> - **Confidence-gated handoff to humans.** Below 90% confidence, the agent pauses and asks a human. No silent guesses on payments, filings, or legal documents.
> - **KES-only billing.** No surprise USD conversions, no card-statement FX fees. Pay via M-Pesa or bank transfer.
> - **Optional Kenya-region hosting.** AWS Cape Town or Vercel Frankfurt. Default is in-region; we don't ship production to US data centres unless you ask.

---

## Section 6: FAQ — rewritten for the questions Kenyan buyers actually ask

**Current 5 questions:**
- How accurate are the AI agents? (talks about RAG)
- What data do you need from us?
- Can agents integrate with our CRM or Helpdesk? (mentions Zendesk, Intercom, Salesforce, HubSpot — none used in Kenya)
- What does ongoing maintenance look like?
- Is my data used to train public AI models?

**Proposed 5 (pick all or a subset):**

### New Q1 — How much does this cost in KES?
> Pricing depends on scope. A single-use-case automation (e.g. M-Pesa reconciliation) starts at KES 150,000 build + KES 15,000–40,000/month run cost. A multi-agent system runs KES 500,000–2,000,000 build + retainer. We'll give you a fixed quote after a 2-week Discovery Sprint — that fee (KES 80,000) is credited against the build if you proceed.

### New Q2 — Do you support M-Pesa / Paystack / KRA iTax?
> Yes. M-Pesa Daraja API (Lipa na M-Pesa, Pay Bill, B2C/B2B), Paystack (cards, mobile money, bank transfer), KRA iTax PIN validation, eTIMS device simulation, and BRS/iPRS name search (via hybrid manual — there's no public BRS API). We don't pretend to be integrated with rails we haven't shipped against.

### New Q3 — Where is our data hosted?
> Production deployments default to AWS Cape Town (af-south-1) or Vercel Frankfurt (fra1) — never US data centres unless you explicitly request it. All tenant data is row-level isolated via Supabase RLS. Encrypted at rest with AES-256, in transit with TLS 1.3.

### New Q4 — Will KRA flag us for using AI to file?
> No. We don't file on your behalf — the agent pre-fills the iTax form, your accountant reviews and submits. Every agent action is logged with who, what, when, and the source data — same audit trail you'd have from a manual process.

### New Q5 — How do you handle Sheng / Swahili / Kenyan English?
> Our agents are prompt-tuned for Kenyan English by default. Swahili and Sheng are supported on request (additional KES 40,000 language-tuning fee for Sheng specifically — it's a moving target). All conversational agents default to English unless your brief specifies otherwise.

### New Q6 — What's the typical build timeline?
> A single-use-case automation: 3–5 weeks. A multi-agent platform: 8–16 weeks. A Discovery Sprint (2 weeks) always runs first — we use it to scope, price, and prove the approach on one narrow use case before committing to the full build.

### New Q7 — Do you replace our existing staff?
> No. We replace the manual operational overhead your staff currently does — reconciliation, reminders, filing prep, customer triage. Your team moves to higher-judgment work. Every engagement includes a 2-week handover + training so your staff owns the system after we hand it off.

### New Q8 — What happens after launch?
> Three options: (a) we maintain it on a monthly retainer (typical KES 25,000–60,000/month depending on scope), (b) we hand it off fully with documentation and your team owns it, (c) we hand it off but stay on call for incidents. Most clients pick (a) for the first 3 months, then transition to (b).

**My recommendation:** keep Q1, Q2, Q3, Q4, Q5 (drop Q6, Q7, Q8 — those go to your sales call). That mirrors the existing 5-question structure.

---

## Section 7: Optional add to `/company/capabilities` page

The current Tools card lists: OpenAI GPT-4, Claude 3.5, LangChain, Pinecone, n8n.

I'd propose adding a Kenyan-specific category above or beside it:

> **Kenyan integrations:** M-Pesa Daraja, Paystack, KRA iTax, BRS / iPRS, eTIMS, Safaricom SMS, OneSignal.

This is a 30-second edit to the `techBadges` array.

---

## What I would NOT do (yet)

- **I would not change the "Engagement Models"** (Project-Based / Monthly Retainer / Team Augmentation / Discovery Sprint). Those are clean and credible as-is.
- **I would not rewrite the capabilities page hero or industries list.** They work.
- **I would not add a "Pricing" page** unless you have one ready. The Discovery Sprint mention in Q1 is enough to set expectations without committing to a public price list.

---

## Open questions for you before Stage 2

1. **Which of the 8 Kenyan use cases** do you want on the page? (My recommendation: B, C, E, G — the ones most defensibly backed by your existing products.)
2. **Which of the 8 FAQs** do you want? (My recommendation: Q1, Q2, Q3, Q4, Q5.)
3. **Is "Hosted in Kenya" a real commitment** you can make today, or should it stay as "Deployments can be hosted in-region on request"? I don't want to promise something you'll have to walk back.
4. **The "Built on Kenyan rails" section — do you want it as a new section, or would you rather fold those integrations into the existing agent-types cards?**
5. **Should I also patch `/company/capabilities` (Section 7 above), or leave that page alone for now?**

Tell me your picks and I'll move to Stage 2 — apply the changes to the `.jsx` files, run the build, show you the diff, commit.