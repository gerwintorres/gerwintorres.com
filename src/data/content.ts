/*
 * All the site's content, in English and Spanish.
 * A text can be the same in both languages ("FastAPI") or { en, es }.
 * Dates use "YYYY-MM"; end: null means the role is current.
 */
import type { Lang, Localized } from "../i18n/ui";

export interface LinkItem {
  label: Localized;
  href: string;
  icon?: "github" | "external";
}

/** Work done for a client while employed at a company (e.g. projects delivered through oiDATA). */
export interface ClientWork {
  id: string;
  tab: Localized;
  name: Localized;
  role?: Localized;
  type?: Localized;
  location?: Localized;
  start: string;
  end: string | null;
  summary: Localized;
  highlights: Localized[];
  stack: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: Localized;
  type: Localized;
  location: Localized;
  start: string;
  end: string | null;
  summary: Localized;
  highlights: Localized[];
  stack: string[];
  clients?: ClientWork[];
  /** The company's own site, shown as a small link so anyone can check it exists. */
  website?: string;
}

/** A box in a project's architecture diagram. x and y are percentages of the diagram. */
export interface ArchNode {
  id: string;
  label: Localized;
  tech?: string;
  /** Name looked up by TechIcon. */
  icon?: string;
  x: number;
  y: number;
  /** Beat(s) of the request path where the box lights up; boxes without one stay as context.
   *  A box the request passes through twice (going and coming back) takes a list. */
  step?: Steps;
  /** Tint of the box; defaults to the technology's brand color. */
  color?: string;
}

/** One beat, or several when the request passes through the same box or link again. */
export type Steps = number | number[];

export interface ArchEdge {
  from: string;
  to: string;
  step?: Steps;
  /** Corner points (x, y in %) for a link that has to go around other boxes, like a reply. */
  via?: [number, number][];
}

export interface ArchGroup {
  label: Localized;
  /** Logo shown next to the label, looked up by TechIcon. */
  icon?: string;
  color?: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Architecture {
  /** Width / height of the diagram. */
  aspect: number;
  /** Below this width (px) the diagram scrolls sideways instead of squeezing its boxes. */
  minWidth?: number;
  summary: Localized;
  groups?: ArchGroup[];
  nodes: ArchNode[];
  edges: ArchEdge[];
}

export interface Project {
  slug: string;
  kind: Localized;
  /** Architecture drawn instead of screenshots, since most of this work is confidential. */
  architecture: Architecture;
  title: Localized;
  summary: Localized;
  highlights: Localized[];
  stack: string[];
  links: LinkItem[];
}

export interface SkillGroup {
  code: string;
  layer: Localized;
  items: Localized[];
}

export interface EducationItem {
  kind: "degree" | "certification" | "talk";
  title: Localized;
  place: Localized;
  period: Localized;
  /** Public link to verify it, when there is one. */
  href?: string;
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
    title: { en: "Let's work together", es: "Trabajemos juntos" },
  },
} as const;

export const profile = {
  name: "Gerwin Lambraño Torres",
  firstName: "Gerwin",
  lastName: "Lambraño Torres",
  // The name he goes by day to day; the full name stays as the main heading.
  shortName: "Gerwin Torres",
  initials: "GT",
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
    prefix: "+",
    value: 1.1,
    suffix: "M",
    label: {
      en: "citizen interactions tracked in 2025 by a system I built for Pereira City Hall",
      es: "atenciones a ciudadanos registradas en 2025 en un sistema que construí para la Alcaldía de Pereira",
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
    id: "oidata",
    company: "oiDATA",
    website: "https://oidata.com.co/",
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
        en: "Delivered projects from the first meeting to production for Colombia's National Planning Department, Pereira City Hall and an insurance and tax agency in the United States.",
        es: "Entregué proyectos desde la primera reunión hasta producción para el Departamento Nacional de Planeación, la Alcaldía de Pereira y una agencia de seguros e impuestos en Estados Unidos.",
      },
      {
        en: "Support and continuous improvement for the systems I deliver.",
        es: "Soporte y mejora continua de los sistemas que entrego.",
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
    clients: [
      {
        id: "dnp",
        tab: "DNP",
        name: {
          en: "National Planning Department (DNP)",
          es: "Departamento Nacional de Planeación (DNP)",
        },
        start: "2026-10",
        end: "2026-11",
        summary: {
          en: "A nationwide WhatsApp channel that will let anyone in Colombia consult the National Development Plan 2026–2030 through the DNP's AI assistant.",
          es: "Un canal nacional de WhatsApp con el que cualquier persona en Colombia podrá consultar el Plan Nacional de Desarrollo 2026-2030 con el asistente de IA del DNP.",
        },
        highlights: [
          {
            en: "Designed and built the service; the first version was in production one week after kickoff.",
            es: "Diseñé y construí el servicio; la primera versión salió a producción una semana después de arrancar.",
          },
          {
            en: "Signed webhooks, a message queue with one session per citizen, background workers, retries and rate limiting. Phone numbers are never stored.",
            es: "Webhooks firmados, cola de mensajes con una sesión por ciudadano, procesos en segundo plano, reintentos y límite de envío. Nunca se guardan números de teléfono.",
          },
          {
            en: "Infrastructure as code on Azure, secrets in Key Vault, alerts and 90 unit and integration tests in CI.",
            es: "Infraestructura como código en Azure, secretos en Key Vault, alertas y 90 pruebas unitarias y de integración en CI.",
          },
        ],
        stack: ["Event-driven", "REST APIs", "WhatsApp Cloud API", "Azure", "IaC", "CI/CD"],
      },
      {
        id: "pereira-city-hall",
        tab: { en: "Pereira City Hall", es: "Alcaldía de Pereira" },
        name: {
          en: "Pereira City Hall · Secretaría de Planeación",
          es: "Alcaldía de Pereira · Secretaría de Planeación",
        },
        start: "2025-04",
        end: "2026-11",
        summary: {
          en: "A public policy tracking system: a data-capture app and a public statistics dashboard that replaced an Excel process.",
          es: "Un sistema de seguimiento de políticas públicas: un aplicativo de registro y un tablero estadístico público que reemplazaron un proceso en Excel.",
        },
        highlights: [
          {
            en: "Led the capture app and the latest version of the dashboard: 58 officials from 19 city departments report on 14 public policies.",
            es: "Lideré el aplicativo de registro y la última versión del tablero: 58 funcionarios de 19 secretarías reportan 14 políticas públicas.",
          },
          {
            en: "Validation at the point of capture and an automated check that keeps the dashboard and its reports consistent across 106 scenarios.",
            es: "Validación desde el registro y una verificación automática que mantiene tablero e informes consistentes en 106 escenarios.",
          },
          {
            en: "Migrated the system from Google Cloud to the city's on-premise Linux servers with Docker, Traefik, HTTPS and continuous deployment.",
            es: "Migré el sistema de Google Cloud a los servidores Linux de la Alcaldía con Docker, Traefik, HTTPS y despliegue continuo.",
          },
        ],
        stack: ["Python", "MySQL", "Streamlit", "pandas", "Docker", "Traefik", "Linux"],
      },
      {
        id: "nest",
        tab: "The Nest Agency",
        name: "The Nest Agency LLC",
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
        stack: [
          "Python",
          "GraphQL",
          "REST APIs",
          "Make",
          "OpenAI",
          "Streamlit",
          "pandas",
          "Docker",
        ],
      },
    ],
  },
  {
    id: "delphi",
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
    id: "utp",
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
    architecture: {
      aspect: 3.6,
      minWidth: 700,
      summary: {
        en: "A citizen writes on WhatsApp; a signed webhook queues the message in a per-citizen session; a worker reads the conversation history, asks the AI assistant and replies.",
        es: "Un ciudadano escribe por WhatsApp; un webhook firmado encola el mensaje en una sesión por ciudadano; un worker lee el historial, consulta al asistente de IA y responde.",
      },
      groups: [{ label: "Azure", icon: "Azure", color: "#3a96dd", x: 23, y: 8, w: 54, h: 84 }],
      nodes: [
        {
          id: "citizen",
          label: { en: "Citizen", es: "Ciudadano" },
          tech: "WhatsApp",
          icon: "WhatsApp Cloud API",
          x: 14,
          y: 31,
          step: [0, 7],
        },
        {
          id: "webhook",
          label: "Webhook",
          tech: "HMAC",
          icon: "Webhooks",
          x: 32,
          y: 31,
          step: 1,
          color: "#3a96dd",
        },
        {
          id: "queue",
          label: { en: "Queue", es: "Cola" },
          tech: "Service Bus",
          icon: "Message queues",
          x: 50,
          y: 31,
          step: 2,
          color: "#3a96dd",
        },
        {
          id: "worker",
          label: "Worker",
          tech: "Sessions",
          icon: "Background workers",
          x: 68,
          y: 31,
          step: [3, 6],
          color: "#3a96dd",
        },
        {
          id: "assistant",
          label: { en: "AI assistant", es: "Asistente IA" },
          tech: "LLM + RAG",
          icon: "LLM integrations",
          x: 86,
          y: 31,
          step: 5,
          color: "#a78bfa",
        },
        {
          id: "history",
          label: { en: "History 48 h", es: "Historial 48 h" },
          tech: "Table Storage",
          icon: "SQL",
          x: 68,
          y: 71,
          step: 4,
          color: "#2dd4bf",
        },
        {
          id: "secrets",
          label: { en: "Secrets", es: "Secretos" },
          tech: "Key Vault",
          icon: "Secrets",
          x: 32,
          y: 71,
          color: "#f5b83d",
        },
        {
          id: "monitoring",
          label: { en: "Monitoring", es: "Monitoreo" },
          tech: "App Insights",
          icon: "Monitoring",
          x: 50,
          y: 71,
          color: "#3a96dd",
        },
      ],
      edges: [
        { from: "citizen", to: "webhook", step: 1 },
        { from: "webhook", to: "queue", step: 2 },
        { from: "queue", to: "worker", step: 3 },
        { from: "worker", to: "history", step: 4 },
        { from: "worker", to: "assistant", step: [5, 6] },
        {
          from: "worker",
          to: "citizen",
          step: 7,
          via: [
            [64, 31],
            [64, 50],
            [14, 50],
          ],
        },
      ],
    },
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
    slug: "reorder",
    architecture: {
      aspect: 1.75,
      summary: {
        en: "A client calls the FastAPI service with a JWT; the domain estimates demand with Python's statistics module and a SQLAlchemy repository stores the results in PostgreSQL. It runs on Google Cloud Run and every change goes through GitHub Actions.",
        es: "Un cliente llama al servicio en FastAPI con un JWT; el dominio estima la demanda con el módulo statistics de Python y un repositorio con SQLAlchemy guarda los resultados en PostgreSQL. Corre en Google Cloud Run y cada cambio pasa por GitHub Actions.",
      },
      groups: [
        {
          label: "Google Cloud Run",
          icon: "Google Cloud",
          color: "#4285f4",
          x: 25,
          y: 7,
          w: 50,
          h: 86,
        },
      ],
      nodes: [
        {
          id: "client",
          label: { en: "Client", es: "Cliente" },
          tech: "HTTP + JWT",
          icon: "User",
          x: 12,
          y: 30,
          step: 0,
          color: "#cbd5e1",
        },
        { id: "api", label: "API", tech: "FastAPI", icon: "FastAPI", x: 38, y: 30, step: 1 },
        {
          id: "domain",
          label: { en: "Domain", es: "Dominio" },
          tech: "statistics",
          icon: "Python",
          x: 62,
          y: 30,
          step: 2,
        },
        {
          id: "repo",
          label: { en: "Repository", es: "Repositorio" },
          tech: "SQLAlchemy",
          icon: "SQLAlchemy",
          x: 50,
          y: 72,
          step: 3,
          color: "#f87171",
        },
        {
          id: "db",
          label: "PostgreSQL",
          tech: "Alembic",
          icon: "PostgreSQL",
          x: 87,
          y: 72,
          step: 4,
        },
        { id: "csv", label: "CSV", tech: "pandas", icon: "pandas", x: 12, y: 72, color: "#e70488" },
        { id: "ci", label: "CI", tech: "GitHub Actions", icon: "GitHub Actions", x: 87, y: 30 },
      ],
      edges: [
        { from: "client", to: "api", step: 1 },
        { from: "api", to: "domain", step: 2 },
        { from: "domain", to: "repo", step: 3 },
        { from: "repo", to: "db", step: 4 },
        { from: "csv", to: "api" },
      ],
    },
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
    links: [
      {
        label: { en: "View repo", es: "Ver repo" },
        href: "https://github.com/gerwintorres/reorder",
        icon: "github",
      },
    ],
  },
  {
    slug: "pereira-public-policy-system",
    architecture: {
      aspect: 1.75,
      summary: {
        en: "Officials from 19 city departments report through a capture app into MySQL; a public dashboard and automated reports read from it. Every change on main is built and deployed to the city's Linux servers behind Traefik.",
        es: "Funcionarios de 19 secretarías reportan en un aplicativo que guarda en MySQL; un tablero público e informes automáticos leen de ahí. Cada cambio en main se construye y se despliega en los servidores Linux de la Alcaldía detrás de Traefik.",
      },
      groups: [
        {
          label: { en: "City Hall · Linux servers", es: "Alcaldía · servidores Linux" },
          icon: "Linux",
          color: "#e8b923",
          x: 21,
          y: 7,
          w: 56,
          h: 86,
        },
      ],
      nodes: [
        {
          id: "departments",
          label: { en: "19 departments", es: "19 secretarías" },
          tech: "58 users",
          icon: "User",
          x: 10,
          y: 30,
          step: 0,
          color: "#cbd5e1",
        },
        {
          id: "capture",
          label: { en: "Capture app", es: "Registro" },
          tech: "Streamlit",
          icon: "Streamlit",
          x: 31,
          y: 30,
          step: 1,
        },
        { id: "mysql", label: "MySQL", tech: "8.0", icon: "MySQL", x: 49, y: 30, step: 2 },
        {
          id: "dashboard",
          label: { en: "Dashboard", es: "Tablero" },
          tech: "Plotly",
          icon: "Streamlit",
          x: 67,
          y: 30,
          step: 3,
        },
        {
          id: "citizens",
          label: { en: "Citizens", es: "Ciudadanía" },
          tech: "public · HTTPS",
          icon: "User",
          x: 88.5,
          y: 30,
          step: 4,
          color: "#4ade80",
        },
        {
          id: "reports",
          label: { en: "Reports", es: "Informes" },
          tech: "Quarto",
          icon: "Quarto",
          x: 67,
          y: 72,
          step: 4,
        },
        {
          id: "github",
          label: "main",
          tech: "GitHub",
          icon: "GitHub",
          x: 10,
          y: 72,
          step: 5,
          color: "#e2e8f0",
        },
        {
          id: "build",
          label: "Build",
          tech: "cron · registry",
          icon: "Docker",
          x: 31,
          y: 72,
          step: 6,
        },
        { id: "traefik", label: "HTTPS", tech: "Traefik", icon: "Traefik", x: 49, y: 72, step: 7 },
      ],
      edges: [
        { from: "departments", to: "capture", step: 1 },
        { from: "capture", to: "mysql", step: 2 },
        { from: "mysql", to: "dashboard", step: 3 },
        { from: "dashboard", to: "citizens", step: 4 },
        { from: "dashboard", to: "reports", step: 4 },
        { from: "github", to: "build", step: 6 },
        { from: "build", to: "traefik", step: 7 },
      ],
    },
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
        en: "In 2025: 58 officials from 19 city departments, 14 policies, COP 218 billion in allocated budget and 1.1 million citizen interactions.",
        es: "En 2025: 58 funcionarios de 19 secretarías, 14 políticas, COP 218 mil millones de presupuesto apropiado y 1,1 millones de atenciones a ciudadanos.",
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
        label: { en: "View dashboard", es: "Ver tablero" },
        href: "https://pppp2025.pereira.gov.co/",
      },
    ],
  },
  {
    slug: "purchase-order-automation",
    architecture: {
      aspect: 1.75,
      summary: {
        en: "Three exports from an ERP with no API go through cleaning, demand estimation and best-price selection, and come out as one purchase order per supplier.",
        es: "Tres exportaciones de un ERP sin API pasan por limpieza, estimación de demanda y selección del mejor precio, y salen como un pedido por proveedor.",
      },
      groups: [
        {
          label: { en: "Streamlit app · Docker", es: "App en Streamlit · Docker" },
          icon: "Docker",
          color: "#2496ed",
          x: 28,
          y: 7,
          w: 48,
          h: 86,
        },
      ],
      nodes: [
        {
          id: "sales",
          label: { en: "Sales", es: "Ventas" },
          tech: "ERP export",
          icon: "Spreadsheet",
          x: 13,
          y: 22,
          step: 0,
          color: "#94a3b8",
        },
        {
          id: "stock",
          label: { en: "Stock + transit", es: "Stock + tránsito" },
          tech: "ERP export",
          icon: "Spreadsheet",
          x: 13,
          y: 50,
          step: 0,
          color: "#94a3b8",
        },
        {
          id: "prices",
          label: { en: "Supplier prices", es: "Precios" },
          tech: "ERP export",
          icon: "Spreadsheet",
          x: 13,
          y: 78,
          step: 0,
          color: "#94a3b8",
        },
        {
          id: "clean",
          label: { en: "Cleaning", es: "Limpieza" },
          tech: "pandas",
          icon: "pandas",
          x: 42,
          y: 50,
          step: 1,
          color: "#e70488",
        },
        {
          id: "demand",
          label: { en: "Demand", es: "Demanda" },
          tech: "statistics",
          icon: "Python",
          x: 62,
          y: 28,
          step: 2,
        },
        {
          id: "price",
          label: { en: "Best price", es: "Mejor precio" },
          tech: "by supplier",
          icon: "ETL",
          x: 62,
          y: 72,
          step: 3,
          color: "#2dd4bf",
        },
        {
          id: "orders",
          label: { en: "Orders", es: "Pedidos" },
          tech: "Excel",
          icon: "Spreadsheet",
          x: 88,
          y: 50,
          step: 4,
          color: "#22c55e",
        },
      ],
      edges: [
        { from: "sales", to: "clean", step: 1 },
        { from: "stock", to: "clean", step: 1 },
        { from: "prices", to: "clean", step: 1 },
        { from: "clean", to: "demand", step: 2 },
        { from: "demand", to: "price", step: 3 },
        { from: "price", to: "orders", step: 4 },
      ],
    },
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
    slug: "earthquake-damage-reporting",
    architecture: {
      aspect: 1.75,
      summary: {
        en: "Field reports with a photo and GPS location reach an API on Railway, are stored in Google Cloud Storage and get a priority score. Each municipality sees a Leaflet map with only its own cases and can export them at any time.",
        es: "Los reportes de campo con foto y ubicación GPS llegan a una API en Railway, se guardan en Google Cloud Storage y reciben un puntaje de prioridad. Cada municipio ve un mapa en Leaflet solo con sus casos y puede exportarlos cuando quiera.",
      },
      groups: [
        { label: "Railway", icon: "Railway", color: "#c4b5fd", x: 24, y: 8, w: 25, h: 84 },
        { label: "GCP", icon: "Google Cloud", color: "#4285f4", x: 52, y: 8, w: 22, h: 46 },
        {
          label: { en: "Map per municipality", es: "Mapa por municipio" },
          icon: "Leaflet",
          color: "#4ade80",
          x: 76,
          y: 8,
          w: 23,
          h: 84,
        },
      ],
      nodes: [
        {
          id: "report",
          label: { en: "Field report", es: "Reporte" },
          tech: "photo + GPS",
          icon: "User",
          x: 11,
          y: 32,
          step: 0,
          color: "#f59e0b",
        },
        {
          id: "api",
          label: "API",
          tech: "reports",
          icon: "Railway",
          x: 36,
          y: 32,
          step: 1,
          color: "#c4b5fd",
        },
        {
          id: "storage",
          label: "Storage",
          tech: "Cloud Storage",
          icon: "Cloud Storage",
          x: 63,
          y: 32,
          step: 2,
        },
        {
          id: "priority",
          label: { en: "Priority", es: "Prioridad" },
          tech: "auto score",
          icon: "Event-driven",
          x: 36,
          y: 72,
          step: 3,
          color: "#f97316",
        },
        {
          id: "guatica",
          label: "Guática",
          tech: "own data · CSV",
          icon: "Locked",
          x: 87.5,
          y: 38,
          step: 4,
          color: "#4ade80",
        },
        {
          id: "lavirginia",
          label: "La Virginia",
          tech: "own data · CSV",
          icon: "Locked",
          x: 87.5,
          y: 72,
          step: 4,
          color: "#4ade80",
        },
      ],
      edges: [
        { from: "report", to: "api", step: 1 },
        { from: "api", to: "storage", step: 2 },
        { from: "api", to: "priority", step: 3 },
        { from: "priority", to: "guatica", step: 4 },
        { from: "priority", to: "lavirginia", step: 4 },
      ],
    },
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
      {
        en: "Each municipality sees a map with only its own cases and can export its data at any time.",
        es: "Cada municipio ve un mapa solo con sus casos y puede exportar su información cuando quiera.",
      },
    ],
    stack: ["Railway", "Google Cloud Storage", "Leaflet"],
    links: [],
  },
];

/** Ordered like the layers of a backend service, from the API down to the infrastructure. */
export const skills: SkillGroup[] = [
  { code: "API", layer: "APIs", items: ["REST", "FastAPI", "Webhooks", "GraphQL"] },
  {
    code: "SRV",
    layer: { en: "Services", es: "Servicios" },
    items: [
      "Python",
      { en: "Event-driven design", es: "Diseño orientado a eventos" },
      { en: "LLM integrations", es: "Integración de LLM" },
    ],
  },
  {
    code: "EVT",
    layer: { en: "Messaging", es: "Mensajería" },
    items: [
      { en: "Message queues", es: "Colas de mensajes" },
      "Azure Service Bus",
      { en: "Background workers", es: "Procesos en segundo plano" },
    ],
  },
  {
    code: "DB",
    layer: { en: "Data", es: "Datos" },
    items: ["PostgreSQL", "MySQL", "SQL", "pandas", "ETL"],
  },
  {
    code: "QA",
    layer: { en: "Quality", es: "Calidad" },
    items: [
      "pytest",
      { en: "Integration tests", es: "Pruebas de integración" },
      { en: "Code review", es: "Revisión de código" },
    ],
  },
  {
    code: "OPS",
    layer: { en: "Infrastructure", es: "Infraestructura" },
    items: ["Docker", "Linux", "Traefik", "CI/CD", "GitHub Actions", "IaC", "GCP", "Azure"],
  },
  {
    code: "+",
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
    href: "https://www.coursera.org/account/accomplishments/verify/1OFGURRZHTKE",
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
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7523477426677485568/",
  },
];

export const contact = {
  seeking: {
    en: "I'm looking for new challenges as a",
    es: "Estoy en busca de nuevos retos como",
  },
  role: {
    en: "Software Engineer | Backend Python Developer",
    es: "Ingeniero de Software | Backend Python Developer",
  },
  pitch: {
    en: "If you need someone to design APIs, connect services and take data systems all the way to production, let's talk!",
    es: "Si buscas a alguien que diseñe APIs, integre servicios y lleve sistemas de datos hasta producción, ¡hablemos!",
  },
  note: {
    en: "Email is the quickest way to reach me.",
    es: "El correo es la forma más rápida de contactarme.",
  },
} as const;
