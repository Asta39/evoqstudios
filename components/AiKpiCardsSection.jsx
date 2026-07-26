"use client";

import React from "react";
import { Sparkles, Bot, Database, Workflow, ArrowUpRight } from "lucide-react";

const kpiData = [
  {
    name: "Customer Support Agent",
    stat: "98.4%",
    unit: "resolution",
    metricLabel: "Intent Distribution",
    detailLabel: "Avg Latency",
    icon: Bot,
    activities: [
      { type: "Product Guidance", share: "42.5%", detail: "<120ms" },
      { type: "Billing & Accounts", share: "30.2%", detail: "120-180ms" },
      { type: "Technical Setup", share: "18.8%", detail: "180-240ms" },
      { type: "Human Escalation", share: "8.5%", detail: "Fallback" },
    ],
  },
  {
    name: "RAG Vector Search Engine",
    stat: "99.2%",
    unit: "precision",
    metricLabel: "Query Category",
    detailLabel: "Response Time",
    icon: Database,
    activities: [
      { type: "Documentation Search", share: "45.0%", detail: "<45ms" },
      { type: "Contract & PDF Parse", share: "28.6%", detail: "45-85ms" },
      { type: "Catalog Ingestion", share: "16.4%", detail: "85-120ms" },
      { type: "Semantic Reranking", share: "10.0%", detail: "120-160ms" },
    ],
  },
  {
    name: "Workflow Automation Pipeline",
    stat: "14.2K",
    unit: "tasks / mo",
    metricLabel: "Trigger Share",
    detailLabel: "Time Saved",
    icon: Workflow,
    activities: [
      { type: "CRM Webhook Routing", share: "40.1%", detail: "85 hrs/mo" },
      { type: "Email Data Extraction", share: "32.4%", detail: "62 hrs/mo" },
      { type: "Invoice & Sync Jobs", share: "18.5%", detail: "44 hrs/mo" },
      { type: "Ops Slack Alerts", share: "9.0%", detail: "18 hrs/mo" },
    ],
  },
];

export function AiKpiCardsSection() {
  return (
    <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06] font-sans">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-600 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Live Telemetry • AI Agent Performance</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold text-apple-ink tracking-tight mb-2">
          Production KPI & Accuracy Metrics
        </h3>
        <p className="text-sm text-neutral-600 max-w-[720px] leading-relaxed font-normal">
          Real-time execution telemetry across autonomous support agents, RAG vector retrieval pipelines, and automated business workflows.
        </p>
      </div>

      {/* Light Mode KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiData.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{card.name}</span>
                  </div>
                </div>

                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-4xl font-bold text-neutral-900 tracking-tight">
                    {card.stat}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">
                    {card.unit}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  <span>{card.metricLabel}</span>
                  <span>{card.detailLabel}</span>
                </div>

                <ul role="list" className="space-y-2">
                  {card.activities.map((act, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 border border-neutral-100 text-xs hover:bg-neutral-100/70 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="inline-flex px-2.5 py-1 rounded-md bg-purple-600 text-white font-mono font-bold text-[11px]">
                          {act.share}
                        </span>
                        <span className="font-semibold text-neutral-800 truncate">
                          {act.type}
                        </span>
                      </div>
                      <span className="font-mono text-neutral-500 shrink-0 font-medium pl-2">
                        {act.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
