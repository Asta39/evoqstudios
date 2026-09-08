"use client";

import {
  Sparkles,
  MessageSquare,
  FileText,
  Workflow,
  ShieldCheck,
  Code2,
  Lock,
  CheckCircle2,
} from "lucide-react";

import { AiKpiCardsSection } from "../../../components/AiKpiCardsSection";
import { ServicePageShell } from "../../../components/ServicePageShell";
import { ServiceHero } from "../../../components/ServiceHero";
import { FaqAccordion } from "../../../components/FaqAccordion";

const agentTypes = [
  {
    title: "WhatsApp-First Support Agents",
    desc: "24/7 intelligent conversational agents on the channel your customers actually use — trained on your catalog, brand voice, and Kenyan English + Swahili + Sheng.",
    icon: MessageSquare,
  },
  {
    title: "Document Intelligence Agents",
    desc: "OCR + LLM pipelines that parse CR12s, KRA PIN certificates, BRS filings, contracts, and lease agreements — extracting key fields and flagging compliance anomalies.",
    icon: FileText,
  },
  {
    title: "Operations Automation (M-Pesa + Paystack + KRA)",
    desc: "Connect internal tools, webhooks, and regional payment rails to execute multi-step business actions automatically — reconciliation, payout splits, and fiscal logging.",
    icon: Workflow,
  },
  {
    title: "Customer Data & KYC Agents",
    desc: "Clean, classify, and enrich inbound customer records at scale — including automated KYC checks against CR12, Kenya Sanctions List, and OpenCorporates.",
    icon: ShieldCheck,
  },
  {
    title: "Internal Engineering Copilots",
    desc: "Repo-aware assistants fine-tuned on your internal architecture, conventions, and the local regulatory context your code lives in.",
    icon: Code2,
  },
];

const kenyanRails = [
  { name: "M-Pesa (Lipa na M-Pesa, Pay Bill, Send Money)", category: "Mobile Money" },
  { name: "Paystack & Flutterwave (Cards, Bank Transfer)", category: "Payment Gateways" },
  { name: "KRA iTax (PIN validation, Returns, Tax Payments)", category: "Tax Compliance" },
  { name: "BRS & iPRS (Company search, Name availability)", category: "Government Registries" },
  { name: "eTIMS (Receipt generation, Fiscalisation)", category: "Fiscal Compliance" },
  { name: "Equity / KCB / Co-op Bank Open APIs", category: "Banking Integrations" },
  { name: "Safaricom & Airtel SMS Gateways", category: "Messaging Infrastructure" },
  { name: "OneSignal & WhatsApp Business API", category: "Push Notifications" },
];

const buildSteps = [
  { num: "01", title: "Define Rails", desc: "Map decision points, API endpoints (M-Pesa, KRA, BRS), and data constraints." },
  { num: "02", title: "Model Selection", desc: "Select optimal vision & reasoning LLMs (GPT-4o, Claude 3.5 Sonnet) for cost & latency." },
  { num: "03", title: "Prompt Guardrails", desc: "Craft deterministic system prompts with zero-hallucination guardrails for financial data." },
  { num: "04", title: "Integration", desc: "Connect agent functions to production webhooks, RLS databases, and regional APIs." },
  { num: "05", title: "Monitor & Audit", desc: "Track conversation logs, execution traces, and human-in-the-loop fallback triggers." },
];

const useCases = [
  {
    sector: "Retail & Hospitality",
    title: "eTIMS Receipt Generation & Fiscal Logging",
    impact: "Automated fiscal receipt generation cut reconciliation time from 4 hours/day to 12 minutes/day for a Nairobi restaurant group. Every sale scanned, every receipt fiscalised.",
  },
  {
    sector: "Fintech & SME",
    title: "M-Pesa Ledger Reconciliation",
    impact: "Daily M-Pesa statement parser matches incoming payment codes to outstanding invoices, posts the receipt, and emails the customer — replacing a 2-person accounts task with 1-click supervisor review.",
  },
  {
    sector: "Legal & Corporate",
    title: "BRS Filing Pack & Company Prep",
    impact: "Given a proposed company name + 3 alternates, the agent returns availability in 60 seconds and pre-fills CR1, CR2, and CR8 forms — turning 2-day filing prep into a 30-minute review.",
  },
  {
    sector: "Banking & Compliance",
    title: "CR12 & AML Screening Pack",
    impact: "Given a Kenyan company name, the agent pulls the latest CR12, OCRs the directors, cross-checks against the Kenya Sanctions List, and generates an AML compliance PDF in 90 seconds.",
  },
  {
    sector: "Accounting & Tax",
    title: "KRA iTax VAT Pre-Fill & Reminders",
    impact: "Weekly digest to SME owners: 'VAT return due in 4 days, figures pre-filled in iTax, review and submit.' Reduced missed-filing penalties by 89% across a 40-client accounting portfolio.",
  },
  {
    sector: "Property & Real Estate",
    title: "Tenant Rent Receipting & WhatsApp Collection",
    impact: "On the 1st of every month, the agent generates rent receipts, sends them on WhatsApp with Pay-Bill details, watches for M-Pesa notifications, and marks rent as paid.",
  },
];

const trustItems = [
  "Human-in-the-loop for every irreversible action (Lawyer signs filing, Accountant approves iTax submit)",
  "M-Pesa, KRA, and BRS data is tenant-scoped and isolated via Supabase Row Level Security (RLS)",
  "Audit-ready execution logs recording prompt, tool call, source data, and user timestamp",
  "Confidence-gated handoffs — below 95% confidence, the agent pauses and requests human review",
  "Transparent KES-only billing — no surprise USD conversions or card FX fees",
  "In-Region hosting options — AWS Cape Town (af-south-1) or Vercel Frankfurt edge deployment",
];

const faqs = [
  {
    q: "How much does an AI automation cost in KES?",
    a: "Pricing depends on scope. A single-use-case automation (e.g. M-Pesa statement reconciliation) starts at KES 150,000 build + KES 15,000–40,000/month run cost. Multi-agent enterprise platforms run KES 500,000–2,000,000. Every project begins with a 2-week Discovery Sprint (KES 80,000), fully credited against your build if you proceed.",
  },
  {
    q: "Do you natively support M-Pesa, Paystack, and KRA iTax?",
    a: "Yes. We build directly against M-Pesa Daraja API (Lipa na M-Pesa, Pay Bill, B2C/B2B), Paystack (cards, mobile money, bank transfer), KRA iTax PIN validation, eTIMS fiscal receipts, and BRS company registries. We don't pretend to be integrated with rails we haven't shipped against.",
  },
  {
    q: "Where is our customer data hosted and is it compliant?",
    a: "Production deployments default to AWS Cape Town (af-south-1) or Vercel Frankfurt (fra1) edge runtimes — never US data centers by default. All tenant data is row-level isolated via Supabase RLS and encrypted with AES-256 at rest and TLS 1.3 in transit.",
  },
  {
    q: "Will KRA flag our business for automated tax filings?",
    a: "No. We don't file blindly on your behalf — the agent pre-fills the iTax return or eTIMS signature payload, and your accountant or finance team reviews and submits. Every action produces a complete audit trail that matches standard fiscal compliance expectations.",
  },
  {
    q: "Do your conversational agents support Sheng, Swahili, and Kenyan English?",
    a: "Yes. Our agents are prompt-tuned for Kenyan English by default. Swahili and Sheng conversational modes are supported on request to ensure natural interaction with local retail customers.",
  },
];

export default function AiAgentsWorkflowsPage() {
  return (
    <ServicePageShell>
      <ServiceHero
        badge={{ icon: Sparkles, label: "AI Systems & Regional Infrastructure", className: "bg-purple-500/10 border border-purple-500/20 text-purple-600" }}
        title={
          <>
            Intelligent Agents Engineered for <br />
            <span className="text-purple-600">M-Pesa, KRA, BRS & OCR Rails.</span>
          </>
        }
        description="We don't build generic AI wrappers. We engineer autonomous agents and workflows integrated directly into M-Pesa Daraja, KRA eTIMS, BRS lookup, Paystack, and document OCR systems."
        primaryCta={{ href: "/company/contact", label: "Build Production AI Rails" }}
        secondaryCta={{ href: "#kenyan-rails", label: "Explore Production Rails" }}
        titleMaxWidth="960px"
        paddingBottom="pb-16"
      />

        {/* Agent Architectures Reframed for Kenya */}
        <section id="agent-types" className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Capabilities
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Agent architectures reframed for real business.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-50/80 border border-black/[0.06] flex flex-col gap-4 hover:bg-white hover:border-purple-500/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-apple-ink">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Built on Kenyan Rails Section */}
        <section id="kenyan-rails" className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white flex flex-col gap-8">
            <div className="max-w-[720px]">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3 block">
                Regional Financial Infrastructure
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
                Built on the rails your business runs on.
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Your business doesn't run on Stripe and US SaaS. It runs on M-Pesa, KRA iTax, eTIMS, Paystack, and BRS registries. We build agents that talk to these systems natively.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {kenyanRails.map((rail, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-purple-400">
                    {rail.category}
                  </span>
                  <h4 className="text-xs font-semibold text-white leading-snug">
                    {rail.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Performance KPI Cards Section */}
        <AiKpiCardsSection />

        {/* How We Deploy Autonomous Agents */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Process
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              How we deploy autonomous agents.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {buildSteps.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-white border border-black/10 flex flex-col gap-3"
              >
                <span className="text-xs font-mono font-bold text-purple-600">
                  STEP {step.num}
                </span>
                <h4 className="text-sm font-semibold text-apple-ink">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-500 leading-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases & Trust */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Proven Use Case Scenarios */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-semibold text-apple-ink mb-6">
                Proven Regional Impact Scenarios
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((uc, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-neutral-50/90 border border-black/[0.06] flex flex-col gap-2 hover:bg-white hover:shadow-sm transition-all">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 block">
                      {uc.sector}
                    </span>
                    <h4 className="text-sm font-bold text-apple-ink">
                      {uc.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {uc.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust, Guardrails & Data Sovereignty */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-neutral-900 text-white flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Trust & Sovereignty
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4 leading-tight">
                  Data Privacy, KES Billing & In-Region Hosting
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  We engineer systems with strict human-in-the-loop controls, audit-ready logging, and localized data isolation.
                </p>
              </div>

              <ul className="flex flex-col gap-3 text-xs text-neutral-300 border-t border-white/10 pt-4">
                {trustItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      <FaqAccordion faqs={faqs} />
    </ServicePageShell>
  );
}
