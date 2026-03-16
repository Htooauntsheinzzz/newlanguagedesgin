import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { aboutPoints, designObjectives } from "@/data/jlite";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="space-y-8">
        <SectionTitle
          eyebrow="About JLite"
          title="Why JLite was created"
          description="JLite is designed as an educational language for compiler and language design courses."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {aboutPoints.map((point) => (
            <article key={point} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <p className="text-sm text-slate-700">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Design Philosophy"
          title="Language goals"
          description="JLite keeps object-oriented structure while reducing syntax overhead for first-time learners."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {designObjectives.map((objective) => (
            <div
              key={objective}
              className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-medium text-slate-800"
            >
              {objective}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
