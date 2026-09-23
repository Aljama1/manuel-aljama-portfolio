import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
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
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-8">
          {content.intro}
        </p>
      </div>

      {/* Cadena secuencial de etapas */}
      <nav
        aria-label={content.title}
        className="mt-12 [scrollbar-width:none] overflow-x-auto pt-2 pb-4 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <ol className="flex min-w-max items-center gap-2 font-mono text-xs font-medium tracking-[0.14em] text-foreground-muted">
          {steps.map((step, idx) => (
            <li key={step.key} className="flex items-center gap-2">
              <span className="rounded border border-border bg-surface px-2.5 py-1 text-foreground transition-colors">
                {step.key}
              </span>
              {idx < steps.length - 1 ? (
                <ArrowRight
                  className="h-3.5 w-3.5 text-foreground-muted"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </nav>

      {/* Grid de etapas explicadas */}
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {steps.map((step) => (
          <li
            key={step.key}
            className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-foreground-muted/40"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
                  {step.number}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-foreground-muted uppercase">
                  {step.key}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold tracking-[-0.03em] text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Cierre conceptual */}
      <div className="mt-12 rounded-lg border border-border/80 bg-surface/50 p-6 text-center sm:p-8">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-foreground-muted uppercase">
          {content.cyclePhilosophyLabel}
        </p>
        <p className="mt-2 font-heading text-xl font-bold tracking-[-0.03em] text-primary sm:text-2xl">
          {content.closing}
        </p>
      </div>
    </Section>
  );
}
