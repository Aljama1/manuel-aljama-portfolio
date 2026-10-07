# ESPECIFICACIÓN TÉCNICA: OVERHAUL VISUAL Y CRAFT DEL CASE STUDY DE TRACE

**Documento:** `docs/specs/trace_case_study_ui_spec.md`  
**Estado:** DRAFT / PROPUESTA TÉCNICA  
**Versión:** 1.0.0  
**Fecha:** 2026-10-07  
**Responsable:** Manuel Aljama & Agente Antigravity  
**Fuente de verdad jerárquica:** `PROJECT_CONSTITUTION.md` > Este documento > `AGENTS.md`  
**Rutas objetivo:** `/projects/trace` (ES) y `/en/projects/trace` (EN)

---

## 1. OBJETIVO Y ALCANCE

### 1.1 Propósito

Elevar la experiencia visual, la jerarquía tipográfica y el acabado de ingeniería del case study de **Trace** (`/projects/trace` y `/en/projects/trace`) para alinearlo 1:1 con el estándar de diseño **Craft Bento** implementado en la página principal (Home).

Se busca eliminar la disparidad estética actual (cajas grises planas, ritmo monótono y falta de capas de iluminación) sin alterar el contenido editorial ni los contratos de software existentes.

### 1.2 Límites Innegociables (Reglas de Oro "Sin romper nada")

1. **Invarianza Estructural de IDs y Selectores:**
   - Se deben conservar intactos todos los IDs de sección exigidos por los tests E2E:
     `#overview`, `#problem`, `#solution`, `#product-flow`, `#demo`, `#architecture`, `#decisions`, `#challenges`, `#testing`, `#security`, `#result`, `#learnings`, `#deep-dive`, `#navigation`.
2. **Invarianza del Reproductor de Vídeo:**
   - El elemento `<video>` debe mantener obligatoriamente:
     - `poster="/media/projects/trace/demo-poster.webp"`
     - `controls` presente
     - `preload="metadata"`
     - Ausencia de `autoplay`
     - `<source src="/media/projects/trace/demo.mp4" type="video/mp4" />`
3. **Invarianza de Headings y Aserciones de Tests:**
   - Los títulos `<h1>Trace</h1>` y los `<h2>` de cada una de las 13 secciones editoriales deben conservar exactamente sus textos y niveles jerárquicos (en ES y EN).
4. **Invarianza de Declaraciones y Veracidad:**
   - La decisión `integridad-sha256` debe mantener sin alteraciones el aviso técnico/legal que explicita que el hash SHA-256 **NO constituye una homologación Veri\*Factu ni certificación de la AEAT**.
   - Se mantiene la prohibición estricta de enlazar o promocionar Asisteo como producto terminado.
   - Los enlaces a GitHub (`https://github.com/Aljama1/Trace`) y volver a proyectos (`/#projects` / `/en/#projects`) deben permanecer intactos.
5. **Invarianza de Tests y Accesibilidad:**
   - Los 72 tests unitarios (`pnpm test:unit`), las suites E2E (`tests/e2e/trace.spec.ts`) y los tests de accesibilidad (`tests/a11y/trace.a11y.spec.ts`) deben pasar al 100% en modo oscuro y claro con 0 violaciones WCAG 2.2 AA.
6. **Cero Dependencias Externas Adicionales:**
   - Toda la mejora visual se implementará mediante Tailwind CSS v4, tokens existentes, Lucide icons y utilidades ya disponibles en el repositorio.

---

## 2. DIAGNÓSTICO: ESTADO ACTUAL VS. ESTÁNDAR HOME

| Aspecto             | Estado actual en Trace                                      | Estándar Home (Bento Craft)                                | Objetivo para Trace                                                     |
| :------------------ | :---------------------------------------------------------- | :--------------------------------------------------------- | :---------------------------------------------------------------------- |
| **Motion**          | Estático al 100%. Carga en bloque.                          | `ScrollReveal` con IntersectionObserver escalonado.        | Transiciones progresivas suaves por sección.                            |
| **Atmósfera y Luz** | Franjas alternas planas (`bg-surface/20`, `bg-surface/80`). | Halos difusos (`blur-3xl`), degradados sutiles y relieves. | Halos ambientales en Hero, Demo y Arquitectura.                         |
| **Hero**            | Lista básica de etiquetas grises y texto plano.             | Acabado satinado, micro-badges y telemetría visual.        | Cabecera técnica con badges activos y mini-stats de arquitectura.       |
| **Demo Video**      | Caja negra básica con padding simple.                       | Marco estilo navegador/app con barra superior satinada.    | Frame con barra de producto, URL ficticia y dot indicators.             |
| **Diagramas**       | Esquemas tipo wireframe con bordes grises duros.            | Tarjetas vivas con conectores y pulsos de estado.          | Nodos técnicos con badges de protocolo (Signals, WebSocket, Firestore). |
| **Decisiones (5)**  | Tarjetas rectangulares idénticas ("twin-box").              | Jerarquía visual diferenciada según el dominio técnico.    | Acentos temáticos (Arquitectura = Lima, Seguridad = Violeta).           |
| **Calidad / Tests** | Caja verde simple de advertencia.                           | Dashboard de telemetría de ingeniería.                     | Panel de métricas con indicadores de test suite y CI gates.             |

---

## 3. ESPECIFICACIÓN DETALLADA POR COMPONENTE

### 3.1 Hero y Cabecera del Case Study (`CaseStudyPage.tsx`)

- **Atmósfera:**
  - Incorporar un halo difuso en la parte superior derecha (`pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent blur-3xl`).
- **Barra de navegación contextual:**
  - Botón de retorno ("Volver a proyectos") con micro-interacción refinada y transición de icono `group-hover:-translate-x-1`.
  - Píldora de estado del proyecto con halo perimetral suave y pulso esmeralda: `PRODUCCIÓN ARCHIVADA · OPEN SOURCE`.
- **Bloque de Tecnologías:**
  - Sustituir las etiquetas grises planas (`rounded-xs border border-border bg-surface`) por badges con acabado satinado `bg-surface-raised/80 border border-border/80 text-foreground text-xs font-mono shadow-2xs hover:border-primary/40 transition-colors`.

### 3.2 Ficha Técnica y Resumen (`#overview`)

- **Resumen Editorial:**
  - Mantener la legibilidad tipográfica en columna ancha (`max-w-prose` / `lg:col-span-8`) con Inter, espaciado `leading-relaxed` y separación de párrafos cuidada.
- **Aside Ficha Técnica:**
  - Convertir el cuadro en una tarjeta elevada tipo bento (`bg-surface/80 backdrop-blur-sm border border-border/80 rounded-2xl p-6 shadow-sm`).
  - Cabecera con acento de color secundario (violeta) e icono mono técnico.
  - Pares clave-valor (`dt`/`dd`) con separadores suaves y tipografía mono contrastada.

### 3.3 Problema y Solución (`#problem` y `#solution`)

- **Sección Problema:**
  - Rediseñar las 3 tarjetas de fricción del sector hostelero:
    - Marco `rounded-xl border border-border/80 bg-surface/70 hover:border-amber-500/40 hover:bg-surface-raised transition-all duration-200`.
    - Micro-indicador de alerta técnica sutil en cada punto de dolor.
- **Sección Solución:**
  - Cuadrícula de 4 capas de solución con numeración mono destacada (`01`, `02`, `03`, `04`):
    - Tarjetas conectadas visualmente con acento en la línea superior (`border-t-2 border-primary/60`).
    - Iconos distintivos para cada rol (Cliente, Barra, Cocina, Gerencia).

### 3.4 Flujo de Producto Interactivo (`#product-flow` & `CaseStudyFlowDiagram.tsx`)

- **Diagrama de 10 Pasos:**
  - Refinar el conector del flujo para que no parezca una cuadrícula partida:
    - Línea guía de conexión horizontal/vertical sutil entre los 10 pasos.
    - Badges de rol (_Comensal_, _Personal_, _Sistema_) con colores semánticos coordinados con la leyenda.
    - Micro-efecto hover en cada paso para destacar la acción reactiva correspondiente.

### 3.5 Frame de Vídeo y Demostración (`#demo` & `CaseStudyVideo.tsx`)

- **Marco de Aplicación / Navegador:**
  - Envolver el reproductor de vídeo en una ventana con terminación satinada idéntica al `TraceHeroCard` de la Home:
    - **Header del Frame:** Tres puntos de ventana macOS (rojo, amarillo, verde), título de sesión (`trace-kds.restaurant / demo-session`), badge de resolución `1080p · WebP Fallback`.
    - **Borde y Sombra:** `border border-border/80 rounded-2xl shadow-xl bg-surface/90 overflow-hidden`.
  - El elemento `<video>` interno conserva el 100% de sus atributos nativos para garantizar tests y accesibilidad.

### 3.6 Arquitectura de Sistema (`#architecture` & `CaseStudyArchitectureDiagram.tsx`)

- **Bloques de la Arquitectura (4 Capas):**
  - **Capa 1: PWA Cliente (Angular 20 + Signals):** Acento en color primario (lima).
  - **Capa 2: Mobile Bridge (Ionic 8 + Capacitor 8):** Conexión nativa Bluetooth y hardware térmico.
  - **Capa 3: Backend & Sync (Cloud Firestore + Rules):** Indicador de canal reactivo `0ms broadcast`.
  - **Capa 4: Integridad Criptográfica (SHA-256 Ledger):** Badge de seguridad violeta con icono `Lock`.
- **Conectores Visuales:**
  - Añadir flechas de sincronización bidireccional y latencia en formato mono (`<-> 0ms sync`).

### 3.7 Decisiones Clave de Ingeniería (`#decisions`)

- **Diferenciación de las 5 Decisiones:**
  - Evitar el aspecto de bloques duplicados. Tratamiento visual con elevación `rounded-2xl border border-border/80 bg-surface/80 p-6 sm:p-8 hover:border-foreground-muted/30 transition-all`.
  - Cabecera con número mono en pill (`01`, `02`, `03`, `04`, `05`), título principal y subtítulo de impacto.
  - **Grid Interno 2x2 Refinado:**
    1. _Contexto del problema_ (gris suave editorial).
    2. _Decisión tomada_ (texto destacado en blanco/modo oscuro con mayor peso).
    3. _Justificación técnica_ (acento lima con viñeta de validación).
    4. _Trade-off asumido_ (acento ámbar/violeta que transparenta el compromiso de ingeniería).
  - **Aviso Legal Veri\*Factu en Decisión 5:**
    - Marco de advertencia técnica formal con icono `AlertTriangle` y badge `AVISO TÉCNICO Y LEGAL / REGULATORIO`, manteniendo intacto el texto legal verificado.

### 3.8 Retos y Soluciones (`#challenges`)

- **Grid de Retos:**
  - Estructurar los 4 retos en un layout balanceado de 2 columnas:
    - Cabecera del reto con badge de severidad técnica.
    - Contraste visual explícito entre el "Reto" (fondo tenue, texto apagado) y la "Solución técnica" (tarjeta interna elevada con borde sutil y texto de alta legibilidad).

### 3.9 Calidad, Testing y CI (`#testing`)

- **Métrica Principal:**
  - Convertir el bloque verde actual en una tarjeta de telemetría de ingeniería:
    - Métrica destacada: contador de tests en tamaño display `font-heading text-4xl font-bold text-foreground` con píldora `100% SUITE VERDE`.
    - Nota técnica editorial alineada a la derecha.
- **Cuadrícula de Áreas Críticas y Quality Gates:**
  - Tarjetas elevadas con checkmarks luminosos en color primario (`CheckCircle2`), tipografía mono para las áreas (`comandas-service`, `allergens-filter`, `crypto-ledger`) y badges de CI/CD.

### 3.10 Seguridad, Resultados y Cierre (`#security`, `#result`, `#learnings`, `#navigation`)

- **Seguridad (3 Pilares):**
  - Tarjetas con icono de escudo en contenedor satinado, halo sutil y tipografía balanceada.
- **Resultados (Entregables):**
  - Lista de hitos factibles con checks en lima y separación limpia.
- **Navegación Final (`#navigation`):**
  - Bloque de llamada a la acción centrado con halo ambiental de despedida, botón principal a GitHub con icono de enlace externo y botón secundario de vuelta a Proyectos.

---

## 4. MATRIZ DE VERIFICACIÓN E INVARIANZAS DE TESTS

| Suite de Tests                  | Elemento Crítico  | Aserción que NO debe romperse                                                                           |
| :------------------------------ | :---------------- | :------------------------------------------------------------------------------------------------------ |
| `tests/unit/trace.test.tsx`     | Título H1         | `screen.getByRole("heading", { level: 1, name: "Trace" })`                                              |
| `tests/unit/trace.test.tsx`     | 13 Títulos H2     | `screen.getByRole("heading", { level: 2, name: section.title })`                                        |
| `tests/unit/trace.test.tsx`     | Video Demo        | `poster="/media/projects/trace/demo-poster.webp"`, `preload="metadata"`, `controls`, sin `autoplay`     |
| `tests/unit/trace.test.tsx`     | Decisión SHA-256  | `legalDisclaimer` contiene `"NO constituye una homologación"` (ES) / `"NOT certified or approved"` (EN) |
| `tests/unit/trace.test.tsx`     | Asisteo leak      | Cero menciones o enlaces a Asisteo en el DOM renderizado.                                               |
| `tests/e2e/trace.spec.ts`       | IDs de Sección    | Visibilidad de `#overview`, `#problem`, `#solution`, `#product-flow`, `#demo`, etc.                     |
| `tests/e2e/trace.spec.ts`       | Botón GitHub      | `getByRole("link", { name: /ver código en github/i })` con `href="https://github.com/Aljama1/Trace"`    |
| `tests/e2e/trace.spec.ts`       | Botón Volver      | `getByRole("link", { name: /volver a proyectos/i })` con `href=/\/?#projects$/`                         |
| `tests/a11y/trace.a11y.spec.ts` | Modo Claro/Oscuro | `0 violaciones WCAG` con AxeBuilder en ES y EN en ambos modos.                                          |

---

## 5. PLAN DE EJECUCIÓN (FASES)

1. **Fase 1: Revisión y Aprobación de este Documento**
   - El usuario revisa la especificación y da el visto bueno para proceder a la implementación.
2. **Fase 2: Refactor Visual de Subcomponentes Satélite**
   - Implementar el nuevo marco de aplicación en `CaseStudyVideo.tsx`.
   - Elevar el diseño de `CaseStudyArchitectureDiagram.tsx`.
   - Refinar el pipeline de pasos en `CaseStudyFlowDiagram.tsx`.
3. **Fase 3: Refactor y Orquestación de `CaseStudyPage.tsx`**
   - Integrar `ScrollReveal` en todas las secciones con stagger fluido.
   - Aplicar la nueva atmósfera, halos ambientales y tarjetas bento en las 14 secciones.
4. **Fase 4: Verificación Integral de Calidad**
   - Ejecutar `pnpm typecheck` (TypeScript estricto).
   - Ejecutar `pnpm test:unit` (todos los 72 tests unitarios en verde).
   - Ejecutar `pnpm lint` y `pnpm format:check` (ESLint y Prettier limpios).
   - Ejecutar `pnpm test:e2e` para validar los tests de Trace y accesibilidad WCAG con Playwright.
5. **Fase 5: Inspección en Navegador Real (Playwright visual)**
   - Comprobar en 390px (móvil) y 1440px (escritorio), tanto en modo oscuro como en modo claro.

---

## 6. DEFINITION OF DONE (CRITERIOS DE ÉXITO)

- [ ] La página `/projects/trace` y `/en/projects/trace` posee la misma identidad visual de alta gama ("Craft Bento") que la Home.
- [ ] Cero regresiones en tests unitarios, E2E y suites de accesibilidad.
- [ ] Cero violaciones de contraste o accesibilidad en modo claro y oscuro.
- [ ] Código estrictamente tipado y formateado según los estándares del proyecto.
- [ ] No se añade ninguna dependencia externa innecesaria.
