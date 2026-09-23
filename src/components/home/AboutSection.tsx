import Image from "next/image";
import { Section } from "@/components/ui/Section";
import type { AboutContent, Locale, Profile } from "@/content";

interface AboutSectionProps {
  content: AboutContent;
  profile: Profile;
  locale: Locale;
}

export function AboutSection({ content, profile, locale }: AboutSectionProps) {
  const { facts } = content;
  const photo = profile.photo;

  return (
    <Section id="about" className="scroll-mt-20 border-b border-border/60">
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Columna izquierda: texto editorial */}
        <div className="space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-8 lg:col-span-7">
          {content.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>

        {/* Columna derecha: ficha breve (y foto solo si existe) */}
        <div className="space-y-6 lg:col-span-5">
          {photo ? (
            <div className="relative aspect-square w-32 overflow-hidden rounded-lg border border-border sm:w-40">
              <Image
                src={photo.src}
                alt={photo.alt[locale]}
                fill
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover"
              />
            </div>
          ) : null}

          <aside
            aria-label={content.eyebrow}
            className="rounded-lg border border-border bg-surface p-6 sm:p-8"
          >
            <dl className="space-y-6 divide-y divide-border/60">
              <div>
                <dt className="font-mono text-xs font-medium tracking-[0.16em] text-foreground-muted uppercase">
                  {facts.dam.label}
                </dt>
                <dd className="mt-1.5 font-sans text-sm font-semibold text-foreground sm:text-base">
                  {facts.dam.value}
                </dd>
              </div>

              <div className="pt-6">
                <dt className="font-mono text-xs font-medium tracking-[0.16em] text-foreground-muted uppercase">
                  {facts.focus.label}
                </dt>
                <dd className="mt-1.5 font-sans text-sm font-semibold text-foreground sm:text-base">
                  {facts.focus.value}
                </dd>
              </div>

              <div className="pt-6">
                <dt className="font-mono text-xs font-medium tracking-[0.16em] text-foreground-muted uppercase">
                  {facts.currently.label}
                </dt>
                <dd className="mt-1.5 flex items-center gap-2 font-sans text-sm font-semibold text-foreground sm:text-base">
                  <span
                    className="inline-block h-2 w-2 rounded-full bg-primary motion-safe:animate-pulse"
                    aria-hidden="true"
                  />
                  <span>{facts.currently.value}</span>
                </dd>
              </div>

              <div className="pt-6">
                <dt className="font-mono text-xs font-medium tracking-[0.16em] text-foreground-muted uppercase">
                  {facts.lookingFor.label}
                </dt>
                <dd className="mt-1.5 font-sans text-sm font-semibold text-primary sm:text-base">
                  {facts.lookingFor.value}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </Section>
  );
}
