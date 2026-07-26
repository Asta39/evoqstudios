"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cpu,
  Zap,
  ShieldCheck,
  RefreshCw,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { ZenoShowcaseSection } from "../../../components/ZenoShowcaseSection";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const problemPoints = [
  {
    title: "Off-the-shelf tools break when you scale",
    desc: "Generic SaaS apps hit hard performance ceilings when your user concurrency or dataset size grows beyond basic tiers.",
  },
  {
    title: "Technical debt slows every new feature",
    desc: "Hasty early prototypes turn into brittle codebases where adding a simple form field risks breaking payment pipelines.",
  },
  {
    title: "Your team spends more time fixing than building",
    desc: "Engineers spend 70% of their sprints putting out infrastructure fires instead of shipping high-value features for your users.",
  },
];

const approachSteps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "Audit existing infrastructure, benchmark bottlenecks, and map core domain business logic.",
  },
  {
    num: "02",
    title: "System Architecture",
    desc: "Design modular, scalable system blueprints with strong API contracts and explicit data schemas.",
  },
  {
    num: "03",
    title: "Engineering & Testing",
    desc: "Build with clean, strongly-typed code, comprehensive test suites, and strict CI validation.",
  },
  {
    num: "04",
    title: "Deployment & Support",
    desc: "Deploy via IaC pipelines with zero-downtime migrations, automated observability, and ongoing SLA support.",
  },
];

const capabilities = [
  {
    icon: Server,
    title: "API Design & Development",
    desc: "RESTful and GraphQL APIs engineered for high-frequency throughput and deterministic security.",
  },
  {
    icon: Cpu,
    title: "Microservices Architecture",
    desc: "Decoupled domain services that deploy independently and scale horizontally under load spikes.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    desc: "Schema normalization, indexing strategies, partition management, and failover replication.",
  },
  {
    icon: Zap,
    title: "Cloud Infrastructure & IaC",
    desc: "AWS, GCP, and Vercel deployments orchestrated via Terraform and automated GitHub Actions.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    desc: "Refactor and migrate aging monoliths to modern serverless or containerized stacks with zero downtime.",
  },
  {
    icon: ShieldCheck,
    title: "System Integration",
    desc: "Connect legacy ERPs, payment gateways, and third-party APIs into unified, resilient workflows.",
  },
];

const faqs = [
  {
    q: "How long does a typical system build take?",
    a: "Core system architecture and initial production MVP builds typically take 6 to 12 weeks, depending on system complexity and legacy data migration scope.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes. We perform thorough technical audits on existing codebases, identifying high-friction technical debt and implementing incremental refactoring strategies.",
  },
  {
    q: "What does ongoing support look like?",
    a: "We offer ongoing SLA support including 24/7 uptime monitoring, security patching, performance optimization, and dedicated sprint capacity.",
  },
  {
    q: "How do you handle security and compliance?",
    a: "Every system is built with SOC 2, OWASP Top 10, and GDPR compliance principles from day one, including role-based access control and end-to-end data encryption.",
  },
  {
    q: "Can you integrate with our current tools?",
    a: "Absolutely. We build custom API connectors and webhook pipelines to integrate smoothly with your existing CRM, analytics, or ERP infrastructure.",
  },
];

export default function SystemDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <Server className="w-3.5 h-3.5 text-apple-blue" />
            <span>Systems Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[900px] mb-6">
            Systems That Scale. <br />
            <span className="text-neutral-400">Build the Backbone of Your Business.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[700px] mb-10 leading-relaxed font-normal">
            Custom software systems designed for reliability, high-concurrency performance, and long-term enterprise growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/company/contact"
              className="px-7 py-3.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>Discuss Your System</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#case-study"
              className="px-7 py-3.5 rounded-full bg-neutral-100 text-apple-ink font-semibold text-sm hover:bg-neutral-200 transition-all"
            >
              View Case Studies
            </a>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              The Problem
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              Why off-the-shelf software holds you back.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-black/[0.06] flex flex-col justify-between gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-apple-ink mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Our Methodology
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              A 4-step framework for system resilience.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:border-black/20 transition-all"
              >
                <span className="text-4xl font-bold text-neutral-200 group-hover:text-black transition-colors font-mono">
                  {step.num}
                </span>
                <h4 className="text-lg font-semibold text-apple-ink">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Capabilities
            </h2>
            <h3 className="text-2xl sm:text-4xl font-semibold text-apple-ink tracking-tight">
              End-to-end system engineering capabilities.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-50/70 border border-black/[0.06] hover:bg-white hover:shadow-md transition-all flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-apple-ink">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Zeno Unified System Platform Section */}
        <ZenoShowcaseSection />

        {/* Case Study Teaser */}
        <section id="case-study" className="max-w-[1240px] mx-auto py-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="max-w-[600px] z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 block">
                Featured Case Study
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
                High-Concurrency Compliance & Data Engine
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Refactored legacy data processing pipeline into a decoupled microservice architecture running on AWS ECS and PostgreSQL.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full lg:w-auto z-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">40%</div>
                <div className="text-[11px] text-neutral-400">Faster Queries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
                <div className="text-[11px] text-neutral-400">Production Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">3×</div>
                <div className="text-[11px] text-neutral-400">Throughput</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
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
