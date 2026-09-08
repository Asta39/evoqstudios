import { projects } from "../../lib/projects";
import { ProjectCard } from "../../components/ProjectCard";
import { ServicePageShell } from "../../components/ServicePageShell";
import { buildMetadata, breadcrumbJsonLd } from "../../lib/seo";
import { JsonLd } from "../../components/JsonLd";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "A look at the systems, platforms, and products Evoq Studio has shipped for clients across industries.",
  path: "/projects",
});

export default function ProjectsIndexPage() {
  return (
    <ServicePageShell>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />
      <section className="max-w-[1240px] mx-auto pt-16 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-sm font-mono text-neutral-400 block mb-2">
              ({String(projects.length).padStart(2, "0")})
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-apple-ink tracking-tight">
              Projects.
            </h1>
            <span className="text-2xl sm:text-3xl font-bold text-apple-ink tracking-tight mt-1 block">
              &copy;{new Date().getFullYear()}
            </span>
          </div>
          <p className="text-base sm:text-lg text-neutral-500 max-w-[340px] leading-relaxed">
            We&apos;ve helped businesses across industries achieve their goals. Here&apos;s everything we&apos;ve
            shipped.
          </p>
        </div>
      </section>

      <section className="max-w-[1240px] mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </ServicePageShell>
  );
}
