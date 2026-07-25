"use client";

import { useState } from "react";

export default function VideoShowcase() {
  const [isVideoError, setIsVideoError] = useState(false);

  return (
    <section className="relative bg-white py-12 sm:py-20 px-4 overflow-hidden">
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
    </section>
  );
}
