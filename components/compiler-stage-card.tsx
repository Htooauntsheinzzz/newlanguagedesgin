import type { CompilerStage } from "@/data/jlite";

type CompilerStageCardProps = {
  item: CompilerStage;
  index: number;
  isLast: boolean;
};

export function CompilerStageCard({ item, index, isLast }: CompilerStageCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 lg:flex-row">
      <article className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-card lg:max-w-[260px]">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Step {index + 1}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-ink">{item.stage}</h3>
        <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
      </article>
      {!isLast ? <span className="text-2xl text-primary">→</span> : null}
    </div>
  );
}
