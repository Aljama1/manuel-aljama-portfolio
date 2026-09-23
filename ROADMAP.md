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

- [ ] Hero;
- [ ] visual del Hero;
- [ ] sección de proyectos;
- [ ] About;
- [ ] How I Build;
- [ ] AI & Engineering;
- [ ] Skills;
- [ ] Experience/Education;
- [ ] Contact.

## Fase 3 — Portfolio Polish de Trace

- [ ] verificar estado actual del repositorio;
- [ ] ejecutar build local/de desarrollo;
- [ ] reproducir discrepancias visuales de producción;
- [ ] revisar seguridad y configuración;
- [ ] revisar tests;
- [ ] revisar/refactorizar KDS cuando aporte;
- [ ] revisión factual de documentación;
- [ ] revisión del lenguaje relacionado con Veri*Factu;
- [ ] capturas finales;
- [ ] vídeo final.

## Fase 4 — Case study de Trace

- [ ] visión general;
- [ ] problema;
- [ ] solución;
- [ ] flujo;
- [ ] arquitectura;
- [ ] decisiones técnicas;
- [ ] problemas y retos;
- [ ] evolución/Portfolio Polish;
- [ ] testing;
- [ ] rol;
- [ ] resultado;
- [ ] aprendizajes;
- [ ] deep dive;
- [ ] vídeo/enlaces.

## Fase 5 — Calidad y publicación

- [ ] Playwright;
- [ ] axe;
- [ ] revisión responsive;
- [ ] revisión dark/light;
- [ ] revisión ES/EN;
- [ ] metadata;
- [ ] canonical/hreflang;
- [ ] sitemap/robots;
- [ ] datos estructurados;
- [ ] tarjetas Open Graph;
- [ ] Lighthouse/Core Web Vitals;
- [ ] revisión de seguridad;
- [ ] analytics/privacidad;
- [ ] Vercel Preview;
- [ ] dominio de producción;
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
