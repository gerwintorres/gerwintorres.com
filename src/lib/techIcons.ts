// Which logo, and which color, represents each technology on the site.
import {
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siGithubactions,
  siGoogleappsscript,
  siGooglesheets,
  siGooglecloud,
  siGraphql,
  siLinux,
  siMake,
  siMysql,
  siNodedotjs,
  siOpenapiinitiative,
  siPandas,
  siPostgresql,
  siPytest,
  siPython,
  siQt,
  siQuarto,
  siSqlalchemy,
  siStreamlit,
  siTraefikproxy,
  siWhatsapp,
} from "simple-icons";
import type { IconName } from "../components/ui/Icon.astro";

export interface BrandIcon {
  hex: string;
  path: string;
}

// Microsoft marks are not in simple-icons; this is the Azure mark, used only to name the platform.
const azure: BrandIcon = {
  hex: "0078D4",
  path: "M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zm7.747-18.6L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z",
};

export const brands: Record<string, BrandIcon> = {
  Python: siPython,
  FastAPI: siFastapi,
  REST: siOpenapiinitiative,
  "REST APIs": siOpenapiinitiative,
  "WhatsApp Cloud API": siWhatsapp,
  PySide: siQt,
  QML: siQt,
  GraphQL: siGraphql,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  SQLAlchemy: siSqlalchemy,
  pandas: siPandas,
  Docker: siDocker,
  Linux: siLinux,
  Traefik: siTraefikproxy,
  "GitHub Actions": siGithubactions,
  GCP: siGooglecloud,
  "Google Cloud": siGooglecloud,
  pytest: siPytest,
  Git: siGit,
  Streamlit: siStreamlit,
  Quarto: siQuarto,
  Make: siMake,
  Azure: azure,
  "Node.js": siNodedotjs,
  "Google Sheets": siGooglesheets,
  "Apps Script": siGoogleappsscript,
  GitHub: siGithub,
};

// Concepts and products without a free logo.
export const generic: Record<string, IconName> = {
  Webhooks: "webhook",
  "Event-driven design": "bolt",
  "Event-driven": "bolt",
  OpenAI: "sparkle",
  Whisper: "sparkle",
  Matplotlib: "chart",
  Secrets: "key",
  Monitoring: "chart",
  User: "user",
  Map: "map-pin",
  Locked: "lock",
  Spreadsheet: "board",
  "LLM integrations": "sparkle",
  "Message queues": "queue",
  "Azure Service Bus": "queue",
  "Background workers": "gear",
  SQL: "database",
  ETL: "pipeline",
  "Integration tests": "check",
  "Code review": "code",
  "CI/CD": "loop",
  IaC: "code",
  "Monday.com": "board",
};

/** Brand colors too dark to read on the navy background fall back to the accent. */
export function readable(hex: string): string | undefined {
  const [r = 0, g = 0, b = 0] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.25 ? `#${hex}` : undefined;
}

/** The color that represents a technology, if its brand color reads well on the navy background. */
export function techColor(name: string | undefined): string | undefined {
  const brand = name ? brands[name] : undefined;
  return brand ? readable(brand.hex) : undefined;
}
