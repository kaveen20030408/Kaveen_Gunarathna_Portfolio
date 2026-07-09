import Link from "next/link";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">
        {project.year}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
      {project.link ? (
        <Link
          className="mt-5 inline-flex text-sm font-medium text-amber-300 hover:text-amber-200"
          href={project.link}
        >
          Visit project
        </Link>
      ) : null}
    </article>
  );
}
