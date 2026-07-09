import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
        Project details
      </p>
      <h1 className="mt-4 text-4xl font-bold text-white">{project.title}</h1>
      <p className="mt-6 text-white/70">{project.description}</p>
    </section>
  );
}
