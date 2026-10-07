import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ContactContent, Profile } from "@/content";

interface ContactSectionProps {
  content: ContactContent;
  profile: Profile;
}

export function ContactSection({ content, profile }: ContactSectionProps) {
  return (
    <Section id="contact" className="scroll-mt-20">
      <ScrollReveal className="card-glass relative overflow-hidden rounded-3xl border border-border/80 bg-surface/90 p-8 shadow-2xl sm:p-12 lg:p-16">
        {/* Halos ambientales multicapa para cierre inmersivo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--primary)_8%,transparent),transparent_60%)]"
        />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)] motion-safe:animate-pulse"
              aria-hidden="true"
            />
            <span>{content.eyebrow}</span>
          </div>

          <h2 className="mt-5 font-heading text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl">
            {content.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        {/* Canales de contacto directos con alta jerarquía */}
        <div className="relative z-10 mt-10 flex flex-wrap items-center gap-4">
          {profile.email ? (
            <Button
              href={`mailto:${profile.email}`}
              variant="primary"
              className="interactive-tactile gap-2.5 px-6 py-3 shadow-md hover:shadow-primary/20"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{profile.email}</span>
            </Button>
          ) : null}

          {profile.githubUrl ? (
            <Button
              href={profile.githubUrl}
              variant="secondary"
              className="interactive-tactile gap-2 px-5 py-3 hover:border-foreground hover:text-foreground hover:shadow-md"
              external
            >
              <span>{content.githubLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : null}

          {profile.linkedInUrl ? (
            <Button
              href={profile.linkedInUrl}
              variant="secondary"
              className="interactive-tactile gap-2 px-5 py-3 hover:border-[#0a66c2]/60 hover:text-[#0a66c2] hover:shadow-[0_0_15px_rgba(10,102,194,0.2)]"
              external
            >
              <span>{content.linkedinLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : null}

          {profile.cvUrl ? (
            <a
              href={profile.cvUrl}
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border/80 bg-surface-raised px-5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-surface hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{content.cvLabel}</span>
            </a>
          ) : null}
        </div>
      </ScrollReveal>
    </Section>
  );
}
