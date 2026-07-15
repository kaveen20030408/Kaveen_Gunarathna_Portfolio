import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

export const metadata = {
  title: "Projects | Kaveen Gunarathna",
  description: "All projects by Kaveen Gunarathna — full-stack apps, compilers, testing suites, and more.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-amber-400/70">Portfolio</p>
      <h1 className="mt-1 text-4xl font-bold text-white">All Projects</h1>
      <p className="mt-3 text-white/50">A full collection of my work — click any thumbnail to view it in full screen.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}