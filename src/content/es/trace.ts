import type { TraceCaseStudyContent } from "../types";

export const esTrace: TraceCaseStudyContent = {
  meta: {
    title: "Trace — Case Study | Manuel Aljama",
    description:
      "Case study de Trace: aplicación multiplataforma para hostelería con comandería en tiempo real, gestión de cocina/barra, filtrado reactivo de 14 alérgenos y trazabilidad de facturación con SHA-256.",
  },
  hero: {
    breadcrumb: "WORK / TRACE",
    eyebrow: "PROYECTO 01 / CASE STUDY",
    title: "Trace",
    subtitle:
      "Aplicación multiplataforma para digitalizar el ciclo operativo de hostelería: comandería en sala mediante QR, pantallas operativas KDS en cocina y barra con Firestore Realtime, y un mecanismo demostrativo de trazabilidad en facturación.",
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
    githubLabel: "Ver código en GitHub",
    backLabel: "Volver a proyectos",
    backHref: "/#projects",
  },
  overview: {
    eyebrow: "01 / OVERVIEW",
    title: "Digitalización de sala y cocina sin intermediarios físicos",
    summary: [
      "Trace nace como Trabajo de Fin de Grado (TFG) para abordar la fricción habitual en el servicio hostelero: tiempos de espera muertos para pedir o pagar, errores manuales de comanda y desincronización entre la sala y los puestos de preparación (cocina y barra).",
      "Diseñé y construí un sistema completo compuesto por dos vertientes: una interfaz ligera para el comensal accesible al escanear un QR de mesa sin requerir instalación obligatoria, y un panel operativo en tiempo real para el personal del establecimiento con pantallas específicas para cocina, barra y administración.",
      "El proyecto fue concebido como una pieza de ingeniería práctica donde aplicar patrones reactivos con Angular Signals, sincronización distribuida con Firebase Firestore y un pipeline demostrativo de encadenamiento de facturas mediante funciones hash criptográficas.",
    ],
    metadata: [
      { label: "Rol", value: "Diseño, arquitectura y desarrollo completo" },
      {
        label: "Tipo de proyecto",
        value: "Trabajo de Fin de Grado (TFG) · Aplicación funcional",
      },
      { label: "Plataformas", value: "Web PWA y Android (vía Capacitor 8)" },
      {
        label: "Stack principal",
        value: "Angular 20 · Ionic 8 · Firebase Firestore · TypeScript",
      },
      {
        label: "Estado actual",
        value: "Completado y verificado (Portfolio Polish finalizado)",
      },
    ],
  },
  problem: {
    eyebrow: "02 / EL PROBLEMA",
    title: "Cuellos de botella operativos en sala, barra y cocina",
    intro:
      "El flujo tradicional de comandas en restauración pequeña y mediana sufre pérdidas de eficiencia por comunicación fragmentada y soporte en papel:",
    points: [
      {
        title: "Tiempos muertos de atención",
        description:
          "El cliente depende de la disponibilidad del camarero para consultar la carta, pedir rondas adicionales o solicitar la cuenta, lo que dilata la rotación de mesas en horas punta.",
      },
      {
        title: "Descoordinación entre cocina y barra",
        description:
          "Platos y bebidas suelen transitar por el mismo ticket impreso, obligando a los cocineros y camareros de barra a coordinar manualmente qué partidas están listas para servir.",
      },
      {
        title: "Falta de visibilidad de estados",
        description:
          "El comensal no tiene certeza de si su comanda ha entrado en preparación, mientras que el personal carece de un registro visual unificado de tiempos transcurridos por comanda.",
      },
      {
        title: "Gestión de alérgenos propensa a error",
        description:
          "La comunicación verbal o manual de intolerancias alimentarias en sala supone un riesgo sanitario si no se filtra rigurosamente sobre la carta en el momento del pedido.",
      },
      {
        title: "Pérdida de trazabilidad en facturación",
        description:
          "En servicios de caja tradicionales resulta complejo verificar que un ticket no ha sido alterado a posteriori o garantizar un orden cronológico estricto de expedición.",
      },
      {
        title: "Fricción de entrada para el usuario",
        description:
          "Obligar al comensal a descargar una app nativa pesada o crearse una cuenta con contraseña frustra la adopción en mesa.",
      },
    ],
  },
  solution: {
    eyebrow: "03 / LA SOLUCIÓN",
    title: "Arquitectura dual: acceso sin fricción y KDS sincronizado",
    intro:
      "Trace desacopla la experiencia del comensal del panel de control del personal, unificándolos a través de un backend realtime común sobre Cloud Firestore:",
    layers: [
      {
        role: "Comensal (Guest)",
        description:
          "Acceso inmediato por QR/URL asociado a mesa, autenticación anónima transparente, carta digital con filtrado reactivo de 14 alérgenos, carrito y seguimiento de estado en vivo.",
      },
      {
        role: "KDS Cocina & Barra",
        description:
          "Pantallas operativas dedicadas (Kitchen Display System) que separan automáticamente las líneas de comida y bebida, permitiendo marcar platos 'en preparación' o 'listos'.",
      },
      {
        role: "Administración de Sala",
        description:
          "Panel central para el control de mesas activas, gestión de catálogo de productos, visualización de métricas de servicio y generación de códigos QR de mesa.",
      },
      {
        role: "Facturación Técnica",
        description:
          "Cierre de comanda con cálculo de base e IVA (10%), exportación de tickets en PDF y registro encadenado de hashes SHA-256 para integridad de auditoría.",
      },
    ],
  },
  productFlow: {
    eyebrow: "04 / FLUJO DE PRODUCTO",
    title: "Recorrido de punta a punta: de la mesa al ticket cerrado",
    intro:
      "El diseño del flujo prioriza la inmediatez para el cliente y la claridad operativa para el personal de servicio:",
    diagramSubtitle:
      "Recorrido completo desde la lectura del QR en mesa hasta el registro inmutable de facturación.",
    ariaLabel: "Flujo conceptual del producto",
    legend: {
      guest: "Comensal",
      staff: "Personal",
      system: "Sistema",
    },
    steps: [
      {
        stepNumber: "01",
        role: "guest",
        title: "QR / Mesa",
        description:
          "El comensal escanea el QR en mesa con el identificador de mesa embebido en la URL.",
      },
      {
        stepNumber: "02",
        role: "guest",
        title: "Identificación Anónima",
        description:
          "Se inicializa una sesión anónima en Firebase Auth; el UID queda anclado a la mesa activa.",
      },
      {
        stepNumber: "03",
        role: "guest",
        title: "Carta Digital",
        description:
          "Exploración de categorías, descripciones, precios e ingredientes cargados reactivamente.",
      },
      {
        stepNumber: "04",
        role: "guest",
        title: "Filtro 14 Alérgenos",
        description:
          "Filtrado reactivo instantáneo para excluir cualquier plato incompatible con intolerancias.",
      },
      {
        stepNumber: "05",
        role: "guest",
        title: "Carrito de Mesa",
        description:
          "Gestión de unidades y notas especiales calculadas en tiempo real mediante Angular Signals.",
      },
      {
        stepNumber: "06",
        role: "guest",
        title: "Envío de Comanda",
        description:
          "Creación atómica de la comanda en Firestore con timestamp, mesa y desglose por partidas.",
      },
      {
        stepNumber: "07",
        role: "staff",
        title: "KDS Cocina / Barra",
        description:
          "Las líneas de cocina y bebida se distribuyen en tiempo real a sus pantallas operativas respectivas.",
      },
      {
        stepNumber: "08",
        role: "guest",
        title: "Seguimiento Realtime",
        description:
          "El comensal observa el progreso del pedido (recibido → preparando → servido) en su móvil.",
      },
      {
        stepNumber: "09",
        role: "guest",
        title: "Solicitud de Cuenta",
        description:
          "Petición de cobro notificada directamente al personal de sala con el resumen de consumiciones.",
      },
      {
        stepNumber: "10",
        role: "system",
        title: "Facturación & Hash",
        description:
          "Cierre de comanda, emisión de PDF, cálculo de IVA (10%) y encadenamiento SHA-256 del registro.",
      },
    ],
  },
  demo: {
    eyebrow: "DEMO / VÍDEO",
    title: "Demo real de Trace",
    description:
      "Recorrido automatizado del flujo de comensal y operación del restaurante, incluyendo sincronización en tiempo real entre Cocina y el dispositivo del comensal.",
    videoSrc: "/media/projects/trace/demo.mp4",
    posterSrc: "/media/projects/trace/demo-poster.webp",
    ariaLabel: "Vídeo demostrativo del flujo de comensal y operativa de Trace",
    fallbackText: "Tu navegador no soporta la reproducción de vídeo HTML5.",
  },
  architecture: {
    eyebrow: "05 / ARQUITECTURA",
    title: "Estructura por capas y modelo de distribución de datos",
    intro:
      "La aplicación utiliza una base de código común basada en componentes standalone de Angular 20 e Ionic 8, compilada tanto a aplicación web progresiva como a ejecutable nativo Android con Capacitor:",
    diagramSubtitle:
      "Separación de capas: cliente multiplataforma, reactividad en UI, servicios BaaS realtime y módulo de integridad.",
    ariaLabel: "Diagrama conceptual de arquitectura",
    techBadge: "Angular 20 · Ionic 8 · Capacitor 8 · Firebase",
    pipelineTag: "Auditability & Verification Pipeline",
    webPwa: {
      layerBadge: "01 / Client & Reactive UI",
      title: "Angular 20 & Ionic 8 (Standalone)",
      description:
        "Estructura modular orientada a vistas (guest, staff, admin), servicios de negocio desacoplados y estados locales gestionados con Angular Signals y computed properties.",
      listHeading: "Componentes clave:",
      items: [
        "Angular Signals para estado reactivo sin sobrecarga",
        "Ionic Framework para componentes UI táctiles adaptativos",
        "Componentes standalone de Angular 20",
        "SCSS modular con variables semánticas de tema",
      ],
    },
    mobileBridge: {
      layerBadge: "02 / Mobile Bridge",
      title: "Capacitor 8 Bridge (Android)",
      description:
        "Empaquetado móvil nativo mediante Capacitor 8 para dispositivos Android del personal, facilitando acceso a almacenamiento seguro y capacidades nativas.",
      listHeading: "Capacidades nativas:",
      items: [
        "Build nativo para terminales de sala y barra",
        "Compatibilidad con lectores de código de barras / QR",
        "Persistencia local de sesión y configuración",
        "Soporte offline controlado en caso de micro-cortes",
      ],
    },
    backend: {
      layerBadge: "03 / Realtime BaaS",
      title: "Firebase Auth & Cloud Firestore",
      description:
        "BaaS serverless con autenticación dual (anónima para comensales, email/password para administradores) y suscripciones a snapshots en tiempo real para sincronización instantánea.",
      listHeading: "Infraestructura Firebase:",
      items: [
        "onSnapshot listeners para propagación instantánea de tickets",
        "Colecciones normalizadas: tables, orders, catalog, invoices",
        "Firestore Security Rules basadas en UID y roles de sesión",
        "Firebase Hosting para despliegue global de baja latencia",
      ],
    },
    integrity: {
      layerBadge: "Auditability & Verification Pipeline",
      title: "Mecanismo Demostrativo de Integridad SHA-256",
      description:
        "Módulo de facturación experimental que calcula un hash criptográfico SHA-256 para cada factura, concatenándolo con el hash del registro previo. Implementa un registro inmutable append-only con fines educativos y de auditoría técnica.",
      items: [
        "Numeración correlativa continua",
        "Cálculo de base imponible e IVA (10%)",
        "Concatenación prevHash + datos + timestamp",
        "Generación de PDF en cliente para el comensal",
      ],
    },
  },
  keyDecisions: {
    eyebrow: "06 / DECISIONES TÉCNICAS",
    title: "Decisiones de ingeniería fundamentadas y sus trade-offs",
    intro:
      "Cada decisión técnica clave responde a restricciones operativas reales del entorno hostelero:",
    decisions: [
      {
        id: "mesa-uid",
        number: "01",
        title: "Anclaje de Sesión: Mesa → UID Anónimo",
        subtitle: "Firebase Anonymous Authentication",
        context:
          "El cliente de un restaurante no quiere registrarse con email o contraseña para pedir comida; cualquier formulario de alta reduce drásticamente el uso de la aplicación.",
        decision:
          "Implementar autenticación anónima de Firebase al cargar la URL con el parámetro de mesa. El UID asignado se asocia a la mesa activa y se almacena en la sesión del navegador.",
        justification:
          "Permite proteger las operaciones con reglas de seguridad en Firestore (el usuario solo puede leer y modificar las comandas de su mesa activa) sin imponer ninguna fricción de onboarding.",
        tradeOff:
          "Si el comensal limpia el almacenamiento local o abre una ventana de incógnito, se genera un nuevo UID que requiere vincularse de nuevo a la mesa activa.",
      },
      {
        id: "realtime",
        number: "02",
        title: "Sincronización Realtime con Cloud Firestore",
        subtitle: "WebSockets / onSnapshot vs Polling HTTP",
        context:
          "En cocina y barra, un retraso de 30 segundos en la recepción de un pedido o en la notificación de 'plato listo' interrumpe el ritmo del pase y deteriora el servicio.",
        decision:
          "Utilizar suscripciones en tiempo real con `onSnapshot` de Cloud Firestore para escuchar cambios en las colecciones de comandas y mesas.",
        justification:
          "Garantiza latencia inferior al segundo en la actualización visual de las pantallas KDS sin incurrir en peticiones de sondeo continuo (polling) que saturarían el ancho de banda y elevarían costes.",
        tradeOff:
          "Aumenta el consumo de lecturas concurrentes en Firestore. Requiere diseñar suscripciones acotadas por fecha y estado para evitar escuchar histórico innecesario.",
      },
      {
        id: "signals",
        number: "03",
        title: "Reactividad con Angular Signals y Computed",
        subtitle: "Signals nativos de Angular 20 vs RxJS complejo",
        context:
          "El cálculo dinámico de subtotales, recargos de opciones, cantidades en carrito y filtros de menú generaba susceptibilidad a bucles de detección de cambios (ChangeDetectionStrategy).",
        decision:
          "Adoptar Angular Signals (`signal`, `computed`) para el estado reactivo síncrono del cliente y reservar observables de RxJS para los flujos asíncronos de Firebase.",
        justification:
          "El código resultante es más predecible, legible y eficiente. Los cálculos derivados como el total del carrito o la lista de platos filtrados se recomputan solo cuando cambia su señal de origen.",
        tradeOff:
          "Exige convivir con un modelo híbrido en el proyecto (Signals para estado de UI y Observables para eventos y streams de Firestore).",
      },
      {
        id: "alergenos",
        number: "04",
        title: "Filtrado Reactivo por 14 Alérgenos Oficiales",
        subtitle: "Cumplimiento del Reglamento (UE) 1169/2011",
        context:
          "La normativa alimentaria europea exige declarar con exactitud la presencia de 14 alérgenos obligatorios. Un comensal con celiaquía o alergia a frutos secos necesita filtrar la carta con total certeza.",
        decision:
          "Estructurar cada producto con un array de códigos de alérgenos y aplicar un filtro booleano reactivo con Signals que excluye automáticamente cualquier producto que contenga alguno de los alérgenos marcados por el usuario.",
        justification:
          "La comprobación se ejecuta en memoria sobre el catálogo cargado, ofreciendo respuesta instantánea sin llamadas de red adicionales.",
        tradeOff:
          "Requiere disciplina estricta en el alta de productos en base de datos para que ningún ingrediente quede sin etiquetar.",
      },
      {
        id: "integridad-sha256",
        number: "05",
        title: "Integridad Demostrativa de Facturas mediante SHA-256",
        subtitle:
          "Encadenamiento criptográfico inspirado en principios de trazabilidad",
        context:
          "Se exploró cómo dotar a las operaciones de caja de un mecanismo de inmutabilidad que permitiera detectar cualquier manipulación retroactiva de un ticket expedido.",
        decision:
          "Implementar un encadenamiento de hashes SHA-256 donde cada registro de factura incluye el hash del ticket anterior, número de serie consecutivo, base, IVA (10%), timestamp y firma hash resultante.",
        justification:
          "Demuestra técnicamente cómo implementar una cadena de custodia inmutable (tamper-evident log) en una arquitectura web sin recurrir a una infraestructura de blockchain pesada.",
        tradeOff:
          "La concurrencia en la expedición simultánea exige un orden estricto de correlación; si dos terminales facturan en el mismo milisegundo debe arbitrarse el orden del encadenamiento.",
        legalDisclaimer:
          "IMPORTANTE: Este mecanismo es una implementación técnica demostrativa y un ejercicio académico de integridad de datos. NO constituye una homologación según los reglamentos Veri*Factu, ni una certificación de la Agencia Tributaria (AEAT), ni un sistema fiscal legal completo en producción.",
      },
    ],
  },
  challenges: {
    eyebrow: "07 / RETOS Y SOLUCIONES",
    title: "Obstáculos técnicos encontrados y su resolución",
    intro:
      "Problemas reales surgidos durante la implementación de Trace y el enfoque adoptado para solucionarlos:",
    items: [
      {
        id: "kds-split",
        number: "01",
        title: "Separación automática de comandas en KDS Cocina y Barra",
        challenge:
          "Un único pedido del comensal contiene habitualmente platos para la cocina y bebidas para la barra. Si ambos paneles ven todo el ticket, se genera confusión visual y duplicación de tareas.",
        solution:
          "Diseñé un selector de partida por producto. Al persistir la comanda, las líneas se clasifican por destino; la pantalla de cocina suscribe únicamente a partidas gastronómicas y la de barra a coctelería/bebidas, compartiendo un identificador común de comanda.",
      },
      {
        id: "sync-race",
        number: "02",
        title: "Sincronización concurrente de estados entre mesa y pase",
        challenge:
          "Cuando cocina marcaba un plato como 'preparado' casi al mismo tiempo que el comensal pedía otra ronda en la misma comanda, se producían sobreescrituras parciales del documento de pedido.",
        solution:
          "Separé la comanda en dos niveles: un documento padre que controla metadatos de sesión (mesa, fecha, estado global de cobro) y una subcolección de partidas individuales que se actualizan de forma independiente sin bloquear el documento principal.",
      },
      {
        id: "pdf-generation",
        number: "03",
        title: "Generación de facturas en PDF en entornos móviles y PWA",
        challenge:
          "Muchas librerías habituales de Node para generar PDFs dependen del sistema de archivos local y fallan al ejecutarse en el navegador móvil o en Android vía Capacitor.",
        solution:
          "Utilicé una librería de renderizado puramente cliente basada en Canvas/VFS (pdfmake/jspdf), encapsulando la descarga y visualización en un servicio agnóstico que detecta si corre en navegador web (Blob download) o en Android nativo (Capacitor File Opener).",
      },
      {
        id: "ionic-scss-prod",
        number: "04",
        title:
          "Optimización de estilos SCSS y budgets en compilación de producción",
        challenge:
          "La compilación de producción de Angular con Ionic generaba advertencias de tamaño excesivo en bundles de estilos (budget warnings) por importaciones redundantes de variables de tema.",
        solution:
          "Reorganicé la arquitectura de estilos hacia módulos SCSS limpios, externalizando tokens semánticos comunes y eliminando importaciones duplicadas en componentes standalone, reduciendo el bundle de estilos por debajo de los budgets establecidos.",
      },
    ],
  },
  testing: {
    eyebrow: "08 / TESTING Y CALIDAD",
    title: "Estrategia de verificación y pruebas automatizadas",
    intro:
      "La fiabilidad de las operaciones críticas de cálculo financiero y reactividad se asegura mediante una batería de pruebas automatizadas:",
    testSummary: {
      countLabel: "48 tests unitarios pasando",
      note: "Tests focalizados en lógica matemática de IVA, cálculo de hashes SHA-256, filtrado estricto de alérgenos y separación de partidas en KDS.",
    },
    testedAreas: [
      {
        area: "Cálculo de IVA (10%) y Bases Imponibles",
        description:
          "Pruebas de precisión decimal sobre redondeos y desglose de cuotas en pedidos individuales y combinados.",
      },
      {
        area: "Encadenamiento SHA-256 de Facturas",
        description:
          "Verificación del algoritmo de hash: alteración de un solo carácter en el historial invalida matemáticamente la firma del siguiente bloque.",
      },
      {
        area: "Filtrado Reactivo de 14 Alérgenos",
        description:
          "Comprobación de que ningún producto con trazas o presencia declarada elude los filtros reactivos del menú.",
      },
      {
        area: "Lógica KDS (Cocina vs Barra)",
        description:
          "Validación de la correcta bifurcación de líneas de pedido hacia sus pantallas operativas correspondientes.",
      },
      {
        area: "Check-in y Anclaje Mesa-UID",
        description:
          "Comprobación del ciclo de vida de la sesión anónima y su asociación persistente con el número de mesa.",
      },
      {
        area: "Generación de Documentos PDF",
        description:
          "Validación del ensamblaje del payload de datos para el renderizado del ticket de cobro.",
      },
    ],
    qualityGates: [
      {
        title: "TypeScript Estricto",
        description:
          "Compilación sin ningún `any` implícito, control estricto de nulos e interfaces exhaustivas.",
      },
      {
        title: "ESLint y Prettier",
        description:
          "Reglas de estilo y calidad de código ejecutadas en pre-commit y validadas en CI.",
      },
      {
        title: "Budgets de Compilación en Producción",
        description:
          "Límites estrictos en el tamaño de los bundles de JavaScript y CSS en la compilación final.",
      },
    ],
  },
  security: {
    eyebrow: "09 / SEGURIDAD Y DATOS",
    title: "Aislamiento de accesos y protección en BaaS",
    intro:
      "Al no disponer de un backend tradicional propio, la seguridad descansa en las reglas declarativas de Firebase:",
    pillars: [
      {
        title: "Separación de Roles Anónimo vs Administrador",
        description:
          "Los comensales operan bajo credenciales anónimas limitadas a su mesa; el personal accede mediante credenciales verificadas con permisos de escritura sobre KDS y catálogo.",
      },
      {
        title: "Reglas de Seguridad de Firestore",
        description:
          "Reglas declarativas que impiden que un cliente pueda consultar o alterar las comandas de otras mesas, o modificar los precios de la carta.",
      },
      {
        title: "Registros de Facturación Append-Only",
        description:
          "Las reglas de Firestore bloquean las operaciones de borrado (`delete`) o modificación retroactiva (`update`) sobre la colección de facturas emitidas.",
      },
    ],
  },
  result: {
    eyebrow: "10 / RESULTADO",
    title: "Sistema funcional verificado de punta a punta",
    intro:
      "Sin inventar métricas comerciales ni volumen ficticio de clientes, lo construido es una solución técnica sólida y operativa:",
    deliverables: [
      {
        title: "Flujo Integral Sala → Cocina → Caja",
        description:
          "Ciclo completo funcional desde la lectura del QR en mesa hasta el cierre y cobro del ticket.",
      },
      {
        title: "Pantallas Operativas KDS",
        description:
          "Interfaces táctiles dedicadas para cocina y barra con actualización realtime sin parpadeos.",
      },
      {
        title: "Filtrado Rápido de 14 Alérgenos",
        description:
          "Experiencia de consulta inclusiva y segura para comensales con intolerancias alimentarias.",
      },
      {
        title: "Mecanismo Demostrativo de Trazabilidad",
        description:
          "Encadenamiento de hashes SHA-256 e impresión de facturas en PDF implementados con rigor técnico.",
      },
      {
        title: "Distribución Multiplataforma (PWA + Android)",
        description:
          "Accesible desde cualquier navegador móvil y empaquetada como app nativa Android con Capacitor 8.",
      },
      {
        title: "Suite de Tests Automatizados",
        description:
          "Cobertura unitaria de todas las operaciones matemáticas y de negocio críticas del sistema.",
      },
    ],
  },
  whatILearned: {
    eyebrow: "11 / APRENDIZAJES",
    title: "Lecciones clave de ingeniería y arquitectura",
    intro:
      "El desarrollo de Trace me permitió profundizar en desafíos de ingeniería que van más allá del desarrollo de interfaces:",
    learnings: [
      {
        title: "Arquitecturas Realtime y Estados Distribuidos",
        description:
          "Comprendí que la sincronización en tiempo real exige pensar en idempotencia y granularidad de documentos para evitar condiciones de carrera entre terminales concurrentes.",
      },
      {
        title: "Seguridad en Entornos BaaS",
        description:
          "Descubrí que en aplicaciones sin servidor propio, las Security Rules son la verdadera capa de negocio y autorización, requiriendo el mismo rigor que un backend tradicional.",
      },
      {
        title: "Adopción de Angular Signals frente a RxJS",
        description:
          "Experimenté de primera mano cómo Signals simplifica drásticamente el estado local de UI frente a la sobrecarga que supone gestionar múltiples subscripciones de RxJS.",
      },
      {
        title: "Honestidad entre Prueba Técnica y Cumplimiento Normativo",
        description:
          "Aprendí a delimitar con precisión la frontera entre implementar un mecanismo criptográfico de hash demostrativo y afirmar erróneamente una certificación legal de Veri*Factu.",
      },
      {
        title: "El Valor de las Pruebas Unitarias en Cálculos Críticos",
        description:
          "Comprobar con tests automatizados el redondeo de impuestos y el encadenamiento de hashes aportó tranquilidad total para refactorizar la lógica sin miedo a regresiones.",
      },
      {
        title: "Trade-offs en el Despliegue Multiplataforma",
        description:
          "Entendí las diferencias entre compilar una PWA ligera y generar un paquete nativo Android con Capacitor, gestionando permisos y capacidades del dispositivo según el contexto.",
      },
    ],
  },
  deepDive: {
    eyebrow: "12 / NAVEGACIÓN TÉCNICA",
    title: "Secciones detalladas del case study",
    intro:
      "Accede directamente a los apartados específicos de arquitectura y decisiones:",
    links: [
      {
        anchor: "#architecture",
        title: "Arquitectura Técnica",
        description:
          "Desglose de capas cliente, puente Capacitor y Cloud Firestore.",
      },
      {
        anchor: "#decisions",
        title: "Decisiones de Ingeniería",
        description:
          "Justificaciones y trade-offs de diseño adoptados en el proyecto.",
      },
      {
        anchor: "#integridad-sha256",
        title: "Integridad SHA-256",
        description:
          "Detalle técnico del encadenamiento criptográfico demostrativo.",
      },
      {
        anchor: "#challenges",
        title: "Retos y Soluciones",
        description:
          "Problemas reales de sincronización, PDF y estilos en producción.",
      },
      {
        anchor: "#testing",
        title: "Testing y Calidad",
        description:
          "Batería de pruebas unitarias sobre cálculos y reglas de negocio.",
      },
      {
        anchor: "#security",
        title: "Seguridad y Datos",
        description:
          "Reglas de Firestore, autenticación dual y registros inmutables.",
      },
    ],
  },
  navigation: {
    backLabel: "Volver a proyectos",
    backHref: "/#projects",
    githubLabel: "Ver código en GitHub",
    githubUrl: "https://github.com/Aljama1/Trace",
  },
};
