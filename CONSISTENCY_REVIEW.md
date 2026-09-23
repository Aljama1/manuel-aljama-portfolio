# Revisión de consistencia de la especificación

**Fecha:** 2026-09-21
**Estado:** APROBADA con puertas de verificación pendientes

## Resultado

La especificación se ha revisado buscando contradicciones entre la Constitución, `AGENTS.md`, el prompt de Antigravity, el adaptador de Claude, el registro de decisiones y el roadmap.

### Ajustes realizados

1. La Constitución pasa a `ACTIVA` y versión `1.0.0`.
2. La política de bootstrap exige auditoría documental antes de crear la aplicación.
3. Antigravity debe producir su plan antes de implementar.
4. Motion for React se identifica como `motion`; no se mantiene la denominación ambigua “Framer Motion/Motion”.
5. El roadmap explicita la puerta de consistencia documental.
6. El checklist de bootstrap incorpora una revisión cruzada de documentos.

## Decisiones que siguen siendo puertas de verificación

- validar contenido técnico final de Trace después del Portfolio Polish;
- auditar Asisteo V1 antes de decidir el alcance exacto de V2;
- elegir proveedor de analytics y dominio;
- incorporar CV, fotografía y datos de contacto definitivos;
- verificar compatibilidad de dependencias secundarias (ej. @types/node para Node 24) durante el bootstrap.

## Regla final

Estas puertas no deben ser “rellenadas” por el agente mediante suposiciones. Si la evidencia falta, debe declararse como pendiente.

## Revisión 2 — 2026-09-21

Correcciones aplicadas:

- Asisteo no tiene ruta pública de case study en el lanzamiento inicial; solo aparece como `BUILDING / REBUILDING`.
- Next.js y React se clasifican como experiencia demostrada de uso en Asisteo V1, mientras que el dominio avanzado queda como área de profundización.
- La regla de i18n distingue claramente entre las rutas públicas iniciales y las rutas futuras de Asisteo.
- `AGENTS.md`, el prompt maestro y el roadmap reflejan la misma regla.

Resultado: no quedan discrepancias de alcance en esos puntos.

## Revisión 3 — 2026-09-21 (Consolidación de Baseline Tecnológica — Fase 0A/0B)

Verificaciones y ajustes aplicados tras auditar el registro de paquetes y el entorno local:

- **Node.js**: confirmado localmente en `24.21.0 LTS`.
- **pnpm**: confirmado localmente en `12.5.1`. Corepack disponible para forzar exactitud.
- **Next.js**: consolidado en `16.3.5` (actualización de parche de estabilidad sobre `16.3.3`).
- **React / React DOM**: ratificado en `19.3.0`.
- **TypeScript**: ratificado y fijado estrictamente en `6.0.3`. Se descarta TypeScript 7 (disponible en registro) porque `@typescript-eslint` (v8.70+) soporta actualmente TypeScript `<6.1.0`.
- **Tailwind CSS**: consolidado en `4.3.3` (parche vigente sobre la línea 4.3).
- **ESLint, Playwright, Vitest**: ratificados en `10.11.0`, `1.63.0` y `5.0.1`.
- **Dependencias secundarias**: no se imponen versiones rígidas prematuras para paquetes auxiliares (ej. `@types/node`); se verificarán durante la inicialización asegurando compatibilidad con Node 24.
- **Git**: rama activa confirmada en `main`.

Resultado: la puerta de verificación de versiones queda cerrada y la baseline tecnológica queda formalmente consolidada.
