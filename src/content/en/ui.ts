import type { UiContent } from "../es/ui";

export const enUi: UiContent = {
  brand: "MANUEL ALJAMA",
  role: "Software Developer",
  skipToContent: "Skip to main content",
  nav: {
    work: "Work",
    about: "About",
    howIBuild: "How I Build",
    contact: "Contact",
    ariaLabel: "Main navigation",
    mobileAriaLabel: "Mobile navigation",
    menuAriaLabel: "Navigation menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },
  actions: {
    github: "GitHub",
    downloadCv: "Download CV",
    switchLanguage: "Switch language to Spanish",
  },
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  footer: {
    tagline: "Building ideas. Learning. Iterating.",
    sectionsHeading: "Navigation",
    connectHeading: "Connect",
    copyright: "© 2026 Manuel Aljama",
  },
  error: {
    badge: "Something went wrong",
    title: "An unexpected error occurred",
    description:
      "Apologies for the inconvenience. You can try refreshing the view or return to the homepage.",
    retry: "Try again",
    backHome: "Back to Home",
  },
  notFound: {
    badge: "Error 404",
    title: "Page Not Found",
    description:
      "The page you are looking for does not exist, has been moved, or is temporarily unavailable.",
    backHome: "Back to Home",
  },
  loading: {
    ariaLabel: "Loading...",
  },
};
