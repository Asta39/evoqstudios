"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Shield,
  Zap,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Building,
} from "lucide-react";

import { AsciiArtHeroBackground } from "../../../components/ui/ascii-art-text";
import { ImagesBadge } from "../../../components/ui/images-badge";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const values = [
  {
    title: "Craft Over Volume",
    desc: "We intentionally limit client engagements so every project receives senior engineering focus and uncompromised aesthetic precision.",
    icon: Target,
  },
  {
    title: "Systems Thinking",
    desc: "We don't build isolated components. Every line of code and UI token considers the holistic system architecture.",
  },
  {
    title: "Radical Clarity",
    desc: "Complex problems deserve straightforward, transparent solutions — no jargon, no inflated estimates, no hidden scope.",
  },
  {
    title: "Partnership, Not Vendorhood",
    desc: "We embed deeply into your organization, thinking like founders and taking true ownership of technical outcomes.",
  },
  {
    title: "Future-Proofing",
    desc: "We engineer systems designed for where your company is going 3 years from now, not just where it sits today.",
  },
];

const teamMembers = [
  {
    name: "Ian Love",
    role: "Co-Founder & Systems Architect",
    bio: "Passionate about full-stack performance, deterministic API design, and high-concurrency database pipelines.",
  },
  {
    name: "Naitore Mugambi",
    role: "Head of Product & Brand",
    bio: "Focuses on user journey mapping, design systems, typography hierarchy, and conversion-first UI experiences.",
  },
  {
    name: "Kevin Bond",
    role: "Lead Full-Stack Engineer",
    bio: "Specializes in React Server Components, Next.js architecture, edge runtime optimizations, and microservices.",
  },
];

const studioCulture = [
  "Async-first, deep focus workflows with minimal meeting distraction",
  "Rapid 2-week iteration sprints with continuous CI/CD staging deploys",
  "Obsessed with modern tooling: Next.js 14, Tailwind, Framer Motion, TypeScript, PostgreSQL",
  "Active open-source contributors and technical documentation advocates",
];

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* ASCII Art Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-4 pb-16">
          <AsciiArtHeroBackground />
        </section>

        {/* Our Story */}
        <section className="max-w-[1000px] mx-auto py-16 border-t border-black/[0.06]">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
            Our Story
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-apple-ink tracking-tight mb-8">
            Why Evoq was founded.
          </h3>

          <div className="flex flex-col gap-6 text-base text-neutral-700 leading-relaxed font-normal">
            <p>
              Evoq Studio was founded to bridge a glaring gap in the market: the divide between hyper-creative agencies that couldn't engineer robust backends, and traditional software consultancies whose user interfaces felt clunky and outdated.
            </p>
            <p>
              Over the years, we've evolved into a trusted engineering partner for high-growth startups, luxury brands, and enterprise teams across East Africa and globally. We've built everything from compliance platforms handling high-concurrency data to bespoke e-commerce engines.
            </p>
            <p>
              Our vision for the next decade is clear: to remain an elite, agile team that sets the benchmark for web performance, intelligent automation, and timeless digital aesthetics.
            </p>
          </div>

          {/* Interactive Images Badge Showcase */}
          <div className="mt-10 p-6 rounded-2xl bg-neutral-50 border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-apple-blue block mb-1">
                Design System Library
              </span>
              <h4 className="text-base font-semibold text-apple-ink">
                Interactive Design System Tokens & Asset Bundles
              </h4>
            </div>

            <ImagesBadge
              text="Hover to inspect design tokens"
              images={[
                "https://assets.aceternity.com/pro/agenforce-2.webp",
                "https://assets.aceternity.com/pro/minimal-3-min.webp",
                "https://assets.aceternity.com/pro/bento-4.png",
              ]}
              folderSize={{ width: 48, height: 36 }}
              teaserImageSize={{ width: 40, height: 28 }}
              hoverImageSize={{ width: 140, height: 108 }}
              hoverTranslateY={-110}
              hoverSpread={50}
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Values
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              The principles that guide our craft.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-black/[0.06] flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-semibold text-apple-ink">
                  {v.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                Team
              </h2>
              <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
                Meet the builders.
              </h3>
            </div>
            <a
              href="/company/contact"
              className="text-sm font-semibold text-apple-ink hover:text-apple-blue transition-colors flex items-center gap-1.5"
            >
              <span>Join our team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-neutral-900 text-white font-bold text-lg flex items-center justify-center">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-apple-ink">
                    {m.name}
                  </h4>
                  <span className="text-xs font-semibold text-apple-blue block mb-2">
                    {m.role}
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Studio Culture */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-[500px]">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">
                Studio Culture
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
                How We Operate Day-to-Day
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We believe exceptional software is born in environments of deep focus, clear communication, and high technical autonomy.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full lg:w-auto">
              {studioCulture.map((c, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-neutral-200 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
