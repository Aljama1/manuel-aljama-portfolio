import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { profile, uiContent } from "@/content";

interface FooterProps {
  lang: "es" | "en";
}

export function Footer({ lang }: FooterProps) {
  const content = uiContent[lang];
  const anchorPrefix = lang === "en" ? "/en" : "";

  const navLinks = [
    { label: content.nav.work, href: `${anchorPrefix}#projects` },
    { label: content.nav.about, href: `${anchorPrefix}#about` },
    { label: content.nav.howIBuild, href: `${anchorPrefix}#how-i-build` },
    { label: content.nav.contact, href: `${anchorPrefix}#contact` },
  ];

  const socialLinks = [
    ...(profile.githubUrl
      ? [
          {
            label: content.actions.github,
            href: profile.githubUrl,
            external: true,
          },
        ]
      : []),
    ...(profile.linkedInUrl
      ? [
          {
            label: "LinkedIn",
            href: profile.linkedInUrl,
            external: true,
          },
        ]
      : []),
    ...(profile.email
      ? [
          {
            label: "Email",
            href: `mailto:${profile.email}`,
            external: false,
          },
        ]
      : []),
  ];

  return (
    <footer className="w-full border-t border-border/60 bg-surface/40 py-12 text-sm transition-colors">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Identidad y tagline */}
        <div className="flex flex-col gap-2">
          <span className="font-heading text-base font-bold tracking-tight text-foreground">
            {content.brand}
          </span>
          <span className="font-mono text-xs text-foreground-muted">
            {content.role}
          </span>
          <p className="mt-1 text-xs text-foreground-muted">
            {content.footer.tagline}
          </p>
        </div>

        {/* Enlaces de navegación y sociales */}
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          {/* Navegación por secciones */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-foreground-muted uppercase">
              {content.footer.sectionsHeading}
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Enlaces sociales */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-foreground-muted uppercase">
              {content.footer.connectHeading}
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-xs text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright inferior */}
      <Container className="mt-8 flex flex-col justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-foreground-muted">
          {content.footer.copyright}
        </p>
        <Link
          href={`${anchorPrefix}/privacy`}
          className="font-mono text-xs text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {content.footer.privacyPolicy}
        </Link>
      </Container>
    </footer>
  );
}
