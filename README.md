# Portfolio de Manuel Aljama — Paquete de especificación

Esta carpeta contiene la especificación activa y las reglas de trabajo del portfolio antes de comenzar la implementación.

## Archivos principales

- `PROJECT_CONSTITUTION.md` — fuente de verdad completa del proyecto.
- `AGENTS.md` — reglas comunes de funcionamiento de los agentes de IA.
- `CLAUDE.md` — adaptador mínimo para Claude Code.
- `DECISION_REGISTER.md` — registro resumido de decisiones.
- `ROADMAP.md` — fases de implementación.
- `ANTIGRAVITY_MASTER_PROMPT.md` — prompt inicial de implementación.

## Importante

La especificación distingue deliberadamente entre:

- decisiones ya tomadas;
- hechos verificados en los repositorios actuales de Trace/Asisteo;
- hechos que todavía requieren verificación mediante ejecución/runtime.

No inventes datos que falten para que el documento parezca completo.

## Fuentes de los repositorios

Trace: https://github.com/Aljama1/Trace
Asisteo: https://github.com/Aljama1/Asisteo

## Regla de bootstrap y baseline aprobada

Tras la verificación técnica de la Fase 0A (2026-09-21), la baseline tecnológica aprobada queda consolidada en:

- Node.js 24.21.0 LTS
- pnpm 12.5.1
- Next.js 16.3.5 (parche de estabilidad sobre 16.3)
- React 19.3.0
- React DOM 19.3.0
- TypeScript 6.0.3 (fijado en 6.0.3 por compatibilidad de `@typescript-eslint` con `<6.1.0`; descartado TS 7)
- Tailwind CSS 4.3.3 (parche vigente de la línea 4.3)
- ESLint 10.11.0
- Playwright 1.63.0
- Vitest 5.0.1

Para dependencias secundarias como `@types/node`, se verificará compatibilidad exacta durante la inicialización.

## Nota sobre el idioma

La documentación interna del proyecto se mantiene en español. Se conservan algunos nombres de archivo y nombres de herramientas (`AGENTS.md`, `CLAUDE.md`, `README.md`, `pnpm`, `Next.js`, etc.) por compatibilidad y convención técnica.
