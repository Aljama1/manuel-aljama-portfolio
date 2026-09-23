import type { HomeContent } from "../types";

export const enHome: HomeContent = {
  hero: {
    headline: "I TURN IDEAS INTO REAL SOFTWARE.",
    supportingCopy:
      "Application developer with DAM training, focused on full-stack development, product building, and AI-assisted engineering.",
  },
  projects: {
    eyebrow: "01 / WORK",
    title: "Selected work",
    trace: {
      title: "TRACE",
      status: "TFG · COMPLETED",
      description:
        "A cross-platform application for managing orders and real-time hospitality workflows.",
    },
    asisteo: {
      title: "ASISTEO",
      status: "BUILDING / REBUILDING",
      description:
        "A personal project I am rebuilding to apply a more structured development process and evolve it toward a real full-stack product.",
    },
  },
  about: {
    eyebrow: "02 / ABOUT",
    title:
      "Software development with technical judgment, product focus, and continuous learning",
    paragraphs: [
      "I trained as a software developer through the Spanish Multiplatform Application Development (DAM) vocational degree. My primary motivation is transforming concrete problems into structured, maintainable, and genuinely useful software.",
      "Throughout my training and personal projects, I have worked with technologies including Java, SQL, Kotlin, Android, Angular, Ionic, and Firebase, naturally evolving toward modern web and full-stack development with TypeScript, React, and Next.js.",
      "I structure my workflow around spec-driven development and explore automated testing practices, leveraging AI agents as engineering accelerators without delegating technical judgment or rigorous validation.",
      "I am currently rebuilding Asisteo as a personal product and actively seeking my first professional role as a Junior Software Developer, eager to deliver tangible value and grow alongside an engineering team.",
    ],
    facts: {
      dam: {
        label: "DAM",
        value: "Multiplatform Application Development",
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
    eyebrow: "03 / HOW I BUILD",
    title: "A structured process for building software",
    intro:
      "From concept to product, every project aims to become a process of learning, building, and improvement. This is how I structure my work: an evolving methodology that adapts to each project, rather than a rigid promise.",
    steps: [
      {
        number: "01",
        key: "IDEA",
        title: "Idea",
        description:
          "Identify a concrete need or operational problem that genuinely warrants a technical solution.",
      },
      {
        number: "02",
        key: "DEFINE",
        title: "Define",
        description:
          "Establish scope boundaries, core business rules, and what is intentionally left out of the release.",
      },
      {
        number: "03",
        key: "SPEC",
        title: "Spec",
        description:
          "Draft structured specifications, data contracts, and architectural guidelines before writing code.",
      },
      {
        number: "04",
        key: "BUILD",
        title: "Build",
        description:
          "Implement modular code, leveraging AI agents guided by specifications as the single source of truth.",
      },
      {
        number: "05",
        key: "TEST",
        title: "Test",
        description:
          "Validate critical behavior, type contracts, and accessibility continuously to prevent early regressions.",
      },
      {
        number: "06",
        key: "REVIEW",
        title: "Review",
        description:
          "Audit the diff against requirements, refactor unclear code, and ensure no unsupported claims slip through.",
      },
      {
        number: "07",
        key: "ITERATE",
        title: "Iterate",
        description:
          "Deploy, analyze real-world behavior, and plan the next iteration grounded in evidence.",
      },
    ],
    cyclePhilosophyLabel: "Cycle philosophy",
    closing: "Build → Learn → Improve → Repeat",
  },
  aiEngineering: {
    eyebrow: "04 / AI & ENGINEERING",
    title: "AI-assisted engineering with human judgment",
    principleLabel: "Engineering principle",
    coreMessage:
      "AI should accelerate the developer, not replace the developer.",
    description:
      "I view artificial intelligence as an engineering multiplier, never as a replacement for technical judgment or accountability over delivered software. The quality of the outcome depends on specification clarity and rigorous human verification.",
    pillars: [
      {
        title: "Specialized Agents",
        description:
          "Employing AI agents configured with dedicated roles and bounded contexts to perform well-defined tasks.",
      },
      {
        title: "Model Context Protocol (MCP)",
        description:
          "Connecting local environment tools and sources of truth so models work with real, up-to-date project context.",
      },
      {
        title: "Spec-Driven Development",
        description:
          "Structured specifications serving as the single source of truth to remove ambiguity before code generation.",
      },
      {
        title: "TDD Exploration",
        description:
          "Using automated tests as executable contracts to objectively verify every step of implementation.",
      },
      {
        title: "Living Documentation",
        description:
          "Architectural Decision Records (ADRs) and explicit guidelines that preserve systemic consistency over time.",
      },
      {
        title: "Validation & Responsibility",
        description:
          "Every line and diff is audited manually; the developer retains full ownership and accountability for the software.",
      },
    ],
  },
  skills: {
    eyebrow: "05 / SKILLS",
    title: "Technologies & tools",
    builtWith: {
      groupLabel: "Group 01",
      title: "Built with",
      description:
        "Technologies used across academic coursework, personal projects, and functional applications.",
      countLabel: "technologies",
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
      groupLabel: "Group 02",
      title: "Currently exploring",
      description:
        "Areas of continuous technical deepening and engineering methodologies.",
      countLabel: "areas",
      items: [
        "React / Next.js advanced",
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
    eyebrow: "06 / BACKGROUND",
    title: "Education & background",
    education: {
      heading: "Academic education",
      items: [
        {
          period: "2024 — 2026",
          title: "Multiplatform Application Development (DAM)",
          institutionOrContext: "Vocational Higher Education Degree",
          description:
            "Specialized in cross-platform software architecture, relational databases, web and mobile development, and software engineering best practices.",
          tag: "DAM",
        },
      ],
    },
    languages: {
      heading: "Languages",
      items: [
        { language: "Spanish", level: "Native" },
        {
          language: "English",
          level: "B2 · Professional technical proficiency",
        },
      ],
    },
    targetRole: {
      label: "CURRENT FOCUS",
      role: "Junior Software Developer",
      description:
        "Actively seeking my first professional opportunity to contribute in full-stack development, product engineering, and collaborative workflows.",
    },
  },
  contact: {
    eyebrow: "07 / CONTACT",
    headline: "LET'S BUILD SOMETHING.",
    description:
      "Open to junior software developer opportunities and impactful projects. Feel free to reach out.",
    emailLabel: "Send email",
    githubLabel: "View GitHub profile",
    linkedinLabel: "LinkedIn",
    cvLabel: "Download CV",
  },
};
