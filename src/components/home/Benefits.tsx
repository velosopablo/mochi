import { BellRing, CalendarHeart, ClipboardCheck, Clock3, NotebookPen, Backpack, type LucideIcon } from "lucide-react";
import { MochiAvatar } from "@/components/brand/Mascot";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";

const benefits: Array<{ icon: LucideIcon; title: string; message: string; tint: string }> = [
  { icon: BellRing, title: "Recordatorios", message: "⏰ Mañana a las 7:30 te recuerdo que Juli lleva la flauta.", tint: "bg-primary-50" },
  { icon: NotebookPen, title: "Tareas", message: "📚 Lucas tiene tarea de Matemática para el jueves: páginas 24 y 25.", tint: "bg-mint-50" },
  { icon: CalendarHeart, title: "Eventos", message: "🏫 Acto del Día de la Familia en el curso de Mateo: sábado 10:00. ¿Te lo recuerdo?", tint: "bg-yellow-50" },
  { icon: ClipboardCheck, title: "Autorizaciones", message: "✍️ Falta la autorización de la salida de Sofía. Vence mañana.", tint: "bg-coral-50" },
  { icon: Backpack, title: "Material escolar", message: "🎒 Para Plástica, Clara necesita témperas, un pincel y un repasador.", tint: "bg-mint-50" },
  { icon: Clock3, title: "Cambios de horario", message: "🔔 La reunión de padres del curso de Tomás pasó a las 18:30.", tint: "bg-primary-50" },
];

export function Benefits() {
  return (
    <Section labelledBy="beneficios-title">
      <Container>
        <SectionHeading
          id="beneficios-title"
          eyebrow="Qué hace Mochi"
          title="Prioridades, recordatorios y acciones, para cada hijo."
          description="Mochi te escribe como alguien muy organizado de la familia: con nombre, fecha y lo que hay que hacer."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, message, tint }) => (
            <li key={title} className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className={"grid size-11 place-items-center rounded-2xl text-deep " + tint}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="type-h4 text-ink">{title}</h3>
              </div>
              <div className="mt-5 flex flex-1 items-end gap-2 rounded-2xl bg-chat-bg p-3">
                <MochiAvatar className="size-7" />
                <p className="rounded-2xl rounded-tl-md bg-white px-3 py-2 text-[15px] leading-snug text-ink shadow-[0_1px_1px_rgb(61_74_99/0.08)]">
                  <span className="sr-only">Mochi: </span>
                  {message}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
