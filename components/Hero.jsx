"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CpuIcon, Globe02Icon, SparklesIcon, SecurityCheckIcon } from "@hugeicons/core-free-icons";

export default function Hero() {
  return (
    <section className="bg-white text-apple-ink pt-16 pb-20 px-4 text-center overflow-hidden">
      <div className="max-w-[980px] mx-auto">
        {/* Status Cue Pill */}
        <div className="inline-flex items-center space-x-2 bg-apple-parchment text-apple-ink px-4 py-1.5 rounded-apple-pill text-[14px] font-normal mb-6 border border-apple-hairline">
          <span className="w-2 h-2 rounded-full bg-apple-blue animate-pulse"></span>
          <span>Next-gen software architecture & web design studio</span>
        </div>

        {/* Display Hero Headline - Apple Tight (-0.028em) */}
        <h1 className="text-[44px] sm:text-[56px] font-semibold text-apple-ink apple-tight-hero max-w-[840px] mx-auto mb-4">
          Software, Websites & AI Systems. Engineered for scale.
        </h1>

        {/* Lead Tagline */}
        <p className="text-[21px] sm:text-[28px] font-normal text-[#1d1d1f] max-w-[720px] mx-auto mb-8 tracking-[-0.01em] leading-snug">
          We design & build custom systems, high-converting websites, dynamic rebrandings, and autonomous AI infrastructure.
        </p>

        {/* Two Blue Pill CTA Grammar */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <a
            href="#capabilities"
            className="bg-apple-blue text-white px-6 py-3 rounded-apple-pill text-[17px] font-normal hover:bg-apple-blue-focus active:scale-95 transition-all shadow-sm"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border border-apple-blue text-apple-blue px-6 py-3 rounded-apple-pill text-[17px] font-normal hover:bg-apple-blue/5 active:scale-95 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* System Render Pedestal Card with Apple Product Shadow */}
        <div className="relative max-w-[900px] mx-auto bg-apple-parchment rounded-[24px] p-8 sm:p-12 border border-apple-hairline shadow-apple-product">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            {/* System Dev */}
            <div className="bg-white p-5 rounded-apple-lg border border-apple-divider">
              <div className="w-10 h-10 rounded-apple-pill bg-apple-parchment flex items-center justify-center text-apple-blue mb-4">
                <HugeiconsIcon icon={CpuIcon} size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-[17px] font-semibold text-apple-ink mb-1">System Dev</h3>
              <p className="text-[14px] text-apple-muted48 leading-relaxed">Robust web & enterprise platforms.</p>
            </div>

            {/* Website Dev */}
            <div className="bg-white p-5 rounded-apple-lg border border-apple-divider">
              <div className="w-10 h-10 rounded-apple-pill bg-apple-parchment flex items-center justify-center text-apple-blue mb-4">
                <HugeiconsIcon icon={Globe02Icon} size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-[17px] font-semibold text-apple-ink mb-1">Website Dev</h3>
              <p className="text-[14px] text-apple-muted48 leading-relaxed">Speed-optimized digital experiences.</p>
            </div>

            {/* Rebranding */}
            <div className="bg-white p-5 rounded-apple-lg border border-apple-divider">
              <div className="w-10 h-10 rounded-apple-pill bg-apple-parchment flex items-center justify-center text-apple-blue mb-4">
                <HugeiconsIcon icon={SparklesIcon} size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-[17px] font-semibold text-apple-ink mb-1">Rebranding</h3>
              <p className="text-[14px] text-apple-muted48 leading-relaxed">Elevated global brand identity.</p>
            </div>

            {/* AI Systems */}
            <div className="bg-white p-5 rounded-apple-lg border border-apple-divider">
              <div className="w-10 h-10 rounded-apple-pill bg-apple-parchment flex items-center justify-center text-apple-blue mb-4">
                <HugeiconsIcon icon={SecurityCheckIcon} size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-[17px] font-semibold text-apple-ink mb-1">AI Systems</h3>
              <p className="text-[14px] text-apple-muted48 leading-relaxed">Custom LLMs & automation workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
