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
