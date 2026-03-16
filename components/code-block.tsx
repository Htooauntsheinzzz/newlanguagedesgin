type CodeBlockProps = {
  code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-5 text-sm text-slate-100">
      <code>{code}</code>
    </pre>
  );
}
