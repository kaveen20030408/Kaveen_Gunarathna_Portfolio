import { skills } from "@/data/skills";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const categoryIcons: Record<string, string> = {
  "Languages":      "⟨/⟩",
  "Frameworks":     "⚙",
  "AI / ML":        "🧠",
  "Databases":      "🗄",
  "Testing":        "✓",
  "Tools & DevOps": "🛠",
  "Concepts":       "💡",
  "UI / UX":        "✦",
  "IDEs & Editors": "📝",
};

const categoryColors: Record<string, string> = {
  "Languages":      "border-blue-400/30 hover:border-blue-400/60",
  "Frameworks":     "border-purple-400/30 hover:border-purple-400/60",
  "AI / ML":        "border-green-400/30 hover:border-green-400/60",
  "Databases":      "border-cyan-400/30 hover:border-cyan-400/60",
  "Testing":        "border-rose-400/30 hover:border-rose-400/60",
  "Tools & DevOps": "border-orange-400/30 hover:border-orange-400/60",
  "Concepts":       "border-amber-400/30 hover:border-amber-400/60",
  "UI / UX":        "border-pink-400/30 hover:border-pink-400/60",
  "IDEs & Editors": "border-teal-400/30 hover:border-teal-400/60",
};

const badgeColors: Record<string, string> = {
  "Languages":      "bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20",
  "Frameworks":     "bg-purple-500/10 text-purple-300 ring-1 ring-purple-400/20",
  "AI / ML":        "bg-green-500/10 text-green-300 ring-1 ring-green-400/20",
  "Databases":      "bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20",
  "Testing":        "bg-rose-500/10 text-rose-300 ring-1 ring-rose-400/20",
  "Tools & DevOps": "bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20",
  "Concepts":       "bg-amber-500/10 text-amber-300 ring-1 ring-amber-400/20",
  "UI / UX":        "bg-pink-500/10 text-pink-300 ring-1 ring-pink-400/20",
  "IDEs & Editors": "bg-teal-500/10 text-teal-300 ring-1 ring-teal-400/20",
};

export function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Technical Skills</p>
        <h2 className="mt-3 text-3xl font-bold text-white">What I Work With</h2>
        <p className="mt-4 max-w-2xl text-white/60">
          A broad toolkit spanning languages, frameworks, databases, DevOps, and design — built through
          academic study, personal projects, and continuous learning.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className={`group rounded-2xl border bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 ${
                categoryColors[group.category] ?? "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{categoryIcons[group.category] ?? "◆"}</span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-transform duration-200 hover:scale-105 ${
                      badgeColors[group.category] ?? "bg-white/10 text-white/70 ring-1 ring-white/10"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
