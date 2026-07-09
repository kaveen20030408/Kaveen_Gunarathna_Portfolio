"use client";

import { motion } from "framer-motion";

/**
 * Fixed, full-viewport mesh-gradient backdrop with slow-drifting color blobs
 * and a subtle grain layer, similar to the Profico Academy reference.
 *
 * Renders once in the root layout, sits behind all page content (-z-10),
 * and never intercepts clicks (pointer-events-none).
 */
export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#05070d]">
      {/* base vertical gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#070a12] to-[#05070d]" />

      {/* teal / cyan blob — top left */}
      <motion.div
        className="absolute -left-56 -top-56 h-[560px] w-[560px] rounded-full bg-teal-400/30 blur-[130px]"
        animate={{ x: [0, 50, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* magenta / pink blob — right side */}
      <motion.div
        className="absolute -right-40 top-[8%] h-[620px] w-[620px] rounded-full bg-fuchsia-500/25 blur-[140px]"
        animate={{ x: [0, -40, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* indigo / purple blob — center, ties the two together */}
      <motion.div
        className="absolute left-[28%] top-[-4%] h-[480px] w-[480px] rounded-full bg-indigo-500/25 blur-[120px]"
        animate={{ x: [0, 25, -15, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* warm amber accent — low, small, adds contrast like the reference */}
      <motion.div
        className="absolute left-[10%] top-[35%] h-[280px] w-[280px] rounded-full bg-amber-400/10 blur-[100px]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* grain texture for a premium, non-flat feel */}
      <div className="bg-grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      {/* vignette so edges/bottom stay dark and content stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,7,13,0.75)_100%)]" />
    </div>
  );
}
