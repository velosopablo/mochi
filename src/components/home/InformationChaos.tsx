import {
  BookOpen,
  CalendarDays,
  FileText,
  GraduationCap,
  LayoutGrid,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const sources: Array<{ icon: LucideIcon; label: string; snippet: string; tilt: string }> = [
  { icon: MessageCircle, label: "WhatsApp", snippet: "“¿Alguien sabe si mañana hay que llevar…?”", tilt: "sm:-rotate-2" },
  { icon: Mail, label: "Email", snippet: "Comunicado Nº 14 · Actividades del mes", tilt: "sm:rotate-1" },
  { icon: LayoutGrid, label: "Plataforma escolar", snippet: "Nueva publicación en 6.º B", tilt: "sm:rotate-2" },
  { icon: GraduationCap, label: "Classroom", snippet: "Tarea: entrega el jueves", tilt: "sm:-rotate-1" },
  { icon: FileText, label: "PDF", snippet: "circular_final_v2.pdf", tilt: "sm:rotate-1" },
  { icon: BookOpen, label: "Agenda", snippet: "“Firmar la nota de la salida”", tilt: "sm:-rotate-2" },
  { icon: CalendarDays, label: "Calendario", snippet: "¿El acto se pasó al viernes?", tilt: "sm:rotate-2" },
];

const costs = ["Olvidos", "Dudas", "Mensajes que se pierden", "Esfuerzo todos los días"];

export function InformationChaos() {
  return (
    <section aria-labelledby="problema-title" className="bg-canvas py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="problema-title"
            align="left"
            eyebrow="El problema"
            title={
              <>
                La información está.
                <br />
                Encontrarla es el problema.
              </>
            }
            description="Entre mensajes, plataformas, documentos y lo que cuentan nuestros hijos, entender qué requiere atención puede convertirse en un trabajo diario."
          />
          <p className="sr-only">
            Fuentes habituales: {sources.map((s) => s.label).join(", ")}. Todo termina en una misma
            pregunta: ¿qué tengo que hacer?
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Lo que genera">
            {costs.map((c) => (
              <li
                key={c}
                className="rounded-full border border-line bg-white px-3 py-1 text-sm font-medium text-ink-soft"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-xl font-semibold text-ink">
            Mochi organiza ese ruido<span className="text-brand-600">.</span>
          </p>
        </div>

        <div aria-hidden="true" className="relative">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {sources.map(({ icon: Icon, label, snippet, tilt }, i) => (
              <li
                key={label}
                className={cn(
                  "rounded-2xl border border-line bg-white p-3 shadow-soft",
                  tilt,
                  i === sources.length - 1 && "col-span-2 sm:col-span-1 sm:col-start-2",
                )}
              >
                <span className="flex items-center gap-2 text-xs font-semibold text-ink">
                  <Icon className="size-4 shrink-0 text-ink-muted" />
                  {label}
                </span>
                <span className="mt-1.5 block truncate text-xs text-ink-muted">{snippet}</span>
              </li>
            ))}
          </ul>

          <div className="mx-auto my-4 h-10 w-px bg-gradient-to-b from-line to-brand-300" />

          <div className="mx-auto max-w-xs rounded-2xl border border-brand-100 bg-white px-5 py-4 text-center shadow-lift">
            <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">Una familia, a las 22:40</p>
            <p className="mt-1 font-display text-xl font-bold text-ink">“¿Qué tengo que hacer?”</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
