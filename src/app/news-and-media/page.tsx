import type { Metadata } from "next";
import { Newspaper } from "@phosphor-icons/react/dist/ssr";
import { ComingSoon } from "@/components/sections/coming-soon";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "News & Media",
  description: "Press coverage and media mentions of EYESM Bangladesh — coming soon.",
};

export default function NewsAndMediaPage() {
  return (
    <>
      <ComingSoon
        icon={<Newspaper aria-hidden="true" />}
        eyebrow="News & Media"
        title="Press coverage, coming soon"
        description="As EYESM Bangladesh's work gets covered by press and media outlets, we'll collect it here."
        note="News mentions, press features, and media coverage will be listed on this page."
      />
      <CtaSection />
    </>
  );
}
