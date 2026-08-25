import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { InitiativesPreview } from "@/components/sections/initiatives-preview";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <InitiativesPreview />
      <NewsletterSection />
      <CtaSection />
    </>
  );
}
