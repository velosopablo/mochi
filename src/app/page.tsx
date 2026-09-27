import { Benefits } from "@/components/home/Benefits";
import { Conversations } from "@/components/home/Conversations";
import { FinalCta } from "@/components/home/FinalCta";
import { ForFamilies } from "@/components/home/ForFamilies";
import { ForSchools } from "@/components/home/ForSchools";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Privacy } from "@/components/home/Privacy";
import { Problem } from "@/components/home/Problem";
import { Solution } from "@/components/home/Solution";

/**
 * Narrativa: la información llega por todos lados → Mochi la entiende → te la cuenta por chat
 * → así funciona → lo que hace → ejemplos reales → familias → escuelas → quiero conocer Mochi.
 * Regla visual: si algo puede mostrarse como conversación, se muestra como conversación.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Conversations />
      <ForFamilies />
      <ForSchools />
      <Privacy />
      <FinalCta />
    </>
  );
}
