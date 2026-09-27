import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { Bubble, ChatWindow } from "@/components/chat/Chat";
import { ContactForm, type Audience } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { anchors, PRIMARY_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribinos si sos una familia interesada en Mochi o si representás a una escuela que quiere explorarlo.",
  alternates: { canonical: "/contacto" },
  openGraph: { url: "/contacto" },
};

export default async function ContactPage({ searchParams }: PageProps<"/contacto">) {
  const { tipo } = await searchParams;
  const initialAudience: Audience = tipo === "escuela" ? "escuela" : "familia";

  return (
    <section aria-labelledby="contacto-title" className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -top-24 right-[-8rem] size-[26rem] rounded-full bg-primary-50" />
        <span className="absolute bottom-[-6rem] left-[-6rem] size-72 rounded-full bg-mint-50" />
      </div>
      <Container className="relative grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:py-20">
        <div>
          <Eyebrow>Contacto</Eyebrow>
          <h1 id="contacto-title" className="type-h1 mt-5 text-ink">
            Hablemos.
          </h1>
          <p className="mt-4 text-lg text-ink-muted">
            Si tenés dudas, ideas o querés contarnos cómo se organizan en casa, nos encantaría leerte.
          </p>

          <div className="mt-8 flex items-end gap-3">
            <Mascot pose="feliz" sizes="140px" className="w-24 shrink-0 sm:w-32" decorative />
            <ChatWindow label="Mochi te cuenta cómo sumarte al piloto." composer={false} className="flex-1" bodyClassName="py-3">
              <Bubble from="mochi">
                <p>¿Querés probarme? 😊 La forma más rápida es sumarte al piloto para familias.</p>
              </Bubble>
            </ChatWindow>
          </div>
          <Link
            href={anchors.earlyAccess}
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-xl px-1 font-bold text-deep hover:underline focus-visible:outline-3 focus-visible:outline-primary"
          >
            {PRIMARY_CTA} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
          <ContactForm initialAudience={initialAudience} />
        </div>
      </Container>
    </section>
  );
}
