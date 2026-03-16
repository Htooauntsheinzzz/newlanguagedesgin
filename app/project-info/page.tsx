import { PageShell } from "@/components/page-shell";
import { SectionTitle } from "@/components/section-title";

const teamMembers = [
  {
    id: "01",
    studentId: "6708457",
    name: "Htoo Aung Shein",
    role: "Frontend Implementation"
  },
  {
    id: "02",
    studentId: "6708269",
    name: "Hsu Yadi",
    role: "Grammar & Parsing"
  },
  {
    id: "03",
    studentId: "6708391",
    name: "Hsu Yadanar",
    role: "Compiler Flow Research"
  },
  {
    id: "04",
    studentId: "6708393",
    name: "Htet Oo May",
    role: "Documentation & Examples"
  },
  {
    id: "05",
    studentId: "6708527",
    name: "Wint War Chan Myae",
    role: "Language Design"
  }
];

export default function ProjectInfoPage() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="Project Info"
        title="Five Senses Team Profile"
        description="JLite is developed as a student academic project by Team Five Senses for compiler and programming language design learning."
      />

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="space-y-4 rounded-2xl border border-primary/30 bg-white p-6 shadow-card lg:col-span-2">
          <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Team Identity
          </div>
          <h2 className="text-2xl font-semibold text-ink">Five Senses</h2>
          <p className="text-sm text-slate-700">
            A five-member student group focused on building JLite as a clean educational language for compiler construction.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">Group</p>
              <p className="mt-1 text-lg font-semibold text-ink">5 Members</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">Project</p>
              <p className="mt-1 text-lg font-semibold text-ink">JLite</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">Type</p>
              <p className="mt-1 text-lg font-semibold text-ink">Academic Demo</p>
            </div>
          </div>
        </article>

        <article className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <h2 className="text-xl font-semibold text-ink">Project Details</h2>
          <p className="text-sm text-slate-700">
            <strong>Project Title:</strong> JLite Programming Language
          </p>
          <p className="text-sm text-slate-700">
            <strong>Course Context:</strong> Compiler Construction / New Programming Language Design
          </p>
          <p className="text-sm text-slate-700">
            <strong>Institution:</strong> Rangsit University, Thailand
          </p>
          <p className="text-sm text-slate-700">
            <strong>Team Name:</strong> Five Senses
          </p>
        </article>
      </section>

      <section className="space-y-5 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-card">
        <h2 className="text-2xl font-semibold text-ink">Group Members (5)</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-4 transition duration-200 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 to-accent/70" />
              <div className="relative space-y-3 pt-1">
                <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 font-mono text-xs text-amber-700">
                  #{member.id}
                </span>
                <p className="font-mono text-sm text-primary">ID: {member.studentId}</p>
                <h3 className="text-[1.05rem] font-semibold leading-snug text-ink">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-sm text-slate-600">Team Five Senses includes five members with focused roles in the JLite project.</p>
      </section>
    </PageShell>
  );
}
