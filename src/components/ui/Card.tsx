import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        // glass panel: translucent fill + blur so the background blobs show through
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6",
        "backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
        // hover: border + fill brighten slightly, subtle lift
        "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]",
        className
      )}
    >
      {/* faint top highlight, like light catching the edge of glass */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      {/* soft glow that fades in on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}
