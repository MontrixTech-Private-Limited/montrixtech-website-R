import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/montrix/ScrollToTop";
import BackToTop from "@/components/montrix/BackToTop";
import PageTransition from "@/components/montrix/PageTransition";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://montrixtech.in"),
  title: {
    default: "MontrixTech — Software that moves your business forward",
    template: "%s · MontrixTech",
  },
  description:
    "MontrixTech Private Limited designs and builds web, mobile, cloud and AI products for teams who need to ship real things, fast.",
  keywords: [
    "MontrixTech",
    "software development",
    "web development",
    "mobile apps",
    "cloud solutions",
    "AI solutions",
    "Bangalore",
  ],
  authors: [{ name: "MontrixTech Private Limited" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MontrixTech — Software that moves your business forward",
    description:
      "We design and build web, mobile, and AI products for teams who need to ship real things, fast.",
    url: "https://montrixtech.in",
    siteName: "MontrixTech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MontrixTech",
    description: "Web, mobile, cloud and AI products for teams who ship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
className={`${manrope.variable} min-h-screen antialiased`}
>
        <ScrollToTop />
        <PageTransition>{children}</PageTransition>
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}