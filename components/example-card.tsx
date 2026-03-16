import type { CodeExample } from "@/data/jlite";
import { CodeBlock } from "@/components/code-block";

export function ExampleCard({ title, description, code }: CodeExample) {
  return (
    <article className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
      <CodeBlock code={code} />
    </article>
  );
}
