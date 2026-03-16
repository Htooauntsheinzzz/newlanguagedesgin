import Link from "next/link";
import type { SummaryCard } from "@/data/jlite";

export function SummaryCardItem({ title, description, href, icon: Icon }: SummaryCard) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-primary/60"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-primary">Open section {"->"}</span>
    </Link>
  );
}
