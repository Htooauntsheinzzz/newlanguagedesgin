import { site } from "@/data/jlite";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>{site.title}</p>
        <p>Academic Project Demo - {site.year}</p>
      </div>
    </footer>
  );
}
