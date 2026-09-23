import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { HomePage } from "@/components/home/HomePage";
import { homeContent, profile, projects, uiContent } from "@/content";

describe("Home content model", () => {
  it("maintains structural parity between Spanish and English", () => {
    expect(Object.keys(homeContent.es)).toEqual(Object.keys(homeContent.en));
    expect(Object.keys(homeContent.es.projects)).toEqual(
      Object.keys(homeContent.en.projects),
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

describe("Home Block 1", () => {
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
});
