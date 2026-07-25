"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CodeIcon, SparklesIcon } from "@hugeicons/core-free-icons";

const FeatureBento = () => {
  return (
    <section id="services" className="bg-white min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {/* Hero Card - Large */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-100 via-blue-600 to-blue-500 rounded-3xl p-10 text-white flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Now Taking Projects
              </div>
              <h3 className="text-5xl font-bold tracking-tight">
                Systems That
                <br />
                Scale With You
              </h3>
              <p className="max-w-md text-white/90 text-lg">
                We architect backends, APIs, and data pipelines built for the
                complexity your off-the-shelf tools can&apos;t handle.
              </p>
            </div>
          </div>

          {/* Stats Card 1 */}
          <div className="bg-gradient-to-br from-blue-300 to-blue-700 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group transition-all">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full blur-2xl transition-transform duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 text-white rounded-2xl bg-blue-600 backdrop-blur-sm flex items-center justify-center text-2xl mb-4">
                <HugeiconsIcon icon={CodeIcon} size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-4xl font-black text-white mb-2">120+</h4>
              <p className="text-neutral-100 font-medium">Systems Shipped</p>
            </div>
          </div>

          {/* Feature Card */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-neutral-200 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl font-bold transition-transform">
              <HugeiconsIcon icon={SparklesIcon} size={24} strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-[#1d1d1f]">
                AI That Works
              </h4>
              <p className="text-[#6e6e73]">
                LLM integrations, autonomous agents, and intelligent workflows
                that slot into your stack and stay reliable.
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-800 rounded-3xl p-8 text-white flex flex-col justify-between transition-all cursor-pointer group">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Start a Project
              </span>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl group-hover:bg-white/30 group-hover:rotate-45 transition-all">
                ↗
              </div>
            </div>
            <h4 className="text-2xl font-bold leading-tight">
              Let&apos;s Build
              <br />
              Something Real
            </h4>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-gray-950 rounded-3xl p-8 text-white flex flex-col justify-center gap-3 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute top-5 right-5 flex w-3 h-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex w-3 h-3 rounded-full bg-blue-500"></span>
            </span>
            <div className="relative z-10">
              <span className="text-5xl font-black bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">
                4 yrs+
              </span>
              <p className="text-sm uppercase tracking-widest text-neutral-400 font-semibold mt-2">
                Shipping Production Code
              </p>
            </div>
          </div>

          {/* Stats Card 3 */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center gap-3 relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-5xl font-black">100%</span>
              <p className="text-sm uppercase tracking-widest text-blue-100 font-semibold mt-2">
                Client Retention
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBento;
