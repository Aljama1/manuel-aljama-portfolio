import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { ContactContent, Profile } from "@/content";

interface ContactSectionProps {
  content: ContactContent;
  profile: Profile;
}

export function ContactSection({ content, profile }: ContactSectionProps) {
  return (
    <Section id="contact" className="scroll-mt-20">
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl">
            {content.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        {/* Canales de contacto directos */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {profile.email ? (
            <Button
              href={`mailto:${profile.email}`}
              variant="primary"
              className="gap-2 px-6 py-3"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{profile.email}</span>
            </Button>
          ) : null}

          {profile.githubUrl ? (
            <Button
              href={profile.githubUrl}
              variant="secondary"
              className="gap-2"
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
              className="gap-2"
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
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium text-foreground-muted transition-colors duration-150 hover:bg-surface/60 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{content.cvLabel}</span>
            </a>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
