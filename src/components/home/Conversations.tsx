import { Bubble, ChatList, ChatWindow, EventCard, FileCard, StatusChip } from "@/components/chat/Chat";
import { Mascot } from "@/components/brand/Mascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { anchors, PRIMARY_CTA } from "@/lib/site";

const conversations: Array<{ situation: string; label: string; content: React.ReactNode }> = [
  {
    situation: "Pendientes de la semana",
    label: "Conversación: qué hay pendiente esta semana.",
    content: (
      <>
        <Bubble from="user" time="21:05">¿Hay algo pendiente para esta semana?</Bubble>
        <Bubble from="mochi" time="21:05" actions={["¿Cómo completo la autorización?"]}>
          <p>Sí, encontré <strong>2 cosas pendientes</strong>:</p>
          <ChatList
            items={[
              { emoji: "📝", text: <>Autorización para la excursión — <strong>vence mañana</strong>.</> },
              { emoji: "📚", text: <>Actividad de Ciencias — entrega <strong>viernes</strong>.</> },
            ]}
          />
        </Bubble>
      </>
    ),
  },
  {
    situation: "Una reunión que cambió",
    label: "Conversación: cuándo es la reunión de padres.",
    content: (
      <>
        <Bubble from="user" time="12:40">¿Cuándo es la reunión?</Bubble>
        <Bubble from="mochi" time="12:40">
          <p>
            La reunión de padres es el <strong>viernes a las 18:30</strong> en el aula 4. Cambió de horario ayer.
          </p>
          <EventCard title="Reunión de padres" when="Viernes · 18:30" where="Aula 4" status="Lo agendé para que no se te pase" />
        </Bubble>
      </>
    ),
  },
  {
    situation: "La logística de mañana",
    label: "Conversación: si mañana hay Educación Física.",
    content: (
      <>
        <Bubble from="user" time="22:10">¿Mañana tiene educación física?</Bubble>
        <Bubble from="mochi" time="22:10" actions={["Recordámelo 7:15"]}>
          <p>
            Sí. Mañana Juani tiene <strong>Educación Física a las 10:30</strong>.
          </p>
          <p>Tiene que llevar ropa deportiva 👟</p>
        </Bubble>
      </>
    ),
  },
  {
    situation: "Cuando no hay certezas",
    label: "Conversación: una prueba que todavía no está confirmada.",
    content: (
      <>
        <Bubble from="user" time="19:48">Sofi dice que mañana tiene prueba de Música 🤔</Bubble>
        <Bubble from="mochi" time="19:48">
          <StatusChip tone="amber">Sin confirmar</StatusChip>
          <p>
            No encontré ninguna evaluación de Música para mañana. Lo último que llegó es que hay que repasar la
            unidad, <strong>sin fecha</strong>.
          </p>
          <p>Te aviso apenas llegue una fecha confirmada.</p>
        </Bubble>
      </>
    ),
  },
  {
    situation: "El PDF perdido",
    label: "Conversación: dónde está el cuadernillo de lectura.",
    content: (
      <>
        <Bubble from="user" time="17:20">¿Dónde está el cuadernillo de lectura?</Bubble>
        <Bubble from="mochi" time="17:20">
          <p>Acá está 👇 Llegó por el grupo de WhatsApp el martes.</p>
          <FileCard name="Cuadernillo de lectura.pdf" meta="PDF · 164 páginas" />
          <p>Podés imprimirlo o comprarlo en la librería: las dos opciones valen.</p>
        </Bubble>
      </>
    ),
  },
  {
    situation: "Una semana cargada",
    label: "Conversación: por dónde empezar una semana con tres evaluaciones.",
    content: (
      <>
        <Bubble from="user" time="20:30">Esta semana tiene 3 pruebas 😰 ¿Por dónde empezamos?</Bubble>
        <Bubble from="mochi" time="20:31" actions={["Recordámelo cada día"]}>
          <p>La carga fuerte está entre miércoles y viernes. Te propongo:</p>
          <ChatList
            items={[
              { emoji: "1️⃣", text: <><strong>Lunes:</strong> 25 min de Matemática</> },
              { emoji: "2️⃣", text: <><strong>Martes:</strong> 20 min de Inglés</> },
              { emoji: "3️⃣", text: <><strong>Miércoles:</strong> repaso de Matemática</> },
            ]}
          />
        </Bubble>
      </>
    ),
  },
];

export function Conversations() {
  return (
    <Section id="ejemplos" labelledBy="ejemplos-title" tone="bg">
      <Container>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="ejemplos-title"
            align="responsive"
            eyebrow="Ejemplos de conversación"
            title="Preguntale como le preguntarías a alguien de la familia."
            description="Situaciones inspiradas en el día a día de las familias. Recreadas con datos ficticios."
          />
          <Mascot pose="ok" sizes="160px" className="w-28 shrink-0 lg:w-40" decorative />
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {conversations.map((c) => (
            <li key={c.situation} className="flex flex-col">
              <h3 className="mb-3 text-sm font-extrabold tracking-wide text-deep uppercase">{c.situation}</h3>
              <ChatWindow label={c.label} composer={false} className="flex-1">
                {c.content}
              </ChatWindow>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="type-h4 text-ink">¿Te suena alguna de estas?</p>
          <ButtonLink href={anchors.earlyAccess}>{PRIMARY_CTA}</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
