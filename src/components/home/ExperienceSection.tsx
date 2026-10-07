import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ExperienceContent } from "@/content";

interface ExperienceSectionProps {
  content: ExperienceContent;
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const { education, languages, targetRole } = content;

  return (
    <Section id="experience" className="scroll-mt-20 border-b border-border/60">
      <ScrollReveal className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Timeline / Educación DAM refinada con nodos de brillo */}
        <ScrollReveal delayMs={100} className="space-y-6 lg:col-span-7">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs font-semibold tracking-[0.16em] text-foreground-muted uppercase">
              {education.heading}
            </h3>
            <span className="font-mono text-[11px] text-primary">
              VERIFIED_ACADEMIC
            </span>
          </div>

          <div className="relative space-y-8 pl-6 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-border/80 before:to-transparent sm:pl-8 sm:before:left-[9px]">
            {education.items.map((item) => (
              <article key={item.title} className="relative">
                {/* Nodo de brillo luminoso en la timeline */}
                <div
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[31px] flex h-4 w-4 items-center justify-center sm:-left-[39px]"
                >
                  <span className="absolute h-3.5 w-3.5 rounded-full bg-primary/25 opacity-75 motion-safe:animate-ping" />
                  <span className="relative h-2.5 w-2.5 rounded-full border-2 border-background bg-primary shadow-[0_0_8px_var(--primary)]" />
                </div>

                <div className="card-glass rounded-xl border border-border/70 bg-surface/80 p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                      {item.period}
                    </span>
                    {item.tag ? (
                      <span className="rounded-md border border-border/70 bg-surface-raised px-2.5 py-1 font-mono text-[10px] font-medium text-foreground-muted">
                        {item.tag}
                      </span>
                    ) : null}
                  </div>

                  <h4 className="mt-3.5 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h4>

                  <p className="mt-1 font-mono text-xs text-foreground-muted">
                    {item.institutionOrContext}
                  </p>

                  <p className="mt-3.5 text-sm leading-relaxed text-foreground-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        {/* Columna lateral estructurada: Objetivo profesional & Idiomas */}
        <ScrollReveal delayMs={220} className="space-y-6 lg:col-span-5">
          {/* Tarjeta de Objetivo profesional */}
          <div className="group card-glass relative overflow-hidden rounded-2xl border border-border/70 bg-surface/90 p-6 shadow-lg transition-all duration-200 hover:border-primary/40 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
            />
            <div className="relative z-10">
              <span className="font-mono text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                {targetRole.label}
              </span>
              <p className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {targetRole.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {targetRole.description}
              </p>

              <div
                aria-hidden="true"
                className="mt-6 flex items-center gap-2 border-t border-border/40 pt-4 font-mono text-xs text-primary"
              >
                <span className="h-2 w-2 rounded-full bg-primary motion-safe:animate-pulse" />
                <span>OPEN_TO_OPPORTUNITIES</span>
              </div>
            </div>
          </div>

          {/* Tarjeta de Idiomas */}
          <div className="group card-glass relative overflow-hidden rounded-2xl border border-border/70 bg-surface/90 p-6 shadow-lg transition-all duration-200 hover:border-border/90 sm:p-8">
            <div className="relative z-10">
              <span className="font-mono text-xs font-semibold tracking-[0.16em] text-foreground-muted uppercase">
                {languages.heading}
              </span>
              <ul className="mt-5 space-y-3">
                {languages.items.map((langItem) => (
                  <li
                    key={langItem.language}
                    className="flex flex-col justify-between gap-1.5 rounded-lg border border-border/50 bg-surface-raised/60 p-3.5 transition-colors hover:border-border sm:flex-row sm:items-center"
                  >
                    <span className="font-sans text-sm font-semibold text-foreground">
                      {langItem.language}
                    </span>
                    <span className="self-start rounded border border-border/60 bg-surface px-2.5 py-1 font-mono text-xs text-foreground-muted sm:self-auto">
                      {langItem.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
