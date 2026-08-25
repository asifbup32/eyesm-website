import { Hero } from "@/components/sections/hero";
import { PillarsSection } from "@/components/sections/pillars-section";
import { MissionVisionSection } from "@/components/sections/mission-vision";
import { ValuesSection } from "@/components/sections/values-section";
import { InitiativesPreview } from "@/components/sections/initiatives-preview";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <MissionVisionSection />
      <ValuesSection />
      <InitiativesPreview />
      <CtaSection />
    </>
  );
}
