# Mochi — web para familias

Landing y página de contacto de Mochi, pensada para validar el producto con padres y madres
y captar familias para el piloto.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (tokens de diseño en `src/app/globals.css`)
- `lucide-react` para íconos
- Tipografías: Inter (texto) y Plus Jakarta Sans (títulos) vía `next/font`

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
    contacto/page.tsx     /contacto (?tipo=colegio preselecciona colegios)
    opengraph-image.tsx   Imagen OG generada
    icon.svg, robots.ts, sitemap.ts
  components/
    layout/               Navbar, Footer, Logo
    home/                 Secciones de la home
      scenarios/          Visuales de cada situación real
    forms/                EarlyAccessForm, ContactForm (+ familia / colegio), campos y hook
    ui/                   Container, ButtonLink, SectionHeading, primitivas de mockups
  lib/
    site.ts               Textos globales, CTA, anclas y links
    forms/                Tipos, opciones, validación y envío
```

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
