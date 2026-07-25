"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function LineShadowText({
  children,
  shadowColor = "#0066cc",
  className,
  as: Component = "span",
  ...props
}) {
  return (
    <Component
      className={cn(
        "relative z-0 inline-flex flex-col leading-none select-none",
        className
      )}
      style={{
        "--shadow-color": shadowColor,
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute top-1 left-1 -z-10 text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-apple-blue-focus opacity-70 blur-[0.5px]"
        style={{
          textShadow: `
            1px 1px 0px var(--shadow-color),
            2px 2px 0px var(--shadow-color),
            3px 3px 0px var(--shadow-color),
            4px 4px 0px var(--shadow-color)
          `,
        }}
      >
        {children}
      </span>
    </Component>
  );
}
