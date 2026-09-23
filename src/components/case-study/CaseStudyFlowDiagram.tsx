import {
  ArrowRight,
  Utensils,
  UserCheck,
  BookOpen,
  ShieldAlert,
  ShoppingBag,
  Send,
  Flame,
  Clock,
  Receipt,
  Lock,
} from "lucide-react";
import type { CaseStudyFlowStep, CaseStudyFlowLegend } from "@/content/types";

interface CaseStudyFlowDiagramProps {
  steps: CaseStudyFlowStep[];
  subtitle?: string | undefined;
  legend?: CaseStudyFlowLegend | undefined;
  ariaLabel?: string | undefined;
  title?: string | undefined;
}

const getIconForIndex = (index: number) => {
  const icons = [
    Utensils, // 01 QR / Mesa
    UserCheck, // 02 Identificación anónima
    BookOpen, // 03 Carta
    ShieldAlert, // 04 Filtro alérgenos
    ShoppingBag, // 05 Carrito
    Send, // 06 Comanda
    Flame, // 07 Cocina / Barra
    Clock, // 08 Seguimiento realtime
    Receipt, // 09 Cuenta
    Lock, // 10 Facturación / Hash
  ];
  return icons[index] ?? ArrowRight;
};

export function CaseStudyFlowDiagram({
  steps,
  subtitle,
  legend,
  ariaLabel,
  title,
}: CaseStudyFlowDiagramProps) {
  const defaultLegend: CaseStudyFlowLegend = {
    guest: "Comensal",
    staff: "Personal",
    system: "Sistema",
  };
  const activeLegend = legend ?? defaultLegend;

  const getRoleLabel = (role: "guest" | "staff" | "system") => {
    switch (role) {
      case "guest":
        return activeLegend.guest;
      case "staff":
        return activeLegend.staff;
      case "system":
        return activeLegend.system;
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border bg-surface/70 p-5 sm:p-8"
      aria-label={ariaLabel ?? title ?? "Flujo conceptual del producto"}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            CONCEPTUAL PRODUCT FLOW
          </span>
          {subtitle && (
            <p className="mt-1 text-sm text-foreground-muted">{subtitle}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {activeLegend.guest}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-secondary/30 bg-secondary/10 px-2 py-0.5 text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {activeLegend.staff}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface-raised px-2 py-0.5 text-foreground-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted" />
            {activeLegend.system}
          </span>
        </div>
      </div>

      <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, idx) => {
          const Icon = getIconForIndex(idx);
          const isGuest = step.role === "guest";
          const isStaff = step.role === "staff";
          const roleLabel = getRoleLabel(step.role);

          return (
            <li
              key={step.stepNumber}
              className="relative flex flex-col justify-between rounded-lg border border-border/80 bg-background/60 p-4 transition-colors hover:border-foreground-muted/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-foreground-muted">
                    {step.stepNumber}
                  </span>
                  <span
                    className={`rounded-xs px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wider uppercase ${
                      isGuest
                        ? "border border-primary/30 bg-primary/10 text-primary"
                        : isStaff
                          ? "border border-secondary/30 bg-secondary/10 text-secondary"
                          : "border border-border bg-surface-raised text-foreground-muted"
                    }`}
                  >
                    {roleLabel}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isGuest
                        ? "text-primary"
                        : isStaff
                          ? "text-secondary"
                          : "text-foreground-muted"
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-sm font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div
                  className="mt-3 hidden items-center justify-end text-foreground-muted lg:flex"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
