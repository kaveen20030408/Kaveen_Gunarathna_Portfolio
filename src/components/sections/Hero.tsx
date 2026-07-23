import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { beams, gradientColors } from "@/components/ui/demo-beams";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-8 pb-0 overflow-hidden">
      {/* ── LAYER 1 (bottom): Huge name that the photo crosses through ── */}
      <div
        className="relative"
        style={{ minHeight: "clamp(520px, 90vh, 820px)" }}
      >
        {/* Massive KAVEEN text — sits BEHIND the photo */}
        <div
          className="absolute inset-x-0 top-0 flex flex-col items-center pointer-events-none select-none"
          style={{ zIndex: 5 }}
        >
          {/* Small label above */}
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300/60 mt-2 mb-1">
            Portfolio · 2025
          </p>
          {/* KAVEEN — huge, spans behind the photo */}
          <h1
            className="font-black uppercase leading-none text-white/90 text-center"
            style={{
              fontSize: "clamp(5rem, 18vw, 14rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9
            }}
          >
            KAVEEN
          </h1>
          {/* GUNARATHNA — slightly smaller, gradient */}
          <h2
            className="font-black uppercase text-center mt-1"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 4rem)",
              letterSpacing: "0.08em",
              background:
                "linear-gradient(90deg, #fbbf24 0%, #818cf8 60%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            GUNARATHNA
          </h2>
        </div>

        {/* ── LAYER 2: The transparent PNG photo — sits on top of text, BEHIND details ── */}
        <div
          className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ zIndex: 10, width: "clamp(280px, 44vw, 520px)" }}
        >
          {/* Glow behind the figure */}
          <div
            className="absolute inset-x-0 bottom-0 blur-3xl opacity-40 pointer-events-none"
            style={{
              height: "60%",
              background:
                "radial-gradient(ellipse at 50% 100%, #6366f1 0%, #1e40af 50%, transparent 80%)",
              zIndex: -1
            }}
          />
          <Image
            src="/images/KAVEEN.png"
            alt="Kaveen Gunarathna"
            width={520}
            height={750}
            className="w-full h-auto object-contain object-bottom"
            priority
            style={{
              filter: "drop-shadow(0 30px 80px rgba(99,102,241,0.3))"
            }}
          />
          {/* Fade bottom into site bg */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #07111f 0%, transparent 100%)"
            }}
          />
        </div>

        {/* ── LAYER 3 (FRONT): Detail text overlaid ON TOP OF the photo ── */}

        {/* 1. Aspiring badge */}
        <div
          className="absolute z-40 max-md:top-[20%] max-md:right-[5%] md:top-[35%] md:left-[55%] -rotate-6"
        >
          <span className="inline-block bg-amber-400/90 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-lg max-md:text-[10px] max-md:px-2">
            Aspiring Software Engineer
          </span>
        </div>

        {/* 2. About block */}
        <div
          className="absolute z-40 max-md:top-[35%] max-md:left-[5%] md:top-[50%] md:left-[30%]"
        >
          <p className="max-md:text-[12px] text-[15px] uppercase tracking-[0.3em] text-amber-300/80 mb-1">
            About
          </p>
          <p className="max-md:text-[10px] text-xs leading-relaxed text-white/80 max-w-[180px] max-md:max-w-[140px] drop-shadow-md">
            BSc (Hons) Computer Science
            <br />
            student at SLIIT University,
            <br />
            Sri Lanka (2023 – Present).
          </p>
        </div>

        {/* 3. Editorial tagline */}
        <div
          className="absolute z-40 max-md:bottom-[15%] max-md:left-[5%] md:bottom-[14%] md:left-[25%]"
        >
          <p className="max-md:text-base text-lg font-black text-white leading-tight drop-shadow-lg">
            Building
            <br />
            Tomorrow
          </p>
          <p className="max-md:text-[9px] text-[10px] text-white/60 mt-1 max-w-[150px] max-md:max-w-[120px]">
            Designed with purpose,
            <br />
            engineered for impact.
          </p>
        </div>

        {/* 4. University */}
        <div
          className="absolute text-right z-40 max-md:top-[32%] max-md:right-[15%] md:top-[20%] md:right-[4%]"
        >
          <p className="max-md:text-[9px] text-[10px] uppercase tracking-widest text-white/60 drop-shadow-md">
            SLIIT · Sri Lanka
          </p>
          <p className="max-md:text-[9px] text-[10px] text-white/40">2023 – Present</p>
        </div>

        {/* 5. Expertise */}
        <div
          className="absolute text-right z-40 max-md:top-[45%] max-md:right-[5%] md:top-[60%] md:right-[30%]"
        >
          <p className="max-md:text-[12px] text-[15px] uppercase tracking-[0.3em] text-amber-300/80 mb-1">
            Expertise
          </p>
          <p className="max-md:text-xs text-sm font-bold text-white leading-snug max-w-[170px] max-md:max-w-[130px] ml-auto drop-shadow-md">
            Full-Stack Development &<br />
            Clean Architecture
          </p>
          <p className="max-md:text-[9px] text-xs text-white/70 mt-1 max-w-[170px] max-md:max-w-[130px] ml-auto">
            Modern web tech, scalable software &amp; strong UI/UX.
          </p>
        </div>

        {/* 6. Contact */}
        <div
          className="absolute text-right z-40 max-md:bottom-[8%] max-md:right-[5%] md:bottom-[5%] md:right-[30%]"
        >
          <p className="max-md:text-[12px] text-[15px] uppercase tracking-widest text-amber-300/80 mb-1">
            Contact
          </p>
          <a
            href="mailto:gunarathnakaveen3@gmail.com"
            className="block max-md:text-[10px] text-xs text-white/80 hover:text-amber-300 transition drop-shadow-md"
          >
            gunarathnakaveen3@gmail.com
          </a>
          <p className="max-md:text-[10px] text-xs text-white/70">+94 71 685 2286</p>
          <p className="max-md:text-[10px] text-xs text-white/50">Kadawatha, Sri Lanka</p>
        </div>
      </div>

      {/* ── Buttons row ── */}
      <div
        className="relative flex flex-wrap justify-center gap-3 pt-4 pb-10"
        style={{ zIndex: 40 }}
      >
        <PulseBeams
          beams={beams}
          gradientColors={gradientColors}
          className="!w-auto !h-auto !min-h-0 rounded-full overflow-hidden"
        >
          <Link href="/projects">
            <Button>View Projects</Button>
          </Link>
        </PulseBeams>

        <PulseBeams
          beams={beams}
          gradientColors={gradientColors}
          className="!w-auto !h-auto !min-h-0 rounded-full overflow-hidden"
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            Contact Me
          </Link>
        </PulseBeams>

        <PulseBeams
          beams={beams}
          gradientColors={gradientColors}
          className="!w-auto !h-auto !min-h-0 rounded-full overflow-hidden"
        >
          <a
            href="/resume.pdf"
            download="Kaveen_Gunarathna_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-500/5 px-5 py-3 text-sm font-semibold text-amber-300/80 transition hover:border-amber-300/60 hover:bg-amber-500/10 hover:text-amber-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
        </PulseBeams>

        <PulseBeams
          beams={beams}
          gradientColors={gradientColors}
          className="!w-auto !h-auto !min-h-0 rounded-full overflow-hidden"
        >
          <a
            href="https://www.linkedin.com/in/kaveen-gunarathna/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300/90 transition hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-blue-300"
            aria-label="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </PulseBeams>

        <PulseBeams
          beams={beams}
          gradientColors={gradientColors}
          className="!w-auto !h-auto !min-h-0 rounded-full overflow-hidden"
        >
          <a
            href="https://github.com/kaveen20030408"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </PulseBeams>
      </div>

      {/* ── Bottom editorial divider ── */}
      <div className="flex items-center gap-4 pb-4">
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          SLIIT University · Sri Lanka · 2023
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </div>
    </section>
  );
}
