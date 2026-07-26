"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Globe,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  FileCode,
} from "lucide-react";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const whyNextjs = [
  {
    title: "Server Components (RSC)",
    desc: "Reduces client-side JavaScript bundle sizes by rendering heavy logic and HTML on edge servers.",
  },
  {
    title: "App Router & Streaming",
    desc: "Nested layouts, instant page transitions, and progressive UI streaming for instantaneous load times.",
  },
  {
    title: "Global Edge Runtime",
    desc: "Deploy serverless functions and dynamic routes globally with sub-50ms latency.",
  },
  {
    title: "Built-In Asset Optimization",
    desc: "Automatic WebP/AVIF image generation, font subsetting, and script prioritize loading.",
  },
];

const reactPatterns = [
  "Strict TypeScript types for every component prop and hook",
  "Custom hooks to separate UI presentation from business logic",
  "Zustand & Context for lightweight state management without redux bloat",
  "React Server Components for data fetching; Client Components reserved strictly for interactivity",
];

const performanceStrategies = [
  "Route and component level automatic code splitting",
  "Optimistic UI updates with React's useTransition hook",
  "Suspense boundaries for progressive streaming hydration",
  "Continuous Web Vitals tracking via Vercel Speed Insights",
];

export default function NextjsReactPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <Code2 className="w-3.5 h-3.5 text-blue-500" />
            <span>Stack • Next.js & React</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[920px] mb-6">
            Built on Next.js. <br />
            <span className="text-neutral-400">The Frontend Foundation.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[720px] mb-10 leading-relaxed font-normal">
            We use Next.js and React to build fast, interactive, accessible, and SEO-friendly web products.
          </p>
        </section>

        {/* Why Next.js Grid */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Frontend Standard
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Why Next.js powers our applications.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyNextjs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-black/[0.06] flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-semibold text-apple-ink">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Use React & Performance */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* React Architecture */}
            <div>
              <h3 className="text-2xl font-semibold text-apple-ink mb-6">
                React Architecture & Best Practices
              </h3>
              <div className="flex flex-col gap-3">
                {reactPatterns.map((rp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-black/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-700 font-medium">{rp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Strategies */}
            <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Performance Strategy
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4">
                  Sub-Second Hydration & Web Vitals
                </h4>
              </div>

              <ul className="flex flex-col gap-3 text-xs text-neutral-300 border-t border-white/10 pt-4">
                {performanceStrategies.map((ps, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{ps}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
