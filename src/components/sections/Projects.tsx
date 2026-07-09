import Link from "next/link";
import { featuredProject } from "@/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

export function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold text-white">Featured project</h2>
        <Link
          href="/projects"
          className="text-sm text-amber-300 hover:text-amber-200"
        >
          View all
        </Link>
      </div>
      <div className="mt-6 max-w-xl">
        <ProjectCard project={featuredProject} />
      </div>
    </section>
  );
}
