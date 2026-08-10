"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Users,
  Cpu,
  Trophy,
  GraduationCap,
  Briefcase,
  Wrench,
  Clock,
  LifeBuoy,
  Compass,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Mail,
  ImageIcon,
} from "lucide-react";
import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";
import SectionHeading from "@/components/montrix/SectionHeading";
import TechIcon from "@/components/montrix/TechIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  WORKSHOP_CATEGORIES,
  WORKSHOP_TECHS,
  WORKSHOP_FEATURES,
  WORKSHOP_PROCESS,
  WORKSHOP_FAQS,
  type WorkshopFeature,
} from "@/lib/montrix-data";



const WHY_CARDS = [
  {
    icon: Users,
    title: "Industry Experts",
    body: "Sessions led by engineers actively shipping production software, not trainers reading slides.",
  },
  {
    icon: Cpu,
    title: "Hands-on Learning",
    body: "Lab-first format — 70% practice, 30% theory. Every concept is reinforced by building.",
  },
  {
    icon: Trophy,
    title: "Real Projects",
    body: "Participants leave with a working project they can show, share, and continue building on.",
  },
  {
    icon: GraduationCap,
    title: "Certification",
    body: "A verified MontrixTech completion certificate for every participant who finishes the program.",
  },
];

const ACCENT_MAP: Record<
  "teal" | "navy" | "gold" | "coral",
  { ring: string; chip: string; dot: string; glow: string }
> = {
  teal: {
    ring: "hover:border-[#12B8B0]/50",
    chip: "bg-[#12B8B0]/12 text-[#0F6E56] border-[#12B8B0]/30",
    dot: "bg-[#12B8B0]",
    glow: "from-[#12B8B0]/15",
  },
  navy: {
    ring: "hover:border-[#0A2E57]/40",
    chip: "bg-[#0A2E57]/10 text-[#0A2E57] border-[#0A2E57]/20",
    dot: "bg-[#0A2E57]",
    glow: "from-[#0A2E57]/12",
  },
  gold: {
    ring: "hover:border-[#C8A36A]/60",
    chip: "bg-[#C8A36A]/15 text-[#7A5A1E] border-[#C8A36A]/40",
    dot: "bg-[#C8A36A]",
    glow: "from-[#C8A36A]/12",
  },
  coral: {
    ring: "hover:border-[#E07A5F]/60",
    chip: "bg-[#E07A5F]/15 text-[#7A2E1E] border-[#E07A5F]/40",
    dot: "bg-[#E07A5F]",
    glow: "from-[#E07A5F]/12",
  },
};

const FEATURE_ICONS: Record<WorkshopFeature["icon"], typeof Users> = {
  "hands-on": Cpu,
  projects: Trophy,
  mentors: Users,
  certificate: GraduationCap,
  team: Briefcase,
  practical: Wrench,
  support: LifeBuoy,
  career: Compass,
};

// Stagger helpers
const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] as const },
  },
};

const WORKSHOP_ILLUSTRATIONS = [
  "/images/workshops/online-test.png",
  "/images/workshops/sharing-knowledge.png",
  "/images/workshops/teaching.png",
];

export default function WorkshopsPage() {
  return (
    <main className="relative flex-1 flex flex-col mesh-bg">
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />

        {/* ===== HERO ===== */}
<section className="relative container-premium pt-12 pb-8 lg:pt-16 lg:pb-10">          

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="type-display text-[40px] sm:text-[54px] lg:text-[66px] xl:text-[72px] text-[#0A2E57] text-balance max-w-4xl"
          >
            Empowering the Next Generation Through Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl text-base md:text-lg text-[#5F5E5A] leading-7 text-pretty"
          >
            Industry-focused workshops for schools, colleges and institutions.
            Six tracks — from Class 1 to engineering — built and delivered by
            engineers who ship real software for a living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#categories"
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium"
            >
              Explore Programs
              <ArrowDown
                size={16}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="btn-outline inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium"
                >
                  Enquiry
                  <ArrowDown size={14} strokeWidth={2.2} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <a
                    href="https://wa.me/919035196480?text=Hello%20MontrixTech%2C%20I%20would%20like%20to%20enquire%20about%20a%20workshop."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <MessageCircle size={15} className="text-[#12B8B0]" />
                    Enquire on WhatsApp
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="mailto:workshop@montrixtech.in?subject=Workshop%20Enquiry"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Mail size={15} className="text-[#12B8B0]" />
                    Enquire by email
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
          <div className="hidden lg:block absolute right-6 top-12 pointer-events-none z-20 ">
  <Image
    src={WORKSHOP_ILLUSTRATIONS[1]}
    alt=""
    width={300}
    height={300}
className="object-contain"  />
</div>
        </section>

        {/* ===== WHY CHOOSE MONTRIXTECH ===== */}
        <section className="container-premium py-10 lg:py-14">
          <SectionHeading
            eyebrow="Why MontrixTech"
            title="Built by engineers. Delivered for classrooms."
            description="We bring the same engineering rigour we use for client products into every workshop — so participants don't just learn, they ship."
            align="center"
            className="mb-10"
          />
          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {WHY_CARDS.map((w) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  variants={gridItem}
                  className="group rounded-2xl border border-cream-400 bg-cream-50 p-6 lift"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#12B8B0]/12 text-[#0F6E56] mb-5 transition-colors duration-300 group-hover:bg-[#12B8B0] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-lg font-medium text-[#0A2E57] mb-2">
                    {w.title}
                  </h3>
                  <p className="text-sm text-[#5F5E5A] leading-6">{w.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ===== WORKSHOP CATEGORIES ===== */}
        <section
  id="categories"
  className="relative container-premium py-10 lg:py-14 scroll-mt-16"
>

  <div className="hidden lg:block absolute right-0 top-8 pointer-events-none z-20">
  <Image
    src={WORKSHOP_ILLUSTRATIONS[2]}
    alt=""
    width={280}
    height={280}
    className="object-contain opacity-100"
  />
</div>
          <SectionHeading
            eyebrow="Workshop Categories"
            title="Six tracks, calibrated to every age group."
            description="From unplugged coding for Class 1 to full stack and cloud for engineering — each track is built around what the audience can actually absorb and apply."
            align="center"
            className="mb-10"
          />

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {WORKSHOP_CATEGORIES.map((cat) => {
              const accent = ACCENT_MAP[cat.accent];
              return (
                <motion.div
                  key={cat.slug}
                  variants={gridItem}
                  className={`group relative overflow-hidden rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:p-7 transition-all duration-300 hover:shadow-[0_18px_40px_-20px_rgba(10,46,87,0.18)] ${accent.ring}`}
                >
                  {/* accent glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent.glow} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative flex items-start justify-between mb-4">
                    <span className={`pill border ${accent.chip} text-xs`}>
                      {cat.audience}
                    </span>
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${accent.dot}`}
                    />
                  </div>

                  <h3 className="relative type-h2 text-2xl text-[#0A2E57]">
                    {cat.title}
                  </h3>
                  <p className="relative mt-2 text-sm text-[#5F5E5A] leading-6 text-pretty">
                    {cat.tagline}
                  </p>

                  <div className="relative mt-5 pt-5 border-t border-cream-400">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-[#888780] mb-3">
                      Topics covered
                    </div>
                    <ul className="space-y-1.5">
                      {cat.topics.map((t) => (
                        <li
                          key={t}
                          className="flex items-center gap-2 text-sm text-[#0A2E57]"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-[#12B8B0] shrink-0"
                          />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ===== TECHNOLOGIES WE TEACH ===== */}
        <section className="py-10 lg:py-14 bg-cream-200/60 border-y border-cream-400">
          <div className="container-premium">
            <SectionHeading
              eyebrow="Stack"
              title="Technologies we teach."
              description="A modern, industry-aligned stack — the same tools we use to ship client products every day."
              align="center"
              className="mb-10"
            />

            <motion.div
              variants={gridContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            >
              {WORKSHOP_TECHS.map((technology) => (
                <motion.div
                  key={technology.name}
                  variants={gridItem}
                  whileHover={{ y: -4 }}
                  className="flex min-h-[132px] flex-col items-center justify-center rounded-2xl border border-[#d9e5ef] bg-white p-5 text-center shadow-[0_8px_24px_rgba(10,46,87,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#12B8B0]/50 hover:shadow-[0_14px_30px_rgba(10,46,87,0.08)]"
                >
                  <TechIcon
                    icon={technology.icon}
                    size={28}
                    className="text-[#666762] transition-colors duration-300"
                  />

                  <p className="mt-4 text-[15px] font-semibold text-[#082E5B]">
                    {technology.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== WORKSHOP FEATURES ===== */}
<section className="relative container-premium py-10 lg:py-14">
  
  <div className="hidden lg:block absolute left-0 top-8 pointer-events-none z-20">
  <Image
    src={WORKSHOP_ILLUSTRATIONS[0]}
    alt=""
    width={280}
    height={280}
    className="object-contain opacity-100"
  />
</div>
         <SectionHeading
            eyebrow="What's included"
            title="Eight things every MontrixTech workshop delivers."
            description="Not slideshows. Real lab time, real mentors, and a project participants can call their own."
            align="center"
            className="mb-10"
          />

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {WORKSHOP_FEATURES.map((f) => {
              const Icon = FEATURE_ICONS[f.icon];
              return (
                <motion.div
                  key={f.title}
                  variants={gridItem}
                  className="group rounded-2xl border border-cream-400 bg-cream-50 p-6 lift"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#12B8B0]/12 text-[#0F6E56] mb-4 transition-colors duration-300 group-hover:bg-[#12B8B0] group-hover:text-white">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-base font-medium text-[#0A2E57] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#5F5E5A] leading-6">{f.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ===== WORKSHOP PROCESS ===== */}
        <section className="container-premium py-10 lg:py-14">
          <SectionHeading
            eyebrow="How it works"
            title="From first call to certified — a transparent process."
            align="center"
            className="mb-10"
          />

          <div className="relative">
            {/* horizontal connector (desktop) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-px bg-gradient-to-r from-cream-400 via-[#12B8B0]/40 to-cream-400"
            />

            <motion.ol
              variants={gridContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
            >
              {WORKSHOP_PROCESS.map((step, i) => (
                <motion.li
                  key={step.n}
                  variants={gridItem}
                  className="relative rounded-2xl border border-cream-400 bg-cream-50 p-5 lift"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2E57] text-white text-xs font-semibold tabular-nums">
                      {step.n}
                    </span>
                    <span className="text-xs text-[#888780] uppercase tracking-wide">
                      Step {i + 1} of {WORKSHOP_PROCESS.length}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-[#0A2E57] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5F5E5A] leading-6">{step.body}</p>
                </motion.li>
              ))}

              {/* show last 3 on a second row of 4 with offset; if 7 items → row 2 = 3 items */}
              {/* 7 items: first row 4, second row 3 — grid auto-flows so just render in order */}
            </motion.ol>
          </div>
        </section>

       {/* ===== GALLERY ===== */}
<section className="relative py-10 lg:py-14 bg-cream-200/60 border-y border-cream-400">
{/* Gallery illustration */}
<div className="hidden lg:block absolute right-12 top-8 z-10 pointer-events-none">
  <Image
    src="/images/workshops/Presentation.png"
    alt="Workshop presentation"
   width={340}
height={340}
    className="object-contain"
  />
</div>

  <div className="container-premium">
    <SectionHeading
      eyebrow="Gallery"
      title="Workshops in action."
      description="Photos and videos from our workshops will appear here soon."
      align="center"
      className="mb-10"
    />

    <motion.div
      variants={gridContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-3"
    >
      {[
        "Photos coming soon",
        "Sessions coming soon",
        "Highlights coming soon",
      ].map((label) => (
        <motion.div
          key={label}
          variants={gridItem}
          className="group relative flex min-h-[260px] items-center justify-center rounded-2xl border border-cream-400 bg-white"
        >
          <span className="pill pill-teal">
            Coming soon
          </span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
        {/* ===== FAQ ===== */}
        <section className="container-premium py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions."
                description="Don't see your question here? Reach out at contact@montrixtech.in — we reply within a working day."
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="space-y-3">
                {WORKSHOP_FAQS.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-xl border border-cream-400 bg-cream-50 px-5 data-[state=open]:bg-cream-100 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-[#0A2E57] hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[#5F5E5A] leading-7 pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="container-premium py-10 lg:py-14">
          <div className="relative overflow-hidden rounded-3xl bg-[#0A2E57] text-white p-6 lg:p-14">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#12B8B0]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-[#12B8B0]/10 blur-3xl"
            />
            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                
                <h2 className="type-h2 text-3xl lg:text-4xl text-white text-balance">
                  Ready to empower your students?
                </h2>
                <p className="mt-4 text-[#B5D4F4] text-base leading-7">
                  Book a free demo session. We'll walk your institution through
                  the syllabus, run a sample module, and align on dates — no
                  commitment required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 self-start lg:self-end">
                <Link
                  href="/contact"
                  className="btn-primary group inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium whitespace-nowrap"
                >
                  Contact Us
                  <ArrowRight
                    size={16}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                {/* <Link
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium border border-white/25 text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  Contact Us
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
