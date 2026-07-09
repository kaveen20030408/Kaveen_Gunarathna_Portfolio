import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
          Portfolio
        </p>
        <h1 className="mt-5 max-w-2xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          I build thoughtful web experiences that feel fast and clear.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          I’m Kaveen, a frontend-focused developer who enjoys turning ideas into
          polished websites, useful interfaces, and reliable product
          experiences.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/projects">
            <Button>View projects</Button>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Currently focused on
        </p>
        <ul className="mt-6 space-y-4 text-white/80">
          <li>Modern React and Next.js interfaces</li>
          <li>Responsive layouts and smooth interactions</li>
          <li>Accessible component systems</li>
        </ul>
      </div>
    </section>
  );
}
