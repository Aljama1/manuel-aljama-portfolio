# Registro de decisiones — Portfolio

Este registro resume las decisiones tomadas durante la planificación. Las reglas detalladas viven en `PROJECT_CONSTITUTION.md`.

1. Posicionamiento: Developer + Builder + ingeniería asistida por IA.
2. Proyectos principales: Trace y Asisteo.
3. Trace es el proyecto de lanzamiento; Asisteo está en reconstrucción.
4. Titular del Hero: “CONVIERTO IDEAS EN SOFTWARE REAL.”
5. No hay foto en el Hero.
6. La foto aparece en About.
7. Tono: profesional pero cercano.
8. Español como idioma principal; inglés como idioma secundario.
9. `/` en español; `/en/` en inglés.
10. Home basada en secciones; los proyectos tienen rutas propias.
11. Dark-first con modo Light.
12. Paleta verde/lima + violeta + neutros.
13. Minimalismo editorial + UI de producto + IA experimental contenida.
14. Space Grotesk + Inter + JetBrains Mono.
15. Motion moderado, funcional y accesible.
16. Visual del Hero: workspace híbrido de desarrollo.
17. Sin IDE falso ni imágenes genéricas de IA.
18. Bloques grandes de proyecto con hover sutil.
19. Case studies técnico-profesionales con deep dive opcional.
20. Estructura común de case study con contenido específico por proyecto.
21. Solo capturas reales.
22. El arte generado por IA no puede fingir funcionalidades del producto.
23. About utiliza la narrativa profesional/cercana aprobada.
24. How I Build: Idea → Define → Spec → Build → Test → Review → Iterate.
25. AI & Engineering es secundaria y centrada en metodología.
26. Skills separadas entre experiencia demostrada y exploración.
27. No barras ni puntuaciones de habilidades.
28. Experience/Education utiliza una timeline compacta.
29. Objetivo profesional explícito: Junior Software Developer.
30. No se muestra por defecto la nota de DAM.
31. Footer minimalista.
32. GitHub, LinkedIn, email y CV visibles.
33. Las tarjetas de proyectos solo muestran CTAs reales.
34. Live Demo solo aparece para demos reales y estables.
35. Contact utiliza mailto; sin formulario en V1.
36. Analytics orientado a privacidad; proveedor se elige más adelante.
37. Sin CMS.
38. El contenido vive versionado en Git.
39. Los case studies usan MDX/datos de contenido.
40. Assets: imágenes locales; vídeos externos y bajo demanda.
41. AVIF/WebP/SVG según corresponda.
42. Las tarjetas Open Graph son personalizadas y factuales.
43. Los datos estructurados deben reflejar contenido visible y real.
44. El contenido draft/preview no se indexa.
45. El sitemap solo incluye rutas publicadas.
46. Canonical + hreflang son obligatorios.
47. pnpm es el gestor de paquetes.
48. Node 24 LTS (24.21.0) como baseline consolidada.
49. Next 16.3.5 como baseline consolidada (sustituye 16.3.3 como actualización de parche).
50. React 19.3.0 como baseline.
51. TypeScript 6.0.3 como baseline consolidada (descartado TS 7 por restricción de compatibilidad de @typescript-eslint a <6.1.0).
52. Tailwind CSS 4.3.3 como baseline consolidada (parche sobre 4.3).
53. Vitest 5.0.1 como baseline consolidada.
54. Playwright 1.63.0 como baseline.
55. ESLint 10.11.0 como baseline.
56. Componentes UI propios con Tailwind. Motion for React (`motion`) solo si las necesidades reales lo justifican.
57. GitHub Actions + Vercel.
58. `main` protegida.
59. Ramas de funcionalidades + PR + squash merge.
60. Conventional Commits.
61. Husky + lint-staged + commitlint.
62. CI completa: typecheck → lint → unit → build → E2E → accesibilidad.
63. Los objetivos de rendimiento son una guía, no un juego de puntuaciones.
64. La accesibilidad es un requisito de primera clase.
65. Navegadores modernos como objetivo; degradación elegante.
66. La seguridad es un requisito de primera clase.
67. La veracidad del contenido es obligatoria.
68. Flujo del agente: Leer → Inspeccionar → Planificar → Implementar → Probar → Navegador → Revisar → Corregir → Verificar → Informar.
69. La autonomía del agente está limitada por el impacto de sus decisiones.
70. Los cambios de arquitectura/stack requieren aprobación.
71. El proyecto debe ser agnóstico respecto al agente.
72. Antigravity es el agente inicial.
73. Claude Code/Cursor deben seguir siendo viables.
74. `AGENTS.md` + `docs/` son la fuente compartida.
75. Las reglas específicas de herramientas son adaptadores, no constituciones separadas.
76. Trace recibe Portfolio Polish.
77. El case study de Trace se publica después del polish.
78. No exagerar afirmaciones sobre Veri*Factu.
79. Asisteo V1 no se publica como trabajo final.
80. Asisteo aparece como Building/Rebuilding.
81. Asisteo V2 comienza con auditoría y especificación.
82. No decidir reescritura completa vs reconstrucción selectiva antes de la auditoría.
83. El launch checklist es obligatorio.
84. La revisión humana final es obligatoria.
85. El propio portfolio es un proyecto técnico.
86. La documentación forma parte del producto.
87. No crear pantallas de carga artificiales.
88. No crear cursor personalizado.
89. No crear una huella enorme de cookies/trackers.
90. No hacer sobrediseño especulativo.
91. No inventar requisitos para rellenar huecos.
92. No esconder decisiones arquitectónicas dentro de la implementación.
93. Ningún agente puede modificar requisitos silenciosamente.
94. La evidencia del repositorio prevalece sobre el texto preliminar.
95. El estado de producción debe coincidir con las afirmaciones del portfolio.
96. El case study final de Asisteo espera a la madurez de V2.
97. Los medios reales se capturan después del polish del proyecto.
98. Los Preview Deployments forman parte de la revisión.
99. CI es la autoridad por encima de los hooks locales.
100. El portfolio solo se publica después de pasar el launch checklist completo.
101. Las puertas restantes son trabajos de verificación, no decisiones ideológicas abiertas del producto.
102. El prompt final se deriva de la constitución, no de la memoria de la conversación.
103. La ruta pública de Asisteo no existe en el lanzamiento inicial; se habilita solo cuando el case study V2 esté publicado.
104. Next.js/React cuentan como experiencia de uso real por Asisteo V1, mientras que el dominio avanzado se presenta como aprendizaje/profundización.
