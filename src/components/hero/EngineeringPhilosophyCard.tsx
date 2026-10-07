import Link from "next/link";
import { ShieldCheck, Terminal, ArrowRight } from "lucide-react";
import type { Locale } from "@/content";

interface EngineeringPhilosophyCardProps {
  locale: Locale;
}

export function EngineeringPhilosophyCard({
  locale,
}: EngineeringPhilosophyCardProps) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-border sm:p-6">
      {/* Subtle atmospheric ambient glow in violet */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-bl from-secondary/10 via-primary/5 to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/80 bg-surface-raised text-primary shadow-2xs">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-sm font-semibold text-foreground">
              {locale === "es"
                ? "Criterio de Ingeniería"
                : "Engineering Discipline"}
            </h2>
          </div>
          <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-primary shadow-xs">
            TDD &amp; E2E
          </span>
        </div>

        {/* Editorial Narrative */}
        <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm">
          {locale === "es"
            ? "Construyo software web y backend enfocado en arquitectura limpia, verificabilidad con tests automatizados y mantenibilidad a largo plazo."
            : "I build web and backend systems focused on clean architecture, verifiable automated testing, and long-term maintainability."}
        </p>

        {/* Quality Pipeline Verification Console */}
        <div className="mt-4 flex flex-col gap-2 rounded-xl border border-border/70 bg-background/60 p-3.5 font-mono text-[11px] shadow-2xs backdrop-blur-xs">
          <div className="flex items-center justify-between border-b border-border/40 pb-1.5 text-[10px] tracking-wider text-foreground-dim uppercase">
            <span className="flex items-center gap-1.5">
              <Terminal className="h-3 w-3 text-secondary" aria-hidden="true" />
              <span>
                {locale === "es" ? "Pipeline de Calidad" : "Quality Pipeline"}
              </span>
            </span>
            <span className="font-semibold text-primary">PASSED</span>
          </div>
          <div className="flex items-center gap-2 text-foreground-muted">
            <Terminal
              className="h-3.5 w-3.5 shrink-0 text-secondary"
              aria-hidden="true"
            />
            <span>
              {locale === "es"
                ? "Tests automatizados: Vitest & Playwright"
                : "Automated testing: Vitest & Playwright"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-foreground-muted">
            <span className="shrink-0 font-bold text-primary">✓</span>
            <span>
              {locale === "es"
                ? "Accesibilidad WCAG AA auditada"
                : "WCAG AA accessibility audited"}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer with Link to How I Build */}
      <div className="relative mt-4 flex items-center justify-between border-t border-border/60 pt-3">
        <Link
          href="#how-i-build"
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-primary"
        >
          <span>
            {locale === "es"
              ? "Ver proceso de construcción"
              : "View build process"}
          </span>
          <ArrowRight
            className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
        <span className="font-mono text-xs text-foreground-muted">
          DAM (2024-2026)
        </span>
      </div>
    </div>
  );
}
