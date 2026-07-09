import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold text-white">Projects</h1>
      <div className="mt-10 grid gap-6">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-2xl font-semibold text-white">
              {project.title}
            </h2>
            <p className="mt-3 text-white/70">{project.description}</p>
            <Link
              className="mt-4 inline-flex text-amber-300 hover:text-amber-200"
              href={`/projects/${project.slug}`}
            >
              Open details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
