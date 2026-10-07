import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Workflow,
  Cpu,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { HomeProjectContent, Locale, ProjectDefinition } from "@/content";

interface ProjectBlockProps {
  project: ProjectDefinition;
  locale: Locale;
  content: HomeProjectContent;
  ctaLabel: string;
  index: string;
}

export function ProjectBlock({
  project,
  locale,
  content,
  ctaLabel,
  index,
}: ProjectBlockProps) {
  const caseStudyPath = project.caseStudyPath?.[locale];
  const isTrace = project.id === "trace";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-foreground-muted/40 hover:shadow-lg">
      {/* Halo ambiental sutil en la esquina superior derecha */}
      <div
        className={`pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl transition-opacity duration-300 ${
          isTrace
            ? "bg-primary/[0.04] group-hover:bg-primary/[0.07]"
            : "bg-secondary/[0.04] group-hover:bg-secondary/[0.07]"
        }`}
        aria-hidden="true"
      />

      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12">
        {/* Columna Izquierda: Información Editorial del Proyecto */}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-foreground-muted">
            {index}
          </p>
          <p
            className={`mt-6 font-mono text-xs font-semibold tracking-[0.16em] ${
              isTrace ? "text-primary" : "text-secondary"
            }`}
          >
            {content.status}
          </p>
          <h3 className="mt-3 font-heading text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            {content.title}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            {content.description}
          </p>

          {/* CTA para Trace / Indicador de estado para Asisteo (NUNCA enlace) */}
          {caseStudyPath ? (
            <div className="mt-8">
              <Button
                href={caseStudyPath}
                variant="secondary"
                className="group/btn"
              >
                {ctaLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover/btn:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </div>
          ) : (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-3 py-1 font-mono text-xs text-secondary">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary"
                aria-hidden="true"
              />
              <span>
                {locale === "es"
                  ? "Reconstrucción en curso · V2"
                  : "Rebuilding in progress · V2"}
              </span>
            </div>
          )}
        </div>

        {/* Columna Derecha: Panel Técnico de Arquitectura Viva */}
        <div className="lg:col-span-5">
          {isTrace ? (
            /* PANEL TÉCNICO DE TRACE */
            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 bg-background/80 p-5 shadow-xs backdrop-blur-xs sm:p-6">
              {/* Barra superior con badge de validación */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Activity className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-foreground-muted uppercase">
                    {locale === "es"
                      ? "Arquitectura & Telemetría"
                      : "Architecture & Telemetry"}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-primary">
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  VERIFIED CLAIMS
                </span>
              </div>

              {/* Badges de Arquitectura */}
              <div className="my-4">
                <p className="mb-2 font-mono text-[10px] font-medium tracking-wider text-foreground-dim uppercase">
                  {locale === "es"
                    ? "Pilares de Arquitectura"
                    : "Architecture Pillars"}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    Angular 20
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    Signals
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    Cloud Firestore Realtime
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    Integridad SHA-256
                  </span>
                </div>
              </div>

              {/* Telemetría de Proyecto */}
              <div className="rounded-lg border border-border/80 bg-surface/90 p-3.5 font-mono text-xs shadow-2xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2 text-[11px]">
                  <span className="flex items-center gap-1.5 text-foreground-muted">
                    <ShieldCheck
                      className="h-3.5 w-3.5 text-primary"
                      aria-hidden="true"
                    />
                    <span>
                      {locale === "es"
                        ? "Telemetría de Servicio"
                        : "Live Service Telemetry"}
                    </span>
                  </span>
                  <span className="text-[10px] font-semibold text-primary">
                    REALTIME SYNC
                  </span>
                </div>

                <div className="mt-2.5 space-y-2 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">
                      {locale === "es" ? "Sincronización KDS:" : "KDS Sync:"}
                    </span>
                    <span className="font-medium text-foreground">
                      Realtime (onSnapshot)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">
                      {locale === "es" ? "Enrutamiento KDS:" : "KDS Routing:"}
                    </span>
                    <span className="font-medium text-foreground">
                      {locale === "es"
                        ? "Cocina & Barra independientes"
                        : "Kitchen & Bar queues"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">
                      {locale === "es" ? "Encadenamiento:" : "Ledger Chaining:"}
                    </span>
                    <span className="font-medium text-primary">
                      Ledger SHA-256
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">
                      {locale === "es" ? "Sesión comensal:" : "Diner Session:"}
                    </span>
                    <span className="font-medium text-foreground">
                      {locale === "es"
                        ? "UID anónimo en mesa"
                        : "Table-scoped anon UID"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">
                      {locale === "es" ? "Multiplataforma:" : "Cross-Platform:"}
                    </span>
                    <span className="font-medium text-foreground">
                      Web PWA + Android (Capacitor 8)
                    </span>
                  </div>
                </div>

                {/* Pie de verificación de calidad */}
                <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5 text-[10px] text-foreground-muted">
                  <span>
                    {locale === "es"
                      ? "Verificación automatizada:"
                      : "Automated verification:"}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-primary">
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                    48 unit tests (Vitest)
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* PANEL TÉCNICO DE ASISTEO (SIN NINGÚN ENLACE) */
            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 bg-background/80 p-5 shadow-xs backdrop-blur-xs sm:p-6">
              {/* Barra superior con badge de estado transparente */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                    <Workflow className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-foreground-muted uppercase">
                    {locale === "es"
                      ? "Ingeniería en Curso"
                      : "Engineering in Progress"}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-secondary">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  SPEC IN PROGRESS / REBUILDING
                </span>
              </div>

              {/* Badges de Arquitectura Proyectada */}
              <div className="my-4">
                <p className="mb-2 font-mono text-[10px] font-medium tracking-wider text-foreground-dim uppercase">
                  {locale === "es"
                    ? "Arquitectura Proyectada"
                    : "Projected Architecture"}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    Clean Architecture
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    Spec-Driven Development
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    Modular Full-Stack
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    Next.js App Router
                  </span>
                </div>
              </div>

              {/* Panel Transparente de Pipeline */}
              <div className="rounded-lg border border-border/80 bg-surface/90 p-3.5 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2 text-[11px]">
                  <span className="flex items-center gap-1.5 text-foreground-muted">
                    <Cpu
                      className="h-3.5 w-3.5 text-secondary"
                      aria-hidden="true"
                    />
                    <span>
                      {locale === "es"
                        ? "Pipeline de Evolución V2"
                        : "V2 Evolution Pipeline"}
                    </span>
                  </span>
                  <span className="text-[10px] font-semibold text-secondary">
                    PHASE: SPEC
                  </span>
                </div>

                <div className="mt-2.5 space-y-2 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">
                      {locale === "es"
                        ? "Auditoría V1 & Lecciones:"
                        : "V1 Audit & Post-Mortem:"}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-foreground">
                      <CheckCircle2
                        className="h-3 w-3 text-primary"
                        aria-hidden="true"
                      />
                      {locale === "es" ? "Completada" : "Completed"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">
                      {locale === "es"
                        ? "Especificación Técnica:"
                        : "Technical Specification:"}
                    </span>
                    <span className="font-semibold text-secondary">
                      {locale === "es" ? "En curso (SDD)" : "In progress (SDD)"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">
                      {locale === "es"
                        ? "Reconstrucción Core:"
                        : "Core Rebuild:"}
                    </span>
                    <span className="text-foreground-dim">
                      {locale === "es"
                        ? "Planificada post-spec"
                        : "Planned post-spec"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Aviso Transparente de Case Study V2 (SIN ENLACE) */}
              <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-dashed border-border/80 bg-surface-raised/40 p-3 text-foreground-muted">
                <Lock
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground-dim"
                  aria-hidden="true"
                />
                <p className="font-mono text-[11px] leading-relaxed">
                  {locale === "es"
                    ? "Case study público disponible tras completar la versión V2."
                    : "Public case study will be released upon V2 completion."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
