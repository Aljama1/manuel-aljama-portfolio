import { ProjectBlock } from "@/components/projects/ProjectBlock";
import { Section } from "@/components/ui/Section";
import type {
  HomeContent,
  Locale,
  ProjectDefinition,
  UiContent,
} from "@/content";

interface ProjectsSectionProps {
  locale: Locale;
  content: HomeContent["projects"];
  projects: Record<"trace" | "asisteo", ProjectDefinition>;
  actions: Pick<UiContent["actions"], "viewTrace">;
}

export function ProjectsSection({
  locale,
  content,
  projects,
  actions,
}: ProjectsSectionProps) {
  return (
    <Section
      id="projects"
      className="scroll-mt-20 border-y border-border/60 bg-surface/30"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl">
          {content.title}
        </h2>
      </div>
      <div className="mt-12 space-y-5 sm:mt-16 sm:space-y-8">
        <ProjectBlock
          project={projects.trace}
          locale={locale}
          content={content.trace}
          ctaLabel={actions.viewTrace}
          index="01"
        />
        <ProjectBlock
          project={projects.asisteo}
          locale={locale}
          content={content.asisteo}
          ctaLabel={actions.viewTrace}
          index="02"
        />
      </div>
    </Section>
  );
}
