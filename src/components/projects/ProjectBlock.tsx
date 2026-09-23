import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { HomeProjectContent, Locale, ProjectDefinition } from "@/content";

interface ProjectBlockProps {
  project: ProjectDefinition;
  locale: Locale;
  content: HomeProjectContent;
  ctaLabel: string;
  index: string;
}

export function ProjectBlock({
  project,
  locale,
  content,
  ctaLabel,
  index,
}: ProjectBlockProps) {
  const caseStudyPath = project.caseStudyPath?.[locale];
  const isTrace = project.id === "trace";

  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-200 hover:border-foreground-muted/50">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-end lg:gap-10 lg:p-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-foreground-muted">
            {index}
          </p>
          <p
            className={`mt-8 font-mono text-xs font-medium tracking-[0.16em] ${
              isTrace ? "text-primary" : "text-secondary"
            }`}
          >
            {content.status}
          </p>
          <h3 className="mt-3 font-heading text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            {content.title}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-foreground-muted sm:text-lg">
            {content.description}
          </p>
          {caseStudyPath ? (
            <Button href={caseStudyPath} variant="secondary" className="mt-8">
              {ctaLabel}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
          ) : null}
        </div>

        <div
          aria-hidden="true"
          className={`relative min-h-48 overflow-hidden rounded-md border border-border/80 p-5 lg:col-span-5 ${
            isTrace ? "bg-primary/5" : "bg-secondary/5"
          }`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49.5%,var(--border)_50%,transparent_50.5%)] opacity-45" />
          <div className="absolute inset-5 border border-border/60" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="font-mono text-xs tracking-[0.18em] text-foreground-dim">
              {isTrace ? "PROJECT / 01" : "PROJECT / 02"}
            </span>
            <span
              className={`font-heading text-3xl font-bold tracking-[-0.05em] transition-transform duration-200 motion-safe:group-hover:-translate-y-1 ${
                isTrace ? "text-primary" : "text-secondary"
              }`}
            >
              {content.title}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
