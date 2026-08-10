// ...existing code...
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, OFFICES } from "@/lib/montrix-data";
import SectionHeading from "./SectionHeading";

const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const contactDetails = [
  {
    label: "Email",
    icon: Mail,
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    label: "Phone",
    icon: Phone,
    value: COMPANY.phones,
  },
];

export default function ContactPreview() {
  return (
<section className="py-10 lg:py-14">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Get in touch"
          title={<>Let&apos;s build something together.</>}
          description="Have an idea, a brief, or just a question? Reach out — we usually reply within a working day."
          align="center"
          className="mb-9"
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          <motion.div
            {...cardMotion}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:p-7 lift"
          >
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#0F6E56]">
              Contact
            </h3>

            <ul className="space-y-5 text-sm">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8B0]" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-[#888780]">
                        {item.label}
                      </div>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#0A2E57] transition-colors hover:text-[#12B8B0]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        Array.isArray(item.value) && item.value.map((p: string) => (
                          <div key={p} className="text-[#0A2E57]">
                            {p}
                          </div>
                        ))
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {OFFICES.map((office, index) => (
            <motion.div
              key={office.label}
              {...cardMotion}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:p-7 lift"
            >
              <div className="mb-5 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#12B8B0]" />
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[#0F6E56]">
                  {office.label}
                </h3>

                {office.isVisiting && (
                  <span className="pill pill-teal ml-auto !px-2 !py-0.5 text-[10px]">
                    Visiting
                  </span>
                )}
              </div>

              <address className="not-italic text-sm leading-7 text-[#0A2E57]">
                {office.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>

              {office.mapsLink && (
                <a
                  href={office.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-[#12B8B0] transition-colors hover:text-[#0A2E57]"
                >
                  Open in Maps
                  <ArrowRight size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          {...cardMotion}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium"
          >
            Start a project
            <ArrowRight size={16} strokeWidth={2.2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
