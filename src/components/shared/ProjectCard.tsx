"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ExpandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function MediaLightbox({ project, onClose }: { project: Project; onClose: () => void }) {
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

  const overlay = (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 99999, backgroundColor: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} media viewer`}
    >
      <button
        onClick={onClose}
        style={{ position: "absolute", top: "20px", right: "20px", zIndex: 100000, display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.8)", cursor: "pointer" }}
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      <div
        style={{ position: "relative", maxHeight: "90vh", maxWidth: "92vw", overflow: "hidden", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 25px 60px rgba(0,0,0,0.8)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {project.video ? (
          <video
            src={project.video}
            controls
            autoPlay
            playsInline
            style={{ display: "block", maxHeight: "85vh", maxWidth: "90vw", borderRadius: "16px", background: "#000" }}
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} full view`}
            width={1400}
            height={900}
            style={{ display: "block", maxHeight: "85vh", width: "auto", borderRadius: "16px", objectFit: "contain" }}
            priority
          />
        ) : null}

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderRadius: "0 0 16px 16px", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", padding: "20px" }}>
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff", margin: 0 }}>{project.title}</p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0 }}>{project.year}</p>
        </div>
      </div>

      <p style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", fontSize: "12px", color: "rgba(255,255,255,0.3)", userSelect: "none" }}>
        Press ESC or click outside to close
      </p>
    </div>
  );

  return createPortal(overlay, document.body);
}

export function ProjectCard({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const hasMedia = !!(project.video || project.image);

  return (
    <>
      {lightboxOpen && <MediaLightbox project={project} onClose={closeLightbox} />}

      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/30 hover:bg-white/8 hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]">
        {hasMedia && (
          <div
            className="relative h-52 w-full cursor-pointer overflow-hidden"
            onClick={openLightbox}
            role="button"
            tabIndex={0}
            aria-label={`View ${project.title} ${project.video ? "video" : "image"}`}
            onKeyDown={(e) => e.key === "Enter" && openLightbox()}
          >
            {project.video ? (
              <video src={project.video} autoPlay loop muted playsInline className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <Image src={project.image!} alt={`${project.title} screenshot`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.3em] text-white/60">{project.year}</span>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 py-2 backdrop-blur-sm">
                {project.video ? (
                  <><PlayIcon /><span className="text-sm font-medium text-white">Play with audio</span></>
                ) : (
                  <><ExpandIcon /><span className="text-sm font-medium text-white">View full image</span></>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="p-6">
          {!hasMedia && (
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">{project.year}</p>
          )}

          <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">{project.description}</p>

          {project.bullets && project.bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-xs leading-5 text-white/60">
                  <span className="mt-1 shrink-0 text-amber-400">&#9658;</span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-xs text-amber-200/80">{item}</span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/15 hover:text-white" id={`github-btn-${project.slug}`}>
                <GitHubIcon />
                GitHub
              </Link>
            )}
            {project.link && (
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-amber-400/15 px-4 py-2 text-sm font-medium text-amber-300 transition-all duration-200 hover:bg-amber-400/25 hover:text-amber-200" id={`visit-btn-${project.slug}`}>
                Visit project
                <ExternalLinkIcon />
              </Link>
            )}
          </div>
        </div>
      </article>
    </>
  );
}