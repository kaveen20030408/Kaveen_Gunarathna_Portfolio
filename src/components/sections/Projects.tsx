"use client";

import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import SocialCards from "@/components/ui/card-fan-carousel";
import type { CardItem } from "@/components/ui/card-fan-carousel";
import type { Project } from "@/types";

// ─── Icons ─────────────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ─── Expand modal ───────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  const modal = (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
      onClick={onClose}
      role="dialog" aria-modal="true" aria-label={`${project.title} details`}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(4,10,20,0.9)", backdropFilter: "blur(16px)" }} />

      <div
        style={{
          position: "relative", width: "100%", maxWidth: "820px", maxHeight: "92vh",
          overflowY: "auto", borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "linear-gradient(135deg, rgba(13,20,38,0.99) 0%, rgba(6,11,24,0.99) 100%)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(251,191,36,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
          scrollbarWidth: "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} aria-label="Close"
          style={{ position: "absolute", top: "16px", right: "16px", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.6)"; }}
        >
          <CloseIcon />
        </button>

        {/* Media */}
        {(project.video || project.image) && (
          <div style={{ position: "relative", width: "100%", height: "320px", overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
            {project.video ? (
              <video src={project.video} controls autoPlay playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", background: "#000" }} />
            ) : (
              <Image src={project.image!} alt={`${project.title} screenshot`}
                width={820} height={320}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} priority />
            )}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to top, rgba(6,11,24,0.99), transparent)" }} />
          </div>
        )}

        {/* Content */}
        <div style={{ padding: "28px 32px 36px" }}>
          <p style={{ margin: "0 0 6px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(251,191,36,0.65)" }}>
            {project.year}
          </p>
          <h2 style={{ margin: "0 0 16px", fontSize: "24px", fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
            {project.title}
          </h2>
          <p style={{ margin: "0 0 20px", fontSize: "14px", lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
            {project.description}
          </p>

          {project.bullets && project.bullets.length > 0 && (
            <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", fontSize: "13px", lineHeight: 1.65, color: "rgba(255,255,255,0.58)" }}>
                  <span style={{ color: "#fbbf24", marginTop: "4px", flexShrink: 0, fontSize: "9px" }}>▶</span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "28px" }}>
            {project.stack.map((tech) => (
              <span key={tech} style={{ padding: "4px 13px", borderRadius: "999px", border: "1px solid rgba(251,191,36,0.22)", background: "rgba(251,191,36,0.06)", fontSize: "12px", fontWeight: 500, color: "rgba(251,191,36,0.82)" }}>
                {tech}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" id={`modal-github-${project.slug}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.07)", color: "#fff", fontSize: "14px", fontWeight: 600, textDecoration: "none", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(255,255,255,0.13)"; el.style.borderColor = "rgba(255,255,255,0.32)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(255,255,255,0.07)"; el.style.borderColor = "rgba(255,255,255,0.18)"; }}
              >
                <GitHubIcon /> View on GitHub <ExternalIcon />
              </a>
            ) : (
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontStyle: "italic", margin: 0 }}>No public repository yet.</p>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", borderRadius: "10px", border: "1px solid rgba(251,191,36,0.28)", background: "rgba(251,191,36,0.09)", color: "#fbbf24", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
              >
                Visit Project <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      <p style={{ position: "absolute", bottom: "18px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", fontSize: "11px", color: "rgba(255,255,255,0.22)", userSelect: "none", pointerEvents: "none" }}>
        Press ESC or click outside to close
      </p>
    </div>
  );

  return createPortal(modal, document.body);
}

// ─── Thumbnail map ─────────────────────────────────────────────────────────────

const PROJECT_THUMBNAILS: Record<string, string> = {
  "clothe-haven":      "/images/clothe-haven.jpg",
  "http-testdsl":      "/images/http-testdsl.jpg",
  "taskflow-testing":  "/images/taskflow.jpg",
  "fluxion":           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
  "portfolio-showcase":"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format",
};

// ─── Projects section ──────────────────────────────────────────────────────────

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  const PROJECT_CARDS: CardItem[] = projects.map((project) => ({
    imgUrl:      PROJECT_THUMBNAILS[project.slug] ?? "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    alt:         project.title,
    title:       project.title,
    description: project.description,
    bullets:     project.bullets,
    stack:       project.stack,
    year:        project.year,
    github:      project.github,
    onClick:     () => setActiveProject(project),
  }));

  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="projects">
      {activeProject && <ProjectModal project={activeProject} onClose={closeModal} />}

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400/70">Portfolio</p>
          <h2 className="mt-1 text-2xl font-semibold text-white">Projects</h2>
        </div>
        <Link href="/projects" className="text-sm text-amber-300 hover:text-amber-200 transition-colors">
          View all →
        </Link>
      </div>

      <p className="mt-2 text-sm text-white/40">
        Hover to explore · Click any card to expand full details
      </p>

      <div className="mt-6">
        <SocialCards cards={PROJECT_CARDS} />
      </div>
    </section>
  );
}
