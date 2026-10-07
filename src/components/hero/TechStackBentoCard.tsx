import { Code2, Server, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/content";

interface TechStackBentoCardProps {
  locale: Locale;
}

export function TechStackBentoCard({ locale }: TechStackBentoCardProps) {
  const groups = [
    {
      name: locale === "es" ? "Frontend Moderno" : "Modern Frontend",
      icon: Code2,
      skills: ["Next.js", "React", "TypeScript"],
    },
    {
      name: locale === "es" ? "Backend & Datos" : "Backend & Data",
      icon: Server,
      skills: ["Java", "PostgreSQL", "SQL"],
    },
    {
      name: locale === "es" ? "Testing & QA" : "Testing & QA",
      icon: CheckCircle2,
      skills: ["Playwright", "Vitest"],
    },
  ];

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:border-border/80 sm:p-6">
      <div>
        <div className="flex items-center justify-between pb-3">
          <h2 className="font-heading text-sm font-semibold text-foreground">
            {locale === "es" ? "Stack de Ingeniería" : "Technical Stack"}
          </h2>
          <span className="font-mono text-[11px] text-foreground-muted">
            {locale === "es"
              ? "Tecnologías en proyectos"
              : "Technologies in projects"}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.name}
                className="flex flex-col gap-2 rounded-xl border border-border/40 bg-background/50 p-3"
              >
                <div className="flex items-center gap-1.5 text-secondary">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="font-mono text-[11px] font-medium text-foreground">
                    {group.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border/60 bg-surface px-2 py-0.5 font-mono text-[11px] text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3 font-mono text-[11px] text-foreground-muted">
        <span>
          {locale === "es" ? "Formación DAM oficial" : "Official DAM Education"}
        </span>
        <span className="font-medium text-primary">
          {locale === "es"
            ? "TypeScript estricto & Tests"
            : "Strict TypeScript & Tests"}
        </span>
      </div>
    </div>
  );
}
