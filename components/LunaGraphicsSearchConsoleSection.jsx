"use client";

import React, { useState } from "react";
import { TrendingUp, MousePointer, Eye, Percent, Award, ArrowUpRight, Search } from "lucide-react";

const searchConsoleData = [
  { date: "Jan 2026", clicks: 2100, impressions: 28000, ctr: "7.5%", pos: 8.4 },
  { date: "Feb 2026", clicks: 3400, impressions: 42000, ctr: "8.1%", pos: 6.2 },
  { date: "Mar 2026", clicks: 5200, impressions: 64000, ctr: "8.1%", pos: 4.8 },
  { date: "Apr 2026", clicks: 7800, impressions: 98000, ctr: "8.0%", pos: 3.9 },
  { date: "May 2026", clicks: 9400, impressions: 118000, ctr: "8.0%", pos: 3.4 },
  { date: "Jun 2026", clicks: 10100, impressions: 132000, ctr: "7.7%", pos: 3.1 },
  { date: "Jul 2026", clicks: 10200, impressions: 138400, ctr: "7.4%", pos: 3.0 },
];

const summaryMetrics = [
  { title: "Total Organic Clicks", value: "48,200", change: "+312%", icon: MousePointer, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Total Search Impressions", value: "620,400", change: "+480%", icon: Eye, color: "text-cyan-600", bg: "bg-cyan-50" },
  { title: "Average CTR", value: "7.8%", change: "+2.4%", icon: Percent, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Average Rank Position", value: "3.2", change: "Top 3", icon: Award, color: "text-purple-600", bg: "bg-purple-50" },
];

export function LunaGraphicsSearchConsoleSection() {
  const [activeIdx, setActiveIdx] = useState(6); // Default to July 2026

  // SVG Area Paths for Clicks & Impressions
  const maxClicks = 12000;
  const chartHeight = 200;
  const width = 600;
  const step = width / (searchConsoleData.length - 1);

  const points = searchConsoleData.map((d, i) => {
    const x = i * step;
    const y = chartHeight - (d.clicks / maxClicks) * chartHeight;
    return `${x},${y}`;
  });

  const pathD = `M 0,${chartHeight} L ${points.join(" L ")} L ${width},${chartHeight} Z`;
  const strokePath = `M ${points.join(" L ")}`;

  return (
    <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 mb-3">
            <Search className="w-3.5 h-3.5" />
            <span>Search Performance Audit • Luna Graphics</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-apple-ink tracking-tight mb-2">
            Google Search Console Organic Growth
          </h3>
          <p className="text-sm text-neutral-600 max-w-[680px] leading-relaxed font-normal">
            Real organic search index telemetry for <strong>Luna Graphics</strong> (printshop) following Evoq Studio's Next.js rebuild and Core Web Vitals optimization.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-500/20 w-fit">
          <TrendingUp className="w-4 h-4" />
          <span>+312% Organic Traffic Surge</span>
        </div>
      </div>

      {/* Main Card Container */}
      <div className="p-6 sm:p-10 rounded-3xl bg-neutral-950 text-white border border-white/10 shadow-2xl flex flex-col gap-8">
        
        {/* Top Summary Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryMetrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">{m.title}</span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    {m.change}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {m.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Search Console Area Chart */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-semibold text-white">
                Total Organic Clicks Over Time (2026)
              </h4>
              <p className="text-xs text-neutral-400">
                Monthly performance breakdown from Google Search Console index logs
              </p>
            </div>

            {/* Active Data Point Inspector Badge */}
            <div className="px-3.5 py-1.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono flex items-center gap-3">
              <span>{searchConsoleData[activeIdx].date}:</span>
              <span className="font-bold text-white">{searchConsoleData[activeIdx].clicks.toLocaleString()} clicks</span>
              <span className="text-neutral-400">({searchConsoleData[activeIdx].impressions.toLocaleString()} imp)</span>
            </div>
          </div>

          {/* Chart Graphic */}
          <div className="relative w-full h-[220px] flex items-end pt-4">
            <svg
              viewBox="0 0 600 200"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="searchConsoleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area Fill */}
              <path d={pathD} fill="url(#searchConsoleGradient)" />

              {/* Line Stroke */}
              <path d={strokePath} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />

              {/* Data Points */}
              {searchConsoleData.map((d, i) => {
                const x = i * step;
                const y = chartHeight - (d.clicks / maxClicks) * chartHeight;
                return (
                  <g key={i} className="cursor-pointer" onClick={() => setActiveIdx(i)} onMouseEnter={() => setActiveIdx(i)}>
                    <circle
                      cx={x}
                      cy={y}
                      r={activeIdx === i ? "6" : "4"}
                      className={`transition-all ${
                        activeIdx === i ? "fill-white stroke-blue-500 stroke-[3]" : "fill-blue-500"
                      }`}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Month Labels Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-white/5">
            {searchConsoleData.map((d, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`transition-colors ${
                  activeIdx === i ? "text-white font-bold underline underline-offset-4" : "hover:text-neutral-200"
                }`}
              >
                {d.date.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Executive Takeaway */}
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200 leading-relaxed flex items-center justify-between gap-4">
          <span>
            <strong>Result:</strong> Following the Next.js headless migration for Luna Graphics, average ranking position moved from page 2 (#8.4) into the top 3 spots (#3.2), increasing monthly organic inquiries by 4x.
          </span>
          <a
            href="/company/contact"
            className="px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold shrink-0 hover:bg-neutral-200 transition-colors"
          >
            Audit Your Site
          </a>
        </div>
      </div>
    </section>
  );
}
