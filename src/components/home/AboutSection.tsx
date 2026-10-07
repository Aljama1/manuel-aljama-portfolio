import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
      <ScrollReveal className="max-w-3xl">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-primary">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
          {content.title}
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Columna izquierda: texto editorial */}
        <div className="space-y-6 lg:col-span-7">
          <ScrollReveal
            delayMs={100}
            className="space-y-5 text-base leading-relaxed text-foreground-muted sm:text-lg sm:leading-8"
          >
            {content.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </ScrollReveal>
        </div>

        {/* Columna derecha: foto en marco técnico satinado y micro-tarjetas de facts */}
        <ScrollReveal delayMs={200} className="space-y-6 lg:col-span-5">
          {photo ? (
            <div className="group card-glass relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-white/[0.04] via-surface to-surface-raised p-2">
              {/* Marco técnico satinado con halo ambiental */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60 bg-surface sm:aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt[locale]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover object-center contrast-[1.04] grayscale filter transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md border border-border/80 bg-surface/90 px-2.5 py-1 backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary motion-safe:animate-pulse" />
                  <span className="font-mono text-[10px] font-medium tracking-widest text-foreground-muted uppercase">
                    DEVELOPER // DOSSIER
                  </span>
                </div>
              </div>
            </div>
          ) : null}

          {/* Micro-tarjetas de hechos con bordes orgánicos y acentos sutiles */}
          <aside aria-label={content.eyebrow}>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* DAM */}
              <div className="card-glass flex flex-col justify-between rounded-xl p-4 transition-all duration-200 hover:border-primary/40">
                <dt className="font-mono text-[11px] font-medium tracking-[0.16em] text-foreground-muted uppercase">
                  {facts.dam.label}
                </dt>
                <dd className="mt-2 font-sans text-sm leading-snug font-semibold text-foreground">
                  {facts.dam.value}
                </dd>
              </div>

              {/* FOCUS */}
              <div className="card-glass flex flex-col justify-between rounded-xl p-4 transition-all duration-200 hover:border-primary/40">
                <dt className="font-mono text-[11px] font-medium tracking-[0.16em] text-foreground-muted uppercase">
                  {facts.focus.label}
                </dt>
                <dd className="mt-2 font-sans text-sm leading-snug font-semibold text-foreground">
                  {facts.focus.value}
                </dd>
              </div>

              {/* CURRENTLY */}
              <div className="card-glass flex flex-col justify-between rounded-xl p-4 transition-all duration-200 hover:border-primary/40">
                <dt className="font-mono text-[11px] font-medium tracking-[0.16em] text-foreground-muted uppercase">
                  {facts.currently.label}
                </dt>
                <dd className="mt-2 flex items-center gap-2 font-sans text-sm leading-snug font-semibold text-foreground">
                  <span
                    className="inline-block h-2 w-2 shrink-0 rounded-full bg-primary motion-safe:animate-pulse"
                    aria-hidden="true"
                  />
                  <span>{facts.currently.value}</span>
                </dd>
              </div>

              {/* LOOKING FOR */}
              <div className="card-glass flex flex-col justify-between rounded-xl border-primary/25 bg-primary/[0.04] p-4 transition-all duration-200 hover:border-primary/50">
                <dt className="font-mono text-[11px] font-medium tracking-[0.16em] text-foreground-muted uppercase">
                  {facts.lookingFor.label}
                </dt>
                <dd className="mt-2 font-sans text-sm leading-snug font-semibold text-primary">
                  {facts.lookingFor.value}
                </dd>
              </div>
            </dl>
          </aside>
        </ScrollReveal>
      </div>
    </Section>
  );
}
