"use client";

import React, { useState } from "react";
import { CheckCircle2, Activity } from "lucide-react";

const colorMapping = {
  Operational: 'bg-emerald-500',
  Downtime: 'bg-red-500',
  Maintenance: 'bg-amber-500',
  'Not measured': 'bg-neutral-400',
};

// Generate 90-day telemetry timeline starting May 1, 2026
function generateDatesFromMay2026(overrides = {}) {
  const list = [];
  const startDate = new Date(2026, 4, 1); // May 1, 2026

  for (let i = 0; i < 90; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);

    const formattedDate = d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const status = overrides[i] || "Operational";

    list.push({
      date: formattedDate,
      tooltip: status,
      color: colorMapping[status],
    });
  }
  return list;
}

const combinedDataComponents = generateDatesFromMay2026({
  17: "Maintenance",
  28: "Not measured",
  29: "Not measured",
  30: "Not measured",
  72: "Downtime",
  73: "Downtime",
});

const combinedDataBlocks = generateDatesFromMay2026({
  11: "Downtime",
  16: "Downtime",
  43: "Downtime",
  55: "Downtime",
  83: "Downtime",
  85: "Downtime",
});

function Block({ color, tooltip, date }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-1 h-8 px-[0.5px] group cursor-pointer"
    >
      <div className={`w-full h-full rounded-[2px] transition-opacity ${color} group-hover:opacity-60`} />

      {hovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-[11px] font-medium shadow-xl border border-white/10 whitespace-nowrap flex flex-col items-center gap-0.5 pointer-events-none">
          <span className="font-semibold text-emerald-400">{tooltip}</span>
          <span className="text-[10px] text-neutral-400 font-mono">{date}</span>
        </div>
      )}
    </div>
  );
}

function Tracker({ data }) {
  return (
    <div className="flex h-8 items-center w-full">
      {data.map((item, idx) => (
        <Block key={idx} {...item} />
      ))}
    </div>
  );
}

const zenoModules = [
  { title: "CRM Customer Pipeline API", uptime: "99.88%", data: combinedDataComponents },
  { title: "ERP & Inventory Sync Service", uptime: "98.92%", data: combinedDataBlocks },
  { title: "HR Payroll & Employee Hub", uptime: "100.00%", data: combinedDataComponents },
  { title: "Accounting Double-Entry Ledger", uptime: "99.94%", data: combinedDataBlocks },
];

export function ZenoShowcaseSection() {
  return (
    <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 mb-3">
          <Activity className="w-3.5 h-3.5" />
          <span>System Showcase • Zeno Platform</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-bold text-apple-ink tracking-tight mb-3">
          Zeno: Unified Enterprise Operating System
        </h3>
        <p className="text-sm text-neutral-600 max-w-[760px] leading-relaxed font-normal">
          Zeno is an example of an all-in-one business architecture built by Evoq Studio — consolidating CRM pipelines, ERP supply chains, HR payroll, and double-entry Accounting into a single high-availability microservice stack.
        </p>
      </div>

      {/* Uptime Header */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white border border-white/10 shadow-2xl flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-lg font-bold text-white">All Zeno Microservices Operational</h4>
              <p className="text-xs text-neutral-400 font-mono">Live cluster telemetry • 99.96% 90-day SLA</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Operational (May 2026 – Present)</span>
          </div>
        </div>

        {/* Modules Trackers List */}
        <div className="flex flex-col gap-8">
          {zenoModules.map((module, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-neutral-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{module.title}</span>
                </span>
                <span className="text-neutral-400 font-mono">{module.uptime} uptime</span>
              </div>

              <Tracker data={module.data} />

              <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono pt-1">
                <span>1 May, 2026</span>
                <span>Today (26 Jul, 2026)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
