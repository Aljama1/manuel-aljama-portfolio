import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CaseStudyArchitectureDiagram } from "@/components/case-study/CaseStudyArchitectureDiagram";
import { CaseStudyFlowDiagram } from "@/components/case-study/CaseStudyFlowDiagram";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { traceContent } from "@/content";

describe("Trace Case Study content model", () => {
  it("maintains 1:1 structural parity between Spanish and English content", () => {
    const es = traceContent.es;
    const en = traceContent.en;

    expect(Object.keys(es)).toEqual(Object.keys(en));
    expect(es.overview.metadata.length).toEqual(en.overview.metadata.length);
    expect(es.problem.points.length).toEqual(en.problem.points.length);
    expect(es.solution.layers.length).toEqual(en.solution.layers.length);

    expect(es.productFlow.steps.map((s) => s.stepNumber)).toEqual(
      en.productFlow.steps.map((s) => s.stepNumber),
    );
    expect(es.productFlow.steps.map((s) => s.role)).toEqual(
      en.productFlow.steps.map((s) => s.role),
    );

    expect(es.keyDecisions.decisions.map((d) => d.id)).toEqual(
      en.keyDecisions.decisions.map((d) => d.id),
    );
    expect(es.challenges.items.map((c) => c.id)).toEqual(
      en.challenges.items.map((c) => c.id),
    );

    expect(es.testing.testedAreas.length).toEqual(
      en.testing.testedAreas.length,
    );
    expect(es.testing.qualityGates.length).toEqual(
      en.testing.qualityGates.length,
    );
    expect(es.testing.testSummary.countLabel).toBeDefined();
    expect(en.testing.testSummary.countLabel).toBeDefined();

    expect(es.security.pillars.length).toEqual(en.security.pillars.length);
    expect(es.result.deliverables.length).toEqual(
      en.result.deliverables.length,
    );
    expect(es.whatILearned.learnings.length).toEqual(
      en.whatILearned.learnings.length,
    );

    expect(es.deepDive.links.map((l) => l.anchor)).toEqual(
      en.deepDive.links.map((l) => l.anchor),
    );

    expect(es.navigation.githubUrl).toBe("https://github.com/Aljama1/Trace");
    expect(en.navigation.githubUrl).toBe("https://github.com/Aljama1/Trace");
  });

  it("includes all 5 required technical decisions with proper disclaimers", () => {
    const requiredDecisions = [
      "mesa-uid",
      "realtime",
      "signals",
      "alergenos",
      "integridad-sha256",
    ];

    expect(traceContent.es.keyDecisions.decisions.map((d) => d.id)).toEqual(
      requiredDecisions,
    );
    expect(traceContent.en.keyDecisions.decisions.map((d) => d.id)).toEqual(
      requiredDecisions,
    );

    const esIntegrity = traceContent.es.keyDecisions.decisions.find(
      (d) => d.id === "integridad-sha256",
    );
    const enIntegrity = traceContent.en.keyDecisions.decisions.find(
      (d) => d.id === "integridad-sha256",
    );

    expect(esIntegrity?.legalDisclaimer).toBeDefined();
    expect(enIntegrity?.legalDisclaimer).toBeDefined();

    // No debe afirmar homologación Veri*Factu ni certificación AEAT como legal
    expect(esIntegrity?.legalDisclaimer).toContain(
      "NO constituye una homologación",
    );
    expect(enIntegrity?.legalDisclaimer).toContain("NOT certified or approved");
  });

  it("validates testing strategy existence and coherence without hardcoding an exact count invariant", () => {
    const esTesting = traceContent.es.testing;
    const enTesting = traceContent.en.testing;

    expect(esTesting.testedAreas.length).toBeGreaterThanOrEqual(4);
    expect(enTesting.testedAreas.length).toBeGreaterThanOrEqual(4);
    expect(esTesting.qualityGates.length).toBeGreaterThanOrEqual(2);
    expect(enTesting.qualityGates.length).toBeGreaterThanOrEqual(2);
    expect(typeof esTesting.testSummary.countLabel).toBe("string");
    expect(typeof enTesting.testSummary.countLabel).toBe("string");
  });

  it("does not include any link or CTA toward Asisteo", () => {
    const esJson = JSON.stringify(traceContent.es).toLowerCase();
    const enJson = JSON.stringify(traceContent.en).toLowerCase();

    expect(esJson).not.toContain("asisteo");
    expect(enJson).not.toContain("asisteo");
  });
});

describe("Trace Case Study presentation components", () => {
  it("renders CaseStudyPage in Spanish with all primary sections", () => {
    render(<CaseStudyPage content={traceContent.es} locale="es" />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Trace" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.overview.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.problem.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.solution.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.productFlow.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.architecture.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.keyDecisions.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.challenges.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.testing.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.security.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.result.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.es.whatILearned.title,
      }),
    ).toBeInTheDocument();

    const githubLinks = screen.getAllByRole("link", {
      name: new RegExp(traceContent.es.hero.githubLabel, "i"),
    });
    expect(githubLinks.length).toBeGreaterThanOrEqual(1);
    expect(githubLinks[0]).toHaveAttribute(
      "href",
      "https://github.com/Aljama1/Trace",
    );
  });

  it("renders CaseStudyPage in English with localized headings and no Spanish leakage", () => {
    render(<CaseStudyPage content={traceContent.en} locale="en" />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Trace" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.en.overview.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: traceContent.en.problem.title,
      }),
    ).toBeInTheDocument();

    expect(screen.queryByText("EL PROBLEMA")).toBeNull();
    expect(screen.queryByText("LA SOLUCIÓN")).toBeNull();
    expect(screen.queryByText("FLUJO DE PRODUCTO")).toBeNull();
  });

  it("renders CaseStudyFlowDiagram with localized strings and no Spanish leakage in English", () => {
    const { rerender } = render(
      <CaseStudyFlowDiagram
        steps={traceContent.en.productFlow.steps}
        subtitle={traceContent.en.productFlow.diagramSubtitle}
        legend={traceContent.en.productFlow.legend}
        ariaLabel={traceContent.en.productFlow.ariaLabel}
      />,
    );

    // English strings present
    expect(
      screen.getByText(traceContent.en.productFlow.diagramSubtitle),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Diner").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Staff").length).toBeGreaterThan(0);
    expect(screen.getAllByText("System").length).toBeGreaterThan(0);

    // Spanish strings must NOT be present
    expect(screen.queryByText(/Recorrido completo/i)).toBeNull();
    expect(screen.queryByText("Comensal")).toBeNull();
    expect(screen.queryByText("Personal")).toBeNull();
    expect(screen.queryByText("Sistema")).toBeNull();

    // Rerender with Spanish content
    rerender(
      <CaseStudyFlowDiagram
        steps={traceContent.es.productFlow.steps}
        subtitle={traceContent.es.productFlow.diagramSubtitle}
        legend={traceContent.es.productFlow.legend}
        ariaLabel={traceContent.es.productFlow.ariaLabel}
      />,
    );

    expect(
      screen.getByText(traceContent.es.productFlow.diagramSubtitle),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Comensal").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Personal").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Sistema").length).toBeGreaterThan(0);
  });

  it("renders CaseStudyArchitectureDiagram with localized strings and no Spanish leakage in English", () => {
    const { rerender } = render(
      <CaseStudyArchitectureDiagram
        webPwa={traceContent.en.architecture.webPwa}
        mobileBridge={traceContent.en.architecture.mobileBridge}
        backend={traceContent.en.architecture.backend}
        integrity={traceContent.en.architecture.integrity}
        subtitle={traceContent.en.architecture.diagramSubtitle}
        ariaLabel={traceContent.en.architecture.ariaLabel}
        techBadge={traceContent.en.architecture.techBadge}
        pipelineTag={traceContent.en.architecture.pipelineTag}
      />,
    );

    // English strings present
    expect(
      screen.getByText(traceContent.en.architecture.diagramSubtitle),
    ).toBeInTheDocument();
    expect(screen.getByText("Key components:")).toBeInTheDocument();
    expect(screen.getByText("Native capabilities:")).toBeInTheDocument();
    expect(screen.getByText("Firebase infrastructure:")).toBeInTheDocument();

    // Spanish strings must NOT be present
    expect(screen.queryByText(/Separación de capas/i)).toBeNull();
    expect(screen.queryByText("Componentes clave:")).toBeNull();
    expect(screen.queryByText("Capacidades nativas:")).toBeNull();
    expect(screen.queryByText("Infraestructura Firebase:")).toBeNull();

    // Rerender with Spanish content
    rerender(
      <CaseStudyArchitectureDiagram
        webPwa={traceContent.es.architecture.webPwa}
        mobileBridge={traceContent.es.architecture.mobileBridge}
        backend={traceContent.es.architecture.backend}
        integrity={traceContent.es.architecture.integrity}
        subtitle={traceContent.es.architecture.diagramSubtitle}
        ariaLabel={traceContent.es.architecture.ariaLabel}
        techBadge={traceContent.es.architecture.techBadge}
        pipelineTag={traceContent.es.architecture.pipelineTag}
      />,
    );

    expect(
      screen.getByText(traceContent.es.architecture.diagramSubtitle),
    ).toBeInTheDocument();
    expect(screen.getByText("Componentes clave:")).toBeInTheDocument();
    expect(screen.getByText("Capacidades nativas:")).toBeInTheDocument();
    expect(screen.getByText("Infraestructura Firebase:")).toBeInTheDocument();
  });
});
