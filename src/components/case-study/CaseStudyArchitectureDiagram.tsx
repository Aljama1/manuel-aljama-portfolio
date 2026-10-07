import { Smartphone, Globe, Database, Lock } from "lucide-react";
import type { CaseStudyArchBlock } from "@/content/types";

interface CaseStudyArchitectureDiagramProps {
  webPwa: CaseStudyArchBlock;
  mobileBridge: CaseStudyArchBlock;
  backend: CaseStudyArchBlock;
  integrity: CaseStudyArchBlock;
  subtitle?: string | undefined;
  ariaLabel?: string | undefined;
  techBadge?: string | undefined;
  pipelineTag?: string | undefined;
  title?: string | undefined;
}

export function CaseStudyArchitectureDiagram({
  webPwa,
  mobileBridge,
  backend,
  integrity,
  subtitle,
  techBadge,
  pipelineTag,
}: CaseStudyArchitectureDiagramProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-5 shadow-sm backdrop-blur-sm sm:p-8">
      {/* Ambient background flare */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-gradient-to-bl from-secondary/10 via-primary/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-5">
        <div>
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary">
            TECHNICAL ARCHITECTURE & INTEGRATION
          </span>
          {subtitle && (
            <p className="mt-1 text-sm text-foreground-muted">{subtitle}</p>
          )}
        </div>
        <span className="rounded-sm border border-border/80 bg-surface-raised px-2.5 py-1 font-mono text-xs text-foreground-muted shadow-2xs">
          {techBadge ?? "Angular 20 · Ionic 8 · Capacitor 8 · Firebase"}
        </span>
      </div>

      <div className="relative mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Capa Cliente y UI */}
        <div className="group flex flex-col justify-between rounded-xl border border-border/70 bg-background/80 p-5 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-primary/40 hover:bg-surface-raised/80 hover:shadow-xs lg:col-span-4">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                {webPwa.layerBadge ?? "01 / Client & Reactive UI"}
              </span>
            </div>
            <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
              {webPwa.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
              {webPwa.description}
            </p>
          </div>
          <div className="mt-5 border-t border-border/60 pt-3.5">
            <span className="font-mono text-[11px] font-medium text-foreground-muted">
              {webPwa.listHeading ?? "Componentes clave:"}
            </span>
            <ul className="mt-2.5 space-y-1.5 font-mono text-xs text-foreground">
              {webPwa.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Puente Móvil Capacitor */}
        <div className="group flex flex-col justify-between rounded-xl border border-border/70 bg-background/80 p-5 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-secondary/40 hover:bg-surface-raised/80 hover:shadow-xs lg:col-span-4">
          <div>
            <div className="flex items-center gap-2 text-secondary">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-secondary/30 bg-secondary/10">
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                {mobileBridge.layerBadge ?? "02 / Mobile Bridge"}
              </span>
            </div>
            <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
              {mobileBridge.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
              {mobileBridge.description}
            </p>
          </div>
          <div className="mt-5 border-t border-border/60 pt-3.5">
            <span className="font-mono text-[11px] font-medium text-foreground-muted">
              {mobileBridge.listHeading ?? "Capacidades nativas:"}
            </span>
            <ul className="mt-2.5 space-y-1.5 font-mono text-xs text-foreground">
              {mobileBridge.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backend & Realtime BaaS */}
        <div className="group flex flex-col justify-between rounded-xl border border-border/70 bg-background/80 p-5 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-primary/40 hover:bg-surface-raised/80 hover:shadow-xs lg:col-span-4">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <Database className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                {backend.layerBadge ?? "03 / Realtime BaaS"}
              </span>
            </div>
            <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
              {backend.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
              {backend.description}
            </p>
          </div>
          <div className="mt-5 border-t border-border/60 pt-3.5">
            <span className="font-mono text-[11px] font-medium text-foreground-muted">
              {backend.listHeading ?? "Infraestructura Firebase:"}
            </span>
            <ul className="mt-2.5 space-y-1.5 font-mono text-xs text-foreground">
              {backend.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Módulo de Integridad y Trazabilidad */}
        <div className="group rounded-xl border border-border/80 bg-surface-raised/80 p-5 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-secondary/40 lg:col-span-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-secondary/30 bg-secondary/10 text-secondary">
                <Lock className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-semibold tracking-wider text-secondary uppercase">
                  {pipelineTag ??
                    integrity.layerBadge ??
                    "Auditability & Verification Pipeline"}
                </span>
                <h3 className="font-heading text-base font-bold text-foreground">
                  {integrity.title}
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {integrity.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border/80 bg-background/90 px-2.5 py-1 text-foreground-muted shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-3.5 text-xs leading-relaxed text-foreground-muted">
            {integrity.description}
          </p>
        </div>
      </div>
    </div>
  );
}
