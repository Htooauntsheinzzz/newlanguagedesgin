import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";
import { SummaryCardItem } from "@/components/summary-card";
import { overviewCards, site } from "@/data/jlite";

export default function HomePage() {
  return (
    <PageShell>
      <section className="space-y-8 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-card">
        <SectionTitle
          eyebrow="Language Project"
          title={site.title}
          description={site.subtitle}
        />
        <div className="flex flex-wrap gap-3">
          <Link
            href="/documentation"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Explore Language
          </Link>
          <Link
            href="/grammar"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            View Grammar
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Quick Tour"
          title="Start with the core areas"
          description="Use these sections to understand JLite language structure, grammar, and implementation pipeline."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {overviewCards.map((card) => (
            <SummaryCardItem key={card.title} {...card} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
