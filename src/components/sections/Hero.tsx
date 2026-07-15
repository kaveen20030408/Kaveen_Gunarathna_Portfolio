import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
          Computer Science Undergraduate &nbsp;|&nbsp; Aspiring Software Engineer
        </p>
        <h1 className="mt-5 max-w-2xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          Kaveen Gunarathna
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          BSc (Hons) Computer Science student at SLIIT University, Sri Lanka (2023 – Present).
          Passionate about building scalable software with clean architecture, modern web technologies,
          and a strong eye for detail.
        </p>

        {/* Contact info */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +94 71 685 2286
          </span>
          <a
            href="mailto:gunarathnakaveen3@gmail.com"
            className="flex items-center gap-2 transition hover:text-amber-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            gunarathnakaveen3@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-300/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Kadawatha, Sri Lanka
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/projects">
            <Button>View Projects</Button>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            Contact Me
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 px-5 py-3 text-sm font-semibold text-amber-300/80 transition hover:border-amber-300/60 hover:text-amber-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {/* Profile photo */}
      <div className="relative mx-auto w-64 lg:mx-0 lg:w-72">
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-300/20 via-blue-500/10 to-transparent blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src="/images/kaveen-profile.jpg"
            alt="Kaveen Gunarathna"
            width={320}
            height={420}
            className="h-full w-full object-cover object-top"
            priority
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <p className="text-xs font-medium uppercase tracking-widest text-white/60">SLIIT University</p>
          </div>
        </div>
      </div>
    </section>
  );
}
