import {
  Cpu,
  Terminal,
  FileCode2,
  TestTube2,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { AiEngineeringContent } from "@/content";

interface AiEngineeringSectionProps {
  content: AiEngineeringContent;
}

const PILLAR_ICONS = [
  Cpu,
  Terminal,
  FileCode2,
  TestTube2,
  BookOpen,
  ShieldCheck,
];

export function AiEngineeringSection({ content }: AiEngineeringSectionProps) {
  const { pillars } = content;

  return (
    <Section
      id="ai-engineering"
      className="scroll-mt-20 border-b border-border/60"
    >
      <ScrollReveal className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-secondary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-8">
          {content.description}
        </p>
      </ScrollReveal>

      {/* Mensaje central destacado con acento secundario (violeta) y aura ambiental */}
      <ScrollReveal delayMs={100}>
        <div className="card-glass relative mt-10 overflow-hidden rounded-2xl border border-secondary/35 bg-gradient-to-br from-secondary/[0.08] via-surface to-surface p-7 shadow-lg sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-secondary/15 blur-2xl"
          />
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-secondary uppercase">
                {content.principleLabel}
              </span>
              <p className="mt-2.5 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                &ldquo;{content.coreMessage}&rdquo;
              </p>
            </div>
            <div
              aria-hidden="true"
              className="flex shrink-0 items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3.5 py-1.5 font-mono text-xs font-medium text-secondary sm:self-center"
            >
              <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_var(--secondary)]" />
              <span>HUMAN_IN_THE_LOOP</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid de 6 pilares de ingeniería con jerarquía visual e iconos reactivos */}
      <ScrollReveal delayMs={200}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent =
              PILLAR_ICONS[idx % PILLAR_ICONS.length] ?? Cpu;

            return (
              <div
                key={pillar.title}
                className="group card-glass relative flex flex-col justify-between rounded-xl border border-border/70 bg-surface/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_12px_28px_-8px_color-mix(in_srgb,var(--secondary)_20%,transparent)] sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-secondary/25 bg-secondary/10 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-background group-hover:shadow-[0_0_16px_var(--secondary)]">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-wider text-foreground-dim transition-colors group-hover:text-secondary">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold tracking-[-0.02em] text-foreground transition-colors group-hover:text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-foreground-muted">
                    {pillar.description}
                  </p>
                </div>

                {/* Detalle visual sutil de pie de pilar: se ha eliminado PRACTICE_NODE */}
                <div
                  aria-hidden="true"
                  className="mt-6 flex items-center justify-between border-t border-border/40 pt-3.5 font-mono text-[10px] text-foreground-dim"
                >
                  <span className="tracking-widest uppercase">
                    PILLAR // 0{idx + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-secondary group-hover:shadow-[0_0_6px_var(--secondary)]" />
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </Section>
  );
}
