# Mochi — web para familias

Landing y página de contacto de Mochi, pensada para validar el producto con padres y madres
y captar familias para el piloto.

**Idea central:** Mochi vive donde las familias ya conversan. Todo uso del producto se muestra
como conversación de WhatsApp / Telegram, nunca como dashboard.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (tokens de diseño en `src/app/globals.css`)
- `lucide-react` para íconos (una sola librería)
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
    contacto/page.tsx     /contacto (?tipo=escuela preselecciona escuelas)
    not-found.tsx         404 con la mascota
    opengraph-image.jpg   Imagen para redes (logo oficial)
    icon.png, apple-icon.png, robots.ts, sitemap.ts
  components/
    brand/                Logo y Mascot (assets oficiales)
    chat/                 Conversaciones estilo WhatsApp / Telegram
    layout/               Navbar, Footer
    home/                 Secciones de la home (Hero, Problem, Solution, HowItWorks, Benefits,
                          Conversations, ForFamilies, ForSchools, Privacy, FinalCta)
    forms/                EarlyAccessForm, ContactForm (+ familia / escuela), campos y hook
    ui/                   Container, ButtonLink, SectionHeading
  lib/
    site.ts               Textos globales, CTA, anclas y links
    forms/                Tipos, opciones, validación y envío
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
  `ChatList`, `FileCard`, `EventCard`, `StatusChip`, `QuickReplies`, `PhoneFrame`).

## Formularios

Toda la salida pasa por `src/lib/forms/submit.ts`:

- `submitEarlyAccessForm(data)` y `submitContactForm(data)` devuelven `{ ok: true }` o
  `{ ok: false, message }`. La UI maneja los estados `idle → loading → success | error`.
- **Sin backend** (`NEXT_PUBLIC_FORMS_ENDPOINT` vacío) los envíos se simulan: hay latencia,
  pero **no se guarda nada**. Antes de publicar el piloto hay que conectar un destino real.
- Con `NEXT_PUBLIC_FORMS_ENDPOINT` definido, se hace `POST` JSON con
  `{ form, data, meta: { submittedAt, page, utm } }`.
- Para Supabase, Firebase, HubSpot u otro CRM, reemplazá la función `transport` de ese archivo;
  los componentes no cambian.
- En modo simulado, un email que contenga `+error` fuerza el estado de error (útil para QA).
- Incluye un campo trampa (`website`) contra bots.

## Contenido

Todos los ejemplos y mockups usan datos ficticios. Las situaciones están inspiradas en
problemas cotidianos de familias escolares y no son testimonios reales.
