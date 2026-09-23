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
