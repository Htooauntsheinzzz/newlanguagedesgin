import { FeatureCard } from "@/components/feature-card";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { features } from "@/data/jlite";

export default function FeaturesPage() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="Language Features"
        title="Core capabilities of JLite"
        description="The language is intentionally compact but complete enough to teach syntax, parsing, and semantic checks."
      />

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>
    </PageShell>
  );
}
