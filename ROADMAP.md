# Roadmap del portfolio

## Fase 0 — Verificación previa al bootstrap

- [x] completar la auditoría final de la documentación;
- [x] resolver cualquier contradicción entre documentos;
- [x] verificar versiones compatibles actuales y consolidar baseline (Next.js 16.3.5, React 19.3.0, TS 6.0.3, Tailwind 4.3.3, Node 24.21.0, pnpm 12.5.1);
- [x] crear el proyecto Next.js (commit 3704bda);
- [x] inicializar pnpm (commit 3704bda);
- [x] activar TypeScript estricto (commit 3704bda);
- [x] establecer Git y protección de ramas (commit 3704bda);
- [x] crear `docs/` y reglas de agentes (commit 3704bda);
- [x] establecer CI básica (commit 3704bda — GitHub Actions + Playwright integrado en c610b11).

## Fase 1 — Base del portfolio

- [x] armazón de la aplicación;
- [x] ruta pública únicamente para Trace en el lanzamiento;
- [x] navegación;
- [x] sistema de temas;
- [x] rutas i18n;
- [x] tokens de diseño;
- [x] tipografía;
- [x] grid responsive;
- [x] footer;
- [x] estados error/404/loading.

## Fase 2 — Contenido de Home

- [x] Hero;
- [x] visual del Hero;
- [x] sección de proyectos;
- [x] About;
- [x] How I Build;
- [x] AI & Engineering;
- [x] Skills;
- [x] Experience/Education;
- [x] Contact.

## Fase 3 — Portfolio Polish de Trace

> Nota: Esta fase técnica de polish y verificación se ejecutó en el repositorio independiente de Trace (`Proyectos/Trace`), no dentro del repositorio del portfolio. Concluida esa base, la información factual, métricas y decisiones resultantes se integraron en el case study de este portfolio.

- [x] verificar estado actual del repositorio;
- [x] ejecutar build local/de desarrollo;
- [x] reproducir y corregir discrepancias visuales de producción (incluyendo corrección de temas);
- [x] revisar seguridad y configuración (Firestore Rules, facturación, generación PDF y hash SHA-256);
- [x] revisar y ampliar tests;
- [ ] revisar/refactorizar KDS (inspeccionado; no requirió refactor al no ser necesario para el alcance actual);
- [x] revisión factual de documentación;
- [x] revisión y corrección del lenguaje relacionado con Veri*Factu;
- [ ] capturas finales del producto (pendiente como material gráfico definitivo);
- [ ] vídeo final / demo grabada (pendiente como material audiovisual definitivo).

## Fase 4 — Case study de Trace

- [x] visión general;
- [x] problema;
- [x] solución;
- [x] flujo (con diagrama interactivo localizado ES/EN);
- [x] arquitectura (con diagrama conceptual localizado ES/EN);
- [x] decisiones técnicas;
- [x] problemas y retos;
- [x] evolución/Portfolio Polish;
- [x] testing;
- [x] rol;
- [x] resultado;
- [x] aprendizajes;
- [x] deep dive (facturación encadenada y hash SHA-256);
- [x] enlaces verificados (repositorio público y demo de facturación);
- [ ] vídeo / walkthrough grabado definitivo (pendiente como material audiovisual final).

## Fase 5 — Calidad y publicación

- [x] suite E2E con Playwright (41/41 tests automáticos en Chromium);
- [x] auditoría accesible automatizada con Axe (0 violaciones WCAG 2.1 AA en todas las rutas y temas);
- [x] revisión de diseño responsivo (390px, 768px, 1024px, 1440px sin overflow horizontal);
- [x] revisión de temas dark/light con persistencia y sin pérdida de contraste;
- [x] revisión de internacionalización ES/EN (rutas `/` y `/en/`, atributos `lang` y diagramas localizados);
- [x] metadata estática y dinámica por ruta (título, descripción, canonical y hreflang);
- [x] generación de sitemap (`/sitemap.xml`) y directivas de robots (`/robots.txt`);
- [x] infraestructura de Visual QA automatizado con Playwright (`.agents/skills/portfolio-visual-qa/SKILL.md`);
- [x] pipeline de verificación estricto consolidado (`typecheck` + `lint` + `format:check` + `test:unit` + `test:e2e` + `build`);
- [ ] datos estructurados (JSON-LD);
- [ ] tarjetas Open Graph definitivas con imágenes dedicadas;
- [ ] auditoría de rendimiento con Lighthouse y Core Web Vitals en producción;
- [ ] revisión de seguridad final previa a despliegue;
- [ ] integración de analytics respetuosa con la privacidad;
- [ ] despliegue y validación en Vercel Preview;
- [ ] configuración de dominio de producción;
- [ ] revisión humana final.

## Fase 6 — Asisteo V2

No empieces la V2 desde la memoria.

Primero:

1. auditar V1;
2. redactar la especificación de producto V2;
3. decidir qué conservar/cambiar/eliminar;
4. diseñar la arquitectura V2;
5. definir criterios de aceptación;
6. implementar de forma incremental;
7. añadir testing desde el principio;
8. desplegar;
9. revisar;
10. actualizar el case study del portfolio.

## Evolución del portfolio después de Asisteo V2

Sustituir el bloque temporal de Asisteo por el case study real únicamente cuando V2 sea verdaderamente publicable.
