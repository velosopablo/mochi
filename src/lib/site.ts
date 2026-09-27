export const siteConfig = {
  name: "Mochi",
  title: "Mochi | Todo lo importante de la escuela, en un solo lugar",
  description:
    "Mochi organiza mensajes, tareas, eventos y recordatorios de la escuela y te acompaña directamente por WhatsApp o Telegram.",
  tagline: "Todo lo importante de la escuela, en un solo lugar.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_AR",
} as const;

/** CTA principal. Siempre el mismo texto; el cierre usa su variante "Quiero conocer Mochi". */
export const PRIMARY_CTA = "Conocer Mochi";
export const FINAL_CTA = "Quiero conocer Mochi";
export const SECONDARY_CTA = "Ver cómo funciona";

/** Anclas de la home. Con prefijo "/" para que funcionen también desde /contacto. */
export const anchors = {
  howItWorks: "/#como-funciona",
  examples: "/#ejemplos",
  families: "/#familias",
  schools: "/#escuelas",
  privacy: "/#privacidad",
  earlyAccess: "/#conocer",
} as const;

export const routes = {
  home: "/",
  contact: "/contacto",
  contactSchools: "/contacto?tipo=escuela",
} as const;

export const navLinks = [
  { label: "Cómo funciona", href: anchors.howItWorks },
  { label: "Ejemplos", href: anchors.examples },
  { label: "Para familias", href: anchors.families },
  { label: "Para escuelas", href: anchors.schools },
  { label: "Contacto", href: routes.contact },
] as const;

export const footerLinks = [
  { label: "Inicio", href: routes.home },
  { label: "Cómo funciona", href: anchors.howItWorks },
  { label: "Privacidad", href: anchors.privacy },
  { label: "Contacto", href: routes.contact },
  { label: "Para escuelas", href: routes.contactSchools },
] as const;
