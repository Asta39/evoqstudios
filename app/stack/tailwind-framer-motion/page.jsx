"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Layout,
  Layers,
  CheckCircle2,
  Sliders,
  Eye,
  ArrowRight,
  Terminal as TerminalIcon,
} from "lucide-react";
import { InteractiveTerminal } from "../../../components/ui/interactive-terminal";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const motionLogs = [
  { type: "cmd", text: "npx tailwindcss --input input.css --output dist.css --minified" },
  { type: "info", text: "[Tailwind JIT] Scanned 184 component files in 12ms (Bundle size: 9.8kB)" },
  { type: "cmd", text: "framer-motion --eval spring-physics" },
  { type: "success", text: "✔ Calculated spring trajectory (stiffness: 220, damping: 20) in 3ms" },
  { type: "info", text: "[Hardware Acceleration] Promoted transform & opacity to GPU compositing layer" },
  { type: "success", text: "✔ 60 FPS animation render cycle confirmed on mobile viewports" },
];

const motionCode = `// SpringCard.jsx - GPU-Accelerated Tactile Card
import { motion } from "framer-motion";

export function SpringCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-black/10 shadow-lg"
    >
      {children}
    </motion.div>
  );
}`;

const tailwindBenefits = [
  "Design system tokens map directly to consistent utility classes",
  "No context-switching between separate CSS files and component logic",
  "JIT compiler keeps production CSS bundle size minimal (<15kB)",
  "Dark mode and responsive breakpoints supported out of the box",
];

const framerMotionUses = [
  "Page transitions and layout morphing for SPA-like navigation smoothness",
  "Scroll-triggered reveals that guide user attention without distraction",
  "Gesture-based interactions (drag, swipe, tilt) for tactile mobile UIs",
  "Staggered entrance animations for lists, grids, and feature cards",
];

const animationRules = [
  { rule: "Duration Scale", desc: "0.3s–0.5s for UI micro-feedback; 0.8s–1.2s for structural page transitions." },
  { rule: "Physics & Easing", desc: "Spring physics for natural elastic feel; cubic-bezier for precise control." },
  { rule: "Accessibility", desc: "Respects prefers-reduced-motion media queries with instant static fallbacks." },
  { rule: "Performance Rules", desc: "Avoid animating layout properties (width, height, top); stick strictly to GPU transform & opacity." },
];

export default function TailwindFramerMotionPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Stack • Tailwind & Framer Motion</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[920px] mb-6">
            Design in Motion. <br />
            <span className="text-neutral-400">Style & Soul.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[720px] mb-10 leading-relaxed font-normal">
            Utility-first styling with Tailwind CSS. Meaningful motion with Framer Motion. Together, they create interfaces that feel alive.
          </p>
        </section>

        {/* Live Terminal Section */}
        <section className="max-w-[1240px] mx-auto py-12 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Interactive Terminal */}
            <div className="lg:col-span-7">
              <InteractiveTerminal
                title="Tailwind JIT Compiler & Framer Motion Physics Engine"
                logs={motionLogs}
                codeSnippet={motionCode}
              />
            </div>

            {/* Right Column: Explanatory Text */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-600 w-fit">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>GPU-Accelerated UI Engine</span>
              </div>

              <h2 className="text-3xl font-bold text-apple-ink tracking-tight">
                60 FPS Smooth Spring Physics & Sub-10kB Bundles
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                By combining Tailwind's instant JIT class compilation with Framer Motion GPU hardware acceleration, we achieve tactile, butter-smooth 60 FPS UI transitions without layout repaints.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>JIT compiler keeps total CSS bundle under 10kB</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Spring physics calculations offloaded to GPU hardware layers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailwind & Framer Motion Grid */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tailwind */}
            <div className="p-8 rounded-3xl bg-neutral-50 border border-black/[0.08] flex flex-col justify-between gap-6">
              <div>
                <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-wider block mb-2">
                  Utility-First Styling
                </span>
                <h3 className="text-2xl font-bold text-apple-ink mb-4">
                  Tailwind CSS Engine
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  Why we standardize on Tailwind for rapid component tokenization, zero CSS bloat, and consistent design scales.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-black/[0.06]">
                {tailwindBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Framer Motion */}
            <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col justify-between gap-6">
              <div>
                <span className="text-xs font-bold font-mono text-purple-400 uppercase tracking-wider block mb-2">
                  Declarative Animation Engine
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Framer Motion
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  How we use motion intentionally to provide immediate user feedback, orient navigation, and delight interaction.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
                {framerMotionUses.map((u, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{u}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Animation Guidelines */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Animation Principles
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Motion Rules & Guidelines
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {animationRules.map((ar, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col gap-3">
                <span className="text-xs font-mono font-bold text-sky-600">
                  RULE 0{idx + 1}
                </span>
                <h4 className="text-base font-semibold text-apple-ink">
                  {ar.rule}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {ar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
