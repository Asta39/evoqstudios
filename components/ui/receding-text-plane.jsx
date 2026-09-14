"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export function RecedingTextPlane({
  angle = 30,
  children,
  className,
  offset = 0,
  perspective = 200,
  ...props
}) {
  return (
    <div
      className={cn("relative h-screen w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className="absolute inset-0 flex items-center justify-center px-6"
        style={{
          perspective: `${perspective}px`,
          transformStyle: "preserve-3d",
        }}
      >
        <p
          className="w-full max-w-4xl text-center text-2xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            transform: `rotateX(${angle}deg) translateY(${offset}px) translateZ(10px)`,
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}
