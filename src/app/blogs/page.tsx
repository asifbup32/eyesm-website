import type { Metadata } from "next";
import { Article } from "@phosphor-icons/react/dist/ssr";
import { ComingSoon } from "@/components/sections/coming-soon";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Stories and reflections from EYESM Bangladesh — coming soon.",
};

export default function BlogsPage() {
  return (
    <>
      <ComingSoon
        icon={<Article aria-hidden="true" />}
        eyebrow="Blogs"
        title="Stories from the field"
        description="We're preparing written reflections from our volunteers and team on the work we do and why it matters."
        note="Blog posts from EYESM Bangladesh's team and volunteers will appear here."
      />
      <CtaSection />
    </>
  );
}
