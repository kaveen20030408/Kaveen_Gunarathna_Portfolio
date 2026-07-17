import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kaveen Gunarathna",
  description:
    "All projects by Kaveen Gunarathna — full-stack apps, compilers, testing suites, and more.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
