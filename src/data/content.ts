/*
 * All the site's content, in English and Spanish.
 * A text can be the same in both languages ("FastAPI") or { en, es }.
 * Dates use "YYYY-MM"; end: null means the role is current.
 */
import type { Lang, Localized } from "../i18n/ui";

export interface LinkItem {
  label: Localized;
  href: string;
}

export interface Experience {
  company: string;
  role: Localized;
  type: Localized;
  location: Localized;
  start: string;
  end: string | null;
  summary: Localized;
  highlights: Localized[];
  stack: string[];
}

export interface Project {
  slug: string;
  kind: Localized;
  /** Steps of the data flow, drawn as a diagram instead of screenshots. */
  flow: Localized[];
  title: Localized;
  summary: Localized;
  highlights: Localized[];
  stack: string[];
  links: LinkItem[];
}

export interface SkillGroup {
  layer: Localized;
  items: Localized[];
}

export interface EducationItem {
  kind: "degree" | "certification" | "talk";
  title: Localized;
  place: Localized;
  period: Localized;
}

export const sections = {
  about: {
    eyebrow: { en: "About", es: "Sobre mí" },
    title: {
      en: "Backend engineer, from the data model to production",
      es: "Ingeniero backend, del modelo de datos a producción",
    },
  },
  experience: {
    eyebrow: { en: "Experience", es: "Experiencia" },
    title: { en: "Where I've worked", es: "Dónde he trabajado" },
  },
  projects: {
    eyebrow: { en: "Projects", es: "Proyectos" },
    title: { en: "Work I'm proud of", es: "Trabajos de los que me enorgullezco" },
  },
  skills: {
    eyebrow: { en: "Skills", es: "Habilidades" },
    title: { en: "The stack I work with", es: "El stack con el que trabajo" },
    note: {
      en: "Ordered like the layers of a backend service, from the API down to the infrastructure.",
      es: "Ordenado como las capas de un servicio backend, desde la API hasta la infraestructura.",
    },
  },
  education: {
    eyebrow: { en: "Education", es: "Formación" },
    title: { en: "Studies, certifications and talks", es: "Estudios, certificaciones y charlas" },
  },
  contact: {
    eyebrow: { en: "Contact", es: "Contacto" },
    title: { en: "Let's talk", es: "Hablemos" },
  },
} as const;

export const profile = {
  name: "Gerwin Lambraño Torres",
  firstName: "Gerwin",
  lastName: "Lambraño Torres",
  initials: "GLT",
  role: { en: "Python Backend Engineer", es: "Desarrollador Backend Python" },
  location: "Pereira, Colombia",
  email: "ger.lamto@gmail.com",
  linkedin: "https://www.linkedin.com/in/gerwintorres/",
  github: "https://github.com/gerwintorres",
  // Put the PDFs in public/cv/ and set the paths, e.g. "/cv/gerwin-lambrano-cv-en.pdf".
  // While a value is null, the "Download CV" buttons stay hidden.
  cv: { en: null, es: null } as Record<Lang, string | null>,
} as const;

export const hero = {
  status: { en: "Available · Pereira, CO", es: "Disponible · Pereira, CO" },
  // Typed one after another in the hero card.
  roles: [
    { en: "Software Backend Engineer", es: "Ingeniero de Software Backend" },
    "Python & FastAPI",
    { en: "REST APIs", es: "APIs REST" },
    { en: "Event-driven architecture", es: "Arquitectura orientada a eventos" },
    { en: "Cloud & Data", es: "Cloud y datos" },
    "GCP & Azure",
    { en: "AI-first development", es: "Desarrollo AI-First" },
  ] satisfies Localized[],
  tagline: {
    en: "I build Python systems that people actually use: APIs, integrations and data pipelines that run in production.",
    es: "Construyo sistemas en Python que la gente usa de verdad: APIs, integraciones y flujos de datos que corren en producción.",
  },
  featured: {
    label: { en: "Latest project", es: "Proyecto más reciente" },
    title: {
      en: "Nationwide WhatsApp channel for Colombia's National Planning Department",
      es: "Canal nacional de WhatsApp para el Departamento Nacional de Planeación",
    },
    href: "#projects",
  },
  stat: {
    value: 1.1,
    suffix: "M",
    label: {
      en: "citizen services tracked in 2025 by a system I built for Pereira City Hall",
      es: "atenciones a la ciudadanía registradas en 2025 en un sistema que construí para la Alcaldía de Pereira",
    },
  },
  aboutLink: { en: "About me", es: "Sobre mí" },
  // Logos come from simple-icons when there is one; the rest show their name only.
  belt: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "SQLAlchemy",
    "pandas",
    "Docker",
    "Linux",
    "Traefik",
    "GitHub Actions",
    "Google Cloud",
    "Azure",
    "pytest",
    "Git",
    "Streamlit",
  ],
} as const;

export const about = {
  lead: {
    en: "Backend engineer focused on turning messy manual processes into systems that run reliably in production.",
    es: "Ingeniero backend enfocado en convertir procesos manuales y enredados en sistemas que corren de forma confiable en producción.",
  },
  body: [
    {
      en: "I work mostly in Python, from the data model to the deployment: REST APIs, integrations with third-party platforms, data pipelines and the infrastructure that keeps them running on GCP, Azure or on-premise Linux servers.",
      es: "Trabajo sobre todo en Python, desde el modelo de datos hasta el despliegue: APIs REST, integraciones con plataformas externas, flujos de datos y la infraestructura que los mantiene corriendo en GCP, Azure o servidores Linux propios.",
    },
    {
      en: "I also teach Python for data analysis at Universidad Tecnológica de Pereira, and I'm training my English toward C1.",
      es: "También enseño Python para análisis de datos en la Universidad Tecnológica de Pereira, y estoy entrenando mi inglés hacia C1.",
    },
  ] satisfies Localized[],
  stats: [
    { value: "3+", label: { en: "years building backend", es: "años construyendo backend" } },
    { value: "5", label: { en: "systems in production", es: "sistemas en producción" } },
    { value: "123", label: { en: "hours teaching Python", es: "horas enseñando Python" } },
  ],
} as const;

export const experience: Experience[] = [
  {
    company: "oiDATA",
    role: { en: "Software Engineer", es: "Ingeniero de Software" },
    type: { en: "Full-time · Hybrid", es: "Tiempo completo · Híbrido" },
    location: "Pereira, Colombia",
    start: "2024-05",
    end: null,
    summary: {
      en: "I design, build and deploy software and data systems in Python for public entities and private companies, from the data model to production.",
      es: "Diseño, construyo y despliego sistemas de software y datos en Python para entidades públicas y empresas, desde el modelo de datos hasta producción.",
    },
    highlights: [
      {
        en: "Designed and built the nationwide WhatsApp channel of Colombia's National Planning Department (DNP), connected to its AI assistant. First version in production one week after kickoff.",
        es: "Diseñé y construí el canal nacional de WhatsApp del Departamento Nacional de Planeación (DNP), conectado a su asistente de IA. Primera versión en producción una semana después de arrancar.",
      },
      {
        en: "Led the public policy tracking system of Pereira City Hall: 58 officials from 19 agencies report on 14 policies, with a public statistics dashboard.",
        es: "Lideré el sistema de seguimiento de políticas públicas de la Alcaldía de Pereira: 58 funcionarios de 19 dependencias reportan 14 políticas, con un tablero estadístico público.",
      },
      {
        en: "Migrated that system from Google Cloud to the city's on-premise Linux servers, with Docker, Traefik, HTTPS and continuous deployment.",
        es: "Migré ese sistema de Google Cloud a los servidores Linux de la Alcaldía, con Docker, Traefik, HTTPS y despliegue continuo.",
      },
      {
        en: "Co-built an ETL pipeline that cut each purchase order of a spare-parts importer from about 28 hours of spreadsheet work to about 5.",
        es: "Construí con el equipo un pipeline ETL que bajó cada pedido de un importador de repuestos de unas 28 horas de trabajo en Excel a unas 5.",
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "pandas",
      "Docker",
      "Linux",
      "Azure",
      "GCP",
      "CI/CD",
    ],
  },
  {
    company: "The Nest Agency LLC",
    role: {
      en: "Technology Solutions Development & Integration Engineer",
      es: "Ingeniero de Desarrollo e Integración de Soluciones Tecnológicas",
    },
    type: { en: "Contract · Remote", es: "Contrato · Remoto" },
    location: { en: "Connecticut, United States", es: "Connecticut, Estados Unidos" },
    start: "2025-06",
    end: "2026-11",
    summary: {
      en: "Process automation, data and IT for an insurance and tax agency in the United States.",
      es: "Automatización de procesos, datos y TI para una agencia de seguros e impuestos en Estados Unidos.",
    },
    highlights: [
      {
        en: "Consolidated about 1,400 client records scattered across several platforms into a single list of 1,200 contacts, kept in sync automatically.",
        es: "Consolidé unos 1.400 registros de clientes dispersos en varias plataformas en una lista única de 1.200 contactos, sincronizada automáticamente.",
      },
      {
        en: "Automated the sales pipeline on Monday.com with Make and Python, with alerts and tasks triggered by each stage change.",
        es: "Automaticé el embudo de ventas en Monday.com con Make y Python, con alertas y tareas que se disparan en cada cambio de etapa.",
      },
      {
        en: "Set up OpenAI models in Make to classify incoming email, and configured Monday's AI sales agent with the agency's knowledge base.",
        es: "Configuré modelos de OpenAI en Make para clasificar el correo entrante, y el agente de ventas con IA de Monday con la base de conocimiento de la agencia.",
      },
      {
        en: "Led an internal Streamlit platform integrated with the Monday.com GraphQL API and QuickBooks Online, and migrated the company email from GoDaddy to Microsoft 365.",
        es: "Lideré una plataforma interna en Streamlit integrada con la API GraphQL de Monday.com y QuickBooks Online, y migré el correo de la empresa de GoDaddy a Microsoft 365.",
      },
    ],
    stack: ["Python", "GraphQL", "REST APIs", "Make", "OpenAI", "Streamlit", "pandas", "Docker"],
  },
  {
    company: "Delphi Analytics",
    role: { en: "Junior Backend Developer", es: "Desarrollador Backend Junior" },
    type: { en: "Full-time · On-site", es: "Tiempo completo · Presencial" },
    location: "Pereira, Colombia",
    start: "2022-11",
    end: "2023-07",
    summary: {
      en: "First role as a backend developer, on the automatic transcription platform for the sessions of Colombia's House of Representatives.",
      es: "Primer trabajo como desarrollador backend, en la plataforma de transcripción automática de las sesiones de la Cámara de Representantes de Colombia.",
    },
    highlights: [
      {
        en: "Co-built a cross-platform desktop app with Python, PySide and QML, backed by a FastAPI service, used by House staff to search sessions and download their records.",
        es: "Construí junto con otro ingeniero una aplicación de escritorio multiplataforma con Python, PySide y QML, conectada a un servicio en FastAPI, que los funcionarios de la Cámara usaban para buscar sesiones y descargar sus registros.",
      },
      {
        en: "Built FastAPI endpoints to publish transcription files and migrated historical archives into the platform.",
        es: "Desarrollé endpoints en FastAPI para publicar los archivos de transcripción y migré archivos históricos a la plataforma.",
      },
      {
        en: "Contributed to the first implementation of OpenAI Whisper to improve transcription accuracy.",
        es: "Participé en la primera implementación de Whisper de OpenAI para mejorar la precisión de la transcripción.",
      },
    ],
    stack: ["Python", "FastAPI", "PySide", "QML", "Whisper", "Git"],
  },
  {
    company: "Universidad Tecnológica de Pereira",
    role: { en: "Python Instructor", es: "Docente de Python" },
    type: { en: "Contract · On-site", es: "Contrato · Presencial" },
    location: "Pereira, Colombia",
    start: "2025-05",
    end: null,
    summary: {
      en: "Python module of the Diplomado en Análisis de Datos con Excel, R y Python, at Educación Continua of the Facultad de Ciencias Empresariales (FACIEM).",
      es: "Módulo de Python del Diplomado en Análisis de Datos con Excel, R y Python, de Educación Continua de la Facultad de Ciencias Empresariales (FACIEM).",
    },
    highlights: [
      {
        en: "Four cohorts completed (31 sessions, 123 hours) and a fifth in progress.",
        es: "Cuatro cohortes terminadas (31 sesiones, 123 horas) y una quinta en curso.",
      },
      {
        en: "Data cleaning with pandas, exploratory analysis, visualization, Streamlit apps and reproducible reports with Quarto.",
        es: "Limpieza de datos con pandas, análisis exploratorio, visualización, aplicaciones en Streamlit e informes reproducibles con Quarto.",
      },
    ],
    stack: ["Python", "pandas", "Matplotlib", "Streamlit", "Quarto"],
  },
];

export const projects: Project[] = [
  {
    slug: "dnp-whatsapp-channel",
    flow: [
      "WhatsApp",
      { en: "Signed webhook", es: "Webhook firmado" },
      { en: "Queue per citizen", es: "Cola por ciudadano" },
      "Worker",
      { en: "AI assistant", es: "Asistente de IA" },
    ],
    kind: { en: "Professional case", es: "Caso profesional" },
    title: {
      en: "Nationwide WhatsApp channel for the National Planning Department",
      es: "Canal nacional de WhatsApp para el Departamento Nacional de Planeación",
    },
    summary: {
      en: "A service that will let anyone in Colombia consult the National Development Plan 2026–2030 by WhatsApp, through the DNP's AI assistant.",
      es: "Un servicio con el que cualquier persona en Colombia podrá consultar por WhatsApp el Plan Nacional de Desarrollo 2026-2030 con el asistente de IA del DNP.",
    },
    highlights: [
      {
        en: "Signed webhooks, a message queue with one session per citizen, background workers, retries and rate limiting.",
        es: "Webhooks firmados, cola de mensajes con una sesión por ciudadano, procesos en segundo plano, reintentos y límite de envío.",
      },
      {
        en: "Privacy by design: phone numbers are never stored and the conversation history expires after 48 hours.",
        es: "Privacidad desde el diseño: nunca se guardan números de teléfono y el historial se borra a las 48 horas.",
      },
      {
        en: "Infrastructure as code on Azure, secrets in Key Vault, alerts and 90 unit and integration tests in CI.",
        es: "Infraestructura como código en Azure, secretos en Key Vault, alertas y 90 pruebas unitarias y de integración en CI.",
      },
    ],
    stack: ["Event-driven", "REST APIs", "WhatsApp Cloud API", "Azure", "IaC", "CI/CD"],
    links: [],
  },
  {
    slug: "pereira-public-policy-system",
    flow: [
      { en: "19 agencies", es: "19 dependencias" },
      { en: "Capture app", es: "Aplicativo de registro" },
      "MySQL",
      { en: "Public dashboard", es: "Tablero público" },
      { en: "Reports", es: "Informes" },
    ],
    kind: { en: "Professional case", es: "Caso profesional" },
    title: {
      en: "Public policy tracking system for Pereira City Hall",
      es: "Sistema de seguimiento de políticas públicas de la Alcaldía de Pereira",
    },
    summary: {
      en: "A data-capture app and a public statistics dashboard that replaced the Excel process of the Secretaría de Planeación.",
      es: "Un aplicativo de registro y un tablero estadístico público que reemplazaron el proceso en Excel de la Secretaría de Planeación.",
    },
    highlights: [
      {
        en: "In 2025: 58 officials from 19 agencies, 14 policies, COP 218 billion in allocated budget and 1.1 million citizen services.",
        es: "En 2025: 58 funcionarios de 19 dependencias, 14 políticas, COP 218 mil millones de presupuesto apropiado y 1,1 millones de atenciones.",
      },
      {
        en: "Validation at the point of capture and an automated check that keeps the dashboard and its reports consistent across 106 scenarios.",
        es: "Validación desde el registro y una verificación automática que mantiene tablero e informes consistentes en 106 escenarios.",
      },
      {
        en: "Runs on the city's on-premise Linux servers with Docker, Traefik and continuous deployment.",
        es: "Corre en los servidores Linux de la Alcaldía con Docker, Traefik y despliegue continuo.",
      },
    ],
    stack: ["Python", "MySQL", "Streamlit", "pandas", "Docker", "Traefik", "Linux"],
    links: [
      {
        label: { en: "Public dashboard", es: "Tablero público" },
        href: "https://pppp2025.pereira.gov.co/",
      },
    ],
  },
  {
    slug: "purchase-order-automation",
    flow: [
      { en: "ERP exports", es: "Exportaciones del ERP" },
      { en: "Cleaning", es: "Limpieza" },
      { en: "Demand", es: "Demanda" },
      { en: "Best price", es: "Mejor precio" },
      { en: "Order", es: "Pedido" },
    ],
    kind: { en: "Professional case", es: "Caso profesional" },
    title: {
      en: "Purchase-order automation for a spare-parts importer",
      es: "Automatización de pedidos para un importador de repuestos",
    },
    summary: {
      en: "An ETL pipeline over the exports of an ERP with no API, from raw sales data to the order for each supplier.",
      es: "Un pipeline ETL sobre las exportaciones de un ERP sin API, desde los datos de venta hasta el pedido por proveedor.",
    },
    highlights: [
      {
        en: "Data cleaning, demand estimation, stock vs. in-transit reconciliation and best-price selection across suppliers.",
        es: "Limpieza de datos, estimación de demanda, cruce de stock con mercancía en tránsito y mejor precio por proveedor.",
      },
      {
        en: "Each purchase order went from about 28 hours of spreadsheet work to about 5.",
        es: "Cada pedido pasó de unas 28 horas de trabajo en Excel a unas 5.",
      },
    ],
    stack: ["Python", "pandas", "ETL", "Streamlit", "Docker"],
    links: [],
  },
  {
    slug: "reorder",
    flow: [
      "CSV",
      "FastAPI",
      { en: "Domain", es: "Dominio" },
      "PostgreSQL",
      { en: "Estimate", es: "Estimación" },
    ],
    kind: { en: "Personal project", es: "Proyecto personal" },
    title: "reorder",
    summary: {
      en: "An API that estimates weekly demand per product from its sales history, with the rule and inputs behind each estimate.",
      es: "Una API que estima la demanda semanal de cada producto a partir de su historial de ventas, con la regla y los valores detrás de cada estimación.",
    },
    highlights: [
      {
        en: "Rebuilds in the open the demand-estimation engine I first built for a client, with synthetic data.",
        es: "Rehace en abierto el motor de estimación de demanda que construí para un cliente, con datos sintéticos.",
      },
      {
        en: "Domain logic kept apart from the framework, tests against a real PostgreSQL database and documented decisions.",
        es: "Lógica de dominio separada del framework, pruebas contra una base PostgreSQL real y decisiones documentadas.",
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "pytest",
      "Docker",
      "Cloud Run",
    ],
    links: [{ label: "GitHub", href: "https://github.com/gerwintorres/reorder" }],
  },
  {
    slug: "earthquake-damage-reporting",
    flow: [
      { en: "Field report", es: "Reporte de campo" },
      { en: "Photo + GPS", es: "Foto + GPS" },
      { en: "Priority", es: "Prioridad" },
      { en: "Live map", es: "Mapa en vivo" },
    ],
    kind: { en: "Volunteer", es: "Voluntariado" },
    title: {
      en: "Damage reporting after the August 2026 earthquake",
      es: "Registro de daños tras el sismo de agosto de 2026",
    },
    summary: {
      en: "A free reporting system, built in three days, for the command posts of Guática and La Virginia (Risaralda).",
      es: "Un sistema de registro gratuito, construido en tres días, para los puestos de mando de Guática y La Virginia (Risaralda).",
    },
    highlights: [
      {
        en: "Field reports with photos and GPS location, standardized at the point of capture and prioritized automatically.",
        es: "Reportes de campo con fotos y ubicación GPS, estandarizados desde la captura y priorizados automáticamente.",
      },
      {
        en: "More than 100 records of affected people and damages.",
        es: "Más de 100 registros de personas afectadas y daños.",
      },
    ],
    stack: ["Node.js", "Google Apps Script", "Google Sheets"],
    links: [],
  },
];

/** Ordered like the layers of a backend service, from the API down to the infrastructure. */
export const skills: SkillGroup[] = [
  { layer: "APIs", items: ["REST", "FastAPI", "Webhooks", "GraphQL"] },
  {
    layer: { en: "Services", es: "Servicios" },
    items: [
      "Python",
      { en: "Event-driven design", es: "Diseño orientado a eventos" },
      { en: "LLM integrations", es: "Integración de LLM" },
    ],
  },
  {
    layer: { en: "Messaging", es: "Mensajería" },
    items: [
      { en: "Message queues", es: "Colas de mensajes" },
      "Azure Service Bus",
      { en: "Background workers", es: "Procesos en segundo plano" },
    ],
  },
  { layer: { en: "Data", es: "Datos" }, items: ["PostgreSQL", "MySQL", "SQL", "pandas", "ETL"] },
  {
    layer: { en: "Quality", es: "Calidad" },
    items: [
      "pytest",
      { en: "Integration tests", es: "Pruebas de integración" },
      { en: "Code review", es: "Revisión de código" },
    ],
  },
  {
    layer: { en: "Infrastructure", es: "Infraestructura" },
    items: ["Docker", "Linux", "Traefik", "CI/CD", "GitHub Actions", "IaC", "GCP", "Azure"],
  },
  {
    layer: { en: "Other", es: "Otros" },
    items: ["Git", "Streamlit", "Quarto", "Make", "Monday.com"],
  },
];

export const education: EducationItem[] = [
  {
    kind: "degree",
    title: {
      en: "Systems and Computer Engineering",
      es: "Ingeniería de Sistemas y Computación",
    },
    place: "Universidad Tecnológica de Pereira",
    period: "2020 – 2025",
  },
  {
    kind: "certification",
    title: "Tools of the Trade: Linux and SQL",
    place: "Google",
    period: { en: "Nov 2025", es: "nov. 2025" },
  },
  {
    kind: "talk",
    title: {
      en: "Panelist: data science and AI for disaster management",
      es: "Panelista: ciencia de datos e IA en la gestión de desastres",
    },
    place: {
      en: "4th Data Science Symposium · Maestría en Investigación Operativa y Estadística, UTP",
      es: "IV Simposio de Ciencia de Datos · Maestría en Investigación Operativa y Estadística, UTP",
    },
    period: "2026",
  },
];

export const contact = {
  lead: {
    en: "The quickest way to reach me is by email or LinkedIn.",
    es: "La forma más rápida de contactarme es por correo o LinkedIn.",
  },
} as const;
