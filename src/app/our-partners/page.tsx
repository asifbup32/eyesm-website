import type { Metadata } from "next";
import { Handshake } from "@phosphor-icons/react/dist/ssr";
import { ComingSoon } from "@/components/sections/coming-soon";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Organizations partnering with EYESM Bangladesh — coming soon.",
};

export default function OurPartnersPage() {
  return (
    <>
      <ComingSoon
        icon={<Handshake aria-hidden="true" />}
        eyebrow="Our Partners"
        title="Building partnerships"
        description="We're growing a network of organizations, institutions, and sponsors who support our mission. Our partners will be featured here."
        note="Interested in partnering with EYESM Bangladesh? Reach out through our contact page."
      />
      <CtaSection />
    </>
  );
}
