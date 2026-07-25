"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function ComicText({
  children,
  className,
  fontSize = "text-4xl sm:text-6xl font-extrabold",
}) {
  return (
    <div className={cn("relative inline-block select-none", className)}>
      {/* 3D Offset Shadow Layers */}
      <span
        className={cn(
          "absolute top-1 left-1 text-black/10 blur-[1px]",
          fontSize
        )}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className={cn(
          "absolute top-0.5 left-0.5 text-apple-blue/20",
          fontSize
        )}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Main Sharp Comic Layer */}
      <span className={cn("relative z-10 text-apple-ink tracking-tight", fontSize)}>
        {children}
      </span>
    </div>
  );
}
