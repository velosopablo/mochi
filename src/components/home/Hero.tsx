import { ArrowDown, CheckCircle2, Layers } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { MockButton, MockItem, MockupFigure, PhoneFrame } from "@/components/ui/mockup";
import { anchors, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_20%,rgb(219_216_254/0.7),transparent_70%),radial-gradient(40%_35%_at_10%_10%,rgb(255_236_220/0.8),transparent_70%)]"
      />
      <Container className="grid items-center gap-12 pt-10 pb-16 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="max-w-xl">
          <Eyebrow>Tu copiloto para la vida escolar</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 font-display text-[2.5rem] leading-[1.05] font-bold tracking-tight text-ink sm:text-6xl lg:text-[3.25rem]"
          >
            Todo lo importante del colegio.{" "}
            <span className="block text-brand-600">Sin tener que buscarlo.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-soft sm:text-xl">
            Mochi organiza tareas, evaluaciones, comunicaciones, autorizaciones y eventos para
            ayudarte a saber qué necesita atención y cuándo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={anchors.earlyAccess} size="lg">
              {PRIMARY_CTA}
            </ButtonLink>
            <ButtonLink href={anchors.howItWorks} size="lg" variant="secondary">
              {SECONDARY_CTA}
              <ArrowDown className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-ink-muted">
            Para familias con hijos en edad escolar · Piloto sin compromiso de compra
          </p>
        </div>

        <HeroMockup />
      </Container>
    </section>
  );
}

function HeroMockup() {
  return (
    <MockupFigure
      label="Ejemplo ilustrativo de la pantalla de inicio de Mochi con tres pendientes de la semana."
      className="relative mx-auto w-full max-w-md"
    >
      <PhoneFrame>
        <p className="text-[13px] font-medium text-ink-muted">Lunes</p>
        <p className="mt-0.5 font-display text-xl font-bold text-ink">
          Buenos días <span aria-hidden="true">👋</span>
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          Tenés <strong className="font-semibold text-ink">3 cosas importantes</strong> esta semana.
        </p>

        <div className="mt-4 space-y-2.5">
          <MockItem
            tone="red"
            title="Matemática"
            meta="Evaluación · Viernes"
            hint="Sugerencia: empezar a estudiar hoy."
          />
          <div className="rounded-xl border border-line bg-white p-3">
            <div className="flex gap-3">
              <span className="mt-1 w-1 shrink-0 self-stretch rounded-full bg-warm-500" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">Autorización pendiente</p>
                <p className="text-[13px] text-ink-muted">Salida escolar · Vence mañana</p>
                <MockButton className="mt-2.5 w-full">Completar autorización</MockButton>
              </div>
            </div>
          </div>
          <MockItem tone="blue" title="Reunión de padres" meta="Miércoles · 8:10" />
        </div>

        <p className="mt-4 text-center text-[11px] text-ink-muted">Resumido a partir de 5 fuentes</p>
      </PhoneFrame>

      <div
        aria-hidden="true"
        className="absolute -bottom-5 -left-4 hidden animate-float items-center gap-2 rounded-2xl border border-line bg-white/95 px-3 py-2 shadow-lift backdrop-blur sm:flex lg:-left-10"
      >
        <span className="grid size-7 place-items-center rounded-lg bg-brand-50 text-brand-700">
          <Layers className="size-4" />
        </span>
        <span className="text-xs leading-tight">
          <span className="block font-semibold text-ink">23 mensajes revisados</span>
          <span className="text-ink-muted">3 requieren atención</span>
        </span>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-14 -right-4 hidden animate-float items-center gap-2 rounded-2xl border border-line bg-white/95 px-3 py-2 shadow-lift backdrop-blur [animation-delay:-3s] sm:flex lg:-right-8"
      >
        <CheckCircle2 className="size-5 text-emerald-500" />
        <span className="text-xs leading-tight">
          <span className="block font-semibold text-ink">Horario confirmado</span>
          <span className="text-ink-muted">Comunicación institucional</span>
        </span>
      </div>
    </MockupFigure>
  );
}
