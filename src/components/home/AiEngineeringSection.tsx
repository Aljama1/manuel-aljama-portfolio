import {
  Cpu,
  Terminal,
  FileCode2,
  TestTube2,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
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
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-secondary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-8">
          {content.description}
        </p>
      </div>

      {/* Mensaje central destacado con acento secundario (violeta) */}
      <div className="mt-10 overflow-hidden rounded-lg border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-secondary uppercase">
              Principio de ingeniería
            </span>
            <p className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
              &ldquo;{content.coreMessage}&rdquo;
            </p>
          </div>
          <div
            aria-hidden="true"
            className="flex items-center gap-1.5 font-mono text-xs text-secondary sm:self-end"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
            <span>HUMAN_IN_THE_LOOP</span>
          </div>
        </div>
      </div>

      {/* Grid de pilares / prácticas */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {pillars.map((pillar, idx) => {
          const IconComponent = PILLAR_ICONS[idx % PILLAR_ICONS.length] ?? Cpu;

          return (
            <div
              key={pillar.title}
              className="group relative flex flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-secondary/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-secondary/20 bg-secondary/10 text-secondary">
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-medium text-foreground-muted">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-foreground-muted">
                  {pillar.description}
                </p>
              </div>

              {/* Detalle visual sutil de conexión de nodo */}
              <div
                aria-hidden="true"
                className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4 font-mono text-[10px] tracking-widest text-foreground-muted"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary/60" />
                <span>PRACTICE_NODE</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
