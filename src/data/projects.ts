import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "portfolio-showcase",
    title: "Portfolio Showcase",
    description:
      "A clean personal site to present projects, skills, and contact details.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    link: "https://example.com"
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "A productivity dashboard for tracking work, deadlines, and priorities.",
    stack: ["React", "Node.js", "PostgreSQL"],
    year: "2025"
  }
];

export const featuredProject = projects[0];
