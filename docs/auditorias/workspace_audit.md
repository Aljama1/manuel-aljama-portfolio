# Auditoría del workspace — Portfolio Manuel Aljama

**Fecha:** 2026-09-21  
**Auditor:** Antigravity (Claude Opus 4.6 Thinking)  
**Acción:** solo lectura — no se ha modificado ningún archivo

---

## 1. Documentación encontrada

El repositorio contiene **un único commit** (`a793e05 docs: establecer especificacion inicial del portfolio`) sobre la rama `master` (no `main`). No existe código fuente, ni `package.json`, ni carpeta `docs/`, ni carpeta `src/`.

### Archivos presentes

| Archivo | Tamaño | Rol |
|---------|--------|-----|
| [PROJECT_CONSTITUTION.md](file:///c:/Users/manue/Desktop/Proyectos/portfolio-manuel-aljama/PROJECT_CONSTITUTION.md) | 42 KB, 55 secciones | **Fuente de verdad principal.** Identidad, contenido, diseño, stack, testing, CI, seguridad, lanzamiento, autonomía del agente. |
| [AGENTS.md](file:///c:/Users/manue/Desktop/Proyectos/portfolio-manuel-aljama/AGENTS.md) | 5.8 KB | Reglas compartidas para cualquier agente de IA. |
| [ANTIGRAVITY_MASTER_PROMPT.md](file:///c:/Users/manue/Desktop/Proyectos/portfolio-manuel-aljama/ANTIGRAVITY_MASTER_PROMPT.md) | 5.6 KB | Prompt de inicio para Antigravity: 12 pasos de implementación ordenados. |
| [DECISION_REGISTER.md](file:///c:/Users/manue/Desktop/Proyectos/portfolio-manuel-aljama/DECISION_REGISTER.md) | 6 KB, 104 decisiones | Registro resumido de todas las decisiones tomadas en planificación. |
| [ROADMAP.md](file:///c:/Users/manue/Desktop/Proyectos/portfolio-manuel-aljama/ROADMAP.md) | 2.7 KB, 7 fases | Fases 0–6 + evolución post-Asisteo V2. |
| [CONSISTENCY_REVIEW.md](file:///c:/Users/manue/Desktop/Proyectos/portfolio-manuel-aljama/CONSISTENCY_REVIEW.md) | 1.9 KB | Revisión cruzada de consistencia (aprobada con puertas pendientes). |
| [CLAUDE.md](file:///c:/Users/manue/Desktop/Proyectos/portfolio-manuel-aljama/CLAUDE.md) | 0.5 KB | Adaptador mínimo para Claude Code. |
| [README.md](file:///c:/Users/manue/Desktop/Proyectos/portfolio-manuel-aljama/README.md) | 1.5 KB | Índice del paquete de especificación y repos de referencia. |

### Ausencias notables

- No existe carpeta `docs/` ni `docs/decisions/` (los ADR mencionados en AGENTS.md).
- No existe `package.json`, `tsconfig.json`, ni ningún fichero de código.
- No existe `.nvmrc` ni `.node-version`.
- No existen assets, contenido, ni tests.
- La rama se llama `master`, no `main` (la constitución exige proteger `main`).

---

## 2. Reglas obligatorias identificadas

A continuación las reglas que los documentos marcan explícitamente como no negociables o de cumplimiento obligatorio:

### Tooling y stack

- **pnpm** — único gestor de paquetes permitido.
- **TypeScript** en modo estricto.
- **Tailwind CSS** — componentes propios, no librería UI externa sin justificación.
- **Lucide React** — familia principal de iconos.
- **next/font** para tipografía.
- **next/image** para imágenes cuando corresponda.

### Contenido y veracidad

- Nunca inventar métricas, usuarios, certificaciones, capturas, demos, cumplimiento normativo.
- Nunca presentar Asisteo V1 como producto terminado.
- No crear ruta pública de Asisteo hasta que V2 alcance `PUBLISHED`.
- Las afirmaciones técnicas deben estar respaldadas por evidencia del repositorio.
- La evidencia del repositorio prevalece sobre texto preliminar.

### Internacionalización

- `/` → español, `/en/` → inglés.
- Contenido separado de presentación.
- ES y EN revisadas antes de marcar contenido como `PUBLISHED`.

### Git

- Ramas `feat/*`, `fix/*`, `refactor/*`, `test/*`, `docs/*`, `chore/*`.
- Conventional Commits.
- Squash merge sobre `main`.
- No force push sobre `main`.
- No trabajo normal directamente sobre `main`.
- PRs para trabajo relevante.

### Seguridad

- Nunca hacer commit de secretos.
- No desactivar controles de seguridad para pasar checks.
- Evitar `dangerouslySetInnerHTML` sin control.
- Headers de seguridad y CSP revisados antes de producción.

### Calidad y lanzamiento

- Definition of Done: compilar ≠ terminado (typecheck + lint + tests + build + responsive + dark/light + ES/EN + accesibilidad + consola limpia + diff revisado).
- Launch checklist obligatorio (sección 47 de la Constitución).
- Revisión humana final obligatoria.

### Autonomía del agente

- **Puede decidir**: nombres locales, implementación de bajo impacto, refactors pequeños, tests derivados de requisitos, estilos dentro de tokens.
- **Debe justificar**: nuevas dependencias, refactors moderados, cambios de comportamiento, servicios de terceros, cambios responsive relevantes.
- **Debe detenerse y preguntar**: cambios de stack, arquitectura, requisitos, sistema de diseño, operaciones destructivas, producción con riesgo, acciones irreversibles.
- Nunca modificar la constitución silenciosamente.

### Anti-sobrediseño

- No abstracciones "por si acaso".
- No código solo para cobertura.
- No crear múltiples fuentes de verdad.
- No dependencias innecesarias.

---

## 3. Arquitectura y stack definidos

### Stack baseline

```text
Next.js       16.3.3
React         19.3.0
TypeScript    6.0.3
Tailwind CSS  4.3
Node.js       24.21.0 LTS
pnpm          12.5.1
ESLint        10.11.0
Playwright    1.63.0
Vitest        5.x
```

> [!IMPORTANT]
> Estas versiones son **baseline de referencia** de la fase de especificación. La constitución exige re-verificar compatibilidad antes del bootstrap real.

### Tecnologías decididas

| Capa | Tecnologías |
|------|-------------|
| Framework | Next.js + React |
| Lenguaje | TypeScript estricto |
| Estilos | Tailwind CSS, componentes propios |
| Motion | `motion` (Motion for React) — solo si se justifica |
| Iconos | Lucide React |
| Contenido | MDX para case studies, archivos `.ts` para datos |
| Testing unitario | Vitest |
| Testing E2E | Playwright |
| Linting | ESLint + Prettier |
| Git hooks | Husky + lint-staged + commitlint |
| CI/CD | GitHub Actions → Vercel |
| Analytics | Plausible o Umami (elección en despliegue) |

### Explícitamente excluido

- CMS
- Base de datos
- Backend / formulario de contacto (V1)
- Librería UI completa (Radix, shadcn, etc.)
- Cursor personalizado
- Pantallas de carga artificiales
- Trackers innecesarios

### Estructura de directorios propuesta

```text
portfolio/
├── public/assets/{brand,avatar,hero,projects/{trace,asisteo},og}
├── src/
│   ├── app/
│   ├── components/{ui,layout,hero,projects}
│   ├── content/{es,en}
│   ├── lib/
│   ├── hooks/
│   └── types/
├── tests/
├── docs/
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

### Sistema de diseño

- **Lenguaje visual**: 60 % editorial + 30 % UI/producto + 10 % IA experimental.
- **Paleta**: Dark-first (#09090B fondo, #B8F34A primario verde/lima, #A78BFA secundario violeta) con modo Light propio.
- **Tipografía**: Space Grotesk (titulares) + Inter (cuerpo) + JetBrains Mono (técnico).
- **Espaciado**: sistema base 4/8.
- **Container**: max-width 1280 px.
- **Grid**: 12 col escritorio → 6–8 tablet → 1 col móvil.
- **Breakpoints**: 640 / 768 / 1024 / 1280.
- **Motion**: 150 ms / 250 ms / 450 ms; `prefers-reduced-motion` prioritario.
- **Radios**: 8 / 12 / 20.

### Rutas públicas al lanzamiento

```text
/                          Home ES
/en/                       Home EN
/projects/trace/           Trace ES
/en/projects/trace/        Trace EN
```

Asisteo reservado. Las secciones de Home son anchors (`/#projects`, `/#about`, etc.).

---

## 4. Decisiones que dependen de verificación posterior

Estas son **puertas de verificación** explícitas (sección 54 de la Constitución + CONSISTENCY_REVIEW.md), **no decisiones de producto abiertas**:

| # | Puerta | Estado | Notas |
|---|--------|--------|-------|
| 1 | Re-verificar versiones compatibles actuales del stack | ⏳ Pendiente | Debe hacerse justo antes del `pnpm create next-app`. Las versiones baseline pueden haber cambiado. |
| 2 | Portfolio Polish de Trace (auditoría del repo) | ⏳ Pendiente | No se pueden cerrar las afirmaciones técnicas del case study sin inspeccionar el código de [Trace](https://github.com/Aljama1/Trace). |
| 3 | Verificar cifras/afirmaciones finales de Trace post-polish | ⏳ Pendiente | Tests, módulos, estados, plataformas, mecanismos de integridad — todo debe salir del repo real. |
| 4 | Auditar Asisteo V1 completa antes de decidir V2 | ⏳ Pendiente | No decidir reescritura vs reconstrucción selectiva antes de la auditoría. |
| 5 | URLs finales de contacto y redes | ⏳ Pendiente | Email, LinkedIn, GitHub definitivos. |
| 6 | CV definitivo (archivo descargable) | ⏳ Pendiente | |
| 7 | Fotografía de perfil | ⏳ Pendiente | Para sección About. |
| 8 | Capturas reales de Trace post-polish | ⏳ Pendiente | Solo capturas del producto real después del polish. |
| 9 | Proveedor de analytics | ⏳ Pendiente | Plausible o Umami, se decide al desplegar. |
| 10 | Dominio de producción | ⏳ Pendiente | |

> [!WARNING]
> Ninguna de estas puertas debe rellenarse con suposiciones. Si falta la evidencia, se declara como pendiente.

### Nota adicional: rama `master` vs `main`

La rama actual del repositorio es `master`. La constitución y las reglas de Git hablan de proteger `main`. Esta discrepancia deberá resolverse en el bootstrap (renombrar la rama o ajustar la configuración).

---

## 5. Archivos y fases recomendados para el bootstrap

Basándome en el Roadmap (Fase 0) y el ANTIGRAVITY_MASTER_PROMPT (Paso 1–2), esta sería la secuencia lógica:

### Fase 0A — Pre-bootstrap (verificación)

1. **Verificar versiones actuales** de Next.js, React, TypeScript, Tailwind, Node, pnpm, ESLint, Vitest, Playwright — comparar con el baseline y fijar.
2. **Renombrar `master` → `main`** y configurar protección de rama en GitHub.
3. **Resolver la ausencia de `docs/`** — crear la carpeta y mover/enlazar documentación según la estructura prevista.

### Fase 0B — Inicialización del proyecto

4. **Crear el proyecto Next.js** con `pnpm create next-app` (App Router, TypeScript, Tailwind, ESLint).
5. **Fijar versión de Node** en `.nvmrc`.
6. **Fijar `packageManager`** en `package.json`.
7. **Configurar `tsconfig.json`** con modo estricto.
8. **Instalar dependencias de desarrollo**: Vitest, Playwright, Prettier, Husky, lint-staged, commitlint, Lucide React.
9. **Configurar soporte MDX** en Next.js.
10. **Crear `.env.example`** (vacío por ahora, pero presente).

### Fase 0C — Estructura y reglas

11. **Crear la estructura de carpetas** según la constitución:
    ```
    src/app/
    src/components/{ui,layout,hero,projects}
    src/content/{es,en}
    src/lib/
    src/hooks/
    src/types/
    public/assets/{brand,avatar,hero,projects/trace,projects/asisteo,og}
    tests/
    docs/
    docs/decisions/
    ```
12. **Mover/organizar documentación existente** dentro de `docs/`.
13. **Configurar Husky + lint-staged + commitlint**.
14. **Crear `.prettierrc` y `.eslintrc`** (o equivalentes planos).
15. **Crear workflow de CI** básico en `.github/workflows/`.

### Fase 1 — Base del portfolio (primeros archivos de código)

16. **Tokens del sistema de diseño**: `src/lib/design-tokens.ts` o configuración Tailwind con la paleta, tipografía, espaciado y radios definidos.
17. **Configurar `next/font`** con Space Grotesk + Inter + JetBrains Mono.
18. **Layout raíz** (`src/app/layout.tsx`): metadata base, fuentes, tema.
19. **Proveedor de tema** (dark/light con persistencia, sin flash).
20. **Componentes base**: `Container`, `Section`, `Button`.
21. **Navegación** (header desktop + menú móvil).
22. **Footer**.
23. **Rutas i18n**: estructura `src/app/[lang]/` o middleware según la estrategia que se defina.
24. **Páginas 404, error, loading**.

> [!NOTE]
> Cada paso de la Fase 1 debería vivir en una rama `feat/*` con PR hacia `main`, siguiendo el flujo de Git definido.

---

## Resumen ejecutivo

| Aspecto | Estado |
|---------|--------|
| Documentación | Completa y consistente. No hay contradicciones abiertas. |
| Código fuente | **No existe.** El repositorio es solo especificación. |
| Stack | Definido con versiones baseline, pendiente de re-verificación. |
| Diseño | Completamente especificado (paleta, tipografía, espaciado, grid, motion). |
| Contenido | Estructura definida, textos base en la constitución, datos personales pendientes. |
| Puertas de verificación | 10 puertas identificadas, ninguna cerrada. |
| Rama Git | `master` (debería ser `main`). |
| Próximo paso viable | Fase 0A: verificar versiones actuales del stack. |
