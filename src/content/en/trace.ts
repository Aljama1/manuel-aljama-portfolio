import type { TraceCaseStudyContent } from "../types";

export const enTrace: TraceCaseStudyContent = {
  meta: {
    title: "Trace — Case Study | Manuel Aljama",
    description:
      "Case study of Trace: a cross-platform hospitality application featuring real-time ordering, kitchen/bar operations, reactive 14-allergen filtering, and SHA-256 billing auditability.",
  },
  hero: {
    breadcrumb: "WORK / TRACE",
    eyebrow: "PROJECT 01 / CASE STUDY",
    title: "Trace",
    subtitle:
      "A cross-platform application designed to streamline the hospitality service cycle: table ordering via QR codes, live KDS screens for kitchen and bar powered by Firestore Realtime, and a demonstrative integrity mechanism for billing traceability.",
    status: "TFG · COMPLETED",
    stack: [
      "Angular 20",
      "Ionic 8",
      "Capacitor 8",
      "Firebase Auth",
      "Cloud Firestore",
      "Angular Signals",
      "PWA",
      "Android",
    ],
    githubUrl: "https://github.com/Aljama1/Trace",
    githubLabel: "View Code on GitHub",
    backLabel: "Back to projects",
    backHref: "/en/#projects",
  },
  overview: {
    eyebrow: "01 / OVERVIEW",
    title: "Bridging table service and kitchen operations seamlessly",
    summary: [
      "Trace was developed as my final degree project (TFG) to resolve operational friction in hospitality: idle waiting times to order or pay, manual communication mistakes, and desynchronization between front-of-house staff and preparation stations (kitchen and bar).",
      "I designed and built a complete system featuring two distinct environments: a frictionless guest interface accessible by scanning a table QR code without requiring app installation, and a synchronized real-time management dashboard with dedicated views for kitchen, bar, and administrators.",
      "The project served as an applied software engineering initiative to implement reactive patterns using Angular Signals, distributed state synchronization with Firebase Firestore, and a demonstrative cryptographic chaining pipeline for invoice traceability.",
    ],
    metadata: [
      {
        label: "Role",
        value: "End-to-end design, architecture, and development",
      },
      {
        label: "Project Type",
        value: "Capstone Project (TFG) · Functional Application",
      },
      { label: "Platforms", value: "Web PWA and Android (via Capacitor 8)" },
      {
        label: "Core Stack",
        value: "Angular 20 · Ionic 8 · Firebase Firestore · TypeScript",
      },
      {
        label: "Status",
        value: "Completed & Verified (Portfolio Polish finished)",
      },
    ],
  },
  problem: {
    eyebrow: "02 / THE PROBLEM",
    title: "Operational bottlenecks across dining rooms, bars, and kitchens",
    intro:
      "Traditional paper-and-verbal ordering workflows in small-to-medium restaurants suffer from recurring coordination and communication breakdowns:",
    points: [
      {
        title: "Idle waiting times",
        description:
          "Guests depend on waiter availability to view menus, reorder drinks, or request the bill, slowing table turnover during peak service hours.",
      },
      {
        title: "Kitchen and bar desynchronization",
        description:
          "Food and beverages often share a single printed ticket, requiring kitchen cooks and bar staff to manually coordinate preparation timelines.",
      },
      {
        title: "Zero visibility on order status",
        description:
          "Diners have no indication of whether their order has begun preparation, while staff lack a unified visual overview of elapsed preparation times.",
      },
      {
        title: "Error-prone allergen communication",
        description:
          "Verbal inquiries regarding food intolerances create dietary risks if items are not strictly filtered against active recipes during order placement.",
      },
      {
        title: "Vulnerable billing traceability",
        description:
          "Traditional point-of-sale setups struggle to provide tamper-evident proofs that tickets have not been retroactively altered or deleted after closing.",
      },
      {
        title: "High adoption friction for diners",
        description:
          "Forcing customers to download a heavy native app or register with credentials creates immediate drop-off at the table.",
      },
    ],
  },
  solution: {
    eyebrow: "03 / THE SOLUTION",
    title: "Dual architecture: frictionless guest access and synchronized KDS",
    intro:
      "Trace decouples the dining experience from staff management while synchronizing both in real time over Cloud Firestore:",
    layers: [
      {
        role: "Guest Interface (Comensal)",
        description:
          "Instant access via table-linked QR/URL, transparent anonymous authentication, digital menu with reactive 14-allergen filtering, cart, and live order tracking.",
      },
      {
        role: "Kitchen & Bar KDS",
        description:
          "Dedicated Kitchen Display System screens that automatically partition food and drink line items, enabling cooks and bartenders to mark tickets as preparing or served.",
      },
      {
        role: "Floor Administration",
        description:
          "Central dashboard for managing active tables, updating menu items, monitoring service metrics, and generating print-ready table QR codes.",
      },
      {
        role: "Technical Billing Engine",
        description:
          "Order settlement with 10% VAT calculation, client-side PDF receipt generation, and a chained SHA-256 hashing log for auditability.",
      },
    ],
  },
  productFlow: {
    eyebrow: "04 / PRODUCT FLOW",
    title: "End-to-end journey: from table QR scan to settled bill",
    intro:
      "The service workflow was structured to maximize guest autonomy while giving staff real-time clarity at every stage:",
    steps: [
      {
        stepNumber: "01",
        role: "guest",
        title: "Table QR Code",
        description:
          "The diner scans the table QR containing the unique table identifier embedded in the URL.",
      },
      {
        stepNumber: "02",
        role: "guest",
        title: "Anonymous Auth",
        description:
          "Firebase Auth initializes an anonymous session; the assigned UID is linked to the active table.",
      },
      {
        stepNumber: "03",
        role: "guest",
        title: "Digital Menu",
        description:
          "Exploration of categories, descriptions, prices, and ingredients loaded reactively.",
      },
      {
        stepNumber: "04",
        role: "guest",
        title: "14-Allergen Filter",
        description:
          "Instant reactive filtering to exclude any dish conflicting with selected dietary intolerances.",
      },
      {
        stepNumber: "05",
        role: "guest",
        title: "Table Cart",
        description:
          "Item quantities and custom instructions calculated in real time with Angular Signals.",
      },
      {
        stepNumber: "06",
        role: "guest",
        title: "Order Dispatch",
        description:
          "Atomic creation of the ticket in Firestore with timestamp, table ID, and line items.",
      },
      {
        stepNumber: "07",
        role: "staff",
        title: "Kitchen / Bar KDS",
        description:
          "Kitchen food and bar drink lines are routed in real time to their respective station screens.",
      },
      {
        stepNumber: "08",
        role: "guest",
        title: "Realtime Tracking",
        description:
          "The customer watches live preparation status updates (received → preparing → served) on their phone.",
      },
      {
        stepNumber: "09",
        role: "guest",
        title: "Bill Request",
        description:
          "Payment notification sent directly to staff terminals alongside the itemized receipt preview.",
      },
      {
        stepNumber: "10",
        role: "system",
        title: "Settlement & Hash",
        description:
          "Order closure, PDF generation, 10% VAT computation, and chained SHA-256 record hashing.",
      },
    ],
  },
  architecture: {
    eyebrow: "05 / ARCHITECTURE",
    title: "Layered design and distributed data distribution model",
    intro:
      "The application leverages a unified codebase built on Angular 20 standalone components and Ionic 8, packaged as both a Progressive Web App and a native Android app via Capacitor:",
    webPwa: {
      title: "Angular 20 & Ionic 8 (Standalone)",
      description:
        "Modular architecture organized into distinct views (guest, staff, admin), decoupled business services, and synchronous local state managed via Angular Signals and computed properties.",
      items: [
        "Angular Signals for lean reactive UI state",
        "Ionic Framework for adaptive touch UI components",
        "Standalone Angular 20 component tree",
        "Modular SCSS with semantic design tokens",
      ],
    },
    mobileBridge: {
      title: "Capacitor 8 Bridge (Android)",
      description:
        "Native Android packaging powered by Capacitor 8 for staff handheld terminals, enabling direct access to hardware and local storage.",
      items: [
        "Native compilation for staff floor tablets and mobile phones",
        "Integration with camera/hardware QR scanners",
        "Secure local session persistence",
        "Controlled offline handling during connectivity blips",
      ],
    },
    backend: {
      title: "Firebase Auth & Cloud Firestore",
      description:
        "Serverless BaaS infrastructure featuring dual authentication (anonymous for diners, email/password for staff) and real-time snapshot subscriptions for sub-second updates.",
      items: [
        "onSnapshot listeners for instant ticket propagation",
        "Normalized collections: tables, orders, catalog, invoices",
        "Firestore Security Rules enforcing table UID tenancy",
        "Firebase Hosting for low-latency global delivery",
      ],
    },
    integrity: {
      title: "Demonstrative SHA-256 Integrity Engine",
      description:
        "Experimental billing module that calculates a SHA-256 cryptographic hash for each invoice, concatenating it with the preceding invoice hash to create a tamper-evident append-only ledger.",
      items: [
        "Sequential invoice numbering",
        "Tax base and 10% VAT calculation",
        "prevHash + invoice data + timestamp concatenation",
        "Client-side PDF rendering for guests",
      ],
    },
  },
  keyDecisions: {
    eyebrow: "06 / TECHNICAL DECISIONS",
    title: "Engineered architectural choices and their trade-offs",
    intro:
      "Every major technical choice was selected to accommodate specific operational constraints within hospitality environments:",
    decisions: [
      {
        id: "mesa-uid",
        number: "01",
        title: "Session Anchor: Table → Anonymous UID",
        subtitle: "Firebase Anonymous Authentication",
        context:
          "Restaurant diners will not complete email/password registration forms to order food; onboarding barriers cause immediate abandonment.",
        decision:
          "Trigger Firebase anonymous authentication upon opening a table-linked URL. The assigned UID is permanently associated with the active table session in browser storage.",
        justification:
          "Enables strict Firestore Security Rules (diners can only read and mutate orders belonging to their active table) with zero signup friction.",
        tradeOff:
          "If the diner clears local storage or opens an incognito window, a new anonymous UID is generated, requiring re-association with the active table.",
      },
      {
        id: "realtime",
        number: "02",
        title: "Real-time Synchronization via Cloud Firestore",
        subtitle: "WebSockets / onSnapshot vs HTTP Polling",
        context:
          "In busy kitchens and bars, a 30-second delay in ticket notification or status changes disrupts cooking rhythms and degrades customer experience.",
        decision:
          "Implement real-time listeners (`onSnapshot`) across active order collections rather than periodic HTTP polling.",
        justification:
          "Delivers sub-second updates to KDS monitors without the network overhead and latency spikes of polling endpoints.",
        tradeOff:
          "Increases concurrent read operations in Firestore. Requires carefully scoped queries filtered by active shift and date to avoid listening to historical collections.",
      },
      {
        id: "signals",
        number: "03",
        title: "UI Reactivity via Angular Signals & Computed",
        subtitle: "Native Angular 20 Signals vs Complex RxJS Streams",
        context:
          "Recalculating subtotals, modifier pricing, cart item counts, and allergen filters frequently triggered change detection cycle overhead.",
        decision:
          "Adopt native Angular Signals (`signal`, `computed`) for local synchronous UI state, restricting RxJS Observables to Firebase asynchronous event streams.",
        justification:
          "Produces cleaner, more deterministic, and highly performant component code. Derived values recompute exclusively when their direct dependencies change.",
        tradeOff:
          "Requires managing a hybrid paradigm across the codebase (Signals for UI state and Observables for Firestore network data streams).",
      },
      {
        id: "alergenos",
        number: "04",
        title: "Reactive Filtering Across 14 EU Allergens",
        subtitle: "Compliance with EU Regulation No 1169/2011",
        context:
          "European food safety regulations mandate clear disclosure of 14 major allergens. Diners with celiac disease or nut allergies need absolute menu filtering certainty.",
        decision:
          "Tag each recipe item with standardized allergen identifiers and compute an in-memory boolean exclusion filter that instantly updates visible dishes as preferences change.",
        justification:
          "Operates entirely in-memory over the cached catalog, providing immediate user feedback without recurring network calls.",
        tradeOff:
          "Relies on administrative discipline during catalog item entry to guarantee no recipe ingredients remain untagged.",
      },
      {
        id: "integridad-sha256",
        number: "05",
        title: "Demonstrative Invoice Integrity via SHA-256 Hashing",
        subtitle: "Cryptographic chaining inspired by auditability principles",
        context:
          "Explored how cash register transactions can be safeguarded against retroactive alterations through an immutable audit trail.",
        decision:
          "Implement SHA-256 hash chaining where each invoice payload includes the previous invoice's hash, sequential invoice number, tax base, 10% VAT, timestamp, and signature.",
        justification:
          "Demonstrates the technical mechanics of a tamper-evident audit ledger on the web without requiring a heavyweight distributed blockchain network.",
        tradeOff:
          "Concurrent bill generation requires sequential ordering; simultaneous settlements must be arbitrated to ensure an intact chain.",
        legalDisclaimer:
          "IMPORTANT: This mechanism is a technical demonstration and an academic data-integrity exercise. It is NOT certified or approved under Veri*Factu regulations, does NOT integrate with the Spanish Tax Agency (AEAT), and is NOT a complete production legal tax system.",
      },
    ],
  },
  challenges: {
    eyebrow: "07 / CHALLENGES & SOLUTIONS",
    title: "Engineering hurdles encountered and how they were solved",
    intro:
      "Real-world challenges that emerged during the development of Trace and the concrete technical approaches used to overcome them:",
    items: [
      {
        id: "kds-split",
        number: "01",
        title: "Automatic ticket splitting across Kitchen and Bar KDS",
        challenge:
          "A single customer order typically mixes cooked dishes and bar beverages. Presenting the entire ticket on both screens caused clutter and duplicated staff effort.",
        solution:
          "Introduced a preparation station taxonomy for all products. Upon saving an order, line items are routed by category; the kitchen screen only subscribes to food items while the bar receives drinks, linked by a shared order ID.",
      },
      {
        id: "sync-race",
        number: "02",
        title: "Concurrent state synchronization between table and kitchen",
        challenge:
          "When the kitchen marked an item as preparing at the exact moment a diner added extra items to the open table ticket, document-level race conditions occurred.",
        solution:
          "Refactored the data model into two levels: a parent order document for session metadata (table, timestamps, payment status) and an independent subcollection of line items that mutate concurrently without locking the parent document.",
      },
      {
        id: "pdf-generation",
        number: "03",
        title: "Client-side PDF receipt generation in mobile PWAs and Android",
        challenge:
          "Standard Node PDF libraries depend on file-system APIs that fail when running inside mobile web browsers or Android webviews.",
        solution:
          "Employed client-safe Canvas/VFS rendering (pdfmake/jspdf) encapsulated inside an environment-aware service that switches between Blob downloads on web and Capacitor File Opener on native Android.",
      },
      {
        id: "ionic-scss-prod",
        number: "04",
        title: "Optimizing SCSS bundle sizes and Angular production budgets",
        challenge:
          "The initial production build triggered bundle budget warnings due to redundant SCSS variable imports across standalone Ionic components.",
        solution:
          "Restructured style assets into modular SCSS partials, centralized design tokens, and eliminated duplicate imports in component decorators, reducing style bundle sizes well below threshold budgets.",
      },
    ],
  },
  testing: {
    eyebrow: "08 / TESTING & QUALITY",
    title: "Verification strategy and automated test coverage",
    intro:
      "Critical financial calculations and reactive state logic are backed by an automated test suite:",
    testSummary: {
      countLabel: "48 passing unit tests",
      note: "Tests focus specifically on VAT decimal rounding, SHA-256 hash chaining, strict allergen filtering, and KDS ticket splitting.",
    },
    testedAreas: [
      {
        area: "10% VAT and Tax Base Calculation",
        description:
          "Decimal precision checks verifying exact cent rounding and tax breakdowns across single and multi-item orders.",
      },
      {
        area: "SHA-256 Hash Chaining Logic",
        description:
          "Cryptographic verification confirming that altering a single character in history invalidates subsequent block signatures.",
      },
      {
        area: "Reactive 14-Allergen Filters",
        description:
          "Validates that no menu item with declared traces or ingredients bypasses active dietary filter selections.",
      },
      {
        area: "KDS Station Routing",
        description:
          "Ensures precise separation of kitchen food items and bar beverages into their respective live queues.",
      },
      {
        area: "Table-UID Check-in Lifecycle",
        description:
          "Tests anonymous authentication initialization and persistent session linkage to the physical table number.",
      },
      {
        area: "PDF Document Assembly",
        description:
          "Verifies proper assembly of receipt line items and tax summaries prior to document generation.",
      },
    ],
    qualityGates: [
      {
        title: "Strict TypeScript",
        description:
          "Zero implicit `any` types, rigorous null checking, and exhaustive interface definitions.",
      },
      {
        title: "ESLint and Prettier",
        description:
          "Automated linting and formatting enforced via pre-commit hooks and CI pipelines.",
      },
      {
        title: "Production Build Budgets",
        description:
          "Enforced limits on JavaScript and CSS bundle sizes during release packaging.",
      },
    ],
  },
  security: {
    eyebrow: "09 / SECURITY & DATA",
    title: "Access isolation and security within a serverless BaaS",
    intro:
      "Without an independent backend server, security and data boundaries are enforced directly through Firebase declarative rules:",
    pillars: [
      {
        title: "Anonymous vs Staff Role Isolation",
        description:
          "Diners use anonymous credentials scoped strictly to their table session; staff authenticate using verified accounts with write privileges over KDS and catalog data.",
      },
      {
        title: "Firestore Security Rules",
        description:
          "Declarative security rules preventing diners from reading or mutating orders from other tables, or altering item prices.",
      },
      {
        title: "Append-Only Invoice Records",
        description:
          "Firestore rules explicitly disallow `delete` and `update` operations on issued invoice collections, ensuring record immutability.",
      },
    ],
  },
  result: {
    eyebrow: "10 / RESULT",
    title: "A verified, functional end-to-end service solution",
    intro:
      "Without fabricating commercial revenue figures or active customer counts, Trace delivers a robust, tangible software solution:",
    deliverables: [
      {
        title: "End-to-End Service Cycle",
        description:
          "Fully functional order lifecycle from table QR scanning through kitchen prep to payment closure.",
      },
      {
        title: "Real-time KDS Monitors",
        description:
          "Dedicated responsive touch interfaces for kitchen and bar stations with flicker-free updates.",
      },
      {
        title: "Instant 14-Allergen Filtering",
        description:
          "Accessible, safety-conscious menu browsing for guests with severe dietary intolerances.",
      },
      {
        title: "Demonstrative Auditability",
        description:
          "Technically sound SHA-256 hash chaining and client-side PDF receipt generation.",
      },
      {
        title: "Cross-Platform Delivery (PWA + Android)",
        description:
          "Instant access via any mobile browser, alongside a native Android build via Capacitor 8.",
      },
      {
        title: "Automated Test Suite",
        description:
          "Comprehensive unit test coverage verifying all mathematical and core business operations.",
      },
    ],
  },
  whatILearned: {
    eyebrow: "11 / WHAT I LEARNED",
    title: "Key architectural and engineering takeaways",
    intro:
      "Building Trace provided invaluable hands-on experience solving challenges well beyond surface-level UI design:",
    learnings: [
      {
        title: "Real-Time Distributed State Architecture",
        description:
          "Gained a deep appreciation for idempotency and document granularity when designing real-time systems to avoid race conditions across concurrent devices.",
      },
      {
        title: "Security in BaaS Environments",
        description:
          "Learned that in serverless BaaS architectures, database security rules serve as the actual business and authorization layer, requiring the same rigor as backend APIs.",
      },
      {
        title: "Adopting Angular Signals over RxJS",
        description:
          "Experienced firsthand how Signals drastically streamline synchronous UI state management compared to the mental overhead of complex RxJS subscription chains.",
      },
      {
        title: "Technical Proofs vs Regulatory Claims",
        description:
          "Understood the vital professional distinction between implementing a demonstrative cryptographic integrity mechanism and claiming legal regulatory certification like Veri*Factu.",
      },
      {
        title: "The Value of Unit Tests for Critical Logic",
        description:
          "Automating tests for tax arithmetic and hash chaining provided the confidence needed to refactor core modules without fear of silent regressions.",
      },
      {
        title: "Cross-Platform Build Trade-offs",
        description:
          "Explored the practical differences between serving a lightweight web PWA and packaging an Android native container with Capacitor, balancing hardware access and portability.",
      },
    ],
  },
  deepDive: {
    eyebrow: "12 / TECHNICAL NAVIGATION",
    title: "Deep-dive case study sections",
    intro:
      "Navigate directly to specific technical and architectural chapters:",
    links: [
      {
        anchor: "#architecture",
        title: "Technical Architecture",
        description:
          "Layer breakdown covering client, Capacitor bridge, and Cloud Firestore.",
      },
      {
        anchor: "#decisions",
        title: "Key Engineering Decisions",
        description:
          "Design justifications and trade-offs made throughout the project.",
      },
      {
        anchor: "#integridad-sha256",
        title: "SHA-256 Integrity",
        description:
          "Detailed overview of the demonstrative cryptographic chaining mechanism.",
      },
      {
        anchor: "#challenges",
        title: "Challenges & Solutions",
        description:
          "Real-world hurdles around synchronization, PDFs, and production builds.",
      },
      {
        anchor: "#testing",
        title: "Testing & Quality",
        description:
          "Automated unit tests covering financial formulas and business logic.",
      },
      {
        anchor: "#security",
        title: "Security & Data",
        description:
          "Firestore rules, dual-role authentication, and immutable audit logs.",
      },
    ],
  },
  navigation: {
    backLabel: "Back to projects",
    backHref: "/en/#projects",
    githubLabel: "View Code on GitHub",
    githubUrl: "https://github.com/Aljama1/Trace",
  },
};
