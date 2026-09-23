import { Section } from "@/components/ui/Section";
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
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Grupo 1: Built with */}
        <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-medium tracking-[0.18em] text-primary uppercase">
                Grupo 01
              </span>
              <span className="font-mono text-xs text-foreground-muted">
                {builtWith.items.length} tecnologías
              </span>
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground">
              {builtWith.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              {builtWith.description}
            </p>

            <ul
              aria-label={builtWith.title}
              className="mt-8 flex flex-wrap gap-2"
            >
              {builtWith.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface-raised px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-primary/50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Grupo 2: Currently exploring */}
        <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-medium tracking-[0.18em] text-secondary uppercase">
                Grupo 02
              </span>
              <span className="font-mono text-xs text-foreground-muted">
                {exploring.items.length} áreas
              </span>
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground">
              {exploring.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              {exploring.description}
            </p>

            <ul
              aria-label={exploring.title}
              className="mt-8 flex flex-wrap gap-2"
            >
              {exploring.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-secondary/30 bg-secondary/5 px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-secondary/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
