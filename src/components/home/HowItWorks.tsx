import { Bubble, ChatWindow, FileCard } from "@/components/chat/Chat";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";

const understands = ["Fechas", "Tareas", "Evaluaciones", "Autorizaciones", "Materiales", "Eventos", "Cambios"];

export function HowItWorks() {
  return (
    <Section id="como-funciona" labelledBy="como-funciona-title" tone="bg">
      <Container>
        <SectionHeading
          id="como-funciona-title"
          eyebrow="Cómo funciona"
          title="Tres pasos. Cero apps nuevas."
          description="De información dispersa a mensajes claros, en la conversación que ya usás todos los días."
        />

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          <Step n={1} title="Mochi recibe la información" text="Le reenviás lo que llega: mensajes, PDFs, mails o fotos del cuaderno.">
            <ChatWindow label="Ejemplo: le reenviás un PDF a Mochi." composer={false} className="border-0 shadow-none">
              <Bubble from="user" time="19:02">
                <p className="text-xs font-bold text-ink-muted">↪ Reenviado</p>
                <FileCard name="Circular salida educativa.pdf" meta="PDF · 2 páginas" />
              </Bubble>
            </ChatWindow>
          </Step>

          <Step n={2} title="La entiende y organiza" text="Detecta qué es cada cosa, cuándo pasa y qué hay que hacer.">
            <ul className="flex flex-wrap gap-2" aria-label="Mochi identifica">
              {understands.map((c) => (
                <li key={c} className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-ink ring-1 ring-line">
                  {c}
                </li>
              ))}
            </ul>
          </Step>

          <Step n={3} title="Conversa con vos y te avisa" text="Te escribe cuando algo necesita atención. Y le podés preguntar lo que quieras.">
            <ChatWindow label="Ejemplo: Mochi avisa que vence una autorización." composer={false} className="border-0 shadow-none">
              <Bubble from="mochi" time="19:03" actions={["Ya la completé ✅", "¿Cómo la completo?"]}>
                <p>
                  📝 Te aviso: la autorización de la salida educativa <strong>vence mañana</strong>.
                </p>
              </Bubble>
            </ChatWindow>
          </Step>
        </ol>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ink-muted">
          Durante el piloto, las formas de hacerle llegar la información a Mochi pueden variar según cada escuela y cada familia.
        </p>
      </Container>
    </Section>
  );
}

function Step({
  n,
  title,
  text,
  children,
}: {
  n: number;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex flex-col rounded-3xl border border-line bg-white p-6">
      <span className="grid size-10 place-items-center rounded-full bg-primary-strong text-lg font-extrabold text-white">
        {n}
      </span>
      <h3 className="type-h4 mt-4 text-ink">{title}</h3>
      <p className="mt-1.5 text-ink-muted">{text}</p>
      <div className="mt-5 flex-1 overflow-hidden rounded-2xl bg-chat-bg p-1">{children}</div>
    </li>
  );
}
