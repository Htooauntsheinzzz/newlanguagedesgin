import { CodeBlock } from "@/components/code-block";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import {
  codeExamples,
  compilerStages,
  fullBnf,
  futureWork,
  keywords,
  operators,
  tokens
} from "@/data/jlite";

export default function DocumentationPage() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="Full Documentation"
        title="JLite language reference"
        description="A single, scrollable reference page for language syntax, behavior, and compilation design."
      />

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card" id="overview">
        <h2 className="text-xl font-semibold text-ink">Overview</h2>
        <p className="text-sm text-slate-700">
          JLite is a simplified Java-inspired programming language designed for teaching compiler construction, syntax
          design, and basic object-oriented programming concepts.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h2 className="text-xl font-semibold text-ink">Keywords</h2>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {keyword}
              </span>
            ))}
          </div>
        </article>

        <article className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h2 className="text-xl font-semibold text-ink">Tokens</h2>
          <ul className="space-y-1 text-sm text-slate-700">
            {tokens.map((token) => (
              <li key={token}>- {token}</li>
            ))}
          </ul>
        </article>

        <article className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h2 className="text-xl font-semibold text-ink">Operators</h2>
          <ul className="space-y-1 text-sm text-slate-700">
            {operators.map((operator) => (
              <li key={operator}>- {operator}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card" id="grammar">
        <h2 className="text-xl font-semibold text-ink">Grammar</h2>
        <CodeBlock code={fullBnf} />
      </section>

      <section className="space-y-5" id="examples">
        <h2 className="text-2xl font-semibold text-ink">Examples</h2>
        {codeExamples.map((example) => (
          <article key={example.title} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <h3 className="text-lg font-semibold text-ink">{example.title}</h3>
            <p className="text-sm text-slate-700">{example.description}</p>
            <CodeBlock code={example.code} />
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card" id="compiler-stages">
        <h2 className="text-xl font-semibold text-ink">Compiler Stages</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {compilerStages.map((stage) => (
            <li key={stage.stage}>
              <strong>{stage.stage}:</strong> {stage.detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card" id="future-work">
        <h2 className="text-xl font-semibold text-ink">Future Work</h2>
        <ul className="space-y-1 text-sm text-slate-700">
          {futureWork.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
