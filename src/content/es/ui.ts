import type { UiContent } from "../types";

export const esUi: UiContent = {
  brand: "MANUEL ALJAMA",
  role: "Software Developer",
  skipToContent: "Saltar al contenido principal",
  nav: {
    work: "Work",
    about: "About",
    howIBuild: "How I Build",
    contact: "Contact",
    ariaLabel: "Navegación principal",
    mobileAriaLabel: "Navegación móvil",
    menuAriaLabel: "Menú de navegación",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
  },
  actions: {
    github: "GitHub",
    downloadCv: "Download CV",
    switchLanguage: "Cambiar idioma a inglés",
    viewProjects: "Ver proyectos",
    viewTrace: "Ver Trace",
  },
  theme: {
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
  },
  footer: {
    tagline: "Construyo ideas. Aprendo. Itero.",
    sectionsHeading: "Navegación",
    connectHeading: "Conectar",
    copyright: "© 2026 Manuel Aljama",
    privacyPolicy: "Privacidad",
  },
  error: {
    badge: "Algo no ha ido como se esperaba",
    title: "Ha ocurrido un error inesperado",
    description:
      "Disculpa las molestias. Puedes intentar recargar la vista o volver al inicio.",
    retry: "Intentar de nuevo",
    backHome: "Volver al inicio",
  },
  notFound: {
    badge: "Error 404",
    title: "Página no encontrada",
    description:
      "La página que buscas no existe, ha sido movida o no está disponible en este momento.",
    backHome: "Volver al inicio",
  },
  loading: {
    ariaLabel: "Cargando...",
  },
};
