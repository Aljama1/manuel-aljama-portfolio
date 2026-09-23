import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { HomePage } from "@/components/home/HomePage";
import { homeContent, profile, projects, uiContent } from "@/content";

describe("Home content model", () => {
  it("maintains structural parity between Spanish and English for all sections", () => {
    expect(Object.keys(homeContent.es)).toEqual(Object.keys(homeContent.en));
    expect(Object.keys(homeContent.es.projects)).toEqual(
      Object.keys(homeContent.en.projects),
    );
    expect(Object.keys(homeContent.es.about)).toEqual(
      Object.keys(homeContent.en.about),
    );
    expect(Object.keys(homeContent.es.about.facts)).toEqual(
      Object.keys(homeContent.en.about.facts),
    );
    expect(homeContent.es.howIBuild.steps.map((s) => s.key)).toEqual(
      homeContent.en.howIBuild.steps.map((s) => s.key),
    );
    expect(homeContent.es.aiEngineering.pillars.length).toEqual(
      homeContent.en.aiEngineering.pillars.length,
    );
    expect(homeContent.es.skills.builtWith.items).toEqual(
      homeContent.en.skills.builtWith.items,
    );
    expect(homeContent.es.skills.exploring.items).toEqual(
      homeContent.en.skills.exploring.items,
    );
    expect(homeContent.es.experience.education.items.length).toEqual(
      homeContent.en.experience.education.items.length,
    );
    expect(homeContent.es.experience.languages.items.length).toEqual(
      homeContent.en.experience.languages.items.length,
    );
    expect(Object.keys(homeContent.es.contact)).toEqual(
      Object.keys(homeContent.en.contact),
    );
  });

  it("declares Trace and Asisteo with their correct public states", () => {
    expect(projects.trace.status).toBe("COMPLETED");
    expect(projects.trace.caseStudyPath).toEqual({
      es: "/projects/trace/",
      en: "/en/projects/trace/",
    });
    expect(projects.trace.technicalClaimsVerified).toBe(false);

    expect(projects.asisteo.status).toBe("BUILDING_REBUILDING");
    expect(projects.asisteo.caseStudyPath).toBeUndefined();
    expect(projects.asisteo.technicalClaimsVerified).toBe(false);
  });
});

describe("Home Block 1 & 2 sections", () => {
  it("renders the Spanish Hero with its CTAs and Trace route", () => {
    render(<HomePage locale="es" />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: homeContent.es.hero.headline,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: uiContent.es.actions.viewProjects }),
    ).toHaveAttribute("href", "#projects");
    expect(
      screen.getByRole("link", { name: uiContent.es.actions.github }),
    ).toHaveAttribute("href", profile.githubUrl);
    expect(
      screen.getByRole("link", { name: uiContent.es.actions.viewTrace }),
    ).toHaveAttribute("href", "/projects/trace");
  });

  it("renders the English Hero and no public CTA for Asisteo", () => {
    render(<HomePage locale="en" />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: homeContent.en.hero.headline,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: uiContent.en.actions.viewTrace }),
    ).toHaveAttribute("href", "/en/projects/trace");

    const asisteoBlock = screen
      .getByText(homeContent.en.projects.asisteo.description)
      .closest("article");
    expect(asisteoBlock).not.toBeNull();
    expect(within(asisteoBlock as HTMLElement).queryByRole("link")).toBeNull();
  });

  it("marks the Hero visual as decorative", () => {
    const { container } = render(<HeroVisual />);

    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });

  it("renders AboutSection with editorial copy, factual card, and no fake photo", () => {
    render(<HomePage locale="es" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: homeContent.es.about.title,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(homeContent.es.about.facts.dam.value),
    ).toBeInTheDocument();
    expect(
      screen.getByText(homeContent.es.about.facts.focus.value),
    ).toBeInTheDocument();
    expect(
      screen.getByText(homeContent.es.about.facts.currently.value),
    ).toBeInTheDocument();
    const aboutSection = document.getElementById("about");
    expect(aboutSection).not.toBeNull();
    expect(
      within(aboutSection as HTMLElement).getByText(
        homeContent.es.about.facts.lookingFor.value,
      ),
    ).toBeInTheDocument();

    // Sin fotografía si profile.photo es undefined
    expect(within(aboutSection as HTMLElement).queryByRole("img")).toBeNull();
  });

  it("renders HowIBuildSection with the exact 7-step sequence and closure", () => {
    render(<HomePage locale="es" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: homeContent.es.howIBuild.title,
      }),
    ).toBeInTheDocument();

    const expectedKeys = [
      "IDEA",
      "DEFINE",
      "SPEC",
      "BUILD",
      "TEST",
      "REVIEW",
      "ITERATE",
    ];

    expectedKeys.forEach((key) => {
      expect(screen.getAllByText(key).length).toBeGreaterThanOrEqual(1);
    });

    expect(
      screen.getByText(homeContent.es.howIBuild.closing),
    ).toBeInTheDocument();
  });

  it("renders AiEngineeringSection with core message and 6 practice pillars", () => {
    render(<HomePage locale="es" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: homeContent.es.aiEngineering.title,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        new RegExp(homeContent.es.aiEngineering.coreMessage, "i"),
      ),
    ).toBeInTheDocument();

    homeContent.es.aiEngineering.pillars.forEach((pillar) => {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: pillar.title,
        }),
      ).toBeInTheDocument();
      expect(screen.getByText(pillar.description)).toBeInTheDocument();
    });
  });

  it("renders SkillsSection with Built With and Exploring groups without progress bars or percentages", () => {
    render(<HomePage locale="es" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: homeContent.es.skills.title,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(homeContent.es.skills.builtWith.title),
    ).toBeInTheDocument();
    expect(
      screen.getByText(homeContent.es.skills.exploring.title),
    ).toBeInTheDocument();

    // Verificación de tecnologías clave
    expect(screen.getByText("Java")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("AI agents")).toBeInTheDocument();

    // Sin barras de progreso ni porcentajes inventados
    expect(screen.queryByRole("progressbar")).toBeNull();
    expect(screen.queryByText(/%/)).toBeNull();
  });

  it("renders ExperienceSection with DAM education and target role without invented data", () => {
    render(<HomePage locale="es" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: homeContent.es.experience.title,
      }),
    ).toBeInTheDocument();

    const expSection = document.getElementById("experience");
    expect(expSection).not.toBeNull();
    expect(
      within(expSection as HTMLElement).getByText("2024 — 2026"),
    ).toBeInTheDocument();
    expect(
      within(expSection as HTMLElement).getByText(
        "Desarrollo de Aplicaciones Multiplataforma (DAM)",
      ),
    ).toBeInTheDocument();
    expect(
      within(expSection as HTMLElement).getByText("Junior Software Developer"),
    ).toBeInTheDocument();
    expect(
      within(expSection as HTMLElement).getByText(
        "B2 · Competencia profesional técnica",
      ),
    ).toBeInTheDocument();
  });

  it("renders ContactSection with confirmed email and GitHub, and hides LinkedIn and CV when undefined", () => {
    render(<HomePage locale="es" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: homeContent.es.contact.headline,
      }),
    ).toBeInTheDocument();

    // Email confirmado visible
    const emailLink = screen.getByRole("link", {
      name: new RegExp(profile.email as string, "i"),
    });
    expect(emailLink).toHaveAttribute("href", `mailto:${profile.email}`);

    // GitHub confirmado visible
    const githubLink = screen.getByRole("link", {
      name: new RegExp(homeContent.es.contact.githubLabel, "i"),
    });
    expect(githubLink).toHaveAttribute("href", profile.githubUrl);

    // LinkedIn y CV ocultos porque son undefined en profile
    expect(
      screen.queryByRole("link", {
        name: new RegExp(homeContent.es.contact.linkedinLabel, "i"),
      }),
    ).toBeNull();
    expect(
      screen.queryByRole("link", {
        name: new RegExp(homeContent.es.contact.cvLabel, "i"),
      }),
    ).toBeNull();
  });
});
