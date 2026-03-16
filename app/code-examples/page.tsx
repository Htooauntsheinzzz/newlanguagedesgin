import { ExampleCard } from "@/components/example-card";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { codeExamples } from "@/data/jlite";

export default function CodeExamplesPage() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="Code Examples"
        title="Sample JLite programs"
        description="Examples start from basic output and grow into full class-level behavior."
      />

      <section className="space-y-5">
        {codeExamples.map((example) => (
          <ExampleCard key={example.title} {...example} />
        ))}
      </section>
    </PageShell>
  );
}
