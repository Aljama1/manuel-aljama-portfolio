import Image from "next/image";
import { Download, ArrowUpRight, ArrowRight } from "lucide-react";
import { TraceHeroCard } from "@/components/hero/TraceHeroCard";
import { TechStackBentoCard } from "@/components/hero/TechStackBentoCard";
import { EngineeringPhilosophyCard } from "@/components/hero/EngineeringPhilosophyCard";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { HomeContent, UiContent, Profile, Locale } from "@/content";

interface HeroProps {
  name: string;
  role: string;
  githubUrl: string;
  content: HomeContent["hero"];
  actions: Pick<
    UiContent["actions"],
    "github" | "viewProjects" | "downloadCv" | "viewTrace"
  >;
  locale?: Locale;
  profile?: Profile;
}

export function Hero({
  name,
  role,
  githubUrl,
  content,
  actions,
  locale = "es",
  profile,
}: HeroProps) {
  const photoSrc = profile?.photo?.src || "/assets/profile/manuel-foto.png";
  const photoAlt = profile?.photo?.alt?.[locale] || name;
  const cvUrl = profile?.cvUrl || "/assets/cv/manuel-aljama-cv.pdf";

  return (
    <Section
      className="overflow-hidden py-8 sm:py-12 lg:py-16"
      containerClassName="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-12 lg:gap-5">
        {/* Card 1: Identity & Conversion (Profile Card) */}
        <div
          style={{ "--stagger-index": 0 } as React.CSSProperties}
          className="animate-hero-card relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-md sm:p-7 md:col-span-5 lg:col-span-4"
        >
          {/* Subtle atmospheric ambient glow */}
          <div
            className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent blur-2xl"
            aria-hidden="true"
          />

          <div className="relative">
            {/* Centered Avatar with Perimetral Diffuse Halo */}
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/25 to-secondary/20 blur-md"
                aria-hidden="true"
              />
              <div className="relative h-full w-full shrink-0 overflow-hidden rounded-full border-2 border-border/80 bg-surface-raised shadow-md">
                <Image
                  src={photoSrc}
                  alt={photoAlt}
                  fill
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name, Role & Location */}
            <div className="mt-4 text-center">
              <p className="font-heading text-lg font-bold tracking-wider text-foreground uppercase sm:text-xl">
                {name}
              </p>
              <h1 className="mt-1 font-sans text-sm font-medium text-foreground-muted">
                {role}
              </h1>
              <p className="mt-0.5 text-xs text-foreground-muted">
                Sevilla, España
              </p>
            </div>

            {/* Live Availability Badge (Live status pill) */}
            <div className="mt-3 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs text-primary shadow-xs transition-colors hover:border-primary/40">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span>
                  {locale === "es"
                    ? "Disponible para trabajar"
                    : "Available for work"}
                </span>
              </div>
            </div>

            {/* Bio / Supporting Copy */}
            <p className="mt-3.5 text-center text-xs leading-relaxed text-foreground-muted sm:text-sm">
              {content.supportingCopy}
            </p>
          </div>

          {/* Action CTAs: Full-width CV + 2-col Grid for Projects & GitHub */}
          <div className="relative mt-5 flex flex-col gap-2 border-t border-border/60 pt-4">
            {cvUrl && (
              <Button
                href={cvUrl}
                external
                variant="secondary"
                className="w-full justify-center gap-2 rounded-xl py-2.5 text-xs font-medium transition-all duration-150 hover:border-primary/40 hover:bg-surface-raised active:scale-[0.98]"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                {actions.downloadCv ||
                  (locale === "es"
                    ? "Descargar CV (PDF)"
                    : "Download CV (PDF)")}
              </Button>
            )}

            <div className="grid w-full grid-cols-2 gap-2">
              <Button
                href="#projects"
                size="sm"
                className="justify-center gap-1.5 rounded-xl bg-foreground text-xs font-medium text-background shadow-xs transition-all duration-150 hover:bg-foreground/90 active:scale-[0.98]"
              >
                {actions.viewProjects}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>

              <Button
                href={githubUrl}
                external
                size="sm"
                variant="secondary"
                className="justify-center gap-1.5 rounded-xl text-xs font-medium transition-all duration-150 hover:border-primary/40 hover:bg-surface-raised active:scale-[0.98]"
              >
                {actions.github}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2: Trace Showcase Card */}
        <div
          style={{ "--stagger-index": 1 } as React.CSSProperties}
          className="animate-hero-card flex h-full flex-col md:col-span-7 lg:col-span-8"
        >
          <TraceHeroCard locale={locale} viewTraceLabel={actions.viewTrace} />
        </div>

        {/* Card 3: Engineering Stack (50% width on md/lg) */}
        <div
          style={{ "--stagger-index": 2 } as React.CSSProperties}
          className="animate-hero-card flex h-full flex-col md:col-span-6 lg:col-span-6"
        >
          <TechStackBentoCard locale={locale} />
        </div>

        {/* Card 4: Engineering Discipline & DAM (50% width on md/lg) */}
        <div
          style={{ "--stagger-index": 3 } as React.CSSProperties}
          className="animate-hero-card flex h-full flex-col md:col-span-6 lg:col-span-6"
        >
          <EngineeringPhilosophyCard locale={locale} />
        </div>
      </div>
    </Section>
  );
}
