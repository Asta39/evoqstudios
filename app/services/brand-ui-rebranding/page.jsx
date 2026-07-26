"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Palette,
  Eye,
  Layers,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const rebrandTriggers = [
  "Your visual identity no longer reflects your evolved product maturity.",
  "You are scaling into higher enterprise markets or international audiences.",
  "Your brand looks dated or derivative compared to new category competitors.",
  "Your company underwent a merger, acquisition, or pivot.",
  "High bounce rates indicate your UI and UX are hurting conversion & retention.",
];

const serviceBreakdown = [
  { title: "Brand Strategy", desc: "Positioning, messaging framework, brand voice & competitive audit." },
  { title: "Visual Identity", desc: "Logomarks, color tokens, typography scales, & photography direction." },
  { title: "UI/UX Audit", desc: "Heuristic evaluation, user journey mapping, and conversion friction audit." },
  { title: "Design System", desc: "Figma component libraries, design tokens, and documentation for scale." },
  { title: "Website Redesign", desc: "Full end-to-end site rebuild with modern design tokens and headless CMS." },
  { title: "Motion & Interaction", desc: "Micro-interactions, page transitions, and scroll storytelling." },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "Stakeholder interviews, audience research, & brand audit." },
  { num: "02", title: "Strategy", desc: "Brand positioning statement and core value pillars." },
  { num: "03", title: "Exploration", desc: "Mood boards, typography pairings, & concept directions." },
  { num: "04", title: "Design", desc: "Logo lockups, UI screens, marketing collateral, & design system v1." },
  { num: "05", title: "Refinement", desc: "Stress-testing across light/dark modes and mobile viewports." },
  { num: "06", title: "Handoff", desc: "Exporting asset packages, Figma design tokens, & guidelines." },
];

const deliverables = [
  "Complete brand guidelines document (PDF + digital web portal)",
  "Full logo package (SVG, PNG, monochrome, dark/light variants)",
  "Color palette with WCAG accessibility-tested contrast scores",
  "Typography hierarchy with web font licensing guidance",
  "Figma design system library with interactive component variants",
  "Social media template kit & pitch deck presentation templates",
];

const faqs = [
  {
    q: "How long does a rebrand take?",
    a: "Comprehensive visual identity and UI design system projects typically take 6 to 10 weeks from discovery to final design handoff.",
  },
  {
    q: "Do you handle only digital, or print too?",
    a: "We specialize in digital-first branding (UI, web, apps), but provide print-ready vector assets, packaging guidelines, and merchandise templates.",
  },
  {
    q: "Can you rebrand without changing our logo?",
    a: "Yes. We can refresh your typography, color palette, design system, and UI layout while preserving your existing logomark.",
  },
  {
    q: "What if we need ongoing design support?",
    a: "We offer monthly design retainer packages for teams needing continuous UI updates, marketing collateral, and design system maintenance.",
  },
  {
    q: "How do you ensure the new brand resonates with our audience?",
    a: "Our strategy phase includes competitive audits, user testing, and stakeholder alignment to ensure the new identity hits the mark.",
  },
];

export default function BrandUiRebrandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-600 mb-6">
            <Palette className="w-3.5 h-3.5" />
            <span>Brand & UI Rebranding</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[920px] mb-6">
            A Brand Worth Remembering. <br />
            <span className="text-neutral-400">Redesign Your Digital Presence.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[720px] mb-10 leading-relaxed font-normal">
            Strategic rebranding and UI overhauls that align your visual identity with where your business is going.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/company/contact"
              className="px-7 py-3.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>Start a Rebrand</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#when-to-rebrand"
              className="px-7 py-3.5 rounded-full bg-neutral-100 text-apple-ink font-semibold text-sm hover:bg-neutral-200 transition-all"
            >
              Explore Process
            </a>
          </div>
        </section>

        {/* When to Rebrand */}
        <section id="when-to-rebrand" className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Self-Qualification
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Signs your brand needs a refresh.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rebrandTriggers.map((trigger, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-black/[0.06] flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0 font-bold text-xs">
                  0{idx + 1}
                </div>
                <p className="text-sm font-medium text-apple-ink leading-relaxed">
                  {trigger}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Breakdown */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Services
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Integrated brand & UI offerings.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceBreakdown.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col gap-2 hover:border-black/20 transition-all"
              >
                <h4 className="text-base font-semibold text-apple-ink">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process & Deliverables */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-semibold text-apple-ink tracking-tight mb-8">
                The 6-Step Rebrand Journey
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((step) => (
                  <div key={step.num} className="p-4 rounded-xl bg-neutral-50 border border-black/5">
                    <span className="text-xs font-mono font-bold text-rose-600 block mb-1">
                      PHASE {step.num}
                    </span>
                    <h4 className="text-sm font-semibold text-apple-ink">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1 leading-normal">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-neutral-900 text-white flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-rose-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Client Deliverables
                </span>
              </div>

              <h4 className="text-xl font-bold">
                Everything You Walk Away With
              </h4>

              <ul className="flex flex-col gap-3 text-xs text-neutral-300 border-t border-white/10 pt-4">
                {deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
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
