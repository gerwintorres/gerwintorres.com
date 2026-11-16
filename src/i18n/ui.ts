export const languages = { en: "English", es: "Español" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

/** A text that is the same in both languages, or one version per language. */
export type Localized = string | Record<Lang, string>;

export function tx(value: Localized, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

export const ui = {
  en: {
    "a11y.skip": "Skip to content",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "lang.other": "Español",
    "lang.otherLabel": "Ver el sitio en español",
    "cta.projects": "View projects",
    "cta.cv": "Download CV",
    "cta.email": "Send an email",
    "date.present": "Present",
    "hero.next": "Next",
    "hero.viewProject": "View project",
    "footer.built": "Built with Astro",
    "xp.client": "Client project · via",
    "edu.credential": "View credential",
    "footer.source": "Source on GitHub",
  },
  es: {
    "a11y.skip": "Saltar al contenido",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
    "nav.menu": "Menú",
    "lang.other": "English",
    "lang.otherLabel": "View the site in English",
    "cta.projects": "Ver proyectos",
    "cta.cv": "Descargar CV",
    "cta.email": "Enviar un correo",
    "date.present": "Actualidad",
    "hero.next": "Siguiente",
    "hero.viewProject": "Ver proyecto",
    "footer.built": "Hecho con Astro",
    "xp.client": "Proyecto para cliente · vía",
    "edu.credential": "Ver credencial",
    "footer.source": "Código en GitHub",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "es" ? "es" : defaultLang;
}

/** Path of the same page in another language: "/projects/x/" <-> "/es/projects/x/". */
export function pathInLang(pathname: string, lang: Lang): string {
  const bare = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  return lang === defaultLang ? bare : `/es${bare === "/" ? "/" : bare}`;
}
