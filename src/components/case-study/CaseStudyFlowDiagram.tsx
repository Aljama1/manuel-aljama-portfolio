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
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-5 shadow-sm backdrop-blur-sm sm:p-8">
      {/* Ambient background flare */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
        <div>
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            CONCEPTUAL PRODUCT FLOW · 10 STEPS
          </span>
          {subtitle && (
            <p className="mt-1 text-sm text-foreground-muted">{subtitle}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {activeLegend.guest}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-secondary shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {activeLegend.staff}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-border/80 bg-surface-raised px-2.5 py-1 text-foreground-muted shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted" />
            {activeLegend.system}
          </span>
        </div>
      </div>

      <ol className="relative mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, idx) => {
          const Icon = getIconForIndex(idx);
          const isGuest = step.role === "guest";
          const isStaff = step.role === "staff";
          const roleLabel = getRoleLabel(step.role);

          return (
            <li
              key={step.stepNumber}
              className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-background/80 p-4 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-border hover:bg-surface-raised/80 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-foreground-muted transition-colors group-hover:text-foreground">
                    {step.stepNumber}
                  </span>
                  <span
                    className={`rounded-sm px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wider uppercase ${
                      isGuest
                        ? "border border-primary/30 bg-primary/10 text-primary"
                        : isStaff
                          ? "border border-secondary/30 bg-secondary/10 text-secondary"
                          : "border border-border/80 bg-surface-raised text-foreground-muted"
                    }`}
                  >
                    {roleLabel}
                  </span>
                </div>

                <div className="mt-3.5 flex items-center gap-2">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      isGuest
                        ? "border-primary/30 bg-primary/10 text-primary group-hover:border-primary/50"
                        : isStaff
                          ? "border-secondary/30 bg-secondary/10 text-secondary group-hover:border-secondary/50"
                          : "border-border/80 bg-surface text-foreground-muted group-hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div
                  className="mt-3.5 hidden items-center justify-end text-foreground-muted/60 transition-colors group-hover:text-foreground-muted lg:flex"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
