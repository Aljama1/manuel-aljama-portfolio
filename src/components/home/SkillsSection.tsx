import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { SkillsContent } from "@/content";

interface SkillsSectionProps {
  content: SkillsContent;
}

export function SkillsSection({ content }: SkillsSectionProps) {
  const { builtWith, exploring } = content;

  return (
    <Section
      id="skills"
      className="scroll-mt-20 border-b border-border/60 bg-surface/20"
    >
      <ScrollReveal className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
      </ScrollReveal>

      {/* Mapa técnico dinámico de habilidades con chips interactivos */}
      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Grupo 1: Tecnologías demostradas (Core Stack) */}
        <ScrollReveal
          delayMs={100}
          className="group card-glass relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-surface/90 p-6 shadow-lg sm:p-8 lg:col-span-7"
        >
          {/* Halo ambiental sutil para el stack demostrado */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                {builtWith.groupLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 font-mono text-xs font-medium text-primary">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]"
                  aria-hidden="true"
                />
                <span>
                  {builtWith.items.length} {builtWith.countLabel}
                </span>
              </span>
            </div>

            <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {builtWith.title}
            </h3>
            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-foreground-muted">
              {builtWith.description}
            </p>

            <ul
              aria-label={builtWith.title}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {builtWith.items.map((item) => (
                <li
                  key={item}
                  className="group/chip relative inline-flex items-center gap-2 rounded-lg border border-border/70 bg-surface-raised/90 px-3.5 py-2 font-mono text-xs font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-surface-raised hover:text-primary hover:shadow-[0_4px_12px_-2px_color-mix(in_srgb,var(--primary)_18%,transparent)]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-colors group-hover/chip:bg-primary group-hover/chip:shadow-[0_0_6px_var(--primary)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            aria-hidden="true"
            className="mt-8 flex items-center justify-between border-t border-border/40 pt-4 font-mono text-[10px] text-foreground-dim"
          >
            <span>STACK // PRODUCTION_VERIFIED</span>
            <span className="font-semibold text-primary">ACTIVE</span>
          </div>
        </ScrollReveal>

        {/* Grupo 2: Explorando activamente (R&D y áreas avanzadas) */}
        <ScrollReveal
          delayMs={220}
          className="group card-glass relative flex flex-col justify-between overflow-hidden rounded-2xl border border-secondary/30 bg-surface/90 p-6 shadow-lg sm:p-8 lg:col-span-5"
        >
          {/* Halo ambiental sutil para exploración activa */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-secondary/15 blur-2xl"
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary uppercase">
                {exploring.groupLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/25 bg-secondary/10 px-3 py-0.5 font-mono text-xs font-medium text-secondary">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_6px_var(--secondary)]"
                  aria-hidden="true"
                />
                <span>
                  {exploring.items.length} {exploring.countLabel}
                </span>
              </span>
            </div>

            <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {exploring.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-foreground-muted">
              {exploring.description}
            </p>

            <ul
              aria-label={exploring.title}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {exploring.items.map((item) => (
                <li
                  key={item}
                  className="group/chip relative inline-flex items-center gap-2 rounded-lg border border-secondary/25 bg-secondary/[0.04] px-3.5 py-2 font-mono text-xs font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/[0.08] hover:text-secondary hover:shadow-[0_4px_12px_-2px_color-mix(in_srgb,var(--secondary)_18%,transparent)]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-secondary/60 transition-colors group-hover/chip:bg-secondary group-hover/chip:shadow-[0_0_6px_var(--secondary)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            aria-hidden="true"
            className="mt-8 flex items-center justify-between border-t border-border/40 pt-4 font-mono text-[10px] text-foreground-dim"
          >
            <span>LAB // ACTIVE_EXPLORATION</span>
            <span className="font-semibold text-secondary">GROWING</span>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
