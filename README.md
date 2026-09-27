# Mochi — web para familias

Landing y página de contacto de Mochi, pensada para validar el producto con padres y madres
y captar familias para el piloto.

**Idea central:** Mochi es un agente de IA de organización escolar. Comprende información de
distintos medios digitales y la transforma en prioridades, recordatorios y acciones claras, por
WhatsApp o Telegram. Todo uso del producto se muestra como conversación, nunca como dashboard.
Los colegios se presentan como potenciales socios, nunca como el problema.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (tokens de diseño en `src/app/globals.css`)
- `lucide-react` para íconos (una sola librería)
- `@formspree/react` para los formularios (envío real a Formspree, sin backend propio)
- Tipografías: Nunito (UI, 400–800) y Baloo 2 (H1/H2) vía `next/font`

## Ejecutar

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

Copiá `.env.example` a `.env.local` y completá las variables cuando corresponda.

## Estructura

```
src/
  app/
    layout.tsx            Navbar + Footer, fuentes, metadata SEO/OpenGraph
    page.tsx              Home (orden de secciones = narrativa)
    contacto/page.tsx     /contacto (?tipo=colegio preselecciona colegios; Familia por defecto)
    not-found.tsx         404 con la mascota
    opengraph-image.jpg   Imagen para redes (logo oficial)
    icon.png, apple-icon.png, robots.ts, sitemap.ts
  components/
    brand/                Logo y Mascot (assets oficiales)
    chat/                 Conversaciones estilo WhatsApp / Telegram
    layout/               Navbar, Footer
    home/                 Secciones de la home (Hero, Problem, Solution, HowItWorks, Benefits,
                          Conversations, ForFamilies, ForSchools, Privacy, FinalCta)
    forms/                FamilyForm, SchoolForm, ContactForm (selector), campos y useMochiForm
    ui/                   Container, ButtonLink, SectionHeading
  lib/
    site.ts               Textos globales, CTA, anclas y links
    forms/                ID de Formspree, opciones, validación y resumen legible (message)
```

## Sistema visual

- Tokens de color, tipografía y escala en `src/app/globals.css` (`--color-primary`, `type-h1`…`type-h4`).
- Paleta oficial: Primary `#2F80ED`, Deep `#1E5BB8`, Mint, Yellow, Coral, Lavender, Ink `#3D4A63`, Background `#F8FAFD`.
- Accesibilidad: el blanco sobre `#2F80ED` da 3.9:1 (no alcanza AA para 16px), así que los
  botones usan `--color-primary-strong` `#2A73D9` (4.6:1). Los links de texto usan Deep Blue.
- Marca en `public/brand/`: recortes del logo y de las poses de la mascota provistas, sin
  redibujar. Sólo se quitó el fondo blanco (conectado al borde) para que se integren con los fondos.
  - `mochi-wordmark.webp` (navbar), `mochi-logo.webp` (footer), `mochi-avatar.webp` (chats)
  - Poses: `hola`, `feliz`, `ok`, `lee`, `abrazo` → componente `<Mascot pose="…" />`
- Conversaciones: primitivas en `src/components/chat/Chat.tsx` (`ChatWindow`, `Bubble`,
  `ChatList`, `FileCard`, `EventCard`, `TaskCard`, `ChildBlock`, `StatusChip`, `QuickReplies`, `PhoneFrame`).

## Formularios (Formspree)

Los formularios envían datos reales a **https://formspree.io/f/xzezkjaa** con `useForm` de
`@formspree/react` (ID en `src/lib/forms/formspree.ts`, sobrescribible con
`NEXT_PUBLIC_FORMSPREE_FORM_ID`). No hay backend propio ni envío simulado.

- `FamilyForm` (home `#probar` y `/contacto`): `tipo_contacto=Familia`, `nombre`, `email`,
  `edad_hijo_rango` (múltiple), `situaciones` (múltiple), `situaciones_otro`, `canal_preferido`,
  `detalle`, `interes_piloto`, `origen=Landing Mochi`.
- `SchoolForm` (`/contacto?tipo=colegio`): `tipo_contacto=Colegio`, `nombre`, `email`, `institucion`,
  `rol`, `cantidad_alumnos`, `interes_piloto`, `detalle`, `origen`.
- Ambos agregan `message` (resumen legible para el email, además de los campos individuales),
  `_subject` y el honeypot `_gotcha` que Formspree reconoce.
- `useMochiForm` valida en el cliente (requeridos, email, al menos una edad/situación), lleva el
  foco al primer error y recién entonces llama a `handleSubmit` de Formspree. Estados: enviando
  (botón deshabilitado), error visible (`FormErrorAlert` + `ValidationError`) y éxito.
- El formulario familiar **no** pide datos del menor (nombre, colegio, curso, DNI, domicilio, salud).
- Para probar un envío real, el dominio `formspree.io` tiene que ser accesible desde el navegador.

## Contenido

Todos los ejemplos y mockups usan datos ficticios. Las situaciones están inspiradas en
problemas cotidianos de familias escolares y no son testimonios reales.
