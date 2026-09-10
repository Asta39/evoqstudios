"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight, ArrowUpRight } from "lucide-react";
import { ServicePageShell } from "./ServicePageShell";
import { ProjectCard } from "./ProjectCard";
import { LiquidGlassViewport, LiquidGlassButton } from "./ui/liquid-glass";
import { getAdjacentProjects } from "../lib/projects";

const GRADIENT_MAP = {
  amber: "from-amber-400 via-amber-500 to-orange-600",
  teal: "from-teal-400 via-teal-500 to-emerald-600",
  blue: "from-blue-400 via-blue-500 to-cyan-600",
  indigo: "from-indigo-400 via-indigo-500 to-blue-600",
  emerald: "from-emerald-400 via-emerald-500 to-teal-600",
  rose: "from-rose-400 via-rose-500 to-pink-600",
  purple: "from-purple-400 via-purple-500 to-indigo-600",
  orange: "from-orange-400 via-orange-500 to-red-600",
  cyan: "from-cyan-400 via-cyan-500 to-blue-600",
  slate: "from-slate-400 via-slate-500 to-slate-700",
};

function ModuleRow({ label, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-16 border-t border-black/[0.06]">
      <div className="lg:col-span-3 flex items-center gap-2.5 h-fit">
        <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0">
          <Plus className="w-3.5 h-3.5" />
        </span>
        <span className="text-sm font-normal text-apple-ink">{label}</span>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </div>
  );
}

export function ProjectDetail({ project }) {
  const gradient = GRADIENT_MAP[project.color] || GRADIENT_MAP.blue;
  const nextProjects = getAdjacentProjects(project.slug, 2);

  return (
    <ServicePageShell>
      {/* Big Title */}
      <section className="max-w-[1240px] mx-auto pt-12 pb-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-apple-ink tracking-tight">
          {project.name}.
        </h1>
      </section>

      {/* Introduction */}
      <ModuleRow label="Introduction">
        <p className="text-xl sm:text-2xl text-apple-ink leading-relaxed">{project.challenge}</p>
      </ModuleRow>

      {/* Meta Table */}
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-6 border-t border-black/[0.06] items-center">
          <div className="lg:col-span-3 text-sm text-neutral-400">Year</div>
          <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">{project.year}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-6 border-t border-black/[0.06] items-center">
          <div className="lg:col-span-3 text-sm text-neutral-400">Industry</div>
          <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">{project.industry}</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-6 border-t border-black/[0.06] items-center">
          <div className="lg:col-span-3 text-sm text-neutral-400">Scope of work</div>
          <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">
            {project.scope.join(" / ")}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-6 border-t border-b border-black/[0.06] items-center">
          <div className="lg:col-span-3 text-sm text-neutral-400">Timeline</div>
          <div className="lg:col-span-9 text-right text-sm font-normal text-apple-ink">{project.timeline}</div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="max-w-[1240px] mx-auto py-16">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold`}>
            {project.name.charAt(0)}
          </span>
          <span className="text-lg font-normal text-apple-ink">{project.name}</span>
        </div>
        {project.gallery && project.gallery.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.gallery.map((src, i) => (
              <div
                key={i}
                className={`relative aspect-video rounded-2xl overflow-hidden border border-black/[0.06] ${
                  i === 0 ? "col-span-2 sm:col-span-3" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.name} preview ${i + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[0, 1].map((i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-black/[0.06]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} preview ${i + 1}`}
                    fill
                    className={`object-cover ${i === 1 ? "scale-125 object-left-top" : ""}`}
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} ${i === 1 ? "opacity-80" : ""}`} />
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Challenges */}
      <ModuleRow label="Challenges">
        <p className="text-2xl sm:text-3xl text-apple-ink leading-snug font-normal mb-6">{project.tagline}</p>
        <p className="text-base text-neutral-500 leading-relaxed">{project.approach}</p>
      </ModuleRow>

      {/* Closing Banner */}
      <section className="max-w-[1240px] mx-auto pb-16">
        {(() => {
          const bannerSrc = project.gallery?.[project.gallery.length - 1] || project.image;
          return (
            <LiquidGlassViewport
              bgImage={bannerSrc}
              className={`h-40 sm:h-56 w-full rounded-3xl bg-gradient-to-br ${gradient}`}
            >
              {project.liveUrl && (
                <LiquidGlassButton
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 h-11 px-5 rounded-full z-30"
                >
                  <span>View Live Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </LiquidGlassButton>
              )}
            </LiquidGlassViewport>
          );
        })()}
      </section>

      {/* Final Thoughts */}
      <ModuleRow label="Final thoughts">
        <p className="text-2xl sm:text-3xl text-apple-ink leading-snug font-normal mb-6">{project.outcome}</p>
        {project.quote && (
          <p className="text-base text-neutral-500 leading-relaxed">
            &ldquo;{project.quote}&rdquo; — {project.quoteAuthor}, {project.quoteRole}
          </p>
        )}
      </ModuleRow>

      {/* Next Projects */}
      <section className="max-w-[1240px] mx-auto py-16 border-t border-black/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold text-apple-ink tracking-tight">Next projects.</h2>
            <span className="text-lg font-mono text-neutral-400 mt-1 block">
              (2024&ndash;{new Date().getFullYear()}&copy;)
            </span>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 bg-black text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-md group w-fit"
          >
            <span>All Projects</span>
            <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {nextProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </ServicePageShell>
  );
}
