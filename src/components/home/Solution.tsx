import { ArrowDown, ArrowRight } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { Bubble, ChatList, ChatWindow } from "@/components/chat/Chat";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { sources } from "./sources";

export function Solution() {
  return (
    <Section labelledBy="solucion-title">
      <Container>
        <SectionHeading
          id="solucion-title"
          eyebrow="La solución"
          title="Mochi lo entiende todo y te lo cuenta por chat."
          description="Vos no tenés que aprender a usar otra app. Mochi vive donde tu familia ya conversa: WhatsApp o Telegram."
        />

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_220px_auto_1.2fr]">
          <ul className="flex flex-wrap justify-center gap-2 lg:flex-col lg:items-end" aria-label="Lo que llega">
            {sources.slice(0, 5).map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-bold text-ink shadow-soft"
              >
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <Arrow />

          <div className="mx-auto w-40 text-center lg:w-full">
            <Mascot pose="lee" sizes="220px" className="w-full" />
            <p className="mt-1 font-extrabold text-ink">Mochi lee y organiza</p>
          </div>

          <Arrow />

          <ChatWindow label="Ejemplo: Mochi resume lo importante de la semana." composer={false} className="mx-auto w-full max-w-sm">
            <Bubble from="mochi" time="8:00">
              <p>
                ¡Buen día! 👋 Encontré <strong>3 cosas importantes</strong> para esta semana:
              </p>
              <ChatList
                items={[
                  { emoji: "📚", text: <>Tarea de Matemática — <strong>jueves</strong></> },
                  { emoji: "📝", text: "Falta completar una autorización" },
                  { emoji: "🏫", text: <>Reunión de padres — <strong>viernes 18:30</strong></> },
                ]}
              />
            </Bubble>
          </ChatWindow>
        </div>
      </Container>
    </Section>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center text-primary" aria-hidden="true">
      <ArrowDown className="size-7 lg:hidden" />
      <ArrowRight className="hidden size-7 lg:block" />
    </div>
  );
}
