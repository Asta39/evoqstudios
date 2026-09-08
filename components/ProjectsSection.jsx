import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../lib/projects";
import { ProjectCard } from "./ProjectCard";

const FEATURED_COUNT = 4;

export function ProjectsSection() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className="relative bg-neutral-50/60 py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-black/[0.04]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-sm font-mono text-neutral-400 block mb-2">
              ({String(projects.length).padStart(2, "0")})
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight">
              Projects.
            </h2>
            <span className="text-2xl sm:text-3xl font-bold text-apple-ink tracking-tight mt-1 block">
              &copy;{new Date().getFullYear()}
            </span>
          </div>
          <p className="text-base sm:text-lg text-neutral-500 max-w-[340px] leading-relaxed">
            We&apos;ve helped businesses across industries achieve their goals. Here are some of our recent projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2.5 bg-black text-white pl-5 pr-2 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-md group w-fit"
        >
          <span>View All Projects</span>
          <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
