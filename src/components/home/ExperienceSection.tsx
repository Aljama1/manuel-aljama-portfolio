import { Section } from "@/components/ui/Section";
import type { ExperienceContent } from "@/content";

interface ExperienceSectionProps {
  content: ExperienceContent;
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const { education, languages, targetRole } = content;

  return (
    <Section id="experience" className="scroll-mt-20 border-b border-border/60">
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Timeline / Educación */}
        <div className="space-y-8 lg:col-span-7">
          <h3 className="font-mono text-xs font-semibold tracking-[0.16em] text-foreground-muted uppercase">
            {education.heading}
          </h3>

          <div className="space-y-8 border-l border-border/80 pl-6 sm:pl-8">
            {education.items.map((item) => (
              <article key={item.title} className="relative">
                {/* Indicador de nodo en la timeline */}
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-background bg-primary sm:-left-[39px]"
                />

                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-primary">
                    {item.period}
                  </span>
                  {item.tag ? (
                    <span className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[10px] font-medium text-foreground-muted">
                      {item.tag}
                    </span>
                  ) : null}
                </div>

                <h4 className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h4>

                <p className="mt-1 font-mono text-xs text-foreground-muted">
                  {item.institutionOrContext}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Columna lateral: Idiomas & Objetivo profesional */}
        <div className="space-y-6 lg:col-span-5">
          {/* Tarjeta de Objetivo profesional */}
          <aside className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <span className="font-mono text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              {targetRole.label}
            </span>
            <p className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground">
              {targetRole.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {targetRole.description}
            </p>
          </aside>

          {/* Tarjeta de Idiomas */}
          <aside className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <span className="font-mono text-xs font-semibold tracking-[0.16em] text-foreground-muted uppercase">
              {languages.heading}
            </span>
            <ul className="mt-4 space-y-4 divide-y divide-border/60">
              {languages.items.map((langItem, idx) => (
                <li
                  key={langItem.language}
                  className={`flex flex-col justify-between gap-1 sm:flex-row sm:items-center ${
                    idx > 0 ? "pt-4" : ""
                  }`}
                >
                  <span className="font-sans text-sm font-semibold text-foreground">
                    {langItem.language}
                  </span>
                  <span className="font-mono text-xs text-foreground-muted">
                    {langItem.level}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </Section>
  );
}
