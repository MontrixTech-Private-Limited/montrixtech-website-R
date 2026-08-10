"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Cpu, Trophy, Users } from "lucide-react";
import { WORKSHOP_CATEGORIES } from "@/lib/montrix-data";
import SectionHeading from "./SectionHeading";
import CornerIllustration from "./CornerIllustration";
  import Image from "next/image";
  
const WHY_HIGHLIGHTS = [
  { icon: Users, label: "Industry Experts" },
  { icon: Cpu, label: "Hands-on Learning" },
  { icon: Trophy, label: "Real Projects" },
  { icon: GraduationCap, label: "Certification" },
];

/**
 * WorkshopsTeaser — short home-page preview of the Workshops page.
 * Links to /workshops (no longer "coming soon").
 */
export default function WorkshopsTeaser() {
  const featured = WORKSHOP_CATEGORIES.slice(0, 6);

  return (


<section className="relative py-10 lg:py-14 bg-cream-200/60 border-y border-cream-400">
  <div className="container-premium">
    <div className="grid lg:grid-cols-[280px_1fr] items-center gap-10 mb-7">

      {/* Left Illustration */}
      <div className="hidden lg:flex justify-start">
        <Image
          src="/images/illustrations/thinking.png"
          alt="Workshop Illustration"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Right Content */}
      <SectionHeading
        title={<>Empowering the next generation through technology.</>}
        description="Industry-focused workshops across six tracks — from Class 1 to engineering. Real mentors, real projects, real certificates."
      />

    </div>

        {/* Why highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
          {WHY_HIGHLIGHTS.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-cream-400 bg-cream-50 p-4 flex items-center gap-3 lift"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#12B8B0]/10 text-[#0F6E56]">
                <w.icon size={16} />
              </span>
              <span className="text-sm font-medium text-[#0A2E57]">
                {w.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Workshop category preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((w, i) => (
            <motion.div
              key={w.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-cream-400 bg-cream-100 p-5 lift"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="pill pill-teal text-[10px]">{w.audience}</span>
                <ArrowRight
                  size={14}
                  className="text-[#888780] transition-all duration-300 group-hover:text-[#12B8B0] group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="text-base font-semibold text-[#0A2E57]">
                {w.title}
              </h3>
              <p className="mt-1.5 text-[13px] text-[#888780] leading-5 line-clamp-2">
                {w.tagline}
              </p>
              <Link
                href="/workshops"
                className="absolute inset-0"
                aria-label={`Explore ${w.title}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
