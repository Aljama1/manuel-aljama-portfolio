"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  RotateCw,
  Lock,
  UtensilsCrossed,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import type { Locale } from "@/content";

interface TraceHeroCardProps {
  locale: Locale;
  viewTraceLabel?: string;
}

export function TraceHeroCard({ locale, viewTraceLabel }: TraceHeroCardProps) {
  const [activeTab, setActiveTab] = useState<"kds" | "audit" | "stack">("kds");

  const caseStudyUrl =
    locale === "en" ? "/en/projects/trace" : "/projects/trace";

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all duration-300 hover:border-border/80 sm:p-5">
      {/* Browser Window Mockup */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-xs">
        {/* Browser Chrome Header (Titlebar & Tab) */}
        <div className="flex items-center justify-between border-b border-border bg-surface-raised px-3 py-2">
          {/* Mac Window Dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
          </div>

          {/* Active Browser Tab */}
          <div className="flex items-center gap-2 rounded-t-lg border-x border-t border-border bg-background px-3 py-1 font-mono text-[11px] font-medium text-foreground">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-xs bg-primary text-[10px] font-bold text-background">
              T
            </span>
            <span>TRACE</span>
            <span
              className="ml-1 cursor-default text-[10px] text-foreground-muted hover:text-foreground"
              aria-hidden="true"
            >
              ×
            </span>
          </div>

          {/* Spacer */}
          <div className="w-12" aria-hidden="true" />
        </div>

        {/* Browser Navigation / Omnibox Bar */}
        <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-1.5">
          <div
            className="flex items-center gap-1 text-foreground-muted"
            aria-hidden="true"
          >
            <ArrowLeft className="h-3 w-3" />
            <ArrowRight className="h-3 w-3 opacity-40" />
            <RotateCw className="ml-0.5 h-2.5 w-2.5" />
          </div>

          {/* Address Bar */}
          <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden rounded-md border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] text-foreground-muted">
            <Lock
              className="h-2.5 w-2.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="truncate font-medium text-foreground">
              trace.app/live-service
            </span>
          </div>

          {/* Live Status Pill */}
          <div className="hidden shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary sm:inline-flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span>
              {locale === "es" ? "Firestore: En línea" : "Firestore: Online"}
            </span>
          </div>
        </div>

        {/* Browser Viewport (Web App Dashboard) */}
        <div className="flex flex-1 flex-col justify-between bg-background p-3.5 sm:p-4">
          {/* Dashboard Header Bar */}
          <div className="grid grid-cols-1 gap-2.5 border-b border-border pb-3 sm:grid-cols-2">
            {/* Real Metrics Box */}
            <div className="rounded-lg border border-border bg-surface p-2.5 font-mono text-xs">
              <p className="flex items-center gap-1 text-[10px] font-semibold tracking-wider text-foreground-muted uppercase">
                <Sparkles className="h-2.5 w-2.5 text-primary" />
                {locale === "es"
                  ? "Comandas en Vivo (KDS)"
                  : "Live Orders (KDS)"}
              </p>
              <p className="mt-1 text-xs font-semibold text-foreground">
                {locale === "es"
                  ? "Mesa 04 · En preparación"
                  : "Table 04 · Preparing"}
              </p>
            </div>

            {/* Sync Telemetry Box */}
            <div className="flex items-center justify-between rounded-lg border border-border bg-surface p-2.5 font-mono text-xs">
              <div>
                <p className="text-[10px] font-semibold tracking-wider text-foreground-muted uppercase">
                  {locale === "es" ? "Sincronización" : "Synchronization"}
                </p>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {locale === "es" ? "Tiempo Real (0ms)" : "Realtime (0ms)"}
                </p>
              </div>
              <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Interactive Controls & Tab Switcher */}
          <div className="my-2.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("kds")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[11px] transition-colors sm:px-2.5 ${
                  activeTab === "kds"
                    ? "border border-border bg-surface-raised font-medium text-foreground shadow-xs"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                <UtensilsCrossed className="h-3 w-3 shrink-0" />
                <span>
                  KDS
                  <span className="hidden sm:inline">
                    {locale === "es" ? " & Comandas" : " & Orders"}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("audit")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[11px] transition-colors sm:px-2.5 ${
                  activeTab === "audit"
                    ? "border border-border bg-surface-raised font-medium text-foreground shadow-xs"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                <ShieldCheck className="h-3 w-3 shrink-0" />
                <span>
                  <span className="hidden sm:inline">
                    {locale === "es" ? "Hash " : "Audit "}
                  </span>
                  SHA-256
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("stack")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[11px] transition-colors sm:px-2.5 ${
                  activeTab === "stack"
                    ? "border border-border bg-surface-raised font-medium text-foreground shadow-xs"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                <Layers className="h-3 w-3 shrink-0" />
                <span>Stack</span>
              </button>
            </div>

            <span className="hidden font-mono text-[10px] text-foreground-muted md:inline">
              Firestore Realtime Sync
            </span>
          </div>

          {/* Active Tab Panel Content */}
          <div className="flex min-h-[140px] flex-col justify-between rounded-lg border border-border bg-surface p-3 font-mono text-xs">
            {activeTab === "kds" && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-border pb-1.5">
                  <span className="text-[11px] font-semibold text-foreground">
                    {locale === "es"
                      ? "Comanda activa #128 · QR Sala"
                      : "Active order #128 · Dine-in QR"}
                  </span>
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    {locale === "es" ? "Sincronizado" : "Synchronized"}
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between text-foreground-muted">
                    <span>1x Carpaccio de buey</span>
                    <span className="rounded border border-border bg-surface-raised px-1.5 py-0.5 text-[10px] text-foreground">
                      {locale === "es" ? "Sin Gluten" : "Gluten-Free"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-foreground-muted">
                    <span>2x Risotto de boletus</span>
                    <span className="text-[10px] text-foreground-muted">
                      {locale === "es"
                        ? "Alérgenos: Lácteos"
                        : "Allergens: Dairy"}
                    </span>
                  </div>
                </div>

                {/* Glowing Activity SVG Curve (Mockup style) */}
                <div className="relative mt-2 h-14 w-full overflow-hidden rounded pt-1">
                  <svg
                    viewBox="0 0 500 65"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="traceWaveGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="var(--primary)"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="var(--primary)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,45 Q60,15 120,35 T240,20 T360,10 T440,25 T500,18 L500,65 L0,65 Z"
                      fill="url(#traceWaveGradient)"
                    />
                    <path
                      d="M0,45 Q60,15 120,35 T240,20 T360,10 T440,25 T500,18"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                    />
                    {/* Live Peak Point */}
                    <circle cx="360" cy="10" r="3.5" fill="var(--primary)" />
                  </svg>
                </div>
              </div>
            )}

            {activeTab === "audit" && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-border pb-1.5">
                  <span className="text-[11px] font-semibold text-foreground">
                    {locale === "es"
                      ? "Trazabilidad de Facturación (SHA-256)"
                      : "Invoice Chaining Audit (SHA-256)"}
                  </span>
                  <span className="text-[10px] font-medium text-primary">
                    ✓ Verificado
                  </span>
                </div>
                <div className="space-y-1.5 rounded border border-border bg-surface-raised p-2.5 text-[10px]">
                  <p>
                    <span className="font-semibold text-foreground">
                      prev_hash:
                    </span>{" "}
                    <span className="font-mono text-secondary">
                      8f4b29a1e0c8413b...b7d
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      curr_hash:
                    </span>{" "}
                    <span className="font-mono text-primary">
                      3a9c71d509f28e4a...4a2
                    </span>
                  </p>
                </div>
                <p className="mt-1 text-[10px] text-foreground-muted">
                  {locale === "es"
                    ? "Garantía de inalterabilidad demostrativa inspirada en normativas como TicketBAI."
                    : "Demonstrative immutability guarantee inspired by TicketBAI regulations."}
                </p>
              </div>
            )}

            {activeTab === "stack" && (
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold text-foreground">
                  {locale === "es"
                    ? "Stack verificado del proyecto:"
                    : "Verified project stack:"}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Angular 20",
                    "Ionic 8",
                    "Capacitor 8",
                    "Cloud Firestore",
                    "Angular Signals",
                    "PWA",
                    "Android",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-surface-raised px-2 py-0.5 text-[11px] text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-1 text-[10px] text-foreground-muted">
                  {locale === "es"
                    ? "Arquitectura reactiva y multiplataforma (Web PWA y Android) desarrollada como Trabajo de Fin de Grado (DAM)."
                    : "Reactive multiplatform architecture (Web PWA and Android) developed as final graduation project (DAM)."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Link to Case Study */}
      <div className="mt-3 flex items-center justify-between border-t border-border pt-2">
        <h2 className="font-heading text-sm font-semibold text-foreground">
          {locale === "es"
            ? "Trace: Sistema para Hostelería"
            : "Trace: Hospitality Platform"}
        </h2>
        <Link
          href={caseStudyUrl}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-150 group-hover:translate-x-0.5 hover:text-primary-hover"
        >
          {viewTraceLabel || (locale === "es" ? "Ver Trace" : "View Trace")}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
