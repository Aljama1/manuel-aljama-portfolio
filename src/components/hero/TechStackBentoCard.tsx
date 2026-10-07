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
      accent: "text-primary",
      badgeBorder: "border-primary/20",
    },
    {
      name: locale === "es" ? "Backend & Datos" : "Backend & Data",
      icon: Server,
      skills: ["Java", "PostgreSQL", "SQL"],
      accent: "text-secondary",
      badgeBorder: "border-secondary/20",
    },
    {
      name: locale === "es" ? "Testing & QA" : "Testing & QA",
      icon: CheckCircle2,
      skills: ["Playwright", "Vitest"],
      accent: "text-primary",
      badgeBorder: "border-primary/20",
    },
  ];

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-border sm:p-6">
      {/* Subtle technical ambient glow in lime */}
      <div
        className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-tl from-primary/10 via-transparent to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/80 bg-surface-raised text-primary shadow-2xs">
              <Code2 className="h-4 w-4" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-sm font-semibold text-foreground">
              {locale === "es" ? "Stack de Ingeniería" : "Technical Stack"}
            </h2>
          </div>
          <span className="font-mono text-xs text-foreground-muted">
            {locale === "es"
              ? "Tecnologías en proyectos"
              : "Technologies in projects"}
          </span>
        </div>

        {/* Tiered Tech Matrix Grid */}
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.name}
                className="flex flex-col justify-between gap-2 rounded-xl border border-border/60 bg-background/50 p-3 shadow-2xs backdrop-blur-xs transition-colors hover:border-border"
              >
                <div className="flex items-center gap-1.5">
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 ${group.accent}`}
                    aria-hidden="true"
                  />
                  <span className="truncate font-mono text-[11px] font-medium text-foreground">
                    {group.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border/60 bg-surface px-2 py-0.5 font-mono text-[11px] text-foreground-muted transition-all duration-150 hover:border-primary/40 hover:bg-surface-raised hover:text-foreground"
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

      {/* Card Footer */}
      <div className="relative mt-4 flex items-center justify-between border-t border-border/60 pt-3 font-mono text-[11px] text-foreground-muted">
        <span className="flex items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-foreground-muted/60"
            aria-hidden="true"
          />
          <span>
            {locale === "es"
              ? "Formación DAM oficial"
              : "Official DAM Education"}
          </span>
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
