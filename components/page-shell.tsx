import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      {children}
    </main>
  );
}
