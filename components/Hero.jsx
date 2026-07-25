"use client";

import { useState } from "react";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
import { KineticText } from "./magicui/kinetic-text";

export default function Hero() {
  const [isVideoError, setIsVideoError] = useState(false);

  return (
    <section className="relative bg-white text-apple-ink pt-28 pb-20 px-4 text-center overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
      {/* Magic UI Animated Grid Background */}
      <AnimatedGridPattern
        numSquares={35}
        maxOpacity={0.4}
        duration={3}
        repeatDelay={1}
        className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[150%] skew-y-12"
      />

      <div className="relative z-10 max-w-[1140px] mx-auto w-full">
        {/* Kinetic Text Heading */}
        <div className="max-w-[880px] mx-auto mb-6">
          <h1 className="text-[44px] sm:text-[60px] font-semibold text-apple-ink apple-tight-hero leading-[1.12]">
            <KineticText
              text="We build the stuff your competitors will copy next year."
              className="text-apple-ink"
            />
          </h1>
        </div>

        {/* Sub Heading Tagline */}
        <p className="text-[19px] sm:text-[24px] font-normal text-[#1d1d1f] max-w-[760px] mx-auto mb-12 tracking-[-0.01em] leading-relaxed">
          Custom systems for companies that have outgrown their tools. Built by people who still enjoy the craft.
        </p>

        {/* Rounded Video Showcase Pedestal Container (Matching User Reference Image) */}
        <div className="relative max-w-[1080px] mx-auto bg-white rounded-[28px] p-3 sm:p-4 border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[20px] overflow-hidden bg-neutral-50 flex items-center justify-center border border-black/[0.04]">
            {!isVideoError ? (
              <video
                poster="/Screenshot%202026-07-25%20at%2011.49.24%20AM.png"
                autoPlay
                loop
                muted
                playsInline
                onError={() => setIsVideoError(true)}
                className="w-full h-full object-cover object-top"
              >
                <source src="/herovideo.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/Screenshot%202026-07-25%20at%2011.49.24%20AM.png"
                alt="Evoq System Dashboard Preview"
                className="w-full h-full object-cover object-top"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
