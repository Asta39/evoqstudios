"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export function BentoGrid({ className, children }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[18rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  cta,
  href = "#",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-white border border-black/[0.06]",
        "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300",
        className
      )}
    >
      {/* Background visual */}
      <div className="absolute inset-0">{background}</div>

      {/* Content — pinned to bottom */}
      <div className="pointer-events-none relative z-10 flex flex-col gap-1 p-6 mt-auto">
        {Icon && (
          <Icon
            size={22}
            className="mb-2 text-[#1d1d1f] opacity-80 group-hover:opacity-100 transition-opacity"
            strokeWidth={1.5}
          />
        )}
        <h3 className="text-[15px] font-semibold text-[#1d1d1f] tracking-[-0.01em]">
          {name}
        </h3>
        <p className="text-[13px] leading-snug text-[#6e6e73] font-normal">
          {description}
        </p>
      </div>

      {/* Hover CTA link */}
      {cta && (
        <a
          href={href}
          className={cn(
            "pointer-events-auto absolute bottom-5 right-5 z-20",
            "text-[12px] font-medium text-apple-blue",
            "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-200"
          )}
        >
          {cta} →
        </a>
      )}

      {/* Subtle hover border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/[0.04] group-hover:ring-black/[0.08] transition-all duration-300" />
    </motion.div>
  );
}
