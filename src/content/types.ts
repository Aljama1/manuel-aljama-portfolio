export type Locale = "es" | "en";

export interface Profile {
  name: string;
  role: string;
  githubUrl: string;
  linkedInUrl?: string;
  email?: string;
  cvUrl?: string;
  photo?: {
    src: string;
    alt: Record<Locale, string>;
  };
}

export type ProjectId = "trace" | "asisteo";

export type ProjectStatus = "COMPLETED" | "BUILDING_REBUILDING";

export interface ProjectDefinition {
  id: ProjectId;
  status: ProjectStatus;
  caseStudyPath?: Record<Locale, string>;
  technicalClaimsVerified: boolean;
}

export interface HomeProjectContent {
  title: string;
  status: string;
  description: string;
}

export interface AboutFact {
  label: string;
  value: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  facts: {
    dam: AboutFact;
    focus: AboutFact;
    currently: AboutFact;
    lookingFor: AboutFact;
  };
}

export interface BuildStep {
  number: string;
  key: "IDEA" | "DEFINE" | "SPEC" | "BUILD" | "TEST" | "REVIEW" | "ITERATE";
  title: string;
  description: string;
}

export interface HowIBuildContent {
  eyebrow: string;
  title: string;
  intro: string;
  steps: BuildStep[];
  cyclePhilosophyLabel: string;
  closing: string;
}

export interface AiPillar {
  title: string;
  description: string;
}

export interface AiEngineeringContent {
  eyebrow: string;
  title: string;
  principleLabel: string;
  coreMessage: string;
  description: string;
  pillars: AiPillar[];
}

export interface SkillsGroup {
  groupLabel: string;
  title: string;
  description: string;
  countLabel: string;
  items: string[];
}

export interface SkillsContent {
  eyebrow: string;
  title: string;
  builtWith: SkillsGroup;
  exploring: SkillsGroup;
}

export interface TimelineEntry {
  period: string;
  title: string;
  institutionOrContext: string;
  description: string;
  tag?: string;
}

export interface ExperienceContent {
  eyebrow: string;
  title: string;
  education: {
    heading: string;
    items: TimelineEntry[];
  };
  languages: {
    heading: string;
    items: { language: string; level: string }[];
  };
  targetRole: {
    label: string;
    role: string;
    description: string;
  };
}

export interface ContactContent {
  eyebrow: string;
  headline: string;
  description: string;
  emailLabel: string;
  githubLabel: string;
  linkedinLabel: string;
  cvLabel: string;
}

export interface HomeContent {
  hero: {
    headline: string;
    supportingCopy: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    trace: HomeProjectContent;
    asisteo: HomeProjectContent;
  };
  about: AboutContent;
  howIBuild: HowIBuildContent;
  aiEngineering: AiEngineeringContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  contact: ContactContent;
}

export interface UiContent {
  brand: string;
  role: string;
  skipToContent: string;
  nav: {
    work: string;
    about: string;
    howIBuild: string;
    contact: string;
    ariaLabel: string;
    mobileAriaLabel: string;
    menuAriaLabel: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  actions: {
    github: string;
    downloadCv: string;
    switchLanguage: string;
    viewProjects: string;
    viewTrace: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  footer: {
    tagline: string;
    sectionsHeading: string;
    connectHeading: string;
    copyright: string;
  };
  error: {
    badge: string;
    title: string;
    description: string;
    retry: string;
    backHome: string;
  };
  notFound: {
    badge: string;
    title: string;
    description: string;
    backHome: string;
  };
  loading: {
    ariaLabel: string;
  };
}
