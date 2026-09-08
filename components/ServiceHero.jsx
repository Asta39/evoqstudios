"use client";

import { ArrowRight } from "lucide-react";

export function ServiceHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  titleMaxWidth = "1100px",
  paddingBottom = "pb-24",
}) {
  return (
    <section className={`max-w-[1240px] mx-auto pt-12 ${paddingBottom}`}>
      <span className="text-sm font-semibold text-apple-ink mb-10 block">
        {badge.label}
      </span>

      <h1
        className="text-5xl sm:text-7xl md:text-8xl font-semibold text-apple-ink tracking-normal leading-[1.05] mb-16"
        style={{ maxWidth: titleMaxWidth }}
      >
        {title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10">
        <div className="flex flex-col gap-1 shrink-0">
          <a
            href={primaryCta.href}
            className="text-lg font-semibold text-apple-ink inline-flex items-center gap-2 hover:opacity-70 transition-opacity w-fit"
          >
            <span>{primaryCta.label}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryCta.href}
            className="text-sm text-neutral-500 hover:text-apple-ink transition-colors w-fit"
          >
            {secondaryCta.label}
          </a>
        </div>

        <p className="text-base text-neutral-600 max-w-[420px] leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
