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
        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:border-border/80 sm:p-7 md:col-span-5 lg:col-span-4">
          <div>
            {/* Centered Avatar */}
            <div className="relative mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-border/80 bg-surface-raised shadow-md sm:h-28 sm:w-28">
              <Image
                src={photoSrc}
                alt={photoAlt}
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
                priority
              />
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
                Málaga, España
              </p>
            </div>

            {/* Live Availability Badge (Sin "Remoto") */}
            <div className="mt-3 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                <span className="relative flex h-2 w-2">
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
          <div className="mt-5 flex flex-col gap-2 border-t border-border/60 pt-4">
            {cvUrl && (
              <Button
                href={cvUrl}
                external
                variant="secondary"
                className="w-full justify-center gap-2 rounded-xl py-2.5 text-xs font-medium"
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
                className="justify-center gap-1.5 rounded-xl bg-foreground text-xs font-medium text-background shadow-xs hover:bg-foreground/90"
              >
                {actions.viewProjects}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>

              <Button
                href={githubUrl}
                external
                size="sm"
                variant="secondary"
                className="justify-center gap-1.5 rounded-xl text-xs font-medium"
              >
                {actions.github}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2: Trace Showcase Card */}
        <div className="flex h-full flex-col md:col-span-7 lg:col-span-8">
          <TraceHeroCard locale={locale} viewTraceLabel={actions.viewTrace} />
        </div>

        {/* Card 3: Engineering Stack (50% width on md/lg) */}
        <div className="flex h-full flex-col md:col-span-6 lg:col-span-6">
          <TechStackBentoCard locale={locale} />
        </div>

        {/* Card 4: Engineering Discipline & DAM (50% width on md/lg) */}
        <div className="flex h-full flex-col md:col-span-6 lg:col-span-6">
          <EngineeringPhilosophyCard locale={locale} />
        </div>
      </div>
    </Section>
  );
}
