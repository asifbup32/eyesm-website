"use client";

import { useState, type FormEvent } from "react";
import { EnvelopeSimple, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DecorativeBlobs } from "@/components/decorative-blobs";
import { site } from "@/lib/site-data";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Newsletter subscription request");
    const body = encodeURIComponent(
      `Please add this email to the EYESM Bangladesh newsletter list:\n\n${email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <DecorativeBlobs variant="scattered" />
      <Reveal className="relative">
        <div className="rounded-3xl border border-white/50 bg-card/70 px-6 py-12 text-center shadow-xl shadow-black/5 backdrop-blur-xl backdrop-saturate-150 sm:px-12 sm:py-16">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10">
            <EnvelopeSimple className="size-6 text-primary" aria-hidden="true" />
          </div>
          <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Receive the Latest Updates
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Join our community of changemakers and get news on events and
            initiatives — no spam, unsubscribe anytime.
          </p>

          {sent ? (
            <p className="mt-7 text-sm font-medium text-primary">
              Opening your email app to confirm your subscription to{" "}
              {site.email}…
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
              <Button
                type="submit"
                className="h-11 shrink-0 cursor-pointer gap-1.5 rounded-full px-6"
              >
                Subscribe
                <PaperPlaneTilt className="size-4" aria-hidden="true" />
              </Button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
