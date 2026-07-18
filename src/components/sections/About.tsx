import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card } from "@/components/ui/Card";

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "SLIIT University, Sri Lanka",
    period: "2023 – Present",
    description:
      "Focused on software engineering fundamentals including OOP, data structures & algorithms, compiler design, and modern software development practices.",
  },
];

export function About() {
  return (
    <AnimatedSection>
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">About Me</p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Building software with clarity, precision & purpose.
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Bio card */}
          <Card className="flex h-full flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Who I Am</p>
            
            <div className="flex flex-col gap-4">
              <p className="leading-7 text-white/70">
                I&apos;m <span className="font-semibold text-white">Kaveen Gunarathna</span>, a Computer Science undergraduate at SLIIT who picks up new technologies fast, applies them with intent, and consistently delivers work that goes beyond the brief.
              </p>
              
              <p className="leading-7 text-white/70">
                Academically strong across core CS disciplines—from algorithms and data structures to compiler theory and software architecture—I am equally comfortable translating that foundation into working, production-quality software. I&apos;ve built full-stack web platforms and contributed as a recognized leader within IEEE, all while maintaining a demanding academic schedule.
              </p>
              
              <p className="leading-7 text-white/70">
                I bring a methodical engineering mindset balanced with the creativity to solve problems that don&apos;t come with a textbook answer. I am a natural team contributor who communicates clearly, adapts quickly, and takes responsibility seriously.
              </p>
              
              <p className="leading-7 text-white/70">
                Currently, I am looking for a software engineering internship where the bar is high and the opportunity to learn from experienced engineers is real.
              </p>
            </div>
          </Card>

          {/* Education card */}
          <div className="flex h-full flex-col gap-4">
            <Card className="flex-1 flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">Education</p>
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-l-amber-300/50 pl-4 py-1">
                  <p className="text-xs font-medium uppercase tracking-widest text-amber-300/70">
                    {edu.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-sm text-white/60">{edu.institution}</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">{edu.description}</p>
                </div>
              ))}
            </Card>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Location", value: "Kadawatha, Sri Lanka" },
                { label: "Focus", value: "Full-Stack & Backend" },
                { label: "University", value: "SLIIT University" },
                { label: "Status", value: "Open to Opportunities" },
              ].map((fact) => (
                <Card key={fact.label} className="py-4 px-4 flex flex-col justify-center">
                  <p className="text-xs text-white/40 uppercase tracking-wider">{fact.label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{fact.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
