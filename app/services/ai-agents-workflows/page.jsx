"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  FileText,
  Workflow,
  Database,
  Code2,
  Lock,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  QrCode,
  ScanLine,
  CreditCard,
  Building2,
  Zap,
} from "lucide-react";

import { AiKpiCardsSection } from "../../../components/AiKpiCardsSection";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const productionRails = [
  {
    title: "M-Pesa Daraja API & Payments",
    subtitle: "STK Push, C2B/B2C & Reconciliation",
    desc: "Instant payment callbacks, automated ledger balancing, and AI fallback agents handling high-concurrency mobile money transactions.",
    badge: "Financial Infrastructure",
    icon: CreditCard,
    accent: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  {
    title: "KRA eTIMS & iTax Compliance",
    subtitle: "Automated Tax Invoice Generation & QR Verification",
    desc: "Real-time compliance agents that validate electronic tax invoices, verify KRA PINs, and sign eTIMS payloads directly into ERP systems.",
    badge: "Tax Infrastructure",
    icon: QrCode,
    accent: "bg-rose-500/10 text-rose-600 border-rose-500/20",
  },
  {
    title: "BRS & KYC Verification",
    subtitle: "Business Registration Service Lookup",
    desc: "Automated business verification workflows checking company registration numbers, director IDs, and legal status via official API rails.",
    badge: "Government & Legal",
    icon: Building2,
    accent: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    title: "Document & National ID OCR",
    subtitle: "Identity & Bank Statement Parsing",
    desc: "Computer vision and vision-LLMs parsing Kenyan National IDs, KRA certificates, utility bills, and multi-page bank statements into structured JSON.",
    badge: "Document AI",
    icon: ScanLine,
    accent: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
  {
    title: "Paystack & Pan-African Gateways",
    subtitle: "Multi-Currency Card & Bank Transfers",
    desc: "Seamless integration with Paystack, Flutterwave, and regional banking webhooks for multi-currency settlement and automated subscription billing.",
    badge: "Payment Rails",
    icon: Zap,
    accent: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
];

const agentTypes = [
  {
    title: "M-Pesa & Payment Reconciliation Agents",
    desc: "Autonomous agents matching M-Pesa transaction codes with bank statements and internal accounting software in real-time.",
    icon: Bot,
  },
  {
    title: "OCR & KYB Document Parsing Agents",
    desc: "Extract structured data from scanned National IDs, KRA PIN certificates, and audited financial statements with 99%+ accuracy.",
    icon: FileText,
  },
  {
    title: "eTIMS & Tax Invoice Validation Workflows",
    desc: "Connect internal ERPs and point-of-sale systems to validate KRA tax signatures and flag compliance discrepancies instantly.",
    icon: Workflow,
  },
  {
    title: "Enterprise Data Pipeline Agents",
    desc: "Clean, classify, enrich, and route inbound customer financial & inventory data at high scale.",
    icon: Database,
  },
  {
    title: "Internal Developer Copilots",
    desc: "Copilot-style assistants trained on your internal repos, API specs (Daraja, Paystack, KRA), and architecture rules.",
    icon: Code2,
  },
];

const buildSteps = [
  { num: "01", title: "Define Rails", desc: "Identify API endpoints (M-Pesa, KRA eTIMS, Paystack, BRS) & data constraints." },
  { num: "02", title: "Model Selection", desc: "Choose optimal vision & reasoning LLMs (GPT-4o, Claude 3.5 Sonnet) for speed & precision." },
  { num: "03", title: "Prompt Guardrails", desc: "Craft deterministic system prompts with zero-hallucination guardrails for financial data." },
  { num: "04", title: "API Integration", desc: "Connect agent functions to webhooks, vector databases, and production microservices." },
  { num: "05", title: "Monitor & Audit", desc: "Track execution logs, accuracy scores, and human-in-the-loop fallback triggers." },
];

const useCases = [
  {
    sector: "Fintech & Lending",
    impact: "Automated M-Pesa statement parsing & KRA PIN verification cut loan approval turnaround from 24 hours to 45 seconds.",
  },
  {
    sector: "Retail & Supply Chain",
    impact: "Automated KRA eTIMS invoice generation & QR signing processed over 40,000 monthly transactions without human error.",
  },
  {
    sector: "Logistics & Enterprise",
    impact: "National ID & BRS registry OCR parsing reduced merchant onboarding friction by 82%.",
  },
];

const trustItems = [
  "Human-in-the-loop fallbacks for high-stakes financial approvals",
  "Zero data retention — strict privacy compliance for customer financial data",
  "Transparent audit logs and explainable step-by-step execution traces",
  "Automated fallback to human operators whenever validation scores drop below 98%",
];

const faqs = [
  {
    q: "How do your AI agents handle M-Pesa Daraja callbacks and downtime?",
    a: "Our agents feature resilient queueing (Redis/RabbitMQ) with exponential backoff and automated reconciliation algorithms that re-query M-Pesa status APIs during network delays.",
  },
  {
    q: "Can the OCR agents parse low-quality scans of Kenyan National IDs and KRA certificates?",
    a: "Yes. We combine specialized pre-processing image filters with multi-modal vision models to accurately extract names, ID numbers, and KRA PINs even from wrinkled or low-light smartphone uploads.",
  },
  {
    q: "Are the KRA eTIMS integrations fully compliant with tax regulations?",
    a: "Yes. Our eTIMS workflows sign electronic tax receipts, validate control numbers, and embed official QR verification codes directly into client invoicing systems.",
  },
  {
    q: "Can agents integrate with local ERPs and legacy accounting systems?",
    a: "Yes. We build custom API connectors for Sage, QuickBooks, SAP, Odoo, and custom PostgreSQL/Node.js backends.",
  },
  {
    q: "Is our financial and customer data safe from model training?",
    a: "Absolutely. We exclusively deploy zero-retention enterprise API endpoints (OpenAI Enterprise, Anthropic Commercial, AWS Bedrock), ensuring your data is never used to train public models.",
  },
];

export default function AiAgentsWorkflowsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-600 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Systems & Regional Infrastructure</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[960px] mb-6">
            Intelligent Agents Engineered for <br />
            <span className="text-purple-600">M-Pesa, KRA, BRS & OCR Rails.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[760px] mb-10 leading-relaxed font-normal">
            We don't build generic AI wrappers. We engineer autonomous agents and workflows integrated directly into M-Pesa Daraja, KRA eTIMS, BRS lookup, Paystack, and document OCR systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/company/contact"
              className="px-7 py-3.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>Build Production AI Rails</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#production-rails"
              className="px-7 py-3.5 rounded-full bg-neutral-100 text-apple-ink font-semibold text-sm hover:bg-neutral-200 transition-all"
            >
              Explore Rails & Systems
            </a>
          </div>
        </section>

        {/* Production Financial & Government Rails Section */}
        <section id="production-rails" className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Real Production Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-apple-ink tracking-tight">
              Integrated with the rails your business runs on.
            </h2>
            <p className="mt-3 text-sm text-neutral-600 max-w-[680px] font-normal leading-relaxed">
              Our AI architectures connect natively to regional payment gateways, compliance registries, and computer vision engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionRails.map((rail, idx) => {
              const Icon = rail.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between gap-6 hover:border-black/20 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${rail.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${rail.accent}`}>
                        {rail.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-apple-ink">
                        {rail.title}
                      </h3>
                      <p className="text-xs font-semibold text-purple-600 mb-2">
                        {rail.subtitle}
                      </p>
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {rail.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/5 flex items-center gap-2 text-xs font-semibold text-apple-ink">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Production Production-Ready API Connector</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Agent Types We Build */}
        <section id="agent-types" className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Capabilities
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Agent architectures we engineer.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-50/80 border border-black/[0.06] flex flex-col gap-4 hover:bg-white hover:shadow-md transition-all"
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

        {/* AI Performance KPI Cards Section */}
        <AiKpiCardsSection />

        {/* How It Works */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Use Case Scenarios */}
            <div>
              <h3 className="text-2xl font-semibold text-apple-ink mb-6">
                Proven Impact Scenarios
              </h3>
              <div className="flex flex-col gap-4">
                {useCases.map((uc, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-neutral-50 border border-black/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 block mb-1">
                      {uc.sector}
                    </span>
                    <p className="text-sm text-neutral-700 font-medium">
                      {uc.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust & Safety */}
            <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Trust & Guardrails
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4">
                  Enterprise-Grade Security & Financial Compliance
                </h4>
              </div>

              <ul className="flex flex-col gap-3 text-xs text-neutral-300">
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

        {/* FAQ Section */}
        <section className="max-w-[880px] mx-auto py-16 border-t border-black/[0.06]">
          <h3 className="text-2xl sm:text-3xl font-semibold text-apple-ink tracking-tight text-center mb-10">
            Frequently Asked Questions
          </h3>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-50 border border-black/[0.06] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-sm text-apple-ink"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-neutral-600 leading-relaxed border-t border-black/[0.04] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
