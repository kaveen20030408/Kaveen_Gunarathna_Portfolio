import { experience } from "@/data/experience";
import { Card } from "@/components/ui/Card";

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
      <div className="mt-6 grid gap-4">
        {experience.map((item) => (
          <Card key={`${item.company}-${item.role}`}>
            <p className="text-sm text-amber-300/80">{item.period}</p>
            <h3 className="mt-2 text-lg font-medium text-white">
              {item.role} · {item.company}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              {item.summary}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
