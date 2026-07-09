import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Card className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
            About
          </p>
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Simple systems, clean structure, strong visuals.
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              I like building projects with clear information hierarchy,
              reusable UI pieces, and enough motion to feel alive without
              becoming noisy.
            </p>
          </div>
        </Card>
      </section>
    </AnimatedSection>
  );
}
