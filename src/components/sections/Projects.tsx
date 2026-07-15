import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";
import Link from "next/link";

export function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="projects">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400/70">
            Portfolio
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">Projects</h2>
        </div>
        <Link
          href="/projects"
          className="text-sm text-amber-300 hover:text-amber-200 transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
