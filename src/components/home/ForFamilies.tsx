import { BellRing, Heart, MessageCircleOff, Search, Sparkles, type LucideIcon } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";

const items: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Heart, title: "Más tranquilidad", text: "Sabés qué pasa hoy y qué viene, sin revisar todo." },
  { icon: MessageCircleOff, title: "Menos mensajes perdidos", text: "Lo importante no se pierde entre 200 mensajes del grupo." },
  { icon: Search, title: "Menos tiempo buscando", text: "Preguntás y Mochi te responde. Sin abrir cinco lugares." },
  { icon: BellRing, title: "Recordatorios claros", text: "Te avisa a tiempo, con lo que hay que hacer y cuándo." },
  { icon: Sparkles, title: "Organización automática", text: "Tareas, eventos y autorizaciones, ordenados solos." },
];

export function ForFamilies() {
  return (
    <Section id="familias" labelledBy="familias-title">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="text-center lg:text-left">
          <SectionHeading
            id="familias-title"
            align="responsive"
            eyebrow="Para familias"
            title="Menos “¿hiciste la tarea?”. Más tiempo para lo importante."
            description="Mochi te ayuda a organizar el día escolar para que puedas acompañar sin perseguir."
          />
          <Mascot pose="abrazo" sizes="240px" className="mx-auto mt-8 w-44 lg:mx-0 lg:w-56" />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={"rounded-3xl border border-line bg-white p-6 shadow-soft" + (i === items.length - 1 ? " sm:col-span-2" : "")}
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-primary-50 text-deep">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="type-h4 mt-4 text-ink">{title}</h3>
              <p className="mt-1 text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
