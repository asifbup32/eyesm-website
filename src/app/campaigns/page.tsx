import type { Metadata } from "next";
import { Megaphone } from "@phosphor-icons/react/dist/ssr";
import { ComingSoon } from "@/components/sections/coming-soon";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "EYESM Bangladesh's exclusive campaigns — coming soon.",
};

export default function CampaignsPage() {
  return (
    <>
      <ComingSoon
        icon={<Megaphone aria-hidden="true" />}
        eyebrow="Exclusive Campaigns"
        title="Big campaigns are on the way"
        description="We're building out dedicated national campaigns alongside our day-to-day initiatives. Check back soon, or join our WhatsApp group to hear about them first."
        note="This page will feature EYESM Bangladesh's exclusive campaigns as they launch."
      />
      <CtaSection />
    </>
  );
}
