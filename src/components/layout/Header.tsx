"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { profile, uiContent } from "@/content";

interface HeaderProps {
  lang: "es" | "en";
}

const emptySubscribe = () => () => {};

export function Header({ lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const rawPathname = usePathname();
  const pathname = rawPathname || (lang === "en" ? "/en" : "/");

  const content = uiContent[lang];

  // Cerrar con Escape y bloquear scroll del body
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const homePath = lang === "en" ? "/en" : "/";
  const anchorPrefix = lang === "en" ? "/en" : "";

  // Determinar URL correspondiente para el selector ES/EN
  const counterpartPath = pathname.startsWith("/en")
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname === "/"
      ? "/en"
      : `/en${pathname}`;

  const navLinks = [
    { label: content.nav.work, href: `${anchorPrefix}#projects` },
    { label: content.nav.about, href: `${anchorPrefix}#about` },
    { label: content.nav.howIBuild, href: `${anchorPrefix}#how-i-build` },
    { label: content.nav.contact, href: `${anchorPrefix}#contact` },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md transition-colors">
      <Container className="flex h-16 items-center justify-between">
        {/* Marca / Brand */}
        <Link
          href={homePath}
          className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {content.brand}
        </Link>

        {/* Navegación Desktop */}
        <nav
          className="hidden md:flex md:items-center md:gap-7"
          aria-label={content.nav.ariaLabel}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Acciones Desktop */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {content.actions.github}
            <ArrowUpRight
              className="h-3.5 w-3.5 opacity-70"
              aria-hidden="true"
            />
          </a>

          {profile.cvUrl ? (
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Download className="h-3 w-3 opacity-70" aria-hidden="true" />
              {content.actions.downloadCv}
            </a>
          ) : null}

          {/* Selector de idioma */}
          <Link
            href={counterpartPath}
            className="inline-flex items-center rounded-sm border border-border px-2 py-1 font-mono text-xs font-medium text-foreground-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={content.actions.switchLanguage}
          >
            <span className={lang === "es" ? "font-semibold text-primary" : ""}>
              ES
            </span>
            <span className="mx-1 text-foreground-muted">/</span>
            <span className={lang === "en" ? "font-semibold text-primary" : ""}>
              EN
            </span>
          </Link>

          {/* Selector de tema */}
          <ThemeToggle lang={lang} />
        </div>

        {/* Botón hamburguesa móvil */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle lang={lang} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? content.nav.closeMenu : content.nav.openMenu
            }
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Menú móvil desplegable montado en document.body */}
      {mounted && mobileMenuOpen
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={content.nav.menuAriaLabel}
              className="fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col overflow-y-auto border-b border-border bg-background px-6 py-6 md:hidden"
            >
              <nav
                className="flex flex-col gap-5"
                aria-label={content.nav.mobileAriaLabel}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="font-heading text-xl font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="my-6 h-px w-full bg-border" />

              <div className="flex flex-col gap-4">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-between text-base font-medium text-foreground-muted hover:text-foreground"
                >
                  <span>{content.actions.github}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                {profile.cvUrl ? (
                  <a
                    href={profile.cvUrl}
                    download
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-between text-base font-medium text-foreground-muted hover:text-foreground"
                  >
                    <span>{content.actions.downloadCv}</span>
                    <Download className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-foreground-muted">
                    {content.nav.languageLabel}
                  </span>
                  <Link
                    href={counterpartPath}
                    onClick={closeMobileMenu}
                    className="inline-flex items-center rounded-sm border border-border px-3 py-1.5 font-mono text-sm font-medium text-foreground-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    <span
                      className={
                        lang === "es" ? "font-semibold text-primary" : ""
                      }
                    >
                      ES
                    </span>
                    <span className="mx-1.5 text-foreground-muted">/</span>
                    <span
                      className={
                        lang === "en" ? "font-semibold text-primary" : ""
                      }
                    >
                      EN
                    </span>
                  </Link>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
