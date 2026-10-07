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
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-border sm:p-5">
      {/* Ambient background flare */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent blur-2xl"
        aria-hidden="true"
      />

      {/* Browser Window Mockup */}
      <div className="relative flex flex-1 flex-col overflow-hidden rounded-xl border border-border/80 bg-background shadow-xs">
        {/* Browser Chrome Header (Titlebar & Tabs with Satin Finish) */}
        <div className="flex items-center justify-between border-b border-border/80 bg-surface-raised/90 px-3 py-2 backdrop-blur-xs">
          {/* Mac Window Dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444] shadow-2xs" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#eab308] shadow-2xs" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-2xs" />
          </div>

          {/* Active Browser Tab with clear contrast against satin titlebar */}
          <div className="flex items-center gap-2 rounded-t-lg border-x border-t border-border/80 bg-background px-3 py-1 font-mono text-[11px] font-medium text-foreground shadow-xs">
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
        <div className="flex items-center gap-2 border-b border-border/70 bg-surface/80 px-3 py-1.5 backdrop-blur-xs">
          <div
            className="flex items-center gap-1 text-foreground-muted"
            aria-hidden="true"
          >
            <ArrowLeft className="h-3 w-3" />
            <ArrowRight className="h-3 w-3 opacity-40" />
            <RotateCw className="ml-0.5 h-2.5 w-2.5" />
          </div>

          {/* Address Bar */}
          <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden rounded-md border border-border/80 bg-background/90 px-2.5 py-0.5 font-mono text-[11px] text-foreground-muted shadow-2xs">
            <Lock
              className="h-2.5 w-2.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span className="truncate font-medium text-foreground">
              trace.app/live-service
            </span>
          </div>

          {/* Live Status Pill */}
          <div className="hidden shrink-0 items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-primary shadow-xs sm:inline-flex">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span>
              {locale === "es" ? "Firestore: En línea" : "Firestore: Online"}
            </span>
          </div>
        </div>

        {/* Browser Viewport (Web App Dashboard) */}
        <div className="flex flex-1 flex-col justify-between bg-background p-3.5 sm:p-4">
          {/* Dashboard Header Bar */}
          <div className="grid grid-cols-1 gap-2.5 border-b border-border/80 pb-3 sm:grid-cols-2">
            {/* Real Metrics Box */}
            <div className="rounded-lg border border-border/70 bg-surface/80 p-2.5 font-mono text-xs shadow-2xs">
              <p className="flex items-center gap-1 text-[10px] font-semibold tracking-wider text-foreground-muted uppercase">
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
            <div className="flex items-center justify-between rounded-lg border border-border/70 bg-surface/80 p-2.5 font-mono text-xs shadow-2xs">
              <div>
                <p className="text-[10px] font-semibold tracking-wider text-foreground-muted uppercase">
                  {locale === "es" ? "Sincronización" : "Synchronization"}
                </p>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {locale === "es"
                    ? "Tiempo Real (onSnapshot)"
                    : "Realtime (onSnapshot)"}
                </p>
              </div>
              <div className="rounded-full bg-primary/10 p-1.5 text-primary shadow-2xs">
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[11px] transition-all duration-150 active:scale-[0.98] sm:px-2.5 ${
                  activeTab === "kds"
                    ? "border border-border/80 bg-surface-raised font-medium text-foreground shadow-xs ring-1 ring-border/30"
                    : "border border-transparent text-foreground-muted hover:bg-surface-raised/50 hover:text-foreground"
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[11px] transition-all duration-150 active:scale-[0.98] sm:px-2.5 ${
                  activeTab === "audit"
                    ? "border border-border/80 bg-surface-raised font-medium text-foreground shadow-xs ring-1 ring-border/30"
                    : "border border-transparent text-foreground-muted hover:bg-surface-raised/50 hover:text-foreground"
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono text-[11px] transition-all duration-150 active:scale-[0.98] sm:px-2.5 ${
                  activeTab === "stack"
                    ? "border border-border/80 bg-surface-raised font-medium text-foreground shadow-xs ring-1 ring-border/30"
                    : "border border-transparent text-foreground-muted hover:bg-surface-raised/50 hover:text-foreground"
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
          <div className="flex min-h-[140px] flex-col justify-between rounded-lg border border-border/70 bg-surface/80 p-3 font-mono text-xs shadow-2xs">
            {activeTab === "kds" && (
              <div className="animate-tab-fade flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-border/60 pb-1.5">
                  <span className="text-[11px] font-semibold text-foreground">
                    {locale === "es"
                      ? "Comanda activa #128 · QR Sala"
                      : "Active order #128 · Dine-in QR"}
                  </span>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary shadow-2xs">
                    {locale === "es" ? "Sincronizado" : "Synchronized"}
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between text-foreground-muted">
                    <span>1x Carpaccio de buey</span>
                    <span className="rounded border border-border/60 bg-surface-raised px-1.5 py-0.5 text-[10px] text-foreground">
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
                  <div className="flex items-center justify-between text-foreground-muted">
                    <span>2x Cerveza artesana 33cl</span>
                    <span className="rounded border border-secondary/30 bg-secondary/10 px-1.5 py-0.5 text-[10px] text-secondary">
                      {locale === "es" ? "Partida: Barra" : "Station: Bar"}
                    </span>
                  </div>
                </div>

                {/* Real-time KDS Pipeline Status & Ticket Timer */}
                <div className="mt-2 flex items-center justify-between rounded-md border border-border/60 bg-background/60 px-2.5 py-1.5 text-[10px]">
                  <div className="flex items-center gap-1.5 text-foreground-muted">
                    <span
                      className="relative flex h-1.5 w-1.5"
                      aria-hidden="true"
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span>
                      {locale === "es"
                        ? "Mesa 04 (4p) → Pase Cocina"
                        : "Table 04 (4p) → Kitchen Pass"}
                    </span>
                  </div>
                  <span className="rounded border border-border/60 bg-surface-raised px-1.5 py-0.5 font-mono text-[10px] text-primary">
                    {locale === "es" ? "Tiempo: 04:18 min" : "Timer: 04:18 min"}
                  </span>
                </div>

                {/* Subtotal & Financial breakdown */}
                <div className="flex items-center justify-between border-t border-border/50 pt-1.5 text-[10px] text-foreground-muted">
                  <span>
                    {locale === "es"
                      ? "Base: 38,50 € · IVA (10%): 3,85 €"
                      : "Subtotal: €38.50 · VAT (10%): €3.85"}
                  </span>
                  <span className="font-semibold text-foreground">
                    {locale === "es" ? "Total: 42,35 €" : "Total: €42.35"}
                  </span>
                </div>
              </div>
            )}

            {activeTab === "audit" && (
              <div className="animate-tab-fade flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-border/60 pb-1.5">
                  <span className="text-[11px] font-semibold text-foreground">
                    {locale === "es"
                      ? "Trazabilidad de Facturación (SHA-256)"
                      : "Invoice Chaining Audit (SHA-256)"}
                  </span>
                  <span className="text-[10px] font-medium text-primary">
                    ✓ Verificado
                  </span>
                </div>
                <div className="space-y-1.5 rounded border border-border/60 bg-surface-raised/70 p-2.5 text-[10px]">
                  <div className="flex items-center justify-between border-b border-border/40 pb-1 text-foreground-muted">
                    <span>
                      {locale === "es"
                        ? "Factura: F-2024-0128"
                        : "Invoice: F-2024-0128"}
                    </span>
                    <span className="font-semibold text-primary">
                      {locale === "es" ? "Bloque #0042" : "Block #0042"}
                    </span>
                  </div>
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
                <div className="flex items-center justify-between rounded bg-background/60 px-2 py-1 text-[10px] text-foreground-muted">
                  <span>
                    {locale === "es"
                      ? "Enlace criptográfico:"
                      : "Chained cryptographic link:"}
                  </span>
                  <span className="font-semibold text-primary">
                    {locale === "es"
                      ? "Válido · 0 alteraciones"
                      : "Valid · 0 tampering"}
                  </span>
                </div>
                <p className="text-[10px] text-foreground-muted">
                  {locale === "es"
                    ? "Mecanismo demostrativo de inalterabilidad inspirado en normativas como TicketBAI."
                    : "Demonstrative immutability mechanism inspired by TicketBAI regulations."}
                </p>
              </div>
            )}

            {activeTab === "stack" && (
              <div className="animate-tab-fade flex flex-col gap-2">
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
                      className="rounded-md border border-border/60 bg-surface-raised px-2 py-0.5 text-[11px] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
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
      <div className="mt-3 flex items-center justify-between border-t border-border/70 pt-2">
        <h2 className="font-heading text-sm font-semibold text-foreground">
          {locale === "es"
            ? "Trace: Sistema para Hostelería"
            : "Trace: Hospitality Platform"}
        </h2>
        <Link
          href={caseStudyUrl}
          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-150 hover:text-primary-hover"
        >
          <span>
            {viewTraceLabel || (locale === "es" ? "Ver Trace" : "View Trace")}
          </span>
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
