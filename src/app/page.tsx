import { AISection } from "@/components/home/AISection";
import { AutonomySection } from "@/components/home/AutonomySection";
import { DailyAndWeekly } from "@/components/home/DailyAndWeekly";
import { EarlyAccess } from "@/components/home/EarlyAccess";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { InformationChaos } from "@/components/home/InformationChaos";
import { ParentBenefits } from "@/components/home/ParentBenefits";
import { PrivacySection } from "@/components/home/PrivacySection";
import { RealLifeScenarios } from "@/components/home/RealLifeScenarios";
import { SignalVsNoise } from "@/components/home/SignalVsNoise";

/**
 * Narrativa: demasiados lugares → olvidos y dudas → Mochi entiende → te dice qué importa
 * → organiza la semana → tu hijo/a gana autonomía → menos persecución → quiero probarlo.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <InformationChaos />
      <RealLifeScenarios />
      <HowItWorks />
      <SignalVsNoise />
      <DailyAndWeekly />
      <AutonomySection />
      <ParentBenefits />
      <AISection />
      <PrivacySection />
      <EarlyAccess />
    </>
  );
}
