"use client";

import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-md transition-colors ${
        scrollPosition > 10 ? "bg-slate-950/80" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300"
        >
          Kaveen
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
