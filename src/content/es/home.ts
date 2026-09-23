import type { HomeContent } from "../types";

export const esHome: HomeContent = {
  hero: {
    headline: "CONVIERTO IDEAS EN SOFTWARE REAL.",
    supportingCopy:
      "Desarrollador de aplicaciones con formación DAM, orientado al desarrollo full-stack, la creación de productos y la ingeniería asistida por IA.",
  },
  projects: {
    eyebrow: "01 / PROYECTOS",
    title: "Proyectos seleccionados",
    trace: {
      title: "TRACE",
      status: "TFG · COMPLETED",
      description:
        "Aplicación multiplataforma para gestionar comandas y flujos operativos de hostelería en tiempo real.",
    },
    asisteo: {
      title: "ASISTEO",
      status: "BUILDING / REBUILDING",
      description:
        "Proyecto propio que estoy reconstruyendo para aplicar un proceso de desarrollo más estructurado y evolucionarlo hacia un producto full-stack real.",
    },
  },
  about: {
    eyebrow: "02 / SOBRE MÍ",
    title:
      "Desarrollo de software con criterio, foco en producto y aprendizaje continuo",
    paragraphs: [
      "Me formé como desarrollador a través del ciclo superior de Desarrollo de Aplicaciones Multiplataforma (DAM). Mi principal motivación técnica es convertir problemas reales en software estructurado, mantenible y verdaderamente útil.",
      "Durante mi formación y proyectos personales he trabajado con tecnologías como Java, SQL, Kotlin, Android, Angular, Ionic y Firebase, evolucionando de forma natural hacia el desarrollo web y full-stack moderno con TypeScript, React y Next.js.",
      "Trabajo integrando flujos guiados por especificaciones (Spec-Driven Development) y explorando metodologías de testing automatizado, utilizando agentes de IA como aceleradores de ingeniería sin delegar el criterio técnico ni la validación rigurosa.",
      "Actualmente reconstruyo Asisteo como proyecto propio y busco mi primera oportunidad profesional como Junior Software Developer, con el objetivo de aportar valor desde el primer día y seguir creciendo dentro de un equipo de ingeniería.",
    ],
    facts: {
      dam: {
        label: "DAM",
        value: "Desarrollo de Aplicaciones Multiplataforma",
      },
      focus: {
        label: "FOCUS",
        value: "Full-Stack · Product Building · AI",
      },
      currently: {
        label: "CURRENTLY",
        value: "Building Asisteo",
      },
      lookingFor: {
        label: "LOOKING FOR",
        value: "Junior Software Developer",
      },
    },
  },
  howIBuild: {
    eyebrow: "03 / CÓMO CONSTRUYO",
    title: "Un proceso estructurado para construir software",
    intro:
      "Del concepto al producto, cada proyecto intenta convertirse en un proceso de aprendizaje, construcción y mejora. Esta es la forma en la que estructuro habitualmente mi trabajo: una metodología viva que evoluciona con la práctica, no una promesa rígida.",
    steps: [
      {
        number: "01",
        key: "IDEA",
        title: "Idea",
        description:
          "Identificar una necesidad concreta o un problema operativo que justifique una solución técnica real.",
      },
      {
        number: "02",
        key: "DEFINE",
        title: "Definir",
        description:
          "Delimitar el alcance, las reglas de negocio esenciales y lo que queda deliberadamente fuera de la versión.",
      },
      {
        number: "03",
        key: "SPEC",
        title: "Especificar",
        description:
          "Redactar especificaciones estructuradas, contratos de datos y arquitectura antes de escribir código.",
      },
      {
        number: "04",
        key: "BUILD",
        title: "Construir",
        description:
          "Implementar de forma modular, apoyándome en agentes de IA guiados por la especificación como fuente de verdad.",
      },
      {
        number: "05",
        key: "TEST",
        title: "Probar",
        description:
          "Validar comportamientos críticos, contratos de tipos y accesibilidad para prevenir regresiones tempranas.",
      },
      {
        number: "06",
        key: "REVIEW",
        title: "Revisar",
        description:
          "Auditar el diff frente a los requisitos, refactorizar código confuso y verificar que no haya afirmaciones sin respaldo.",
      },
      {
        number: "07",
        key: "ITERATE",
        title: "Iterar",
        description:
          "Desplegar, analizar el comportamiento real y planificar la siguiente evolución basándome en evidencia.",
      },
    ],
    cyclePhilosophyLabel: "Filosofía de ciclo",
    closing: "Build → Learn → Improve → Repeat",
  },
  aiEngineering: {
    eyebrow: "04 / IA & INGENIERÍA",
    title: "Ingeniería asistida por IA con criterio humano",
    principleLabel: "Principio de ingeniería",
    coreMessage:
      "AI should accelerate the developer, not replace the developer.",
    description:
      "Entiendo la inteligencia artificial como una palanca de aceleración de ingeniería, nunca como un sustituto del criterio técnico ni de la responsabilidad sobre el código entregado. La calidad del resultado depende de la claridad de las especificaciones y del rigor en la validación humana.",
    pillars: [
      {
        title: "Agentes especializados",
        description:
          "Uso de agentes de IA configurados con roles específicos y contextos acotados para ejecutar tareas bien delimitadas.",
      },
      {
        title: "Model Context Protocol (MCP)",
        description:
          "Conexión de herramientas y fuentes de verdad del entorno local para que los modelos operen con datos reales y actualizados.",
      },
      {
        title: "Spec-Driven Development",
        description:
          "Especificaciones estructuradas como fuente de verdad única para eliminar ambigüedades antes de la generación de código.",
      },
      {
        title: "Exploración de TDD",
        description:
          "Uso de tests automáticos como contratos ejecutables que verifican objetivamente cada paso implementado.",
      },
      {
        title: "Documentación viva",
        description:
          "Registros de decisiones de arquitectura (ADRs) y reglas explícitas que mantienen la coherencia a lo largo del tiempo.",
      },
      {
        title: "Validación y responsabilidad",
        description:
          "Cada línea y cada diff son inspeccionados manualmente; el desarrollador asume la total autoría y responsabilidad del software.",
      },
    ],
  },
  skills: {
    eyebrow: "05 / TECNOLOGÍAS",
    title: "Tecnologías y herramientas",
    builtWith: {
      groupLabel: "Grupo 01",
      title: "Experiencia demostrada",
      description:
        "Tecnologías utilizadas en proyectos académicos, personales y aplicaciones funcionales.",
      countLabel: "tecnologías",
      items: [
        "Java",
        "TypeScript",
        "JavaScript",
        "SQL",
        "Kotlin",
        "HTML/CSS",
        "Angular",
        "Ionic",
        "Android",
        "Next.js / React",
        "Supabase / PostgreSQL",
        "Firebase / Firestore",
        "Git / GitHub",
        "VS Code",
      ],
    },
    exploring: {
      groupLabel: "Grupo 02",
      title: "Actualmente explorando",
      description:
        "Áreas de profundización técnica continua y metodologías de ingeniería.",
      countLabel: "áreas",
      items: [
        "React / Next.js avanzado",
        "REST / backend",
        "Docker / Linux / cloud",
        "AI agents",
        "MCP",
        "SDD",
        "TDD",
      ],
    },
  },
  experience: {
    eyebrow: "06 / TRAYECTORIA",
    title: "Educación y trayectoria",
    education: {
      heading: "Formación académica",
      items: [
        {
          period: "2024 — 2026",
          title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
          institutionOrContext: "Formación Profesional de Grado Superior",
          description:
            "Especialización en arquitectura de aplicaciones multiplataforma, bases de datos relacionales, desarrollo web y móvil, y buenas prácticas de ingeniería de software.",
          tag: "DAM",
        },
      ],
    },
    languages: {
      heading: "Idiomas",
      items: [
        { language: "Español", level: "Nativo" },
        { language: "Inglés", level: "B2 · Competencia profesional técnica" },
      ],
    },
    targetRole: {
      label: "OBJETIVO PROFESIONAL",
      role: "Junior Software Developer",
      description:
        "Búsqueda activa de primera oportunidad profesional para aportar en desarrollo full-stack, ingeniería de producto y flujos colaborativos.",
    },
  },
  contact: {
    eyebrow: "07 / CONTACTO",
    headline: "LET'S BUILD SOMETHING.",
    description:
      "Abierto a oportunidades como Junior Software Developer y proyectos donde construir software útil. Escríbeme y hablemos.",
    emailLabel: "Enviar correo",
    githubLabel: "Ver perfil en GitHub",
    linkedinLabel: "LinkedIn",
    cvLabel: "Descargar CV",
  },
};
