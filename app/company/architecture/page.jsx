"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Terminal,
  Server,
  Database,
  Lock,
  ArrowRight,
  CheckCircle2,
  FileCode2,
} from "lucide-react";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
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
    icon: Layers,
  },
  {
    name: "API Layer",
    tech: "GraphQL, tRPC, OpenAPI, REST",
    desc: "Type-safe interface layers with strict schema validation and rate limiting middleware.",
    icon: Terminal,
  },
  {
    name: "Service Layer",
    tech: "Node.js, Python FastAPI, Docker Microservices",
    desc: "Domain-driven business logic services decoupled for independent scaling and maintenance.",
    icon: Server,
  },
  {
    name: "Data Layer",
    tech: "PostgreSQL, Redis, AWS S3, Supabase",
    desc: "ACID-compliant relational storage paired with in-memory caching and vector search indices.",
    icon: Database,
  },
  {
    name: "Infrastructure Layer",
    tech: "Terraform, AWS ECS, GCP, GitHub Actions CI/CD",
    desc: "Declarative infrastructure-as-code with automated blue/green deployment pipelines.",
    icon: Cpu,
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
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <FileCode2 className="w-3.5 h-3.5 text-apple-blue" />
            <span>Architecture Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[920px] mb-6">
            How We Build. <br />
            <span className="text-neutral-400">The Evoq Architecture Philosophy.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[720px] mb-10 leading-relaxed font-normal">
            Our systematic approach to engineering software systems that are scalable, maintainable, secure, and aligned with business growth.
          </p>
        </section>

        {/* Design Principles */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Non-Negotiables
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Engineering Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-black/[0.06] flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-semibold text-apple-ink">
                  {p.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* System Layers Stack */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Stack Blueprint
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Evoq Conceptual System Layers
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-black/20 transition-all"
                >
                  <div className="flex items-start gap-4 max-w-[600px]">
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-apple-ink">
                        {layer.name}
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {layer.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-neutral-100 text-xs font-mono font-medium text-apple-ink md:max-w-[360px] w-full text-right border border-black/5">
                    {layer.tech}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-[500px]">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Security Guarantee
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
                Enterprise Data Safety & Compliance
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Security is built into our software development lifecycle, from automated dependency audits to zero-trust authorization patterns.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full lg:w-auto">
              {securityItems.map((sec, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-neutral-200 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{sec}</span>
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
