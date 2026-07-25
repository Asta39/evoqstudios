"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CpuIcon, Globe02Icon, SparklesIcon, SecurityCheckIcon } from "@hugeicons/core-free-icons";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { KineticText } from "./magicui/kinetic-text";

export default function Hero() {
  return (
    <section className="relative bg-white text-apple-ink pt-28 pb-20 px-4 text-center overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Magic UI Animated Grid Background */}
      <AnimatedGridPattern
        numSquares={35}
        maxOpacity={0.4}
        duration={3}
        repeatDelay={1}
        className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
      />

      <div className="relative z-10 max-w-[980px] mx-auto">
        {/* Kinetic Text Heading */}
        <div className="max-w-[880px] mx-auto mb-6">
          <h1 className="text-[44px] sm:text-[60px] font-semibold text-apple-ink apple-tight-hero leading-[1.12]">
            <KineticText
              text="We build the stuff your competitors will copy next year."
              className="text-apple-ink"
            />
          </h1>
        </div>

        {/* Restored Sub Heading / Tagline */}
        <p className="text-[20px] sm:text-[26px] font-normal text-[#1d1d1f] max-w-[760px] mx-auto mb-10 tracking-[-0.01em] leading-relaxed">
          Custom systems for companies that have outgrown their tools. Built by people who still enjoy the craft.
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
        <div className="relative max-w-[900px] mx-auto bg-apple-parchment/90 backdrop-blur-md rounded-[24px] p-8 sm:p-12 border border-apple-hairline shadow-apple-product">
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
