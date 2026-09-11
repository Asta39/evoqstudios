"use client";

import { faqs } from "./faqs";

import {
  Palette,
  CheckCircle2,
  FileCheck,
} from "lucide-react";

import { Compare } from "../../../components/ui/compare";
import { ServicePageShell } from "../../../components/ServicePageShell";
import { ServiceHero } from "../../../components/ServiceHero";
import { FaqAccordion } from "../../../components/FaqAccordion";

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


export default function BrandUiRebrandingPage() {
  return (
    <ServicePageShell>
      <ServiceHero
        badge={{ icon: Palette, label: "Brand & UI Rebranding", className: "bg-rose-500/10 border border-rose-500/20 text-rose-600" }}
        title={
          <>
            A Brand Worth Remembering. <br />
            <span className="text-apple-ink">Redesign Your Digital Presence.</span>
          </>
        }
        description="Strategic rebranding and UI overhauls that align your visual identity with where your business is going."
        primaryCta={{ href: "/company/contact", label: "Start a Rebrand" }}
        secondaryCta={{ href: "#when-to-rebrand", label: "Explore Process" }}
        titleMaxWidth="920px"
      />

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

          <div>
            {rebrandTriggers.map((trigger, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-6 border-t border-black/[0.06] last:border-b"
              >
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium text-apple-ink leading-relaxed">
                  {trigger}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Before & After Refactoring Code / UI Comparison Section */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3 block">
              Interactive Refactoring Audit
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-apple-ink tracking-tight mb-3">
              Legacy Code vs. Evoq Refined Systems
            </h3>
            <p className="text-sm text-neutral-600 max-w-[680px] mx-auto leading-relaxed font-normal">
              Hover or drag the slider below to compare legacy, unoptimized code with our deterministic, type-safe Next.js & UI architecture.
            </p>
          </div>

          <div className="flex justify-center p-4 sm:p-8 bg-neutral-950 rounded-3xl border border-white/10 shadow-2xl">
            <Compare
              firstImage="https://assets.aceternity.com/code-problem.png"
              secondImage="https://assets.aceternity.com/code-solution.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[280px] w-full max-w-[800px] md:h-[480px]"
              slideMode="hover"
            />
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

          <div>
            {serviceBreakdown.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 border-t border-black/[0.06] last:border-b"
              >
                <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
                  <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-base font-semibold text-apple-ink">
                    {item.title}
                  </h4>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
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

              <div>
                {processSteps.map((step) => (
                  <div key={step.num} className="py-5 border-t border-black/[0.06] last:border-b">
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

      <FaqAccordion faqs={faqs} />
    </ServicePageShell>
  );
}
