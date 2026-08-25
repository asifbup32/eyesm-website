import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "EYESM Bangladesh — Empowering Lives. Sustaining Tomorrow.",
    template: "%s — EYESM Bangladesh",
  },
  description:
    "EYESM Bangladesh is a youth-led, non-profit, non-political, and volunteer-driven organization dedicated to creating positive and sustainable change across Bangladesh through environmental action, youth leadership, education, and community development.",
  metadataBase: new URL("https://eyesmbangladesh.org"),
  openGraph: {
    title: "EYESM Bangladesh — Empowering Lives. Sustaining Tomorrow.",
    description:
      "A youth-led non-profit building a greener, healthier, and more sustainable Bangladesh.",
    siteName: "EYESM Bangladesh",
    images: ["/images/logo-wordmark.png"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
