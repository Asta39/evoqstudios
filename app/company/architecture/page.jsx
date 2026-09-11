"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { LampContainer } from "../../../components/ui/lamp";

const Header = dynamic(() => import("../../../components/Header"));
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter)
);

const principles = [
  {
    title: "Modularity",
    desc: "Components, API boundaries, and microservices designed to evolve independently without cascade failures.",
  },
  {
    title: "Observability",
    desc: "Structured logging, real-time APM telemetry, and automated error tracking built into every deployment.",
  },
  {
    title: "Security by Design",
    desc: "Zero-trust network rules, strict input validation, row-level security, and token authorization at every layer.",
  },
  {
    title: "Performance Budget",
    desc: "Strict latency constraints (sub-100ms API responses, sub-2.5s LCP) enforced during CI build audits.",
  },
  {
    title: "Developer Experience",
    desc: "Clean, strongly-typed contracts, automated mock generators, and deterministic local docker setup.",
  },
];

const layers = [
  {
    name: "Presentation Layer",
    tech: "Next.js 14, React Server Components, Tailwind CSS, Vercel Edge",
    desc: "High-performance SSR and static edge rendering for minimal client-side JavaScript execution.",
  },
  {
    name: "API Layer",
    tech: "GraphQL, tRPC, OpenAPI, REST",
    desc: "Type-safe interface layers with strict schema validation and rate limiting middleware.",
  },
  {
    name: "Service Layer",
    tech: "Node.js, Python FastAPI, Docker Microservices",
    desc: "Domain-driven business logic services decoupled for independent scaling and maintenance.",
  },
  {
    name: "Data Layer",
    tech: "PostgreSQL, Redis, AWS S3, Supabase",
    desc: "ACID-compliant relational storage paired with in-memory caching and vector search indices.",
  },
  {
    name: "Infrastructure Layer",
    tech: "Terraform, AWS ECS, GCP, GitHub Actions CI/CD",
    desc: "Declarative infrastructure-as-code with automated blue/green deployment pipelines.",
  },
];

const securityItems = [
  "SOC 2 Type II readiness architecture guidance",
  "Strict GDPR and CCPA compliant data isolation & anonymization",
  "OWASP Top 10 mitigation strategies implemented at API gateways",
  "Automated dependency auditing & static vulnerability scanning in CI",
];

export default function ArchitecturePage() {
  return (
    <>
      <Header />
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pb-20 px-4 sm:px-6 lg:px-12">

        {/* Hero Section with Lamp Effect */}
        <section className="max-w-[1240px] mx-auto pt-8 sm:pt-12 pb-12">
          <LampContainer>
            <motion.div
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-center max-w-[920px] mb-6">
                <span className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 py-2 bg-clip-text block text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent leading-[1.08]">
                  How We Build.
                </span>
                <span className="font-cursive text-cyan-400 text-5xl sm:text-7xl md:text-8xl font-normal leading-[1.4] block mt-2 sm:mt-4">
                  The Evoq Architecture Philosophy.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-[720px] leading-relaxed font-normal">
                Our systematic approach to engineering software systems that are scalable, maintainable, secure, and aligned with business growth.
              </p>
            </motion.div>
          </LampContainer>
        </section>

        {/* Design Principles */}
        <section className="-mx-4 sm:-mx-6 lg:-mx-12 bg-[#0a0a0c] py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1240px] mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-4">
              Non-Negotiables
            </span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-16 max-w-[900px] leading-[1.1]">
              Engineering Principles
            </h3>

            <div className="flex flex-col border-b border-white/10">
              {principles.map((p, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-12 py-8 border-t border-white/10"
                >
                  <div className="lg:col-span-1 text-xs font-mono text-neutral-500">
                    0{idx + 1}
                  </div>
                  <h4 className="lg:col-span-4 text-2xl sm:text-3xl font-semibold text-white">
                    {p.title}
                  </h4>
                  <p className="lg:col-span-7 text-sm sm:text-base text-neutral-400 leading-relaxed self-center">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Layers Stack */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Stack Blueprint
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-apple-ink tracking-tight leading-[1.1]">
              Evoq Conceptual System Layers
            </h3>
          </div>

          <div className="flex flex-col border-b border-black/[0.06]">
            {layers.map((layer, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 py-8 border-t border-black/[0.06] items-start"
              >
                <div className="lg:col-span-1 text-xs font-mono text-neutral-400">
                  0{idx + 1}
                </div>
                <div className="lg:col-span-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-apple-ink">
                    {layer.name}
                  </h4>
                  <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
                <div className="lg:col-span-7 text-xs sm:text-sm font-mono text-neutral-500 lg:text-right self-center">
                  {layer.tech}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-[440px]">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 block">
                Security Guarantee
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
                Enterprise Data Safety & Compliance
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Security is built into our software development lifecycle, from automated dependency audits to zero-trust authorization patterns.
              </p>
            </div>

            <div className="flex flex-col w-full lg:w-auto lg:min-w-[420px]">
              {securityItems.map((sec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 text-sm text-neutral-200 py-4 border-t border-white/10 last:border-b"
                >
                  <span className="text-xs font-mono text-neutral-500 mt-0.5 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="leading-relaxed">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
    </>
  );
}
