import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { HowIBuildContent } from "@/content";

interface HowIBuildSectionProps {
  content: HowIBuildContent;
}

export function HowIBuildSection({ content }: HowIBuildSectionProps) {
  const { steps } = content;

  return (
    <Section
      id="how-i-build"
      className="scroll-mt-20 border-b border-border/60 bg-surface/20"
    >
      <ScrollReveal className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-8">
          {content.intro}
        </p>
      </ScrollReveal>

      {/* Pipeline orgánico continuo con micro-indicadores luminosos de estado */}
      <ScrollReveal delayMs={80}>
        <nav
          aria-label={content.title}
          tabIndex={0}
          className="mt-12 w-full max-w-full [scrollbar-width:none] overflow-x-auto pt-2 pb-4 [-ms-overflow-style:none] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-scrollbar]:hidden"
        >
          <div className="relative inline-flex min-w-max items-center">
            {/* Línea luminosa continua del pipeline */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 right-4 left-4 -z-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-primary via-primary/50 to-primary/20"
            />
            <ol className="relative z-10 flex items-center gap-2">
              {steps.map((step, idx) => (
                <li key={step.key} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-3 py-1.5 font-mono text-xs font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_12px_-2px_color-mix(in_srgb,var(--primary)_20%,transparent)]">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]"
                      aria-hidden="true"
                    />
                    <span>{step.key}</span>
                  </span>
                  {idx < steps.length - 1 ? (
                    <ArrowRight
                      className="h-3 w-3 shrink-0 text-primary/50"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </ScrollReveal>

      {/* Grid de estaciones del pipeline interconectadas */}
      <ScrollReveal delayMs={180}>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <li
                key={step.key}
                className={`group card-glass relative flex flex-col justify-between rounded-xl border border-border/70 bg-surface/80 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg ${
                  isLast ? "sm:col-span-2 lg:col-span-3 xl:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold tracking-widest text-primary">
                        {step.number}
                      </span>
                      <span className="text-border" aria-hidden="true">
                        /
                      </span>
                      <span className="font-mono text-[11px] font-semibold tracking-wider text-foreground-muted uppercase transition-colors group-hover:text-primary">
                        {step.key}
                      </span>
                    </div>
                    {/* Micro-indicador luminoso de estado */}
                    <div
                      aria-hidden="true"
                      className="flex items-center gap-1.5 rounded-full border border-border/60 bg-surface-raised px-2 py-0.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)] motion-safe:animate-pulse" />
                      <span className="font-mono text-[9px] font-medium tracking-wider text-foreground-dim uppercase">
                        READY
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-5 flex items-center justify-between border-t border-border/40 pt-3 font-mono text-[10px] text-foreground-dim"
                >
                  <span>STAGE_NODE</span>
                  <span className="font-semibold text-primary/80 transition-colors group-hover:text-primary">
                    ACTIVE
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </ScrollReveal>

      {/* Cierre conceptual orgánico con halo ambiental */}
      <ScrollReveal delayMs={260}>
        <div className="card-glass relative mt-12 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/[0.04] via-surface to-surface p-8 text-center shadow-lg sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative z-10">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {content.cyclePhilosophyLabel}
            </p>
            <p className="mx-auto mt-3 max-w-2xl font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              {content.closing}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
