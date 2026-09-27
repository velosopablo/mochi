import { BellRing, Heart, ListChecks, Search, Sparkles, type LucideIcon } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";

const items: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Search, title: "Menos tiempo buscando", text: "Preguntás y Mochi te responde, sin revisar cada lugar por separado." },
  { icon: ListChecks, title: "Prioridades claras", text: "Qué necesita atención hoy, qué puede esperar y qué vence pronto." },
  { icon: BellRing, title: "Recordatorios a tiempo", text: "Con lo que hay que hacer, para qué hijo y para cuándo." },
  { icon: Heart, title: "Menos carga mental", text: "Más tiempo para acompañar y menos para estar pendiente de todo." },
];

const journey: Array<{ step: string; title: string; text: string }> = [
  { step: "Hoy", title: "El padre organiza", text: "Mochi ordena la información y te dice qué requiere atención." },
  { step: "Después", title: "El padre acompaña", text: "Con todo más claro, el tiempo se va en acompañar, no en buscar." },
  { step: "Mañana", title: "El alumno se organiza", text: "Los chicos aprenden, de a poco, a organizarse con más autonomía." },
];

export function ForFamilies() {
  return (
    <Section id="familias" labelledBy="familias-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="text-center lg:text-left">
            <SectionHeading
              id="familias-title"
              align="responsive"
              eyebrow="Para familias"
              title="Más claridad para acompañar mejor."
              description="Pensado para madres y padres de chicos de 9 a 14 años, una etapa en la que la vida escolar suma materias, actividades y responsabilidades."
            />
            <Mascot pose="abrazo" sizes="240px" className="mx-auto mt-8 w-44 lg:mx-0 lg:w-56" />
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-3xl border border-line bg-white p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary-50 text-deep">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="type-h4 mt-4 text-ink">{title}</h3>
                <p className="mt-1 text-ink-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-3xl bg-primary-50 p-6 sm:p-10">
          <div className="flex items-center justify-center gap-2 text-center">
            <Sparkles className="size-5 text-deep" aria-hidden="true" />
            <h3 className="type-h3 text-ink">Organizar hoy. Aprender a organizarse mañana.</h3>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {journey.map(({ step, title, text }, i) => (
              <li key={title} className="relative rounded-3xl bg-white p-6 shadow-soft">
                <span className="text-sm font-extrabold tracking-wide text-deep uppercase">
                  {i + 1}. {step}
                </span>
                <p className="type-h4 mt-2 text-ink">{title}</p>
                <p className="mt-1 text-ink-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
