# ESPECIFICACIÓN TÉCNICA: OVERHAUL VISUAL Y EXPERIENCIA DE USUARIO (UI/UX)

**Documento:** `docs/specs/ui_ux_overhaul_spec.md`  
**Estado:** DRAFT / PENDIENTE DE APROBACIÓN  
**Versión:** 1.0.0  
**Fecha:** 2026-10-07  
**Responsable:** Tech Lead Front-End & Director de Arte / Manuel Aljama  
**Fuente de verdad jerárquica:** `PROJECT_CONSTITUTION.md` > Este documento > `AGENTS.md`

---

## 1. OBJETIVO Y ALCANCE

### 1.1 Propósito

Transformar la interfaz del portfolio de Manuel Aljama desde su estado actual ("cajas grises aisladas, diseño cuadriculado y estático") hacia un acabado de ingeniería de software de primer nivel (estándares Next.js, Vercel, Linear, Raycast y Awwwards), manteniendo un 100% de integridad funcional, accesibilidad (WCAG 2.2 AA), paridad idiomática (ES/EN) y contratos de tests existentes.

### 1.2 Límites Innegociables (Reglas de Oro "Sin romper nada")

1. **Invarianza Lógica:** No se modificará la estructura de rutas (`/` y `/en/`), los endpoints, los tipos TypeScript de contenido (`src/content/types.ts`), ni el estado interno de componentes de navegación.
2. **Invarianza de Claims y Veracidad:** Queda terminantemente prohibido inventar métricas, usuarios, descargas, o declarar Asisteo como terminado.
3. **Invarianza de Tests Existentes:** Todos los 68 tests de Vitest y las suites E2E/a11y de Playwright deben continuar pasando en verde sin relajar aserciones.
4. **Respeto a la Constitución:** Proporción 60% minimalismo editorial, 30% UI/producto, 10% IA experimental contenida.
5. **No Dependencias Nuevas:** No se añadirán librerías pesadas (ej. Radix, framer-motion no justificada, Three.js). Se utilizará Tailwind CSS v4, tokens CSS semánticos y componentes de interfaz nativos acelerados por hardware.

---

## 2. ARQUITECTURA VISUAL Y DESIGN TOKENS

### 2.1 Atmósfera y Capa de Luz (Lighting & Depth)

- **Fondo con Malla Ambiental:** En `src/app/globals.css`, el fondo `body` integrará gradientes radiales fijos muy sutiles (`3-4% opacity`) basados en los tokens `--color-primary` (lima `#b8f34a`) y `--color-secondary` (violeta `#a78bfa`).
- **Elevación de Superficies:**
  - Superficie base: `bg-surface` (`#111113`) con borde `border-border/60`.
  - Superficie elevada con relieve especular: `bg-surface-raised` con degradado perimetral sutil al hover (`hover:border-border/90 hover:shadow-lg`).
  - Modo claro: Fondos `#fafafa`, superficies `#ffffff`, sombras suaves `rgba(0,0,0,0.04)` y bordes `#e4e4e7`.

### 2.2 Tipografía y Espaciado

- Mantener la jerarquía tipográfica:
  - Titulares: Space Grotesk (`font-heading`).
  - Cuerpo: Inter (`font-sans`).
  - Datos/Técnico: JetBrains Mono (`font-mono`).
- Líneas de lectura editorial con `max-w-prose` / `max-w-3xl` para garantizar legibilidad.

---

## 3. ESPECIFICACIÓN POR COMPONENTE / MÓDULO

### 3.1 Módulo Core & Motion: `ScrollReveal.tsx` y `globals.css`

- **Defecto a erradicar:** Bug de clase concatenada `"scroll-revealis-revealed"`.
- **Comportamiento exigido:**
  - `className` debe concatenar con espacio: `scroll-reveal is-revealed`.
  - El trigger de IntersectionObserver debe ser robusto y asegurar que si JS o IO no disparan inmediatamente, el contenido tenga degradación elegante con opacidad visible.
  - Soporte estricto de `prefers-reduced-motion: reduce`.

### 3.2 Módulo Hero: `Hero.tsx`, `TraceHeroCard.tsx`, `TechStackBentoCard.tsx`, `EngineeringPhilosophyCard.tsx`

- **Card 1 (Perfil y Conversión):**
  - Eliminar la sensación de caja dura. Añadir halo difuso perimetral detrás del avatar (`primary/15 blur-2xl`).
  - Pulir la píldora de disponibilidad: mantener el texto ("Disponible para trabajar" / "Available for work") con micro-indicador de pulso verde esmeralda.
  - Botones de acción: Botón principal de descarga CV con borde suave reactivo; botones secundarios con micro-interacción `active:scale-[0.98]`.
- **Card 2 (Trace Showcase):**
  - Pulir el browser frame: barra superior con acabado satinado, pestañas con contraste claro entre activa/inactiva.
  - Telemetría interactiva: gráfico SVG de sincronización con curva suavizada y pulso de actividad.
- **Card 3 & 4 (Stack y Filosofía):**
  - Des-encajonar el grid 50/50: darles tratamientos visuales diferenciados para que no parezcan dos cajas gemelas clonadas.

### 3.3 Módulo Proyectos: `ProjectsSection.tsx` y `ProjectBlock.tsx`

- **Defecto a erradicar:** Caja de la derecha vacía con línea diagonal genérica y texto estático ("PROJECT / 01 TRACE").
- **Solución exigida:**
  - Panel técnico de arquitectura viva para cada proyecto:
    - **TRACE:** Badge de validación ("VERIFIED CLAIMS"), badges de arquitectura (Angular 20, Signals, Cloud Firestore 0ms, Integridad SHA-256) y telemetría de proyecto.
    - **ASISTEO:** Badge de estado transparente ("SPEC IN PROGRESS / REBUILDING"), arquitectura proyectada (Clean Architecture, Next.js Modular, Spec-Driven) y aviso de que el case study público se liberará tras la V2.
  - Mantener intactas las aserciones de tests: Trace debe seguir conteniendo el botón hacia `/projects/trace` (o `/en/projects/trace`), y Asisteo NUNCA debe contener enlace público.

### 3.4 Módulo Sobre Mí: `AboutSection.tsx`

- **Defecto a erradicar:** Foto de perfil duplicada como cuadro aislado e inconexo frente a una lista tipo "ficha médica".
- **Solución exigida:**
  - Mantener el elemento `<img>` para no romper la aserción de `tests/unit/home.test.tsx` (`within(aboutSection).getByRole("img")`), pero integrarlo dentro de una composición editorial asimétrica con marco técnico sutil.
  - Rediseñar los _facts_ (`DAM`, `FOCUS`, `CURRENTLY`, `LOOKING FOR`): micro-tarjetas con bordes orgánicos y acentos sutiles, sustituyendo el divisor gris monótono de formulario.

### 3.5 Módulo Proceso: `HowIBuildSection.tsx`

- **Defecto a erradicar:** Triple redundancia (píldoras arriba, grid de 7 cajas abajo, y caja inferior de filosofía de ciclo).
- **Solución exigida:**
  - Convertir las 7 etapas en una línea de pipeline continua con conectores visuales y micro-estados, eliminando la sensación de bloques aislados.
  - La caja inferior de filosofía de ciclo debe integrarse como la conclusión armónica del pipeline con un halo sutil.

### 3.6 Módulo IA Asistida: `AiEngineeringSection.tsx`

- **Defecto a erradicar:** 6 cajas cuadradas clonadas con `PRACTICE_NODE` repetido 6 veces.
- **Solución exigida:**
  - Eliminar el texto redundante `PRACTICE_NODE`.
  - Crear una composición con jerarquía visual: iconos con micro-hover que reaccionan con el color `--color-secondary` (violeta), bordes suaves y contraste refinado.

### 3.7 Módulo Habilidades & Experiencia: `SkillsSection.tsx` & `ExperienceSection.tsx`

- **Defecto a erradicar:** Cajas gemelas rígidas y timeline estática.
- **Solución exigida:**
  - Micro-chips de tecnologías con bordes sutiles y hover interactivo suave.
  - Mantener sin alterar las etiquetas de grupo (`Group 01`, `Group 02`, etc.) requeridas por los tests unitarios.

### 3.8 Módulo Contacto & Footer: `ContactSection.tsx` & `Footer.tsx`

- **Solución exigida:**
  - Tratar la sección de contacto como una tarjeta de cierre inmersiva con gradiente ambiental contenido, botones claros y directos.
  - Footer con micro-alineación tipográfica pulida.

---

## 4. MATRIZ DE RIESGOS Y MEDIDAS DE PREVENCIÓN

| Riesgo                            | Impacto | Medida Preventiva Innegociable                                                                                                         |
| :-------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| Romper tests unitarios (`vitest`) | Alto    | No cambiar textos clave (`title`, `description`, `key`, labels de grupos) ni atributos `aria-label` / roles.                           |
| Romper accesibilidad (`axe-core`) | Alto    | Mantener contraste >= 4.5:1 (WCAG AA), preservar `focus-visible` en todos los interactivos y no eliminar `aria-hidden` en decorativos. |
| Romper enlaces de Asisteo         | Crítico | Respetar la Constitución: Asisteo jamás debe tener CTA de case study público en V1.                                                    |
| Fuga de idiomas (ES/EN)           | Alto    | Todas las clases e iconos se modifican a nivel de componentes TSX; ningún texto nuevo se cablea en duro sin traducción.                |
| Regresión en vista móvil (390px)  | Alto    | Validar con Playwright en 390×844 que ningún contenedor desborde horizontalmente (`overflow-x`).                                       |

---

## 5. PROCEDIMIENTO DE VERIFICACIÓN POST-IMPLEMENTACIÓN

1. `pnpm typecheck` (cero errores en TypeScript estricto).
2. `pnpm lint` (cero warnings).
3. `pnpm test:unit` (los 68 tests deben pasar en verde).
4. `pnpm test:e2e` (pruebas smoke, a11y, navegación móvil y structured data).
5. Auditoría visual Playwright: screenshots a 390px y 1440px en Dark y Light mode, comprobando la erradicación del efecto cuadriculado.
