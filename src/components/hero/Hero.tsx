import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { HomeContent, UiContent } from "@/content";

interface HeroProps {
  name: string;
  role: string;
  githubUrl: string;
  content: HomeContent["hero"];
  actions: Pick<UiContent["actions"], "github" | "viewProjects">;
}

export function Hero({ role, githubUrl, content, actions }: HeroProps) {
  return (
    <Section
      className="overflow-hidden py-12 sm:py-20 lg:py-28"
      containerClassName="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center"
    >
      <div className="relative z-10 flex w-full flex-col lg:col-span-5">
        <h1 className="font-heading text-5xl font-bold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
          {role}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
          {content.supportingCopy}
        </p>

        {/* PROOF BLOCK - Bridge between text and execution */}
        <div className="mt-8 mb-2 flex flex-col gap-6 border-y border-border/40 py-6 sm:flex-row sm:gap-12 lg:gap-8">
          <div className="flex-1 space-y-2.5">
            <p className="font-mono text-[10px] font-bold tracking-widest text-secondary uppercase">
              {content.proof.core.label}
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {content.proof.core.stack.map((item, i) => (
                <span key={item} className="flex items-center">
                  <span className="font-mono text-xs font-medium text-foreground">
                    {item}
                  </span>
                  {i < content.proof.core.stack.length - 1 && (
                    <span aria-hidden="true" className="mx-2 text-border">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-2.5">
            <p className="font-mono text-[10px] font-bold tracking-widest text-secondary uppercase">
              {content.proof.focus.label}
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {content.proof.focus.stack.map((item, i) => (
                <span key={item} className="flex items-center">
                  <span className="font-mono text-xs font-medium text-foreground">
                    {item}
                  </span>
                  {i < content.proof.focus.stack.length - 1 && (
                    <span aria-hidden="true" className="mx-2 text-border">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href="#projects"
            size="lg"
            className="group rounded-none shadow-none"
          >
            {actions.viewProjects}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Button>
          <Button
            href={githubUrl}
            external
            size="lg"
            variant="secondary"
            className="group rounded-none shadow-none"
          >
            {actions.github}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
      <div className="lg:col-span-7">
        <HeroVisual />
      </div>
    </Section>
  );
}
