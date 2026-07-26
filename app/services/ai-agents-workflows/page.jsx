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
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

import { AiKpiCardsSection } from "../../../components/AiKpiCardsSection";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const agentTypes = [
  {
    title: "Customer Support Agents",
    desc: "24/7 intelligent agents trained on your documentation, product catalog, and brand voice.",
    icon: Bot,
  },
  {
    title: "Research & Summarization",
    desc: "Scan long-form PDFs, extract structured insights, and compile executive summaries in seconds.",
    icon: FileText,
  },
  {
    title: "Workflow Automation",
    desc: "Connect internal tools, webhooks, and APIs to execute multi-step business actions automatically.",
    icon: Workflow,
  },
  {
    title: "Data Processing Agents",
    desc: "Clean, classify, enrich, and route inbound customer data at enterprise scale.",
    icon: Database,
  },
  {
    title: "Code Assistants",
    desc: "Internal Copilot-style tools fine-tuned on your internal repositories and architecture rules.",
    icon: Code2,
  },
];

const buildSteps = [
  { num: "01", title: "Define", desc: "Identify decision points, constraints, and operational KPIs." },
  { num: "02", title: "Model Selection", desc: "Choose optimal LLM (GPT-4, Claude, Llama 3) for cost & latency." },
  { num: "03", title: "Prompt Engineering", desc: "Craft deterministic, context-aware system prompts with guardrails." },
  { num: "04", title: "Integration", desc: "Connect agent functions to production APIs, vector databases, & webhooks." },
  { num: "05", title: "Monitor & Improve", desc: "Track conversation logs, accuracy scores, and human fallback triggers." },
];

const useCases = [
  {
    sector: "E-Commerce",
    impact: "Automated product description generation reduced content team workload by 70%.",
  },
  {
    sector: "SaaS Platform",
    impact: "AI onboarding agent increased trial-to-paid user conversion by 22%.",
  },
  {
    sector: "Legal & Regulatory",
    impact: "Contract review agent flagged compliance risks in minutes instead of 4 days.",
  },
];

const trustItems = [
  "Human-in-the-loop design for high-stakes decisions",
  "Data privacy — zero training on client data without explicit consent",
  "Transparent logging and explainable agent execution steps",
  "Automated fallback to human support agents when confidence is low",
];

const faqs = [
  {
    q: "How accurate are the AI agents?",
    a: "We implement retrieval-augmented generation (RAG) and strict validation guardrails to minimize hallucinations, achieving over 95%+ accuracy in enterprise benchmarks.",
  },
  {
    q: "What data do you need from us?",
    a: "We need access to your product documentation, standard operating procedures, or API endpoints. All data ingestion is private and secure.",
  },
  {
    q: "Can agents integrate with our existing CRM or Helpdesk?",
    a: "Yes. Our agents connect seamlessly with Zendesk, Intercom, Salesforce, HubSpot, Slack, and custom REST APIs.",
  },
  {
    q: "What does ongoing maintenance look like?",
    a: "We provide continuous prompt optimization, vector index rebalancing, and model evaluation to adapt to new product updates.",
  },
  {
    q: "Is my data used to train public AI models?",
    a: "Never. We use enterprise zero-retention API endpoints (OpenAI Enterprise, Anthropic Commercial, AWS Bedrock) ensuring client data remains strictly private.",
  },
];

export default function AiAgentsWorkflowsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-600 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Systems & Automation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[920px] mb-6">
            Intelligent Agents. <br />
            <span className="text-neutral-400">Automate What Matters.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[720px] mb-10 leading-relaxed font-normal">
            Custom AI agents and automated workflows that eliminate manual operational overhead and unlock new capability tiers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/company/contact"
              className="px-7 py-3.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>Explore AI Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#agent-types"
              className="px-7 py-3.5 rounded-full bg-neutral-100 text-apple-ink font-semibold text-sm hover:bg-neutral-200 transition-all"
            >
              View Agent Types
            </a>
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
                  Enterprise-Grade Security & Deterministic Execution
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
