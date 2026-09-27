import { CalendarDays, FileText, GraduationCap, LayoutGrid, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";

/** Lo que la familia tiene que tener en la cabeza. Orbitan alrededor de la familia. */
const pending: Array<{ emoji: string; label: string }> = [
  { emoji: "✍️", label: "Autorización pendiente" },
  { emoji: "📝", label: "Evaluación el viernes" },
  { emoji: "🕑", label: "Cambio de horario" },
  { emoji: "👥", label: "Reunión de padres" },
  { emoji: "📄", label: "PDF importante" },
  { emoji: "⚽", label: "Actividad extracurricular" },
  { emoji: "💳", label: "Pago pendiente" },
  { emoji: "🎒", label: "Material para mañana" },
];

/** Los medios por los que llega: un segundo anillo, más sutil. */
const media: Array<{ icon: LucideIcon; label: string }> = [
  { icon: LayoutGrid, label: "Plataforma escolar" },
  { icon: Mail, label: "Email" },
  { icon: GraduationCap, label: "Classroom / LMS" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: CalendarDays, label: "Calendario" },
  { icon: FileText, label: "PDF" },
];

/** Posición sobre un círculo, en % del contenedor cuadrado. Determinística (se calcula en el servidor). */
function polar(index: number, total: number, radius: number, offsetDeg: number) {
  const angle = ((offsetDeg + (360 / total) * index) * Math.PI) / 180;
  return {
    left: `${(50 + radius * Math.cos(angle)).toFixed(2)}%`,
    top: `${(50 + radius * Math.sin(angle)).toFixed(2)}%`,
  };
}

export function Problem() {
  return (
    <Section labelledBy="problema-title" tone="bg">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            id="problema-title"
            align="responsive"
            eyebrow="El desafío"
            title="La información está fragmentada en distintos medios."
            description="La vida escolar se organiza hoy entre plataformas, mensajes, calendarios, documentos y actividades. Cada herramienta cumple una función, pero la familia termina conectando toda esa información."
          />
          <p className="mt-6 text-center text-lg font-bold text-ink lg:text-left">
            El desafío no es recibir más información.{" "}
            <span className="text-deep">Es entender qué requiere atención.</span>
          </p>
        </div>

        <figure aria-labelledby="problema-visual">
          <figcaption id="problema-visual" className="sr-only">
            La familia en el centro, rodeada de pendientes (autorizaciones, evaluaciones, cambios de horario,
            reuniones, PDFs, actividades, pagos y materiales) que llegan por distintos medios: plataforma escolar,
            email, Classroom, WhatsApp, calendario y PDF.
          </figcaption>

          {/* Tablet y desktop ancho: órbita (necesita ~520px de ancho). */}
          <div aria-hidden="true" className="relative mx-auto hidden aspect-square w-full max-w-[520px] md:block lg:hidden xl:block">
            <span className="absolute inset-[4%] rounded-full border border-dashed border-field" />
            <span className="absolute inset-[19%] rounded-full border-2 border-dashed border-primary-100" />

            {media.map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                style={polar(i, media.length, 46, -75)}
                className="absolute inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-bold whitespace-nowrap text-ink-muted ring-1 ring-line"
              >
                <Icon className="size-3.5 text-primary/70" />
                {label}
              </span>
            ))}

            {pending.map(({ emoji, label }, i) => (
              <span
                key={label}
                style={polar(i, pending.length, 33, -90)}
                className="absolute flex w-[8.5rem] -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-2xl bg-white px-2.5 py-1.5 text-[13px] leading-tight font-extrabold text-ink shadow-soft ring-1 ring-line"
              >
                <span>{emoji}</span>
                {label}
              </span>
            ))}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <FamilyCard />
            </div>
          </div>

          {/* Mobile (y la columna angosta de lg): la familia arriba, los pendientes y los medios debajo. */}
          <div aria-hidden="true" className="md:hidden lg:block xl:hidden">
            <FamilyCard className="mx-auto" />
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {pending.map(({ emoji, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-1.5 rounded-2xl bg-white px-3 py-2 text-[13px] leading-tight font-extrabold text-ink shadow-soft ring-1 ring-line"
                >
                  <span>{emoji}</span>
                  {label}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-xs font-bold text-ink-muted">
              Llegan por plataforma escolar · email · Classroom / LMS · WhatsApp · calendario · PDF
            </p>
          </div>
        </figure>
      </Container>
    </Section>
  );
}

function FamilyCard({ className = "" }: { className?: string }) {
  return (
    <div className={"flex w-36 flex-col items-center rounded-3xl bg-white px-3 pt-3 pb-3.5 shadow-lift ring-1 ring-line " + className}>
      <FamilyIllustration />
      <p className="mt-1 text-sm font-extrabold tracking-wide text-deep uppercase">Familia</p>
    </div>
  );
}

/** Ilustración simple: una persona adulta y dos chicos, con la paleta de Mochi. */
function FamilyIllustration() {
  return (
    <svg viewBox="0 0 120 84" className="h-auto w-28" aria-hidden="true">
      <ellipse cx="60" cy="80" rx="52" ry="4" fill="#EEF5FE" />
      {/* Adulto */}
      <circle cx="58" cy="20" r="12" fill="#F4C9A8" />
      <path d="M58 6c-8 0-13 5-13 12 3-4 8-6 13-6s10 2 13 6c0-7-5-12-13-12Z" fill="#3D4A63" />
      <path d="M40 80V50c0-9 8-16 18-16s18 7 18 16v30Z" fill="#2F80ED" />
      {/* Hijo/a mayor */}
      <circle cx="92" cy="40" r="9" fill="#F4C9A8" />
      <path d="M83 38c0-6 4-10 9-10s9 4 9 10c-2-3-5-4-9-4s-7 1-9 4Z" fill="#8a5a3c" />
      <path d="M79 80V63c0-7 6-12 13-12s13 5 13 12v17Z" fill="#5FD3C6" />
      {/* Hijo/a menor */}
      <circle cx="24" cy="48" r="8" fill="#F4C9A8" />
      <path d="M16 47c0-5 3-9 8-9s8 4 8 9c-2-2-5-3-8-3s-6 1-8 3Z" fill="#c07a3e" />
      <path d="M13 80V67c0-6 5-10 11-10s11 4 11 10v13Z" fill="#FF7B6B" />
      {/* Mochila */}
      <rect x="101" y="60" width="8" height="12" rx="3" fill="#F6C247" />
    </svg>
  );
}
