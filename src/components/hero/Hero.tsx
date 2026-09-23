import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { HomeContent, UiContent } from "@/content";

interface HeroProps {
  name: string;
  githubUrl: string;
  content: HomeContent["hero"];
  actions: Pick<UiContent["actions"], "github" | "viewProjects">;
}

export function Hero({ name, githubUrl, content, actions }: HeroProps) {
  return (
    <Section
      className="overflow-hidden py-16 sm:py-20 lg:py-28"
      containerClassName="grid items-center gap-12 lg:grid-cols-12 lg:gap-8"
    >
      <div className="max-w-2xl lg:col-span-6">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-primary">
          {name.toUpperCase()}
        </p>
        <h1 className="mt-5 font-heading text-5xl font-bold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
          {content.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
          {content.supportingCopy}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="#projects" size="lg">
            {actions.viewProjects}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href={githubUrl} external size="lg" variant="secondary">
            {actions.github}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
      <div className="lg:col-span-6">
        <HeroVisual />
      </div>
    </Section>
  );
}
