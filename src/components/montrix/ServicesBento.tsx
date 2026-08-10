"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/montrix-data";
import ServiceIcon from "./ServiceIcon";
import SectionHeading from "./SectionHeading";

export default function ServicesBento() {
  const homeServices = SERVICES.slice(0, 3);

  return (
<section className="py-10 lg:py-14">
          <div className="container-premium">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
          <SectionHeading
            eyebrow="What We Build"
            title={<>Our Core Services</>}
            description="We help businesses build modern digital products — from websites and mobile apps to cloud, AI, and custom software."
          />

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#0A2E57] hover:text-[#12B8B0] transition-colors"
          >
            View all services
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-cream-400 bg-cream-50 p-5 transition-all duration-300 hover:border-[#12B8B0]/40 hover:shadow-[0_18px_40px_-20px_rgba(10,46,87,0.18)]"
            >
              <Link
                href="/services"
                className="absolute inset-0 z-10"
                aria-label={`View ${service.title} in Services`}
              />
              {/* spotlight cursor follow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(18,184,176,0.10), transparent 60%)",
                }}
              />

<div className="relative">
<div className="relative mb-5 flex h-44 items-center justify-center overflow-hidden">  
  <Image
  src={service.image}
  alt={service.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"/>
</div>
                <ArrowUpRight
  size={18}
  className="absolute top-0 right-0 text-[#888780] transition-all duration-300 group-hover:text-[#12B8B0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
/>
              </div>

              <h3 className="relative text-xl font-semibold text-[#0A2E57]">
                {service.title}
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-[#5F5E5A]">
  {service.description}
</p>
<div className="mt-4 space-y-2">
  {service.features.slice(0, 3).map((feature) => (    <div
      key={feature}
      className="flex items-center gap-3 text-sm text-[#5F5E5A]"
    >
      <span className="text-[#12B8B0] font-bold">✓</span>
      <span>{feature}</span>
    </div>
  ))}
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
