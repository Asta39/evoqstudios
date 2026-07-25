"use client";

import { ArrowRight01Icon } from "hugeicons-react";

export default function SubNav() {
  return (
    <div className="sticky top-[44px] z-40 h-[52px] apple-frosted border-b border-apple-hairline">
      <div className="max-w-[980px] mx-auto h-full px-4 flex items-center justify-between">
        {/* Category Tagline */}
        <span className="text-[21px] font-semibold text-apple-ink tracking-[-0.015em]">
          Evoq Studio
        </span>

        {/* Action Link & Pill CTA */}
        <div className="flex items-center space-x-6 text-[14px]">
          <a href="#overview" className="hidden sm:inline text-apple-ink hover:text-apple-blue transition-colors">
            Overview
          </a>
          <a href="#capabilities" className="hidden sm:inline text-apple-ink hover:text-apple-blue transition-colors">
            Capabilities
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-apple-blue text-white px-4 py-[6px] rounded-apple-pill text-[14px] font-normal hover:bg-[#0071e3] active:scale-95 transition-all"
          >
            Start Project
          </a>
        </div>
      </div>
    </div>
  );
}
