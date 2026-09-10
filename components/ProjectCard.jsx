import Link from "next/link";
import Image from "next/image";

const COLOR_MAP = {
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

export function ProjectCard({ project }) {
  const gradient = COLOR_MAP[project.color] || COLOR_MAP.blue;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-3xl overflow-hidden border border-black/[0.06] bg-white shadow-sm hover:shadow-xl transition-shadow"
    >
      {/* Window Chrome Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06] bg-white">
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-apple-ink text-[15px]">{project.name}.</span>
          <span className="text-xs text-neutral-400 font-mono">/{project.year}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* Preview Image / Gradient Placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`}
          />
        )}
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
          <span className="text-white font-semibold text-2xl sm:text-3xl tracking-tight text-center px-6">
            {project.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
