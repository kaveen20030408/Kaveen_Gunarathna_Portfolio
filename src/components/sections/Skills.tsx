import { skills } from "@/data/skills";
import { Card } from "@/components/ui/Card";

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {skills.map((group, index) => (
          <Card key={group.category} className="flex min-h-[220px] flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-white">{group.category}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <span className="mt-6 self-end text-sm font-medium text-white/30">
              {String(index + 1).padStart(2, "0")}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}
