import { CompilerStageCard } from "@/components/compiler-stage-card";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { compilerStages } from "@/data/jlite";

export default function CompilerFlowPage() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="Compilation Pipeline"
        title="How JLite source code is processed"
        description="From tokenization to semantic checks and execution strategy, each stage has a clear educational role."
      />

      <section className="grid gap-5 lg:grid-cols-5">
        {compilerStages.map((stage, index) => (
          <CompilerStageCard
            key={stage.stage}
            item={stage}
            index={index}
            isLast={index === compilerStages.length - 1}
          />
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">AST and Semantic Analysis Concept</h2>
        <p className="mt-3 text-sm text-slate-700">
          After parsing, JLite builds an Abstract Syntax Tree (AST) to represent nested language structures. Semantic
          analysis walks this tree to validate variable declarations, type consistency, and statement correctness before
          execution.
        </p>
      </section>
    </PageShell>
  );
}
