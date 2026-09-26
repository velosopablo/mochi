export const siteConfig = {
  name: "Mochi",
  title: "Mochi | Menos tiempo buscando. Más tiempo acompañando.",
  description:
    "Mochi organiza tareas, evaluaciones, autorizaciones, comunicaciones y eventos escolares para ayudarte a saber qué necesita atención y cuándo.",
  tagline: "Organizar hoy. Aprender a organizarse mañana.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_AR",
} as const;

/** CTA principal. Se usa siempre el mismo texto en toda la web. */
export const PRIMARY_CTA = "Quiero probar Mochi";
export const SECONDARY_CTA = "Ver cómo funciona";

/** Anclas de la home. Con prefijo "/" para que funcionen también desde /contacto. */
export const anchors = {
  howItWorks: "/#como-funciona",
  scenarios: "/#situaciones",
  family: "/#para-tu-familia",
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
  { label: "Situaciones reales", href: anchors.scenarios },
  { label: "Para tu familia", href: anchors.family },
  { label: "Privacidad", href: anchors.privacy },
  { label: "Contacto", href: routes.contact },
] as const;

export const footerLinks = [
  { label: "Inicio", href: routes.home },
  { label: "Cómo funciona", href: anchors.howItWorks },
  { label: "Privacidad", href: anchors.privacy },
  { label: "Contacto", href: routes.contact },
  { label: "Para colegios", href: routes.contactSchools },
] as const;
