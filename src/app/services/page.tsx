"use client";

import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";
import ServicesHero from "@/components/montrix/ServicesHero";
import ServiceSection from "@/components/montrix/ServiceSection";

import { SERVICES } from "@/lib/montrix-data";

export default function ServicesPage() {
  return (
    <main className="bg-white">

      <Navbar />

<ServicesHero />

{SERVICES.map((service, index) => (
  <ServiceSection
    key={service.slug}
    title={service.title}
    description={service.description}
    image={service.image}
    features={service.features}
    reverse={index % 2 === 1}
  />
))}

<Footer />

    </main>
  );
}