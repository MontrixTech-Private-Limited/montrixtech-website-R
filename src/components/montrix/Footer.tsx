"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY, OFFICES, FOOTER_LINKS } from "@/lib/montrix-data";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const visitingOffice = OFFICES.find((o) => o.isVisiting);

  return (
    <footer className="mt-auto bg-[#15457A] text-[#B5D4F4]">
      <div className="container-premium py-12 lg:py-14">
        {/* Top — brand + columns */}
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
           <Link
  href="/"
  className="inline-flex items-center"
  aria-label="MontrixTech Home"
>
 <Image
  src="/images/footer-logo-dark-footer1 (2).png"
  alt="MontrixTech"
  width={330}   height={80}
  priority
  className="h-28 w-auto object-contain"
/>
</Link>        <p className="mt-5 text-sm leading-7 max-w-sm text-[#9FB3CC]">
              {COMPANY.tagline} We design and build web, mobile, cloud, and AI
              products for teams who need to ship real things, fast.
            </p>
            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white/90 font-medium mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#9FB3CC] hover:text-[#12B8B0] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white/90 font-medium mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#9FB3CC] hover:text-[#12B8B0] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white/90 font-medium mb-5">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8B0]" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[#9FB3CC] hover:text-[#12B8B0] transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8B0]" />
                <div className="space-y-0.5">
                  {COMPANY.phones.map((p) => (
                    <div key={p} className="text-[#9FB3CC]">
                      {p}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Offices — both shown as distinct blocks */}
        <div className="mt-9 pt-7 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICES.map((office) => (
            <div key={office.label} className="text-sm">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-[#12B8B0]" />
                <h5 className="text-xs uppercase tracking-[0.18em] text-white/90 font-medium">
                  {office.label}
                </h5>
                {office.isVisiting && (
                  <span className="pill pill-teal text-[10px] !py-0.5 !px-2 !border-[#12B8B0]/40">
                    Visiting
                  </span>
                )}
              </div>
              <address className="not-italic text-[#9FB3CC] leading-7">
                {office.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
              {office.mapsLink && (
                <a
                  href={office.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[#12B8B0] hover:text-white transition-colors text-xs"
                >
                  Open in Maps
                  <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          ))}

          {/* Map embed (visiting/working office) */}
          {visitingOffice?.mapsEmbedSrc && (
            <div className="md:col-span-1">
              <div className="overflow-hidden rounded-xl border border-white/10 h-40 md:h-full min-h-[160px]">
                <iframe
                  src={visitingOffice.mapsEmbedSrc}
                  className="w-full h-full min-h-[160px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map — ${visitingOffice.label}`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#7C91AC]">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-[#7C91AC]">
            Made with care in Bengaluru, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
