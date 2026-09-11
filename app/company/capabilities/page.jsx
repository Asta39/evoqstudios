"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

import { ShootingStars } from "../../../components/ui/shooting-stars";
import { StarsBackground } from "../../../components/ui/stars-background";

const Header = dynamic(() => import("../../../components/Header"));
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter)
);

const capabilityCategories = [
  {
    title: "Strategy",
    items: ["Product Strategy", "Technical Roadmapping", "System Audit", "Digital Transformation Consulting"],
  },
  {
    title: "Design",
    items: ["Brand Identity & Systems", "UI/UX Architecture", "Interactive Prototyping", "Motion & Micro-interactions"],
  },
  {
    title: "Engineering",
    items: ["Next.js Frontend", "Node.js & Python Backends", "GraphQL / REST APIs", "Database & IaC Cloud"],
  },
  {
    title: "AI & Automation",
    items: ["LLM & RAG Integration", "Custom AI Support Agents", "Workflow Automation (n8n/Make)", "Data Pipelines"],
  },
  {
    title: "Growth",
    items: ["Core Web Vitals SEO", "Conversion Optimization", "Vercel Edge Caching", "Analytics & Tracking"],
  },
];

const engagementModels = [
  {
    title: "Project-Based",
    tag: "Defined Builds",
    desc: "Fixed scope, timeline, and deliverables. Perfect for new product launches or major site overhauls.",
  },
  {
    title: "Monthly Retainer",
    tag: "Evolving Products",
    desc: "Ongoing design and engineering capacity to continuously ship features and maintain codebases.",
  },
  {
    title: "Team Augmentation",
    tag: "Engineering Velocity",
    desc: "Embedded senior engineers and product designers who integrate directly into your internal sprints.",
  },
  {
    title: "Discovery Sprint",
    tag: "2-Week Intensive",
    desc: "Rapid strategy, system blueprinting, and wireframing before committing to full build cycles.",
  },
];

const industries = [
  "SaaS & Technology Platforms",
  "E-Commerce & Retail Brands",
  "Fintech & Compliance Systems",
  "Healthcare & Wellness Tools",
  "Media & Digital Publishing",
  "Professional Services & Agencies",
];

const techBadges = [
  { cat: "Frontend", tools: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion"] },
  { cat: "Backend", tools: ["Node.js", "Drizzle ORM", "Supabase", "Postgres.js", "Resend"] },
  { cat: "Database & Cloud", tools: ["PostgreSQL", "Supabase", "Vercel", "AWS", "Sentry"] },
  { cat: "AI & Data", tools: ["Claude", "GPT-4o", "Groq", "OCR Pipelines"] },
];

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pb-20 px-4 sm:px-6 lg:px-12">

        {/* Hero Section with Shooting Stars & Star Background */}
        <section className="relative w-full max-w-[1240px] mx-auto min-h-[28rem] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center text-center p-8 sm:p-14 overflow-hidden border border-white/10 shadow-2xl mb-12">
          <StarsBackground starDensity={0.0002} />
          <ShootingStars minSpeed={15} maxSpeed={35} starColor="#1a73e8" trailColor="#7c4dff" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6 block">
              Capabilities Index
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-[920px] mb-6">
              Everything We Do. <br />
              <span className="text-neutral-400">Full-Stack Digital Execution.</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 max-w-[720px] leading-relaxed font-normal">
              A full-stack digital studio for ambitious teams. From strategy to cloud deployment, we cover the entire digital lifecycle.
            </p>
          </div>
        </section>

        {/* Capability Categories */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Services Master Index
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Capability Categories
            </h3>
          </div>

          <div>
            {capabilityCategories.map((cat, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 border-t border-black/[0.06] last:border-b"
              >
                <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
                  <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-lg font-semibold text-apple-ink">
                    {cat.title}
                  </h4>
                </div>
                <div className="lg:col-span-9 flex flex-wrap gap-x-6 gap-y-2">
                  {cat.items.map((item, i) => (
                    <span key={i} className="text-sm text-neutral-600 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Partnership Options
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Engagement Models
            </h3>
          </div>

          <div>
            {engagementModels.map((em, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 border-t border-black/[0.06] last:border-b"
              >
                <div className="lg:col-span-3 flex items-start gap-2.5 h-fit">
                  <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-apple-blue block mb-1">
                      {em.tag}
                    </span>
                    <h4 className="text-base font-semibold text-apple-ink">
                      {em.title}
                    </h4>
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {em.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries & Tools */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Industries */}
            <div>
              <h3 className="text-2xl font-semibold text-apple-ink mb-6">
                Sectors & Industries We Serve
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries.map((ind, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-black/5 text-xs font-semibold text-apple-ink flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Grid */}
            <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col gap-6">
              <h3 className="text-2xl font-bold">
                Tools & Platforms Stack
              </h3>
              <div className="flex flex-col gap-4">
                {techBadges.map((b, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      {b.cat}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {b.tools.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
    </>
  );
}
