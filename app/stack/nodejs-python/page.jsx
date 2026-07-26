"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  Workflow,
  Zap,
  CheckCircle2,
  Terminal as TerminalIcon,
  Database,
  Layers,
} from "lucide-react";
import { InteractiveTerminal } from "../../../components/ui/interactive-terminal";

const Header = dynamic(() => import("../../../components/Header"), { ssr: false });
const CinematicFooter = dynamic(
  () => import("../../../components/ui/motion-footer").then((mod) => mod.CinematicFooter),
  { ssr: false }
);

const backendLogs = [
  { type: "cmd", text: "node dist/server.js" },
  { type: "info", text: "[Node.js Express] API Gateway listening on port 4000" },
  { type: "cmd", text: "python3 -m uvicorn ml_service:app --port 8000 --workers 4" },
  { type: "info", text: "[FastAPI Worker] PyTorch GPU acceleration pipeline initialized" },
  { type: "success", text: "✔ Executed ML document extraction job #8492 in 34ms" },
  { type: "info", text: "[Redis Queue] Pub/Sub broadcast event delivered to 1,200 active sockets" },
];

const backendCode = `# ml_service.py - FastAPI Machine Learning Inference Engine
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel

app = FastAPI(title="Evoq Async ML Worker")

class ExtractionRequest(BaseModel):
    document_id: str
    raw_text: str

@app.post("/api/v1/analyze")
async function analyze_document(req: ExtractionRequest, bg_tasks: BackgroundTasks):
    entities = await run_bert_entity_pipeline(req.raw_text)
    bg_tasks.add_task(dispatch_webhook_callback, req.document_id, entities)
    return {"status": "success", "entities": len(entities), "latency_ms": 34}`;

const nodejsUseCases = [
  "Real-time applications (WebSockets, live data streaming, active chat)",
  "API layers that mirror frontend TypeScript definitions via tRPC / GraphQL",
  "Serverless and edge functions on Vercel Edge and AWS Lambda",
  "Tools: Express, Fastify, NestJS, Prisma, Drizzle ORM",
];

const pythonUseCases = [
  "AI/ML workloads, LLM agent orchestration, and RAG vector search pipelines",
  "Data processing, ETL pipelines, and high-frequency automation scripts",
  "Scientific computing and complex mathematical algorithm execution",
  "Tools: FastAPI, Django, Celery, SQLAlchemy, Pydantic, LangChain",
];

const integrationPatterns = [
  "Node.js handles high-speed user-facing APIs and real-time WebSocket sessions",
  "Python microservices execute heavy ML inference and async background jobs",
  "Redis & RabbitMQ message queues coordinate events between services",
  "Shared PostgreSQL database with service-specific schema isolation",
];

export default function NodejsPythonPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0c] selection:bg-apple-blue selection:text-white overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-white rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border-b border-black/5 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        <Header />

        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto pt-8 pb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-semibold text-apple-ink mb-6">
            <Server className="w-3.5 h-3.5 text-emerald-500" />
            <span>Stack • Node.js & Python</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight leading-[1.08] max-w-[920px] mb-6">
            Backend Power. <br />
            <span className="text-neutral-400">The Engine Room of Modern Apps.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-[720px] mb-10 leading-relaxed font-normal">
            Scalable backends built with Node.js and Python — chosen for the right job, not out of habit.
          </p>
        </section>

        {/* Live Terminal Section */}
        <section className="max-w-[1240px] mx-auto py-12 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Interactive Terminal */}
            <div className="lg:col-span-7">
              <InteractiveTerminal
                title="Node.js API Gateway & FastAPI Microservice Pipeline"
                logs={backendLogs}
                codeSnippet={backendCode}
              />
            </div>

            {/* Right Column: Explanatory Text */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 w-fit">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>Polyglot Backend Pipeline</span>
              </div>

              <h2 className="text-3xl font-bold text-apple-ink tracking-tight">
                High-Speed I/O Combined with Deep ML Inference
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                By delegating real-time client requests to Node.js and heavy AI compute to asynchronous Python worker pools, we achieve high-speed throughput without blocking the event loop.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Node.js handles non-blocking client connections & WebSockets</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Python FastAPI runs GPU-accelerated tensor calculations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Node.js vs Python Stack Cards */}
        <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Node.js */}
            <div className="p-8 rounded-3xl bg-neutral-50 border border-black/[0.08] flex flex-col justify-between gap-6">
              <div>
                <span className="text-xs font-bold font-mono text-emerald-600 uppercase tracking-wider block mb-2">
                  High-Velocity I/O
                </span>
                <h3 className="text-2xl font-bold text-apple-ink mb-4">
                  Node.js Ecosystem
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  Ideal for asynchronous I/O, event-driven web servers, and end-to-end type-safe TypeScript backends.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-black/[0.06]">
                {nodejsUseCases.map((uc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Python */}
            <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col justify-between gap-6">
              <div>
                <span className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                  AI & Data Science Engine
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Python Ecosystem
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  The gold standard for AI/ML inference, data processing pipelines, complex mathematical algorithms, and FastAPI endpoints.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
                {pythonUseCases.map((uc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </div>
  );
}
