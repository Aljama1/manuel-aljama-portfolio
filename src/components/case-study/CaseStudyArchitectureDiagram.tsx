import { Smartphone, Globe, Database, Lock } from "lucide-react";
import type { CaseStudyArchBlock } from "@/content/types";

interface CaseStudyArchitectureDiagramProps {
  webPwa: CaseStudyArchBlock;
  mobileBridge: CaseStudyArchBlock;
  backend: CaseStudyArchBlock;
  integrity: CaseStudyArchBlock;
  title?: string;
}

export function CaseStudyArchitectureDiagram({
  webPwa,
  mobileBridge,
  backend,
  integrity,
  title,
}: CaseStudyArchitectureDiagramProps) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border bg-surface/70 p-5 sm:p-8"
      aria-label={title ?? "Diagrama conceptual de arquitectura"}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
        <div>
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary">
            TECHNICAL ARCHITECTURE & INTEGRATION
          </span>
          <p className="mt-1 text-sm text-foreground-muted">
            Separación de capas: cliente multiplataforma, reactividad en UI,
            servicios BaaS realtime y módulo de integridad.
          </p>
        </div>
        <span className="font-mono text-xs text-foreground-muted">
          Angular 20 · Ionic 8 · Capacitor 8 · Firebase
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Capa Cliente y UI */}
        <div className="flex flex-col justify-between rounded-lg border border-border bg-background/70 p-5 lg:col-span-4">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                01 / Client & Reactive UI
              </span>
            </div>
            <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
              {webPwa.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
              {webPwa.description}
            </p>
          </div>
          <div className="mt-4 border-t border-border/60 pt-3">
            <span className="font-mono text-[11px] text-foreground-muted">
              Componentes clave:
            </span>
            <ul className="mt-2 space-y-1.5 font-mono text-xs text-foreground">
              {webPwa.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Puente Móvil Capacitor */}
        <div className="flex flex-col justify-between rounded-lg border border-border bg-background/70 p-5 lg:col-span-4">
          <div>
            <div className="flex items-center gap-2 text-secondary">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                02 / Mobile Bridge
              </span>
            </div>
            <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
              {mobileBridge.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
              {mobileBridge.description}
            </p>
          </div>
          <div className="mt-4 border-t border-border/60 pt-3">
            <span className="font-mono text-[11px] text-foreground-muted">
              Capacidades nativas:
            </span>
            <ul className="mt-2 space-y-1.5 font-mono text-xs text-foreground">
              {mobileBridge.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backend & Realtime BaaS */}
        <div className="flex flex-col justify-between rounded-lg border border-border bg-background/70 p-5 lg:col-span-4">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <Database className="h-4 w-4" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                03 / Realtime BaaS
              </span>
            </div>
            <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
              {backend.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
              {backend.description}
            </p>
          </div>
          <div className="mt-4 border-t border-border/60 pt-3">
            <span className="font-mono text-[11px] text-foreground-muted">
              Infraestructura Firebase:
            </span>
            <ul className="mt-2 space-y-1.5 font-mono text-xs text-foreground">
              {backend.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Módulo de Integridad y Trazabilidad */}
        <div className="rounded-lg border border-border/80 bg-surface-raised/40 p-5 lg:col-span-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-secondary">
                <Lock className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider text-secondary uppercase">
                  Auditability & Verification Pipeline
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
                  className="rounded-xs border border-border bg-background/80 px-2.5 py-1 text-foreground-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
            {integrity.description}
          </p>
        </div>
      </div>
    </div>
  );
}
