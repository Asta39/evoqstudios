"use client";

import { Server } from "lucide-react";
import { ZenoShowcaseSection } from "../../../components/ZenoShowcaseSection";
import { ServicePageShell } from "../../../components/ServicePageShell";
import { ServiceHero } from "../../../components/ServiceHero";
import { FaqAccordion } from "../../../components/FaqAccordion";

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
    title: "API Design & Development",
    desc: "RESTful and GraphQL APIs engineered for high-frequency throughput and deterministic security.",
  },
  {
    title: "Microservices Architecture",
    desc: "Decoupled domain services that deploy independently and scale horizontally under load spikes.",
  },
  {
    title: "Database Design & Optimization",
    desc: "Schema normalization, indexing strategies, partition management, and failover replication.",
  },
  {
    title: "Cloud Infrastructure & IaC",
    desc: "AWS, GCP, and Vercel deployments orchestrated via Terraform and automated GitHub Actions.",
  },
  {
    title: "Legacy Modernization",
    desc: "Refactor and migrate aging monoliths to modern serverless or containerized stacks with zero downtime.",
  },
  {
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
  return (
    <ServicePageShell>
      <ServiceHero
          badge={{ icon: Server, label: "Systems Engineering", className: "bg-black/5 border border-black/5 text-apple-ink", iconClassName: "text-apple-blue" }}
          title={
            <>
              Systems That Scale. <br />
              <span className="text-apple-ink">Build the Backbone of Your Business.</span>
            </>
          }
          description="Custom software systems designed for reliability, high-concurrency performance, and long-term enterprise growth."
          primaryCta={{ href: "/company/contact", label: "Discuss Your System" }}
          secondaryCta={{ href: "#case-study", label: "View Case Studies" }}
          titleMaxWidth="900px"
        />

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

          <div>
            {problemPoints.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 border-t border-black/[0.06] last:border-b"
              >
                <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
                  <span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-lg font-semibold text-apple-ink">
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

          <div>
            {approachSteps.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 border-t border-black/[0.06] last:border-b"
              >
                <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
                  <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                    {step.num}
                  </span>
                  <h4 className="text-lg font-semibold text-apple-ink">
                    {step.title}
                  </h4>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
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

          <div>
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 border-t border-black/[0.06] last:border-b"
              >
                <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
                  <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-base font-semibold text-apple-ink">
                    {cap.title}
                  </h4>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
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

      <FaqAccordion faqs={faqs} />
    </ServicePageShell>
  );
}
