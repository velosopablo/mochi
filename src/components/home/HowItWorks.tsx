import { ArrowRight, CalendarDays, FileText, LayoutGrid, Mail, type LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const inputs: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Mail, label: "Email" },
  { icon: LayoutGrid, label: "Plataforma" },
  { icon: CalendarDays, label: "Calendario" },
  { icon: FileText, label: "Documentos" },
];

const understands = ["Fechas", "Tareas", "Evaluaciones", "Autorizaciones", "Materiales", "Eventos"];
const outputs = ["Pendientes", "Recordatorios", "Prioridades", "Resúmenes", "Planificación"];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-white px-3 py-1 text-sm font-medium text-ink-soft ring-1 ring-line">
      {children}
    </li>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="como-funciona-title"
          eyebrow="Cómo funciona"
          title="De información dispersa a acciones claras."
          description="La información escolar ya existe. Mochi entiende qué importa y te ayuda a actuar."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          <Step number={1} title="Recibe" text="Mochi puede obtener información proveniente de diferentes fuentes.">
            <div className="flex items-center gap-2" aria-hidden="true">
              <ul className="grid grid-cols-2 gap-2">
                {inputs.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-1.5 rounded-lg bg-white px-2 py-1.5 text-xs font-medium text-ink-soft ring-1 ring-line"
                  >
                    <Icon className="size-3.5 shrink-0 text-ink-muted" />
                    {label}
                  </li>
                ))}
              </ul>
              <ArrowRight className="size-4 shrink-0 text-brand-400" />
              <LogoMark className="size-10 shrink-0" />
            </div>
          </Step>
          <Step number={2} title="Entiende" text="Lee cada comunicación e identifica lo que importa.">
            <ul className="flex flex-wrap gap-2" aria-label="Identifica">
              {understands.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </ul>
          </Step>
          <Step number={3} title="Prioriza" text="Transforma todo eso en algo que se puede hacer.">
            <ul className="flex flex-wrap gap-2" aria-label="Lo convierte en">
              {outputs.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </ul>
          </Step>
        </ol>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ink-muted">
          Durante el piloto, las fuentes disponibles pueden variar según cada colegio y cada familia.
        </p>
      </Container>
    </section>
  );
}

function Step({
  number,
  title,
  text,
  children,
}: {
  number: number;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-7">
      <span className="grid size-9 place-items-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
        {number}
      </span>
      <h3 className="mt-5 font-display text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
      <div className="mt-6 flex-1 rounded-2xl bg-canvas p-4">{children}</div>
    </li>
  );
}
