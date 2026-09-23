import { esUi } from "./es/ui";
import { enUi } from "./en/ui";
import { esHome } from "./es/home";
import { enHome } from "./en/home";
import { profile } from "./profile";
import { projects } from "./projects";
import type {
  AboutContent,
  AboutFact,
  AiEngineeringContent,
  AiPillar,
  BuildStep,
  HomeContent,
  HomeProjectContent,
  HowIBuildContent,
  Locale,
  Profile,
  ProjectDefinition,
  ProjectId,
  ProjectStatus,
  UiContent,
} from "./types";

export const uiContent: Record<Locale, UiContent> = {
  es: esUi,
  en: enUi,
};

export const homeContent: Record<Locale, HomeContent> = {
  es: esHome,
  en: enHome,
};

export { profile, projects };
export type {
  AboutContent,
  AboutFact,
  AiEngineeringContent,
  AiPillar,
  BuildStep,
  HomeContent,
  HomeProjectContent,
  HowIBuildContent,
  Locale,
  Profile,
  ProjectDefinition,
  ProjectId,
  ProjectStatus,
  UiContent,
};
