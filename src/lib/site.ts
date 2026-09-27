export const siteConfig = {
  name: "Mochi",
  title: "Mochi | La vida escolar de tu familia, más clara",
  description:
    "Mochi es un agente de IA que comprende la información escolar de distintos medios y la transforma en prioridades, recordatorios y acciones claras para tu familia, por WhatsApp o Telegram.",
  tagline: "Organizar hoy. Aprender a organizarse mañana.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_AR",
} as const;

/** CTA principal. Siempre el mismo texto en toda la web. */
export const PRIMARY_CTA = "Quiero probar Mochi";
export const SECONDARY_CTA = "Ver cómo funciona";

/** Anclas de la home. Con prefijo "/" para que funcionen también desde /contacto. */
export const anchors = {
  howItWorks: "/#como-funciona",
  examples: "/#ejemplos",
  families: "/#familias",
  schools: "/#colegios",
  privacy: "/#privacidad",
  earlyAccess: "/#probar",
} as const;

export const routes = {
  home: "/",
  contact: "/contacto",
  contactSchools: "/contacto?tipo=colegio",
} as const;

export const navLinks = [
  { label: "Cómo funciona", href: anchors.howItWorks },
  { label: "Ejemplos", href: anchors.examples },
  { label: "Para familias", href: anchors.families },
  { label: "Privacidad", href: anchors.privacy },
  { label: "Contacto", href: routes.contact },
] as const;

export const footerLinks = [
  { label: "Inicio", href: routes.home },
  { label: "Cómo funciona", href: anchors.howItWorks },
  { label: "Privacidad", href: anchors.privacy },
  { label: "Colegios", href: anchors.schools },
  { label: "Contacto", href: routes.contact },
] as const;
