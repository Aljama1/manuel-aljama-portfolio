import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Shield,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { CaseStudyArchitectureDiagram } from "./CaseStudyArchitectureDiagram";
import { CaseStudyFlowDiagram } from "./CaseStudyFlowDiagram";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Locale, TraceCaseStudyContent } from "@/content";

interface CaseStudyPageProps {
  content: TraceCaseStudyContent;
  locale: Locale;
}

export function CaseStudyPage({ content, locale }: CaseStudyPageProps) {
  const {
    hero,
    overview,
    problem,
    solution,
    productFlow,
    architecture,
    keyDecisions,
    challenges,
    testing,
    security,
    result,
    whatILearned,
    deepDive,
    navigation,
  } = content;

  return (
    <article className="min-h-screen bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <header className="relative border-b border-border/70 bg-surface/30 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Button
              href={hero.backHref}
              variant="ghost"
              size="sm"
              className="-ml-3 text-foreground-muted hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {hero.backLabel}
            </Button>
            <span className="font-mono text-xs tracking-wider text-foreground-muted uppercase">
              {hero.breadcrumb}
            </span>
          </div>

          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
                {hero.eyebrow}
              </span>
              <span className="inline-flex items-center rounded-xs border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-medium text-primary">
                {hero.status}
              </span>
            </div>

            <h1 className="mt-4 font-heading text-5xl font-bold tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {hero.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xs border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href={hero.githubUrl}
                external
                variant="primary"
                size="md"
              >
                {hero.githubLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#overview" variant="secondary" size="md">
                {locale === "es" ? "Explorar case study" : "Explore case study"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* 2. OVERVIEW SECTION */}
      <Section id="overview" className="border-b border-border/60">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            {overview.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {overview.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-8">
            {overview.summary.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-foreground-muted sm:text-lg"
              >
                {para}
              </p>
            ))}
          </div>

          <aside
            className="rounded-lg border border-border bg-surface/60 p-6 lg:col-span-4"
            aria-label="Metadatos del proyecto"
          >
            <h3 className="font-mono text-xs font-semibold tracking-wider text-foreground-muted uppercase">
              {locale === "es" ? "Ficha técnica" : "Project Specs"}
            </h3>
            <dl className="mt-4 space-y-4">
              {overview.metadata.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-border/40 pb-3 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-xs text-foreground-muted uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-sans text-sm font-medium text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {/* 3. THE PROBLEM SECTION */}
      <Section id="problem" className="border-b border-border/60 bg-surface/20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary">
            {problem.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {problem.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {problem.intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problem.points.map((point) => (
            <div
              key={point.title}
              className="rounded-lg border border-border bg-surface/80 p-6 transition-colors hover:border-foreground-muted/40"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. THE SOLUTION SECTION */}
      <Section id="solution" className="border-b border-border/60">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            {solution.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {solution.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {solution.intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solution.layers.map((layer, idx) => (
            <div
              key={layer.role}
              className="relative flex flex-col justify-between rounded-lg border border-border bg-surface/70 p-5"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-primary">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {layer.role}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. PRODUCT FLOW SECTION */}
      <Section
        id="product-flow"
        className="border-b border-border/60 bg-surface/20"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary">
            {productFlow.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {productFlow.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {productFlow.intro}
          </p>
        </div>

        <div className="mt-10">
          <CaseStudyFlowDiagram steps={productFlow.steps} />
        </div>
      </Section>

      {/* 6. ARCHITECTURE SECTION */}
      <Section id="architecture" className="border-b border-border/60">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            {architecture.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {architecture.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {architecture.intro}
          </p>
        </div>

        <div className="mt-10">
          <CaseStudyArchitectureDiagram
            webPwa={architecture.webPwa}
            mobileBridge={architecture.mobileBridge}
            backend={architecture.backend}
            integrity={architecture.integrity}
          />
        </div>
      </Section>

      {/* 7. KEY ENGINEERING DECISIONS SECTION */}
      <Section
        id="decisions"
        className="border-b border-border/60 bg-surface/20"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary">
            {keyDecisions.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {keyDecisions.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {keyDecisions.intro}
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {keyDecisions.decisions.map((decision) => (
            <div
              key={decision.id}
              id={decision.id}
              className="scroll-mt-24 rounded-xl border border-border bg-surface/80 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-primary">
                    {decision.number}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    {decision.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-foreground-muted">
                  {decision.subtitle}
                </span>
              </div>

              {decision.legalDisclaimer && (
                <div className="mt-4 flex items-start gap-3 rounded-md border border-border bg-surface-raised p-4">
                  <AlertTriangle
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div className="text-xs leading-relaxed">
                    <span className="font-mono font-semibold tracking-wider text-foreground uppercase">
                      {locale === "es"
                        ? "Aviso técnico y legal"
                        : "Technical and Legal Disclaimer"}
                    </span>
                    <p className="mt-1 text-foreground-muted">
                      {decision.legalDisclaimer}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-foreground-muted uppercase">
                    {locale === "es"
                      ? "Contexto del problema"
                      : "Problem Context"}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {decision.context}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-foreground-muted uppercase">
                    {locale === "es"
                      ? "Decisión implementada"
                      : "Decision Taken"}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {decision.decision}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 border-t border-border/40 pt-4 md:grid-cols-2">
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                    {locale === "es"
                      ? "Justificación técnica"
                      : "Technical Rationale"}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                    {decision.justification}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-secondary uppercase">
                    {locale === "es"
                      ? "Trade-off asumido"
                      : "Trade-off Assumed"}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                    {decision.tradeOff}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. CHALLENGES & SOLUTIONS SECTION */}
      <Section id="challenges" className="border-b border-border/60">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            {challenges.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {challenges.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {challenges.intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {challenges.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-lg border border-border bg-surface/70 p-6"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-secondary">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-[11px] text-foreground-muted uppercase">
                    {locale === "es" ? "Reto:" : "Challenge:"}
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                    {item.challenge}
                  </p>
                </div>
              </div>

              <div className="mt-4 border-t border-border/60 pt-3">
                <span className="font-mono text-[11px] text-primary uppercase">
                  {locale === "es"
                    ? "Solución técnica:"
                    : "Technical Solution:"}
                </span>
                <p className="mt-1 text-xs leading-relaxed text-foreground">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. TESTING & QUALITY SECTION */}
      <Section id="testing" className="border-b border-border/60 bg-surface/20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary">
            {testing.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {testing.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {testing.intro}
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                {locale === "es"
                  ? "Pruebas automatizadas de unidad"
                  : "Automated Unit Tests"}
              </span>
              <p className="mt-1 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                {testing.testSummary.countLabel}
              </p>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-foreground-muted">
              {testing.testSummary.note}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface/70 p-6">
            <h3 className="font-heading text-base font-bold text-foreground">
              {locale === "es"
                ? "Áreas críticas cubiertas por tests"
                : "Critical Areas Covered by Tests"}
            </h3>
            <ul className="mt-4 space-y-3">
              {testing.testedAreas.map((area) => (
                <li
                  key={area.area}
                  className="border-b border-border/40 pb-2.5 last:border-b-0 last:pb-0"
                >
                  <span className="font-mono text-xs font-semibold text-primary">
                    {area.area}
                  </span>
                  <p className="mt-1 text-xs text-foreground-muted">
                    {area.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-surface/70 p-6">
            <h3 className="font-heading text-base font-bold text-foreground">
              {locale === "es"
                ? "Garantías de compilación y CI"
                : "Build & CI Guarantees"}
            </h3>
            <ul className="mt-4 space-y-3">
              {testing.qualityGates.map((gate) => (
                <li
                  key={gate.title}
                  className="border-b border-border/40 pb-2.5 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-xs font-semibold text-foreground">
                      {gate.title}
                    </span>
                  </div>
                  <p className="mt-1 pl-6 text-xs text-foreground-muted">
                    {gate.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 10. SECURITY & DATA SECTION */}
      <Section id="security" className="border-b border-border/60">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            {security.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {security.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {security.intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {security.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-border bg-surface/70 p-6"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-primary">
                <Shield className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 11. RESULT SECTION */}
      <Section id="result" className="border-b border-border/60 bg-surface/20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary">
            {result.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {result.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {result.intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {result.deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-surface/80 p-5"
            >
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 12. WHAT I LEARNED SECTION */}
      <Section id="learnings" className="border-b border-border/60">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            {whatILearned.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {whatILearned.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {whatILearned.intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {whatILearned.learnings.map((learning) => (
            <div
              key={learning.title}
              className="rounded-lg border border-border bg-surface/70 p-6"
            >
              <h3 className="font-heading text-base font-bold text-foreground">
                {learning.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {learning.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 13. TECHNICAL DEEP DIVE SECTION */}
      <Section
        id="deep-dive"
        className="border-b border-border/60 bg-surface/20"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-secondary">
            {deepDive.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {deepDive.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {deepDive.intro}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deepDive.links.map((link) => (
            <a
              key={link.anchor}
              href={link.anchor}
              className="group flex flex-col justify-between rounded-lg border border-border bg-surface/60 p-4 transition-colors hover:border-foreground-muted/40 hover:bg-surface"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-secondary">
                  {link.title}
                </span>
                <p className="mt-1 text-xs text-foreground-muted">
                  {link.description}
                </p>
              </div>
              <span className="mt-3 inline-flex items-center font-mono text-xs text-foreground-muted transition-colors group-hover:text-foreground">
                {locale === "es" ? "Ir a sección" : "Jump to section"} →
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* 14. PROJECT NAVIGATION SECTION (NO Asisteo link as requested) */}
      <Section id="navigation" className="py-20 sm:py-28">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">
            TRACE · FINAL REVIEW
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {locale === "es"
              ? "Explora el código o vuelve al inicio"
              : "Explore the Code or Return Home"}
          </h2>
          <p className="mt-3 max-w-lg text-sm text-foreground-muted">
            {locale === "es"
              ? "El repositorio de Trace contiene la suite de tests, la configuración de Angular 20, reglas de Firestore y la implementación completa."
              : "Trace's repository contains the test suite, Angular 20 configuration, Firestore rules, and the complete implementation."}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={navigation.backHref} variant="secondary" size="md">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {navigation.backLabel}
            </Button>
            <Button
              href={navigation.githubUrl}
              external
              variant="primary"
              size="md"
            >
              {navigation.githubLabel}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>
    </article>
  );
}
