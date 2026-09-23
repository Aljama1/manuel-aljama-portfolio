import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { HowIBuildSection } from "@/components/home/HowIBuildSection";
import { AiEngineeringSection } from "@/components/home/AiEngineeringSection";
import { homeContent, profile, projects, uiContent } from "@/content";
import type { Locale } from "@/content";

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const home = homeContent[locale];
  const ui = uiContent[locale];

  return (
    <>
      <Hero
        name={profile.name}
        githubUrl={profile.githubUrl}
        content={home.hero}
        actions={ui.actions}
      />
      <ProjectsSection
        locale={locale}
        content={home.projects}
        projects={projects}
        actions={ui.actions}
      />
      <AboutSection content={home.about} profile={profile} locale={locale} />
      <HowIBuildSection content={home.howIBuild} />
      <AiEngineeringSection content={home.aiEngineering} />
    </>
  );
}
