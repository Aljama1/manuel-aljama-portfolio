import { esUi } from "./es/ui";
import { enUi } from "./en/ui";
import { esHome } from "./es/home";
import { enHome } from "./en/home";
import { esTrace } from "./es/trace";
import { enTrace } from "./en/trace";
import { privacyContent as esPrivacy } from "./es/privacy";
import { privacyContent as enPrivacy } from "./en/privacy";
import { profile } from "./profile";
import { projects } from "./projects";
import type {
  AboutContent,
  AboutFact,
  AiEngineeringContent,
  AiPillar,
  BuildStep,
  ContactContent,
  ExperienceContent,
  HomeContent,
  HomeProjectContent,
  HowIBuildContent,
  Locale,
  Profile,
  ProjectDefinition,
  ProjectId,
  ProjectStatus,
  SkillsContent,
  SkillsGroup,
  TimelineEntry,
  TraceCaseStudyContent,
  CaseStudyMetadataItem,
  CaseStudyPoint,
  CaseStudyFlowStep,
  CaseStudyArchBlock,
  CaseStudyDecision,
  CaseStudyChallengeItem,
  CaseStudyTestedArea,
  CaseStudyQualityGate,
  CaseStudyDeepDiveLink,
  UiContent,
  PrivacyContent,
} from "./types";

export const uiContent: Record<Locale, UiContent> = {
  es: esUi,
  en: enUi,
};

export const privacyContent: Record<Locale, PrivacyContent> = {
  es: esPrivacy,
  en: enPrivacy,
};

export const homeContent: Record<Locale, HomeContent> = {
  es: esHome,
  en: enHome,
};

export const traceContent: Record<Locale, TraceCaseStudyContent> = {
  es: esTrace,
  en: enTrace,
};

export { profile, projects };
export type {
  AboutContent,
  AboutFact,
  AiEngineeringContent,
  AiPillar,
  BuildStep,
  ContactContent,
  ExperienceContent,
  HomeContent,
  HomeProjectContent,
  HowIBuildContent,
  Locale,
  Profile,
  ProjectDefinition,
  ProjectId,
  ProjectStatus,
  SkillsContent,
  SkillsGroup,
  TimelineEntry,
  TraceCaseStudyContent,
  CaseStudyMetadataItem,
  CaseStudyPoint,
  CaseStudyFlowStep,
  CaseStudyArchBlock,
  CaseStudyDecision,
  CaseStudyChallengeItem,
  CaseStudyTestedArea,
  CaseStudyQualityGate,
  CaseStudyDeepDiveLink,
  UiContent,
};
