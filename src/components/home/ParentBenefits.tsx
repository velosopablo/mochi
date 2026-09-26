import { BellOff, Search, ShieldQuestion, Sprout, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Search, title: "Menos búsquedas", text: "No revisar cinco lugares para entender una sola cosa." },
  { icon: BellOff, title: "Menos olvidos", text: "Pendientes claramente visibles, a tiempo." },
  {
    icon: ShieldQuestion,
    title: "Menos incertidumbre",
    text: "Diferenciar información confirmada de rumores o datos incompletos.",
  },
  {
    icon: Sprout,
    title: "Más autonomía",
    text: "Ayudar a tu hijo/a a asumir de a poco su propia organización.",
  },
];

export function ParentBenefits() {
  return (
    <section id="para-tu-familia" aria-labelledby="familia-title" className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="familia-title"
          eyebrow="Para tu familia"
          title="Menos “¿hiciste la tarea?”"
          description="Mochi ayuda a que la información correcta llegue a la persona correcta en el momento correcto."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-3xl border border-line bg-white p-6 shadow-soft">
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
