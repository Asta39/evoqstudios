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
  Terminal as TerminalIcon,
} from "lucide-react";
import { InteractiveTerminal } from "../../../components/ui/interactive-terminal";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const nextjsLogs = [
  { type: "cmd", text: "npx next dev --turbo" },
  { type: "info", text: "▲ Next.js 14.2 (Turbopack) initialized in 210ms" },
  { type: "cmd", text: "POST /api/actions/submitInquiry - 200 OK (14ms)" },
  { type: "success", text: "[RSC Stream] Rendered 14 React Server Components on Edge" },
  { type: "info", text: "[Vercel Edge] Global static payload cached across 310 PoPs" },
  { type: "success", text: "✔ Web Vitals: LCP 1.1s | CLS 0.00 | FID 8ms" },
];

const nextjsCode = `// app/actions/user.ts
'use server';

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateUserProfile(userId: string, payload: ProfileDTO) {
  const user = await db.user.update({
    where: { id: userId },
    data: { ...payload, updatedAt: new Date() },
  });

  revalidatePath("/dashboard");
  return { status: "success", data: user };
}`;

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
        <section className="max-w-[1240px] mx-auto pt-8 pb-16 flex flex-col items-center text-center">
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

        {/* Interactive Live Terminal Demo Section */}
        <section className="max-w-[1240px] mx-auto py-12 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Interactive Live Terminal */}
            <div className="lg:col-span-7">
              <InteractiveTerminal
                title="Next.js 14 Turbopack & Server Actions Sandbox"
                logs={nextjsLogs}
                codeSnippet={nextjsCode}
              />
            </div>

            {/* Right Column: Explanatory Text */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 w-fit">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>Live Execution Sandbox</span>
              </div>

              <h2 className="text-3xl font-bold text-apple-ink tracking-tight">
                Zero-Bundle Server Actions & Edge Hydration
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Observe how Next.js 14 Server Actions execute directly on Vercel's global edge network without loading client-side API libraries, keeping First Input Delay under 10ms.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Turbopack instant HMR with sub-200ms cold starts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Progressive UI streaming via React Suspense boundaries</span>
                </div>
              </div>
            </div>
          </div>
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
