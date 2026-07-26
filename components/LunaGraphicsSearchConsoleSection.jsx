"use client";

import React, { useState } from "react";
import { CheckSquare, Square, HelpCircle, ChevronDown, Filter } from "lucide-react";

const gscTimeSeries = [
  { date: "4/24/26", clicks: 2, impressions: 120, ctr: 1.6, pos: 14.2 },
  { date: "4/30/26", clicks: 3, impressions: 180, ctr: 1.7, pos: 12.8 },
  { date: "5/6/26", clicks: 12, impressions: 420, ctr: 2.8, pos: 10.4 },
  { date: "5/12/26", clicks: 14, impressions: 580, ctr: 2.4, pos: 9.1 },
  { date: "5/18/26", clicks: 24, impressions: 920, ctr: 2.6, pos: 8.5 },
  { date: "5/24/26", clicks: 8, impressions: 340, ctr: 2.3, pos: 11.2 },
  { date: "5/30/26", clicks: 34, impressions: 1420, ctr: 2.4, pos: 6.8 },
  { date: "6/5/26", clicks: 2, impressions: 110, ctr: 1.8, pos: 13.5 },
  { date: "6/11/26", clicks: 4, impressions: 210, ctr: 1.9, pos: 12.0 },
  { date: "6/17/26", clicks: 10, impressions: 480, ctr: 2.1, pos: 9.8 },
  { date: "6/23/26", clicks: 16, impressions: 640, ctr: 2.5, pos: 8.2 },
  { date: "6/29/26", clicks: 18, impressions: 720, ctr: 2.5, pos: 7.9 },
  { date: "7/5/26", clicks: 42, impressions: 1850, ctr: 2.3, pos: 5.4 },
  { date: "7/11/26", clicks: 28, impressions: 1240, ctr: 2.2, pos: 6.1 },
  { date: "7/17/26", clicks: 48, impressions: 2820, ctr: 1.7, pos: 8.9 },
];

const topQueries = [
  { query: "luna graphics", clicks: 14, impressions: 185, ctr: "7.6%", position: 1.8 },
  { query: "luna graphics nairobi", clicks: 10, impressions: 112, ctr: "8.9%", position: 1.2 },
  { query: "custom print shop ke", clicks: 8, impressions: 145, ctr: "5.5%", position: 2.4 },
  { query: "event branding printing", clicks: 6, impressions: 98, ctr: "6.1%", position: 3.1 },
  { query: "large format printing nairobi", clicks: 4, impressions: 84, ctr: "4.8%", position: 2.9 },
];

const topPages = [
  { page: "https://lunagraphics.co.ke/", clicks: 28, impressions: 1420, ctr: "2.0%", position: 2.1 },
  { page: "https://lunagraphics.co.ke/services/branding", clicks: 12, impressions: 680, ctr: "1.8%", position: 3.4 },
  { page: "https://lunagraphics.co.ke/portfolio", clicks: 8, impressions: 410, ctr: "1.9%", position: 4.2 },
];

export function LunaGraphicsSearchConsoleSection() {
  const [checkedMetrics, setCheckedMetrics] = useState({
    clicks: true,
    impressions: true,
    ctr: true,
    position: true,
  });

  const [activeTab, setActiveTab] = useState("QUERIES");
  const [timeframe, setTimeframe] = useState("Daily");

  const toggleMetric = (key) => {
    setCheckedMetrics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Helper to normalize data points for SVG plotting
  const chartWidth = 800;
  const chartHeight = 220;
  const numPoints = gscTimeSeries.length;
  const step = chartWidth / (numPoints - 1);

  const getPath = (key, maxVal, invert = false) => {
    const points = gscTimeSeries.map((d, i) => {
      const x = i * step;
      let norm = d[key] / maxVal;
      if (invert) norm = 1 - Math.min(d[key] / 20, 1);
      const y = chartHeight - norm * (chartHeight - 30) - 15;
      return `${x},${y}`;
    });
    return `M ${points.join(" L ")}`;
  };

  const clicksPath = getPath("clicks", 55);
  const impressionsPath = getPath("impressions", 3000);
  const ctrPath = getPath("ctr", 3.5);
  const positionPath = getPath("pos", 20, true);

  return (
    <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06] font-sans">
      <div className="mb-10">
        <h3 className="text-2xl sm:text-4xl font-bold text-apple-ink tracking-tight mb-2">
          Search Engine Performance (Luna Graphics)
        </h3>
        <p className="text-sm text-neutral-600 max-w-[720px] leading-relaxed font-normal">
          Live Google Search Console index telemetry following Luna Graphics' site redesign. Click any card below to toggle individual performance lines on the chart.
        </p>
      </div>

      {/* Light Mode GSC Dashboard Box */}
      <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden text-neutral-800">
        
        {/* Metric Selection Header Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-b border-neutral-200">
          
          {/* Total Clicks Card */}
          <button
            onClick={() => toggleMetric("clicks")}
            className={`p-4 sm:p-5 text-left transition-all border-r border-neutral-200 relative select-none ${
              checkedMetrics.clicks
                ? "bg-[#1a73e8] text-white"
                : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <div className="flex items-center gap-2">
                {checkedMetrics.clicks ? (
                  <CheckSquare className="w-4 h-4 text-white shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-neutral-400 shrink-0" />
                )}
                <span>Total clicks</span>
              </div>
              <HelpCircle className={`w-3.5 h-3.5 ${checkedMetrics.clicks ? "text-white/70" : "text-neutral-400"}`} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight">34</div>
          </button>

          {/* Total Impressions Card */}
          <button
            onClick={() => toggleMetric("impressions")}
            className={`p-4 sm:p-5 text-left transition-all border-r border-neutral-200 relative select-none ${
              checkedMetrics.impressions
                ? "bg-[#673ab7] text-white"
                : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <div className="flex items-center gap-2">
                {checkedMetrics.impressions ? (
                  <CheckSquare className="w-4 h-4 text-white shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-neutral-400 shrink-0" />
                )}
                <span>Total impressions</span>
              </div>
              <HelpCircle className={`w-3.5 h-3.5 ${checkedMetrics.impressions ? "text-white/70" : "text-neutral-400"}`} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight">2.82K</div>
          </button>

          {/* Average CTR Card */}
          <button
            onClick={() => toggleMetric("ctr")}
            className={`p-4 sm:p-5 text-left transition-all border-r border-neutral-200 relative select-none ${
              checkedMetrics.ctr
                ? "bg-[#00897b] text-white"
                : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <div className="flex items-center gap-2">
                {checkedMetrics.ctr ? (
                  <CheckSquare className="w-4 h-4 text-white shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-neutral-400 shrink-0" />
                )}
                <span>Average CTR</span>
              </div>
              <HelpCircle className={`w-3.5 h-3.5 ${checkedMetrics.ctr ? "text-white/70" : "text-neutral-400"}`} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight">1.2%</div>
          </button>

          {/* Average Position Card */}
          <button
            onClick={() => toggleMetric("position")}
            className={`p-4 sm:p-5 text-left transition-all relative select-none ${
              checkedMetrics.position
                ? "bg-[#e65100] text-white"
                : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <div className="flex items-center gap-2">
                {checkedMetrics.position ? (
                  <CheckSquare className="w-4 h-4 text-white shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-neutral-400 shrink-0" />
                )}
                <span>Average position</span>
              </div>
              <HelpCircle className={`w-3.5 h-3.5 ${checkedMetrics.position ? "text-white/70" : "text-neutral-400"}`} />
            </div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight">8.9</div>
          </button>

        </div>

        {/* Timeframe Selector Dropdown */}
        <div className="px-6 pt-4 flex justify-end">
          <button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-medium text-neutral-700 flex items-center gap-2 hover:bg-neutral-50 transition-colors">
            <span>{timeframe}</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
          </button>
        </div>

        {/* Multi-Line Chart Canvas */}
        <div className="px-6 py-4">
          <div className="relative w-full h-[220px]">
            <svg
              viewBox="0 0 800 220"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              {/* Background Grid Horizontal Lines */}
              <line x1="0" y1="40" x2="800" y2="40" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="90" x2="800" y2="90" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="140" x2="800" y2="140" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="190" x2="800" y2="190" stroke="#f0f0f0" strokeWidth="1" />

              {/* Total Impressions (Purple Line) */}
              {checkedMetrics.impressions && (
                <path
                  d={impressionsPath}
                  fill="none"
                  stroke="#7c4dff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Average Position (Orange Line) */}
              {checkedMetrics.position && (
                <path
                  d={positionPath}
                  fill="none"
                  stroke="#e65100"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Average CTR (Teal Line) */}
              {checkedMetrics.ctr && (
                <path
                  d={ctrPath}
                  fill="none"
                  stroke="#00897b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Total Clicks (Blue Line) */}
              {checkedMetrics.clicks && (
                <path
                  d={clicksPath}
                  fill="none"
                  stroke="#1a73e8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </div>

          {/* Date Axis */}
          <div className="flex items-center justify-between text-[11px] font-sans text-neutral-500 pt-3 border-t border-neutral-100">
            {gscTimeSeries.filter((_, idx) => idx % 2 === 0).map((item, i) => (
              <span key={i}>{item.date}</span>
            ))}
          </div>
        </div>

        {/* Tabbed Data Table */}
        <div className="mt-4 border-t border-neutral-200">
          
          {/* Navigation Tabs */}
          <div className="flex items-center gap-6 px-6 overflow-x-auto border-b border-neutral-200 scrollbar-none text-xs font-semibold text-neutral-500 uppercase tracking-wider select-none">
            {["QUERIES", "PAGES", "COUNTRIES", "DEVICES", "SEARCH APPEARANCE", "DAYS"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 transition-colors relative whitespace-nowrap ${
                  activeTab === tab ? "text-neutral-900 font-bold" : "hover:text-neutral-700"
                }`}
              >
                <span>{tab}</span>
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-800 rounded-t-sm" />
                )}
              </button>
            ))}
          </div>

          {/* Filter Bar */}
          <div className="px-6 py-3 bg-neutral-50/50 flex justify-end border-b border-neutral-200">
            <button className="p-1.5 rounded-md hover:bg-neutral-200 text-neutral-600 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>

          {/* Table Content */}
          <div className="p-6">
            {activeTab === "QUERIES" && (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-neutral-500 border-b border-neutral-200 font-semibold">
                      <th className="pb-3 font-normal">Top queries</th>
                      <th className="pb-3 text-right text-[#1a73e8]">↓ Clicks</th>
                      <th className="pb-3 text-right text-[#7c4dff]">Impressions</th>
                      <th className="pb-3 text-right text-[#00897b]">CTR</th>
                      <th className="pb-3 text-right text-[#e65100]">Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {topQueries.map((row, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                        <td className="py-3 font-medium text-neutral-800">{row.query}</td>
                        <td className="py-3 text-right font-medium text-[#1a73e8]">{row.clicks}</td>
                        <td className="py-3 text-right font-medium text-[#7c4dff]">{row.impressions}</td>
                        <td className="py-3 text-right font-medium text-[#00897b]">{row.ctr}</td>
                        <td className="py-3 text-right font-medium text-[#e65100]">{row.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "PAGES" && (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-neutral-500 border-b border-neutral-200 font-semibold">
                      <th className="pb-3 font-normal">Top pages</th>
                      <th className="pb-3 text-right text-[#1a73e8]">↓ Clicks</th>
                      <th className="pb-3 text-right text-[#7c4dff]">Impressions</th>
                      <th className="pb-3 text-right text-[#00897b]">CTR</th>
                      <th className="pb-3 text-right text-[#e65100]">Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {topPages.map((row, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                        <td className="py-3 font-medium text-neutral-800 truncate max-w-[280px]">{row.page}</td>
                        <td className="py-3 text-right font-medium text-[#1a73e8]">{row.clicks}</td>
                        <td className="py-3 text-right font-medium text-[#7c4dff]">{row.impressions}</td>
                        <td className="py-3 text-right font-medium text-[#00897b]">{row.ctr}</td>
                        <td className="py-3 text-right font-medium text-[#e65100]">{row.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab !== "QUERIES" && activeTab !== "PAGES" && (
              <div className="py-8 text-center text-xs text-neutral-500">
                Filtered view for {activeTab} (Luna Graphics Index Data)
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
