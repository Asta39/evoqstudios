"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Database,
  Zap,
  ShieldCheck,
  Server,
  CheckCircle2,
  Lock,
  Layers,
} from "lucide-react";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const postgresFeatures = [
  "ACID compliance for mission-critical relational data & transactions",
  "Advanced querying with JSONB, full-text search, and window functions",
  "Row-level security (RLS) and multi-tenant schema isolation",
  "Managed options: Supabase, AWS RDS, Google Cloud SQL, Neon",
];

const redisFeatures = [
  "High-frequency session storage and auth token revocation blacklists",
  "API rate limiting and request throttling middleware",
  "Background job queue coordination (BullMQ, Celery, RQ)",
  "Pub/sub for real-time notifications and WebSocket coordination",
];

const dataArchitecture = [
  "Single source of truth in PostgreSQL; Redis acts as high-speed caching layer",
  "Event sourcing patterns for audit trails and system replayability",
  "Database schema migrations versioned and regression-tested in CI pipelines",
  "Automated backup strategies with point-in-time recovery (PITR)",
];

export default function PostgresqlRedisPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <Database className="w-3.5 h-3.5 text-blue-600" />
            <span>Stack • PostgreSQL & Redis</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[920px] mb-6">
            Data Done Right. <br />
            <span className="text-neutral-400">Persistent & Lightning-Fast.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[720px] mb-10 leading-relaxed font-normal">
            Reliable relational data storage with PostgreSQL. Sub-millisecond caching and session state with Redis.
          </p>
        </section>

        {/* Postgres & Redis Cards */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PostgreSQL */}
            <div className="p-8 rounded-3xl bg-neutral-50 border border-black/[0.08] flex flex-col justify-between gap-6">
              <div>
                <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-wider block mb-2">
                  Relational Core
                </span>
                <h3 className="text-2xl font-bold text-apple-ink mb-4">
                  PostgreSQL Engine
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  Why it is our primary default database for transactional integrity, complex relational joins, and JSON document storage.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-black/[0.06]">
                {postgresFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Redis */}
            <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col justify-between gap-6">
              <div>
                <span className="text-xs font-bold font-mono text-rose-400 uppercase tracking-wider block mb-2">
                  In-Memory Cache & Queues
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Redis Key-Value Store
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  How we use Redis beyond basic caching: rate limiting, async job queues, real-time counters, and WebSocket coordination.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
                {redisFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Architecture Principles */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <h3 className="text-2xl sm:text-3xl font-semibold text-apple-ink tracking-tight mb-8 text-center">
            Data Architecture Commitments
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dataArchitecture.map((da, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-black text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                  {da}
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
