"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Award,
  Handshake,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";
import SectionHeading from "@/components/montrix/SectionHeading";
import CornerIllustration from "@/components/montrix/CornerIllustration";
import { COMPANY } from "@/lib/montrix-data";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We reach for the latest tools and creative thinking — not because they're new, but because they let us solve problems older tools can't.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Transparency, trust, and accountability sit at the heart of every engagement. If something's off, you'll hear it from us first.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We ship scalable, reliable, high-quality software that exceeds expectations — and we hold ourselves to that bar on every project.",
  },
  {
    icon: Handshake,
    title: "Customer First",
    desc: "We build long-term partnerships by understanding every client's unique business goals, not by selling hours and disappearing.",
  },
];

const STATS = [
  { k: "5+", v: "Apps delivered" },
  { k: "5+", v: "Websites shipped" },
  { k: "3+", v: "Software platforms" },
  { k: "24/7", v: "Support coverage" },
];

const revealUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const heroIn = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="relative flex flex-1 flex-col mesh-bg">
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />

        <section className="relative container-premium pb-8 pt-12 lg:pb-10 lg:pt-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[56%_44%] lg:gap-8">
            <div>
              <motion.h1
                {...heroIn}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="type-display max-w-4xl text-balance text-[40px] text-[#0A2E57] sm:text-[52px] lg:text-[64px]"
              >
                Building innovative digital solutions that move businesses forward.
              </motion.h1>

              <motion.p
                {...heroIn}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 max-w-2xl text-pretty text-base leading-7 text-[#5F5E5A] md:text-lg"
              >
                {COMPANY.legalName} is a modern software company based in Bengaluru.
                We help startups, growing businesses, and enterprises ship real
                products across web, mobile, cloud, and AI — without the agency
                theatre that usually comes with it.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto aspect-[4/3] w-full max-w-[440px]"
            >
              <Image
                src="/images/illustrations/aboutus.png"
                alt="MontrixTech team collaborating"
                fill
                sizes="(max-width: 1024px) 80vw, 440px"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </section>

        <section className="container-premium py-10 lg:py-14">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <motion.div
              {...revealUp}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-[#0A2E57] p-8 text-white lg:col-span-7 lg:p-10"
            >
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#12B8B0]/15 blur-3xl"
              />

              <div className="relative">
                <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-[#9FE1CB]">
                  Our Mission
                </div>

                <p className="type-h2 text-balance text-2xl leading-snug text-white lg:text-3xl">
                  To empower businesses with modern technology by delivering
                  innovative software, scalable platforms, and reliable
                  services that help organizations grow, innovate, and succeed.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...revealUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-cream-400 bg-cream-50 p-8 lg:col-span-5 lg:p-10"
            >
              <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-[#0F6E56]">
                Our Vision
              </div>

              <p className="text-pretty text-lg leading-7 text-[#0A2E57] lg:text-xl">
                To become a trusted global technology partner — recognized for
                innovation, quality, and customer success, and for delivering
                world-class digital solutions that create lasting business
                value.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container-premium py-10 lg:py-14">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Who we are"
                title="A modern software company, end to end."
              />

              <div className="mt-6 space-y-5 text-base leading-7 text-[#5F5E5A] text-pretty">
                <p>
                  From startup MVPs to enterprise platforms, our team helps
                  businesses innovate through Web Development, Mobile
                  Applications, Cloud Infrastructure, Artificial Intelligence,
                  and Custom Software. We don't hand off a deck and disappear —
                  we own the work, from the first sketch to the post-launch
                  monitoring.
                </p>

                <p>
                  We're small enough that your project reaches decision-makers
                  directly, and structured enough that the engineering, design,
                  and delivery don't fall through the cracks. Most of our work
                  happens in tight feedback loops — weekly demos, branches you
                  can click, decisions made in the open.
                </p>

                <p>
                  We're based in Bengaluru and work with teams across India. If
                  you have a real problem worth solving, we'd love to hear about
                  it.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-5">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.v}
                  {...revealUp}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border border-cream-400 bg-cream-50 p-5"
                >
                  <div className="type-display text-3xl text-[#12B8B0] lg:text-4xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-[#5F5E5A]">
                    {s.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative container-premium py-10 lg:py-14">
          <CornerIllustration
            src="/images/illustrations/freelancer.png"
            alt=""
            position="top-right"
size={305}          />

          <SectionHeading
            eyebrow="Our core values"
            title="The principles behind every project."
            description="These aren't posters on a wall — they're the bar we hold ourselves to on every call, every commit, and every handover."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {VALUES.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  {...revealUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-cream-400 bg-cream-50 p-6 lift"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#12B8B0]/12 text-[#0F6E56] transition-colors duration-300 group-hover:bg-[#12B8B0] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mb-2 text-lg font-medium text-[#0A2E57]">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-6 text-[#5F5E5A]">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="container-premium py-10 lg:py-14">
          <div className="relative overflow-hidden rounded-3xl bg-[#0A2E57] p-6 text-white lg:p-14">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#12B8B0]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-[#12B8B0]/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="type-h2 text-balance text-3xl text-white lg:text-4xl">
                  Build your career with a team that ships.
                </h2>

                <p className="mt-4 text-base leading-7 text-[#B5D4F4]">
                  We're hiring interns across engineering, design, marketing,
                  and business. Real work, real mentorship, and a real path to
                  a full-time offer for strong performers.
                </p>
              </div>

              <Link
                href="/careers"
                className="btn-primary inline-flex items-center gap-2 self-start rounded-lg px-6 py-3.5 text-sm font-medium whitespace-nowrap lg:self-end"
              >
                View open roles
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}