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
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:border-border/80 sm:p-6">
      <div>
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            <h2 className="font-heading text-sm font-semibold text-foreground">
              {locale === "es"
                ? "Criterio de Ingeniería"
                : "Engineering Discipline"}
            </h2>
          </div>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-medium text-primary">
            TDD &amp; E2E
          </span>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm">
          {locale === "es"
            ? "Construyo software web y backend enfocado en arquitectura limpia, verificabilidad con tests automatizados y mantenibilidad a largo plazo."
            : "I build web and backend systems focused on clean architecture, verifiable automated testing, and long-term maintainability."}
        </p>

        <div className="mt-4 flex flex-col gap-2 rounded-xl border border-border/40 bg-background/50 p-3 font-mono text-[11px]">
          <div className="flex items-center gap-2 text-foreground-muted">
            <Terminal
              className="h-3.5 w-3.5 text-secondary"
              aria-hidden="true"
            />
            <span>
              {locale === "es"
                ? "Tests automatizados: Vitest & Playwright"
                : "Automated testing: Vitest & Playwright"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-foreground-muted">
            <span className="font-bold text-primary">✓</span>
            <span>
              {locale === "es"
                ? "Accesibilidad WCAG AA auditada"
                : "WCAG AA accessibility audited"}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3">
        <Link
          href="#how-i-build"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-primary"
        >
          {locale === "es"
            ? "Ver proceso de construcción"
            : "View build process"}
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
        <span className="font-mono text-[11px] text-foreground-muted">
          DAM (2024-2026)
        </span>
      </div>
    </div>
  );
}
