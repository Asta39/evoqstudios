"use client";

import { BentoCard, BentoGrid } from "./ui/bento-grid";
import {
  CodeIcon,
  BrowserIcon,
  AiCloud01Icon,
  PaintBoardIcon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

/* ─── Visual backgrounds for each card ──────────────────────────────────── */

function SystemsBg() {
  return (
    <div className="absolute inset-0 bg-[#f5f5f7] flex items-start justify-end p-6 overflow-hidden">
      {/* Faint code lines */}
      <div className="w-full absolute top-4 left-6 space-y-2 opacity-[0.18] font-mono text-[11px] text-[#1d1d1f] leading-5 select-none pointer-events-none">
        {[
          "const pipeline = createSystem({",
          '  db: postgres("primary"),',
          "  queue: bullmq.connect(),",
          "  cache: redis.cluster(),",
          "  auth: oauth2.provider(),",
          "});",
          "",
          "await pipeline.deploy({ env: 'prod' })",
        ].map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      {/* Glowing dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1d1d1f 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}

function WebBg() {
  return (
    <div className="absolute inset-0 bg-[#f9f9fb] overflow-hidden flex items-center justify-center">
      {/* Minimal browser chrome */}
      <div className="w-[88%] h-[72%] rounded-xl border border-black/[0.07] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/[0.04] bg-[#f5f5f7]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-3 h-4 bg-white rounded-md border border-black/[0.05]" />
        </div>
        {/* Page skeleton */}
        <div className="p-3 space-y-2">
          <div className="h-3 w-1/2 bg-neutral-100 rounded" />
          <div className="h-2 w-full bg-neutral-100 rounded" />
          <div className="h-2 w-4/5 bg-neutral-100 rounded" />
          <div className="mt-3 h-16 w-full bg-neutral-50 rounded-lg border border-black/[0.04]" />
          <div className="flex gap-2 mt-2">
            <div className="h-6 w-16 bg-neutral-900 rounded-full" />
            <div className="h-6 w-16 bg-neutral-100 rounded-full border border-black/[0.05]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AiBg() {
  const nodes = [
    { x: 50, y: 20 },
    { x: 18, y: 50 },
    { x: 50, y: 50 },
    { x: 82, y: 50 },
    { x: 34, y: 78 },
    { x: 66, y: 78 },
  ];
  const edges = [
    { a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 },
    { a: 2, b: 4 }, { a: 2, b: 5 },
  ];
  return (
    <div className="absolute inset-0 bg-[#0a0a0b] overflow-hidden flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-[90%] h-[80%] opacity-80"
        preserveAspectRatio="xMidYMid meet"
      >
        {edges.map((edge, i) => (
          <line
            key={i}
            x1={nodes[edge.a].x} y1={nodes[edge.a].y}
            x2={nodes[edge.b].x} y2={nodes[edge.b].y}
            stroke="#ffffff"
            strokeOpacity="0.15"
            strokeWidth="0.6"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="3.2" fill="#1a1a1a" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="0.5" />
            <circle cx={n.x} cy={n.y} r="1.2" fill="#ffffff" fillOpacity="0.7" />
          </g>
        ))}
      </svg>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}

function RebrandBg() {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      {/* Before / After split */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-[#f2f2f2] flex items-center justify-center">
          <div className="space-y-1.5 w-16 opacity-40">
            <div className="h-1.5 w-full bg-neutral-400 rounded" />
            <div className="h-1.5 w-3/4 bg-neutral-400 rounded" />
            <div className="h-5 w-8 bg-neutral-400 rounded-sm mt-3" />
          </div>
        </div>
        <div className="w-px bg-black/10" />
        <div className="flex-1 bg-[#f9f9fb] flex items-center justify-center">
          <div className="space-y-1.5 w-16">
            <div className="h-1.5 w-full bg-[#1d1d1f] rounded" />
            <div className="h-1.5 w-3/4 bg-[#1d1d1f] rounded" />
            <div className="h-5 w-8 bg-[#1d1d1f] rounded-full mt-3" />
          </div>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute top-3 left-0 right-0 flex justify-around pointer-events-none">
        <span className="text-[9px] font-medium text-neutral-400 tracking-widest uppercase">Before</span>
        <span className="text-[9px] font-medium text-neutral-800 tracking-widest uppercase">After</span>
      </div>
    </div>
  );
}

function IntegrationBg() {
  const tools = ["Stripe", "Notion", "Slack", "Shopify", "HubSpot", "Airtable", "Vercel", "Supabase"];
  return (
    <div className="absolute inset-0 bg-[#f5f5f7] overflow-hidden flex flex-wrap items-start content-start gap-2 p-5 pt-4">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="text-[11px] font-medium text-[#1d1d1f]/60 bg-white border border-black/[0.07] rounded-full px-2.5 py-1 shadow-sm"
        >
          {tool}
        </div>
      ))}
      {/* Connector lines suggestion */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #f5f5f7, transparent)",
        }}
      />
    </div>
  );
}

/* ─── Card definitions ───────────────────────────────────────────────────── */

const features = [
  {
    Icon: (props) => <HugeiconsIcon icon={CodeIcon} {...props} />,
    name: "Custom Systems, End to End",
    description:
      "Backends, pipelines, and internal tools built to handle the complexity your off-the-shelf software can't.",
    background: <SystemsBg />,
    cta: "See our work",
    href: "#services",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    Icon: (props) => <HugeiconsIcon icon={BrowserIcon} {...props} />,
    name: "Web Presence That Converts",
    description:
      "Websites and web apps engineered for performance, built to feel premium on every device.",
    background: <WebBg />,
    cta: "View projects",
    href: "#services",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: (props) => <HugeiconsIcon icon={AiCloud01Icon} {...props} />,
    name: "AI Systems That Actually Work",
    description:
      "From LLM integrations to autonomous agents — we build AI that slots into your workflow and stays reliable.",
    background: <AiBg />,
    cta: "Explore AI",
    href: "#services",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: (props) => <HugeiconsIcon icon={PaintBoardIcon} {...props} />,
    name: "Brand & Digital Identity",
    description:
      "We audit, sharpen, and rebuild digital brands for companies that have outgrown their original look.",
    background: <RebrandBg />,
    cta: "See rebrands",
    href: "#services",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: (props) => <HugeiconsIcon icon={Settings01Icon} {...props} />,
    name: "Integrations & Migrations",
    description:
      "Connect your stack, move your data, and swap legacy tools — without downtime or data loss.",
    background: <IntegrationBg />,
    cta: "Talk to us",
    href: "#contact",
    className: "md:col-span-2 md:row-span-1",
  },
];

/* ─── Section ────────────────────────────────────────────────────────────── */

export default function Features() {
  return (
    <section
      id="services"
      className="bg-[#f5f5f7] py-24 px-4"
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-[13px] font-medium text-apple-blue uppercase tracking-widest mb-3">
            What We Build
          </p>
          <h2 className="text-[36px] sm:text-[44px] font-semibold text-[#1d1d1f] tracking-[-0.025em] leading-[1.1]">
            One studio. Every layer.
          </h2>
          <p className="mt-4 text-[17px] text-[#6e6e73] font-normal max-w-[560px] mx-auto leading-relaxed">
            From the database to the brand — we handle the parts that actually
            make a business work better.
          </p>
        </div>

        {/* Bento grid */}
        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
