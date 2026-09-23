# Manuel Aljama Portfolio — Constitución del proyecto

**Estado:** ACTIVA  
**Versión:** 1.0.0  
**Fecha:** 2026-09-21  
**Responsable:** Manuel Aljama  
**Agente inicial:** Antigravity  
**Estrategia de agentes:** agnóstica respecto al proveedor y al IDE

---

## 0. Propósito

Este documento es la **fuente de verdad principal** del portfolio.

Su función es transformar las decisiones tomadas durante la planificación en requisitos concretos, verificables y ejecutables, de forma que un agente de programación no tenga que inferir decisiones importantes a partir del historial de conversación.

El proyecto debe seguir siendo comprensible y mantenible si en el futuro cambia el agente o el IDE utilizado. Antigravity es el entorno inicial, pero el repositorio debe seguir siendo utilizable con Claude Code, Cursor y otros agentes compatibles.

### Principio no negociable

> La documentación define la intención. La arquitectura define las restricciones. Los tests verifican el comportamiento. La automatización hace cumplir las reglas. La persona responsable toma las decisiones importantes. El agente implementa y verifica.

---

# 1. Identidad del producto

## 1.1 Nombre

**Manuel Aljama — Portfolio de Software Developer**

## 1.2 Posicionamiento

El portfolio presenta a Manuel como:

- desarrollador de aplicaciones con formación DAM;
- desarrollador en etapa inicial de carrera orientado hacia full-stack;
- creador de productos que construye proyectos reales, no solo ejercicios;
- desarrollador interesado en utilizar agentes de IA como herramientas de ingeniería;
- candidato junior transparente respecto a lo demostrado, lo que está aprendiendo y lo que sigue en progreso.

El portfolio nunca debe exagerar:

- seniority;
- madurez de producción;
- éxito comercial;
- conocimientos de IA;
- experiencia profesional;
- propiedad técnica sobre algo que no esté respaldado por evidencia.

## 1.3 Mensaje principal

> **CONVIERTO IDEAS EN SOFTWARE REAL.**

La propuesta de apoyo debe comunicar:

> Desarrollador de aplicaciones orientado hacia el desarrollo full-stack, la creación de productos y la ingeniería asistida por IA.

## 1.4 Voz

**Profesional pero cercana.**

Evitar lenguaje genérico de selección como:

- “apasionado por la tecnología desde pequeño”;
- “excelentes dotes de liderazgo”;
- “gran capacidad de trabajo” sin evidencia;
- cualquier frase vacía de valor.

Los textos deben ser:

- directos;
- creíbles técnicamente;
- personales sin convertirse en una autobiografía;
- fáciles de leer por un reclutador.

---

# 2. Público y objetivos

## Público principal

- reclutadores;
- responsables de ingeniería;
- equipos que contratan perfiles junior;
- entrevistadores técnicos;
- desarrolladores que revisen la calidad del código y de los proyectos.

## Objetivos principales

1. Que se entienda quién es Manuel en pocos segundos.
2. Mostrar evidencia creíble de capacidad técnica.
3. Permitir entender Trace con suficiente profundidad como para hablar de él en una entrevista.
4. Mostrar Asisteo como proyecto activo de construcción/reconstrucción sin fingir que está terminado.
5. Explicar cómo Manuel trabaja con IA y procesos de desarrollo estructurados.
6. Facilitar el acceso a GitHub, LinkedIn, email y CV.

## Fuera de alcance

No forman parte de la V1 del portfolio:

- un blog creado únicamente para SEO;
- un CMS;
- un backend complejo de contacto;
- demos falsas;
- capturas falsas;
- métricas de negocio no medidas;
- un escaparate enorme de herramientas de IA;
- un diseño visual tipo dashboard;
- una página de CV independiente;
- autenticación o base de datos innecesarias.

---

# 3. Arquitectura de información

## Rutas principales

Rutas públicas en el lanzamiento inicial:

```text
/                           Home ES
/en/                        Home EN
/projects/trace/            Trace ES
/en/projects/trace/         Trace EN
```

Rutas reservadas para una fase posterior, solo cuando Asisteo V2 tenga un case study publicado:

```text
/projects/asisteo/         Asisteo ES
/en/projects/asisteo/      Asisteo EN
```

La Home puede mostrar Asisteo como `BUILDING / REBUILDING` sin que exista todavía una ruta pública de case study.

La Home contiene las secciones principales mediante anchors, no mediante páginas independientes:

```text
/#projects
/#about
/#how-i-build
/#ai-engineering
/#skills
/#experience
/#contact
```

La versión inglesa utiliza `/en/`.

## Navegación

### Escritorio

```text
MANUEL ALJAMA

Work   About   How I Build   Contact

GitHub ↗   Download CV   ES/EN   Theme
```

Los textos visibles en la navegación pueden conservar estos nombres ingleses por identidad del portfolio; la documentación interna sigue estando en español.

### Móvil

```text
MANUEL ALJAMA                                  ☰
```

Al seleccionar una sección mediante anchor, el menú móvil debe cerrarse.

---

# 4. Estructura de la Home

```text
Hero
Projects
About
How I Build
AI & Engineering
Skills
Experience & Education
Contact
Footer
```

La Home debe sentirse como una composición editorial continua, no como una colección de tarjetas independientes de dashboard.

---

# 5. Hero

## Contenido

Identidad principal:

> MANUEL ALJAMA

Titular:

> **CONVIERTO IDEAS EN SOFTWARE REAL.**

El texto de apoyo debe comunicar:

- formación DAM;
- orientación hacia full-stack;
- creación de productos;
- ingeniería asistida por IA.

CTAs principales:

- `Ver proyectos →`;
- `GitHub ↗`.

No se utiliza fotografía personal en el Hero.

No se lidera con:

- “Junior”;
- “Open to Work”;
- “Buscando empleo”.

Esos datos aparecen más adelante y con contexto.

## Visual del Hero

Debe ser una composición híbrida y propia que represente el proceso de construir software.

Flujo conceptual:

```text
IDEA
  ↓
SPEC
  ↓
AGENT
  ↓
TEST
  ↓
PRODUCT
```

El visual debe construirse mediante HTML/CSS/SVG o equivalente, no como una ilustración de stock ni como una captura falsa de un IDE.

Elementos permitidos:

- forma abstracta central;
- pequeños paneles UI flotantes;
- fragmentos técnicos;
- nodos, líneas y grid muy sutiles;
- motion discreto;
- respuesta mínima al cursor.

Evitar:

- robots;
- cerebros;
- clichés de circuitos;
- logos gigantes de IA;
- terminales falsas;
- ilustraciones 3D genéricas de “programador”.

---

# 6. Sección de proyectos

Orden inicial:

1. Trace;
2. Asisteo.

Los proyectos se presentan como bloques visuales grandes, no como mini-tarjetas de dashboard.

Cada proyecto tiene:

- interacción de hover sutil en escritorio;
- experiencia estática y táctil completa en móvil.

## Trace

```text
TRACE
TFG · COMPLETED
```

Trace es el proyecto principal del lanzamiento.

## Asisteo

Estado inicial del portfolio:

```text
ASISTEO
BUILDING / REBUILDING
```

No deben publicarse capturas de Asisteo V1 como si fueran la versión definitiva del producto.

Cuando Asisteo V2 tenga suficiente madurez, este bloque podrá sustituirse por el case study completo.

---

# 7. Sistema de case studies

Cada proyecto maduro utiliza una estructura común, permitiendo contenido específico:

```text
01 Overview
02 The Problem
03 The Solution
04 How It Works
05 My Role
06 Architecture
07 Key Technical Decisions
08 Challenges
09 Portfolio Polish / Evolution (cuando corresponda)
10 Testing / Quality
11 Result
12 What I Learned
13 Deep Dive
14 Demo / Video
15 Links
16 Project Navigation
```

La primera lectura debe poder comprenderse en aproximadamente 2–3 minutos.

La profundidad técnica se ofrece mediante secciones de deep dive en lugar de obligar a todo el mundo a leer cada detalle de implementación.

## Componentes MDX/UI reutilizables

Componentes potenciales:

```text
CaseHeader
ProjectMeta
ProjectStat
TechStack
ImageGallery
ArchitectureDiagram
TechDecision
Challenge
BeforeAfter
CodeBlock
ProjectVideo
DeepDive
ProjectNavigation
```

Solo se crean componentes que tengan una reutilización demostrable. No se debe sobrediseñar el sistema de MDX.

## Navegación

Cada case study debe disponer de:

- breadcrumb, por ejemplo `WORK / TRACE`;
- `← All projects`;
- proyecto anterior/siguiente cuando corresponda.

---

# 8. Trace — historia canónica del proyecto

Trace es el proyecto principal presentado en el lanzamiento inicial.

## Posicionamiento del proyecto

> Aplicación multiplataforma para gestionar comandas y flujos operativos de hostelería en tiempo real.

Stack a validar en el repositorio antes de publicar afirmaciones definitivas:

- Angular;
- Ionic;
- TypeScript;
- Firebase/Firestore;
- Capacitor;
- PWA/Android.

## Narrativa del case study

```text
IDEA
 ↓
PROBLEMA
 ↓
DESARROLLO
 ↓
PROBLEMAS TÉCNICOS REALES
 ↓
DECISIONES
 ↓
TESTING
 ↓
PORTFOLIO POLISH
 ↓
APRENDIZAJES
```

## Temas técnicos a investigar/mostrar

Solo deben utilizarse si quedan verificados en el repositorio después del polish:

- sincronización en tiempo real;
- reglas de seguridad de Firestore;
- asignación anónima de mesa;
- flujo de estados de las comandas;
- integridad de facturación;
- encadenamiento de hashes/mecanismos de integridad;
- configuración estricta de TypeScript/Angular;
- budgets de producción;
- testing.

## Regla de redacción sobre Veri*Factu

Nunca afirmar que Trace es un sistema Veri*Factu totalmente conforme o certificado salvo que la afirmación esté verificada de forma independiente y realmente implementada.

Cuando sea exacto, puede utilizarse una formulación prudente como:

> Se implementaron mecanismos de integridad y trazabilidad inspirados en requisitos técnicos de los sistemas de facturación españoles, incluyendo encadenamiento de hashes y controles de inmutabilidad.

Si la implementación final difiere, prevalece la evidencia del repositorio.

## Portfolio Polish de Trace

### Prioridad alta

- verificar y resolver discrepancias entre build de producción y desarrollo;
- revisar seguridad/configuración relevante para el build público;
- comprobar con precisión las reglas críticas de facturación/seguridad;
- revisar configuración de entorno/telemetría;
- verificar visualmente el build final de producción.

### Prioridad media

- revisar tests críticos y añadir los que falten cuando prueben comportamiento importante;
- revisar oportunidades de refactorización/duplicación en KDS;
- mejorar manejo de errores cuando tenga una relación clara coste/beneficio;
- limpiar código muerto o confuso;
- corregir documentación que exagere el comportamiento real.

### Prioridad baja

- limpieza cosmética;
- pequeños retoques de UI;
- refactors no esenciales.

### Fuera de alcance del Portfolio Polish

- convertir Trace en producto comercial;
- crear grandes funcionalidades nuevas;
- integración completa con AEAT si no existe;
- reescritura arquitectónica completa;
- grandes integraciones de pago.

---

# 9. Asisteo — estado inicial y estrategia V2

Asisteo es un proyecto activo de reconstrucción, no un producto terminado en el lanzamiento.

## Presentación inicial en Home

```text
ASISTEO
BUILDING / REBUILDING
```

Texto conceptual:

> Proyecto propio que estoy reconstruyendo para aplicar un proceso de desarrollo más estructurado y evolucionarlo hacia un producto full-stack real.

No se publicarán screenshots antiguas de V1 como si fueran definitivas.

## Hallazgos V1 que sirven como contexto, no como claims finales

La V1 ya contiene conceptos aprovechables:

- multi-tenancy;
- RLS;
- RBAC;
- uso de `DATE` para asistencia;
- soft delete;
- organización por features;
- concepto de producto.

Hallazgos conocidos que deben auditarse antes de diseñar V2:

- seguridad/arquitectura del cron de impagos;
- flujo de creación de academia/usuario/perfil;
- validación estructurada de entradas;
- claridad y centralización de la autorización;
- consistencia de versiones/documentación;
- ausencia o insuficiencia de testing según el estado real actual;
- integraciones de Stripe actualmente simuladas/no completas.

Estos hallazgos no sustituyen una auditoría del repositorio. V2 debe empezar siempre con inspección real.

## Proceso de Asisteo V2

```text
ASISTEO V1
   ↓
AUDITORÍA
   ↓
LECCIONES APRENDIDAS
   ↓
ESPECIFICACIÓN V2
   ↓
ARQUITECTURA V2
   ↓
IMPLEMENTACIÓN
   ↓
TESTING
   ↓
DEPLOY
   ↓
REVISIÓN
   ↓
CASE STUDY
```

No decidir previamente si la V2 será una reescritura completa o una reconstrucción selectiva. Esa decisión sale de la auditoría.

---

# 10. About

La sección About debe ser profesional pero humana.

Ideas que debe comunicar:

- gusto por convertir ideas en software real;
- formación DAM;
- experiencia con Java, SQL, Kotlin, Android, Angular, Ionic, Firebase y desarrollo web;
- evolución hacia full-stack;
- interés real por IA y agentes;
- experiencia trabajando con SDD/SDD-like workflows y explorando TDD;
- iniciativa propia con proyectos como Asisteo;
- búsqueda de primera oportunidad como Junior Software Developer;
- deseo de aprender en equipo.

## Estructura visual

Zona izquierda:

- narrativa principal.

Zona derecha:

```text
DAM
Desarrollo de Aplicaciones Multiplataforma

FOCUS
Full-Stack · Product Building · AI

CURRENTLY
Building Asisteo

LOOKING FOR
Junior Software Developer
```

Añadir fotografía pequeña en About.

No convertir About en una página CV pegada a la Home.

---

# 11. How I Build

Debe mostrar un proceso visual claro:

```text
IDEA
 ↓
DEFINE
 ↓
SPEC
 ↓
BUILD
 ↓
TEST
 ↓
REVIEW
 ↓
ITERATE
```

La narrativa es:

> Del concepto al producto, cada proyecto intenta convertirse en un proceso de aprendizaje, construcción y mejora.

No debe convertirse en un tutorial de SDD/TDD. Es una explicación personal de cómo se trabaja.

Frase final posible:

> Build → Learn → Improve → Repeat

---

# 12. AI & Engineering

Es una sección secundaria.

Mensaje central:

> La IA es una herramienta de ingeniería que acelera el trabajo; no sustituye la comprensión ni la responsabilidad del desarrollador.

Temas principales:

- Agents;
- MCP;
- Skills;
- Spec-Driven Development;
- Test-Driven Development;
- documentación;
- revisión.

No debe convertirse en un escaparate de logos de Claude, Gemini, ChatGPT, etc.

Las herramientas concretas pueden mencionarse dentro de case studies cuando sean relevantes.

No afirmar TDD como metodología consolidada en todo el historial si la evidencia del proyecto no lo demuestra.

---

# 13. Skills

La sección se divide en dos grandes categorías.

## Experiencia demostrada / Built with

### Lenguajes

- Java;
- TypeScript;
- JavaScript;
- SQL;
- Kotlin;
- HTML;
- CSS/SCSS.

### Desarrollo de aplicaciones

- Angular;
- Ionic;
- Android;
- Next.js;
- React.

Next.js y React cuentan como **experiencia demostrada de uso** porque forman parte de Asisteo V1. Eso no implica un nivel avanzado. La profundidad actual de dominio debe describirse con honestidad.

### Backend/datos

- Supabase;
- PostgreSQL;
- Firebase/Firestore.

### Herramientas

- Git;
- GitHub;
- VS Code.

## Actualmente explorando / profundizando

- React a mayor profundidad;
- Next.js a mayor profundidad;
- APIs REST/backend;
- Docker;
- Linux;
- cloud/deploy;
- agentes de IA;
- MCP;
- Spec-Driven Development;
- Test-Driven Development.

No utilizar:

- barras de progreso;
- puntuaciones 1–10;
- “expert/advanced/intermediate” subjetivos.

---

# 14. Experiencia y educación

Debe ser una timeline compacta.

## Educación

**DAM — Desarrollo de Aplicaciones Multiplataforma**

No mostrar la nota por defecto.

## Experiencia

Prácticas de desarrollo de software, descritas mediante trabajo realizado y aprendizajes reales, sin convertir una experiencia breve en una afirmación exagerada de seniority.

## Objetivo actual

```text
CURRENTLY LOOKING FOR
Junior Software Developer
```

No usar un enorme badge “Open to Work”.

## Idiomas

- Español — nativo;
- Inglés — B2.

## Credenciales

Dejar preparado un espacio para certificaciones relevantes futuras, pero no añadir cursos por llenar espacio.

---

# 15. Contacto

V1 no necesita formulario.

Debe ofrecer:

- email mediante `mailto:`;
- LinkedIn;
- GitHub;
- CV descargable.

Concepto visual:

> LET'S BUILD SOMETHING.

El email debe ser una acción directa y visible.

---

# 16. Footer

Footer minimalista:

```text
MANUEL ALJAMA
Software Developer

Construyo ideas. Aprendo. Itero.

GitHub · LinkedIn · Email

Work · About · How I Build · Contact

© 2026 Manuel Aljama
```

También puede contener el selector ES/EN y enlaces de Privacy/Cookies cuando realmente sean necesarios.

No crear un footer gigantesco.

---

# 17. Marca

Marca principal:

**MANUEL ALJAMA**

Marca reducida:

**MA**

Símbolo secundario:

**MA con tratamiento gráfico técnico.**

Debe funcionar para:

- favicon;
- Open Graph;
- CV;
- identidad del portfolio;
- posibles proyectos personales futuros.

No crear un logotipo corporativo complejo.

---

# 18. Sistema de diseño

## Lenguaje visual

Proporción conceptual:

```text
60 % minimalismo editorial
30 % UI/producto
10 % IA experimental
```

Principios:

- mucho espacio;
- jerarquía tipográfica clara;
- bloques de proyectos protagonistas;
- detalles técnicos discretos;
- efectos contenidos.

## Paleta oscura

```text
Fondo               #09090B
Superficie           #111113
Superficie elevada   #18181B

Texto principal      #F4F4F5
Texto secundario     #A1A1AA
Texto atenuado       #71717A

Borde                #27272A

Primario             #B8F34A
Primario hover       #C7FF6A

Secundario           #A78BFA
Secundario hover     #B8A0FF
```

## Paleta clara

```text
Fondo               #FAFAFA
Superficie           #FFFFFF
Superficie elevada   #F4F4F5

Texto principal      #18181B
Texto secundario     #52525B
Texto atenuado       #71717A

Borde                #E4E4E7

Primario             #5E8F12
Secundario           #7C3AED
```

El verde/lima es el acento funcional principal.

El violeta se reserva principalmente para:

- IA;
- elementos experimentales;
- gradientes;
- detalles especiales.

No convertir los gradientes en el lenguaje dominante.

## Tipografía

```text
Titulares       Space Grotesk   500 / 600 / 700
Cuerpo          Inter           400 / 500 / 600
Técnico         JetBrains Mono  400 / 500
```

Cargar mediante `next/font`.

No cargar pesos innecesarios.

## Escala aproximada

```text
Hero          64–96 px escritorio
H1            48–64 px
H2            36–48 px
H3            24–32 px
Cuerpo        16–18 px
Pequeño       14 px
Técnico       13–14 px
```

Utilizar `clamp()` cuando tenga sentido.

## Espaciado

Sistema base 4/8:

```text
4
8
12
16
24
32
48
64
80
96
128
160
```

Evitar valores arbitrarios sin motivo.

## Container

```text
max-width: 1280px
```

Padding lateral aproximado:

- escritorio: 32–48 px;
- móvil: 20–24 px.

## Grid

```text
Escritorio: 12 columnas
Tablet:     6–8 columnas
Móvil:      1 columna
```

Los 12 pilares del escritorio no se fuerzan sobre móvil.

## Radios

```text
sm: 8px
md: 12px
lg: 20px
```

Usar 20 px principalmente para elementos grandes.

## Bordes y sombras

Predominio de:

- superficie;
- borde;
- espacio.

No utilizar grandes sombras como recurso visual principal.

## Iconografía

Familia principal:

**Lucide React**

No mezclar familias salvo necesidad justificada.

## Recursos gráficos

Recursos recurrentes:

```text
01 / PROJECTS
──────────────
→
↗
nodos
líneas
puntos
grid
```

Siempre con peso y opacidad controlados.

## Motion

Tokens:

```text
rápido    ~150 ms
normal    ~250 ms
lento     ~450 ms
```

Preferir:

- opacity;
- transform;
- color;
- background.

Evitar animaciones costosas de layout cuando exista alternativa.

`prefers-reduced-motion` tiene prioridad.

## Breakpoints

Referencias:

```text
sm  640
md  768
lg  1024
xl  1280
```

No diseñar para dispositivos rígidos; los breakpoints son puntos de adaptación.

## Reglas de diseño

1. El contenido manda.
2. Los efectos deben tener propósito.
3. Los patrones deben ser consistentes.
4. La accesibilidad nunca se sacrifica por estética.
5. El rendimiento condiciona las animaciones y assets.
6. La jerarquía debe comunicar qué se está viendo, qué puede hacerse y dónde profundizar.

---

# 19. Interacciones y navegación

## Tarjetas de proyectos

En estado normal:

- imagen grande;
- metadatos;
- título;
- descripción;
- CTA.

En hover:

- zoom visual pequeño;
- gradiente discreto;
- movimiento mínimo del título;
- flecha animada.

En móvil no se depende de hover.

## Cursor

Utilizar el cursor del sistema.

No crear custom cursor.

Sí se permite:

- respuesta sutil del Hero;
- microinteracciones en botones/cards.

## Transiciones de página

Preferir:

- fade corto;
- pequeño desplazamiento.

Evitar:

- pantallas que giran;
- cortinas exageradas;
- cargas artificialmente largas.

Respetar `prefers-reduced-motion`.

## Scroll

- `scroll-behavior: smooth` donde corresponda;
- navegación por anchor accesible;
- sección activa destacada discretamente;
- funcionamiento correcto con teclado;
- respetar `prefers-reduced-motion`.

## Tema

Primera visita:

- respetar `prefers-color-scheme`.

Después:

- respetar la preferencia manual persistida.

Evitar flash claro/oscuro al cargar.

El modo Light debe tener diseño y contraste propios, no ser una inversión automática de Dark.

---

# 20. Responsive y requisitos de tema

El responsive es un requisito de primera clase.

Tamaños de validación obligatorios como mínimo:

```text
390 px
768 px
1024 px
1440 px
```

La experiencia móvil debe diseñarse específicamente:

- una columna;
- Hero vertical;
- menú móvil;
- CTAs táctiles;
- sin depender de hover;
- tipografía y espaciado adaptados.

Validar siempre:

- desktop;
- tablet;
- móvil;
- dark;
- light.

---

# 21. Accesibilidad

Debe incluir:

- navegación completa por teclado;
- foco visible;
- contraste suficiente;
- HTML semántico;
- `alt` descriptivo;
- `aria-label` únicamente cuando sea necesario;
- tamaños legibles;
- `prefers-reduced-motion`;
- enlaces/botones diferenciables;
- no depender únicamente del color;
- tamaños táctiles razonables.

Comprobaciones:

- Lighthouse;
- axe cuando sea viable;
- revisión real mediante teclado y navegador.

La accesibilidad no se añade al final; forma parte de cada componente.

---

# 22. Rendimiento

Objetivos orientativos:

```text
Performance      ≥ 90
Accessibility    ≥ 95
Best Practices   ≥ 95
SEO              ≥ 95
```

No convertir las puntuaciones en un juego. La experiencia real importa más que alcanzar un 100 artificial.

Requisitos:

- imágenes optimizadas;
- imágenes responsive;
- lazy loading cuando tenga sentido;
- fuentes optimizadas;
- JavaScript mínimo necesario;
- animaciones eficientes;
- evitar librerías pesadas sin necesidad;
- no cargar medios de proyectos antes de necesitarlos;
- revisar Core Web Vitals.

---

# 23. Assets

## Organización

```text
public/
└── assets/
    ├── brand/
    ├── avatar/
    ├── hero/
    ├── projects/
    │   ├── trace/
    │   └── asisteo/
    └── og/
```

## Imágenes

Usar:

- AVIF cuando aporte una reducción clara;
- WebP como formato habitual;
- PNG cuando necesite transparencia o resulte apropiado;
- SVG para iconos, diagramas y recursos vectoriales.

Usar `next/image` cuando corresponda.

Las capturas de aplicaciones deben mantener suficiente calidad para conservar texto y detalle técnico.

Los `alt` deben describir el contenido real.

## Vídeos

Las imágenes se mantienen en el repositorio.

Los vídeos pueden alojarse externamente y cargarse bajo demanda.

No introducir vídeos pesados innecesariamente en Git.

## Regla de realidad

No utilizar IA para generar capturas que aparenten representar funcionalidades reales.

Flujo esperado:

```text
producto real
↓
captura real
↓
selección
↓
optimización
↓
portfolio
```

Los mockups pueden envolver capturas reales, pero no sustituirlas.

---

# 24. Internacionalización

## Rutas

```text
/        español
/en/     inglés
```

Las rutas de case study solo existen públicamente cuando el proyecto está en estado `PUBLISHED`. Asisteo V1 no tendrá una ruta pública de case study en el lanzamiento inicial.

## Contenido

Mantener separado:

- textos de UI;
- contenido de Home;
- case studies.

Estructura conceptual:

```text
content/
├── es/
│   ├── home.ts
│   ├── ui.ts
│   ├── trace.mdx
│   └── asisteo.mdx
└── en/
    ├── home.ts
    ├── ui.ts
    ├── trace.mdx
    └── asisteo.mdx
```

Los case studies pueden utilizar MDX.

No depender de traducción automática improvisada por el agente.

Cada versión publicada debe tener su equivalente revisado.

---

# 25. SEO

Implementar:

- metadata por página;
- títulos;
- descripciones;
- Open Graph;
- favicon;
- URLs limpias;
- semántica HTML;
- sitemap;
- robots.txt;
- canonical;
- hreflang;
- `x-default` cuando corresponda;
- datos estructurados.

## Datos estructurados

Home:

- `Person`;
- `WebSite`.

Proyectos:

Utilizar un tipo de Schema.org que encaje realmente con el contenido. No introducir propiedades por SEO si no representan datos reales.

Los datos estructurados deben coincidir con el contenido visible.

---

# 26. Veracidad de datos y contenido

No crear jamás:

- usuarios ficticios presentados como reales;
- métricas de negocio inventadas;
- porcentajes no medidos;
- funcionalidades no implementadas;
- certificaciones no obtenidas;
- cumplimiento normativo no demostrado.

El portfolio puede utilizar datos técnicos verificables, por ejemplo:

- número real de tests;
- tecnologías utilizadas;
- número real de módulos/estados;
- plataformas soportadas;
- características técnicas realmente implementadas.

Si una cifra cambia durante el Portfolio Polish, se actualiza el contenido.

---

# 27. Estados de contenido

Se establecen tres estados:

```text
DRAFT
→ contenido en preparación

PREVIEW
→ contenido listo para revisar

PUBLISHED
→ contenido aprobado para producción
```

Las dos versiones ES/EN deben estar revisadas antes de considerar un contenido publicado.

DRAFT/Preview no deben indexarse.

---

# 28. Fuente de verdad

La información fundamental no debe repetirse manualmente en múltiples lugares.

Jerarquía conceptual:

```text
docs/
↓
content/es
content/en
↓
componentes de presentación
```

Datos como:

- nombre;
- formación;
- tecnologías;
- estado de Trace;
- estado de Asisteo;
- experiencia;
- enlaces;

deben mantenerse consistentes.

El CV puede ser un resumen independiente, pero no debe contradecir el portfolio.

La evidencia de los repositorios reales prevalece frente a texto preliminar.

---

# 29. Arquitectura del portfolio

## Principio

Arquitectura sencilla, modular y orientada a contenido.

La separación conceptual es:

```text
contenido → datos/MDX
presentación → componentes
lógica → lib/hooks
estilos → tokens/sistema de diseño
```

## Estructura propuesta

```text
portfolio/
├── public/
│   └── assets/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── hero/
│   │   └── projects/
│   ├── content/
│   │   ├── es/
│   │   └── en/
│   ├── lib/
│   ├── hooks/
│   └── types/
├── tests/
├── docs/
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

No se crean abstracciones “por si acaso”.

---

# 30. Stack

## Baseline inicial

Versiones de referencia consolidadas tras la verificación técnica de la Fase 0A (2026-09-21):

```text
Next.js       16.3.5
React         19.3.0
TypeScript    6.0.3
Tailwind CSS  4.3.3
Node.js       24.21.0 LTS
pnpm          12.5.1
ESLint        10.11.0
Playwright    1.63.0
Vitest        5.0.1
```

Motivos y criterios de compatibilidad de la baseline consolidada:

- **Next.js 16.3.5**: sustituye la referencia preliminar 16.3.3 como actualización de parche dentro de la misma línea menor para estabilidad y corrección de bugs.
- **Tailwind CSS 4.3.3**: consolida el parche vigente de la línea 4.3 decidida.
- **TypeScript 6.0.3**: se ratifica estrictamente en 6.0.3. No se adopta TypeScript 7 (disponible como latest en registro) porque `@typescript-eslint` (v8.70+) soporta actualmente TypeScript `<6.1.0`; saltar a TS 7 provocaría incompatibilidades con el linter.
- **Dependencias secundarias**: para paquetes secundarios como `@types/node` o plugins específicos, no se fijan versiones rígidas prematuras; se verificará compatibilidad exacta durante el bootstrap (por ejemplo, asegurando tipos compatibles con Node 24).

## Tecnologías decididas

- Next.js;
- React;
- TypeScript estricto;
- Tailwind CSS;
- Motion for React (`motion`), únicamente si las necesidades reales lo justifican;
- Lucide React;
- MDX;
- Vitest;
- Playwright;
- ESLint;
- Prettier;
- GitHub Actions;
- Vercel.

No se incluye CMS.

No se incluye base de datos.

No se añade una librería UI completa salvo una justificación explícita.

---

# 31. Gestor de paquetes y reproducibilidad

Usar **pnpm**.

No utilizar npm/yarn/bun para el flujo normal del proyecto.

El proyecto debe fijar:

- versión de Node mediante `.nvmrc` o mecanismo equivalente;
- versión de pnpm mediante `packageManager` en `package.json`;
- `pnpm-lock.yaml` versionado.

No permitir que el agente actualice Next.js, React, TypeScript o paquetes principales por iniciativa propia.

Una actualización importante requiere:

```text
build
↓
tests
↓
lint
↓
typecheck
↓
browser
```

---

# 32. Sistema de componentes

Usar componentes propios con Tailwind.

Evitar una librería UI completa salvo necesidad real.

Los componentes comunes pueden incluir:

- Button;
- Badge;
- Card;
- Section;
- Container;
- Link;
- Navigation;
- etc.

No crear componentes únicamente para eliminar dos líneas repetidas.

## Jerarquía de botones

### Primario

Para acciones principales:

```text
[ Ver proyectos → ]
[ Download CV ]
[ Live Demo ↗ ]
```

### Secundario

```text
[ GitHub ↗ ]
[ Case Study → ]
```

### Texto

```text
View technical details →
Read more →
```

Todos deben tener:

- default;
- hover;
- focus-visible;
- active;
- disabled cuando corresponda.

No llenar bloques con cinco o seis CTAs simultáneos.

---

# 33. Estrategia de testing

## Vitest

Probar:

- utilidades;
- transformaciones de contenido;
- lógica de navegación;
- componentes con lógica significativa;
- datos derivados;
- otras funciones deterministas.

No perseguir una cobertura arbitraria.

## Playwright

Flujos críticos:

```text
Home
↓
Trace
↓
Asisteo
↓
ES → EN
↓
Dark → Light
↓
abrir enlaces importantes
```

También:

- navegación móvil;
- menú hamburguesa;
- enlaces;
- rutas válidas;
- 404;
- imágenes críticas;
- Hero;
- ausencia de errores de consola.

## Accesibilidad

Integrar comprobaciones axe cuando sea práctico.

## Verificación visual

Utilizar navegador real y screenshots durante el proceso de revisión.

Matriz mínima:

```text
390
768
1024
1440
```

Y:

- Dark;
- Light;
- ES;
- EN.

---

# 34. Flujo de Git

## Rama principal

`main` representa un estado estable, compilable y potencialmente desplegable.

## Ramas

```text
feat/*
fix/*
refactor/*
test/*
docs/*
chore/*
```

Ejemplos:

```text
feat/home-hero
feat/trace-case-study
fix/mobile-navigation
refactor/project-content
```

## Commits

Usar Conventional Commits:

```text
feat: ...
fix: ...
style: ...
test: ...
docs: ...
refactor: ...
chore: ...
```

El trabajo relevante pasa por Pull Request incluso siendo un proyecto individual.

Usar squash merge para mantener `main` limpio.

No force push.

No trabajo normal de funcionalidades directamente sobre `main`.

---

# 35. Controles locales de Git

Usar:

- Husky;
- lint-staged;
- commitlint.

Los hooks locales deben ser ligeros.

Comprobaciones típicas:

```text
formatear archivos modificados
lint de archivos modificados
validar mensaje de commit
```

La CI sigue siendo la capa de autoridad, porque los hooks locales pueden saltarse con `--no-verify`.

---

# 36. CI/CD

## Pull Request

```text
Instalar dependencias
 ↓
Typecheck
 ↓
Lint
 ↓
Tests unitarios
 ↓
Build
 ↓
Playwright
 ↓
Comprobaciones de accesibilidad
 ↓
Vercel Preview
```

Los fallos críticos bloquean el merge.

No bloquear un merge por cambios irrelevantes de un punto en Lighthouse.

## Producción

```text
main
 ↓
GitHub CI
 ↓
Vercel Production
```

## Automatización de dependencias

Dependabot o equivalente puede abrir PRs de actualización.

Que exista un PR automático no implica promoción automática a producción.

---

# 37. Seguridad

Obligatorio:

- secretos solo en variables de entorno/gestores de secretos;
- nunca subir credenciales a Git;
- headers de seguridad razonables;
- revisar CSP antes de producción;
- enlaces externos con `rel` apropiado;
- evitar `dangerouslySetInnerHTML` sin control;
- validar/sanitizar datos externos cuando corresponda;
- revisar dependencias;
- no hacer excepciones de seguridad silenciosas;
- no desactivar protecciones solo para hacer pasar una comprobación.

No añadir scripts de terceros sin justificar su finalidad y su impacto en privacidad.

---

# 38. Privacidad y analytics

La analítica debe ser ligera y orientada a privacidad.

Candidatos:

- Plausible;
- Umami.

La elección final se hace al desplegar, según coste, alojamiento y requisitos de privacidad actuales.

No añadir trackers innecesarios.

No añadir backend de formularios en V1.

Las páginas Privacy/Cookies deben existir únicamente en el grado requerido por los servicios reales y el contexto legal aplicable.

---

# 39. Compatibilidad de navegadores

Objetivo principal:

- Chrome/Chromium;
- Edge;
- Firefox;
- Safari;
- Safari iOS;
- Chrome Android.

No introducir capas grandes de compatibilidad antigua sin una necesidad real.

Los efectos puramente visuales deben degradarse de manera elegante si un navegador concreto no los soporta.

---

# 40. Estados de error/carga

Requeridos:

- loading;
- 404;
- error inesperado;
- disabled donde corresponda;
- empty states donde tengan sentido.

No crear pantallas de carga artificialmente largas.

No mostrar trazas técnicas al usuario.

---

# 41. Enlaces legales/privacidad

El footer puede exponer Privacy/Cookies cuando los servicios utilizados lo justifiquen.

No crear una superficie legal gigantesca para servicios que no existan.

---

# 42. Demos y medios

`Live Demo` solo aparece si existe una demo real, estable y comprobada.

`Watch Demo` puede apuntar a una grabación real de 30–90 segundos.

No demos falsas.

No screenshots falsos.

Puede añadirse un Demo Mode más adelante si es real, seguro, mantenible y útil.

---

# 43. Medios de Trace

Las capturas y el vídeo de Trace se obtienen de la aplicación real después del Portfolio Polish.

Áreas sugeridas:

- Hero;
- check-in;
- carta/pedido;
- KDS;
- facturación;
- pantallas técnicas relevantes.

No utilizar para el portfolio estados inestables que ya sepamos que están rotos.

---

# 44. Medios de Asisteo

No utilizar screenshots antiguas de V1 como capturas definitivas.

Cuando V2 sea suficientemente estable, capturar las pantallas reales de V2.

---

# 45. Open Graph / metadata

Crear imágenes específicas para:

- Home;
- Trace;
- Asisteo cuando esté publicado.

El contenido debe derivarse de la página real.

No mantener manualmente metadata contradictoria respecto al contenido.

---

# 46. Sitemap e indexabilidad

Rutas públicas iniciales:

```text
/
/en/
/projects/trace/
/en/projects/trace/
```

Añadir Asisteo solo cuando el case study esté realmente publicado.

El contenido DRAFT/PREVIEW debe llevar `noindex` y quedar fuera del sitemap.

Utilizar:

- canonical;
- hreflang;
- `x-default` cuando corresponda.

---

# 47. Checklist de lanzamiento

## Producto

- [ ] Hero definitivo.
- [ ] Proyectos definitivos.
- [ ] Trace publicado.
- [ ] Asisteo mostrado correctamente como Building/Rebuilding.
- [ ] About definitivo.
- [ ] How I Build definitivo.
- [ ] AI & Engineering definitiva.
- [ ] Skills definitivas.
- [ ] Experience/Education definitiva.
- [ ] Contact definitivo.
- [ ] CV descargable.

## Contenido

- [ ] español revisado;
- [ ] inglés revisado;
- [ ] sin placeholders;
- [ ] sin afirmaciones sin respaldo;
- [ ] datos técnicos verificados;
- [ ] enlaces verificados;
- [ ] capturas reales;
- [ ] demo/vídeo real.

## UX

- [ ] escritorio;
- [ ] tablet;
- [ ] móvil;
- [ ] dark;
- [ ] light;
- [ ] teclado;
- [ ] reduced motion;
- [ ] 404;
- [ ] error/loading.

## Ingeniería

- [ ] typecheck;
- [ ] lint;
- [ ] tests unitarios;
- [ ] E2E;
- [ ] accesibilidad;
- [ ] build;
- [ ] revisión en navegador;
- [ ] consola limpia;
- [ ] dependencias revisadas.

## SEO

- [ ] metadata;
- [ ] canonical;
- [ ] hreflang;
- [ ] sitemap;
- [ ] robots;
- [ ] datos estructurados;
- [ ] Open Graph;
- [ ] favicon.

## Performance

- [ ] imágenes optimizadas;
- [ ] fuentes optimizadas;
- [ ] vídeos bajo demanda;
- [ ] scripts innecesarios eliminados;
- [ ] Core Web Vitals revisados;
- [ ] Lighthouse revisado.

## Seguridad/privacidad

- [ ] sin secretos;
- [ ] `.env.example`;
- [ ] headers;
- [ ] CSP revisada;
- [ ] dependencias revisadas;
- [ ] analytics documentado;
- [ ] requisitos de privacidad revisados.

## Despliegue

- [ ] `main` protegida;
- [ ] CI verde;
- [ ] Preview deployment;
- [ ] Production deployment;
- [ ] dominio;
- [ ] HTTPS;
- [ ] analytics;
- [ ] ruta de recuperación/rollback conocida.

## Revisión humana final

- [ ] calidad visual;
- [ ] exactitud factual;
- [ ] el reclutador entiende el portfolio rápidamente;
- [ ] las afirmaciones de los proyectos son defendibles;
- [ ] no quedan placeholders ocultos.

Solo entonces el portfolio puede marcarse como `PUBLISHED`.

---

# 48. Definition of Done

Una tarea está terminada únicamente cuando cumple todos los criterios aplicables:

- requisitos cumplidos;
- arquitectura respetada;
- sistema de diseño respetado;
- tests relevantes pasan;
- typecheck pasa;
- lint pasa;
- build pasa cuando corresponde;
- no se han introducido secretos;
- no se han modificado archivos no relacionados sin motivo;
- diff revisado;
- responsive verificado cuando cambia UI;
- dark/light verificado cuando cambia UI;
- ES/EN verificado cuando cambia contenido;
- accesibilidad comprobada cuando cambia UI;
- sin errores de navegador/console;
- documentación actualizada cuando cambian decisiones o contratos.

Compilar no equivale a estar terminado.

---

# 49. Política de autonomía del agente

## Puede decidir de forma autónoma

- nombres locales;
- detalles de implementación de bajo impacto;
- pequeños refactors dentro del alcance;
- tests derivados directamente de requisitos;
- decisiones de estilo sencillas ya cubiertas por el sistema de diseño;
- mejoras reversibles de bajo impacto.

## Debe explicar antes de proceder

- nueva dependencia;
- cambio arquitectónico;
- refactor moderado;
- cambio de comportamiento;
- nuevo servicio de terceros;
- cambio responsive relevante.

## Debe detenerse y preguntar

- cambio de stack;
- sustitución de arquitectura;
- cambio de requisitos;
- eliminación de funcionalidad importante;
- cambio del sistema de diseño;
- operación destructiva sobre datos;
- cambio de producción con riesgo relevante;
- operación irreversible.

Nunca utilizar “he tomado la libertad de…” para decidir silenciosamente algo estructural.

---

# 50. Flujo estándar del agente

```text
LEER
 ↓
ENTENDER
 ↓
INSPECCIONAR
 ↓
PLANIFICAR
 ↓
IMPLEMENTAR
 ↓
PROBAR
 ↓
COMPROBAR EN NAVEGADOR
 ↓
REVISAR
 ↓
CORREGIR
 ↓
VERIFICAR
 ↓
INFORMAR
```

Para tareas importantes, el agente debe producir un plan breve antes de implementar.

Ante ambigüedades de alto impacto, debe detenerse y solicitar una decisión.

---

# 51. Reglas anti-slop / anti-sobrediseño

Nunca:

- añadir abstracciones sin necesidad real;
- añadir frameworks por moda;
- inventar APIs/funciones/archivos sin comprobar;
- duplicar configuración;
- crear capas “preparadas para el futuro” sin requisitos reales;
- crear código únicamente para aumentar cobertura;
- hardcodear valores solo para pasar tests;
- refactorizar archivos fuera del alcance;
- añadir efectos decorativos sin valor UX;
- crear múltiples fuentes de verdad.

Principio:

> Implementar la solución más sencilla que satisfaga correctamente los requisitos actuales y deje una base razonable para evolucionar.

---

# 52. Portabilidad entre agentes y herramientas

El proyecto es agnóstico respecto al agente.

Agente inicial:

**Antigravity**

Alternativas esperadas:

- Claude Code;
- Cursor;
- otros agentes de programación compatibles.

`AGENTS.md` y `docs/` constituyen la fuente de verdad compartida.

Las reglas específicas de cada herramienta deben ser adaptadores mínimos.

Cambiar de agente no debe requerir rediseñar el proyecto.

---

# 53. Decisiones que ningún agente puede inferir por preferencia propia

Un agente no puede cambiar unilateralmente:

- estrategia Next.js/React;
- pnpm;
- estructura de i18n;
- sistema de diseño;
- orden de proyectos;
- estado Trace/Asisteo;
- reglas de veracidad;
- postura de seguridad;
- estrategia de testing;
- protección de `main`;
- estructura de case studies.

---

# 54. Puertas de verificación antes del bootstrap

Estas cuestiones no son decisiones de producto abiertas; son pasos de verificación.

1. Volver a comprobar versiones compatibles exactas antes de crear el proyecto (COMPLETADA en Fase 0A: Next.js 16.3.5, React 19.3.0, TypeScript 6.0.3, Tailwind CSS 4.3.3, Node 24.21.0, pnpm 12.5.1).
2. Ejecutar el análisis/Portfolio Polish de Trace sobre el estado actual.
3. Verificar cifras y afirmaciones finales de Trace después del polish.
4. Auditar completamente Asisteo V1 antes de decidir reconstrucción completa o selectiva.
5. Recoger las URLs finales de contacto y redes.
6. Obtener el archivo CV definitivo.
7. Obtener una fotografía de perfil adecuada.
8. Capturar medios reales de Trace después del polish.
9. Elegir proveedor de analytics en el despliegue.
10. Comprar/elegir dominio definitivo.

No inventar ninguno de estos valores.

---

# 55. Principio final del proyecto

> El portfolio es en sí mismo un proyecto de software.
>
> Trace demuestra lo que Manuel ya ha construido.
>
> Asisteo demuestra cómo Manuel está evolucionando como creador de producto.
>
> El portfolio demuestra cómo Manuel aborda actualmente la ingeniería de software.
>
> La IA acelera el trabajo, pero la persona responsable posee los requisitos, las decisiones, la verificación y el resultado final.
