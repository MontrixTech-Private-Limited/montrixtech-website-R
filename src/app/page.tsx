import type { Metadata } from "next";

import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";
import PremiumBackground from "@/components/montrix/PremiumBackground";
import Hero from "@/components/montrix/Hero";
import ServicesBento from "@/components/montrix/ServicesBento";
import Process from "@/components/montrix/Process";
import WorkshopsTeaser from "@/components/montrix/WorkshopsTeaser";
import ContactPreview from "@/components/montrix/ContactPreview";

export const metadata: Metadata = {
  title: "Software Development Company in Bangalore",
  description:
    "MontrixTech Private Limited is a software development company in Bangalore offering web development, mobile app development, custom software, cloud and AI solutions for businesses.",
  alternates: {
    canonical: "https://montrixtech.com/",
  },
  openGraph: {
    title: "Software Development Company in Bangalore | MontrixTech",
    description:
      "Web, mobile, custom software, cloud and AI solutions for businesses from MontrixTech Private Limited.",
    url: "https://montrixtech.com/",
    siteName: "MontrixTech Private Limited",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-col">
      <PremiumBackground />

      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />
        <Hero />
        <ServicesBento />
        <Process />
        <WorkshopsTeaser />
        <ContactPreview />
        <Footer />
      </div>
    </main>
  );
}