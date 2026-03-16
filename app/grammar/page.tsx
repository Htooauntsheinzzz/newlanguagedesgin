import { CodeBlock } from "@/components/code-block";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { grammarSections } from "@/data/jlite";

export default function GrammarPage() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="BNF Grammar"
        title="JLite syntax rules"
        description="Readable production rules for parser implementation and language documentation."
      />

      <section className="space-y-6">
        {grammarSections.map((section) => (
          <article key={section.title} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
            <CodeBlock code={section.grammar} />
          </article>
        ))}
      </section>
    </PageShell>
  );
}
