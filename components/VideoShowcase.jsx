"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VideoShowcase() {
  const [isVideoError, setIsVideoError] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-12 sm:py-20 px-4 overflow-hidden">
      <div className="relative max-w-[1080px] mx-auto bg-white rounded-[28px] p-3 sm:p-4 border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[20px] overflow-hidden bg-neutral-50 flex items-center justify-center border border-black/[0.04]"
        >
          {!isVideoError ? (
            <video
              src={inView ? "/herovideo.mp4" : undefined}
              poster="/dashboard-preview.webp"
              preload="none"
              autoPlay={inView}
              loop
              muted
              playsInline
              onError={() => setIsVideoError(true)}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <Image
              src="/dashboard-preview.webp"
              alt="Evoq System Dashboard Preview"
              fill
              className="object-cover object-top"
            />
          )}
        </div>
      </div>
    </section>
  );
}
