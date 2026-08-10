"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Zap,
  Users,
  GraduationCap,
  Layers,
  MapPin,
  Clock,
  Briefcase,
} from "lucide-react";

import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";
import SectionHeading from "@/components/montrix/SectionHeading";
import CornerIllustration from "@/components/montrix/CornerIllustration";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JOB_OPENINGS, WorkMode } from "@/lib/montrix-data";

const WHY_JOIN = [
  {
    icon: Zap,
    title: "Move fast, build real things",
    body: "You'll ship real features for real clients from day one, not just shadow someone.",
  },
  {
    icon: Users,
    title: "Small teams, big ownership",
    body: "Flat structure. Your ideas reach decision-makers directly, no layers in between.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship that matters",
    body: "Every intern is paired with an experienced engineer or lead for real feedback.",
  },
  {
    icon: Layers,
    title: "Learn across domains",
    body: "Web, mobile, cloud, and AI — work across stacks, not just one narrow track.",
  },
];

const HIRING_STEPS = [
  {
    n: "01",
    title: "Apply online",
    body: "Submit your application with resume and details for the role.",
  },
  {
    n: "02",
    title: "Resume screening",
    body: "Our team reviews your profile against the role requirements.",
  },
  {
    n: "03",
    title: "Screening call",
    body: "A short call to understand your interests and background.",
  },
  {
    n: "04",
    title: "Technical round",
    body: "Role-specific assessment or task relevant to the position.",
  },
  {
    n: "05",
    title: "Offer & onboarding",
    body: "Selected candidates receive an offer and onboarding details.",
  },
];

const FAQS = [
  {
    q: "Who can apply for internships at MontrixTech?",
    a: "MontrixTech internships are open to anyone — students, recent graduates, or career-switchers. We care more about drive and skill than which year of college you're in or your current study status.",
  },
  {
    q: "Is the internship paid?",
    a: "Yes. Stipends vary by role and are discussed at the offer stage, with performance-based increments possible for interns who take on more ownership.",
  },
  {
    q: "Can I apply for more than one position?",
    a: "You're welcome to apply to more than one role, though we'd recommend focusing on the one or two positions that best match your skills — it helps us find the right fit for you faster.",
  },
  {
    q: "What is the mode of work?",
    a: "It depends on the role — most positions are Hybrid, with a few fully On-site or Remote. Check the mode listed on each open position for specifics.",
  },
  {
    q: "How long does the hiring process take?",
    a: "There's no fixed timeline — it depends on the role and number of applicants — but we move quickly and try to keep you updated at every stage.",
  },
];

const MODE_STYLE: Record<WorkMode, string> = {
  Hybrid: "bg-[#E1F5EE] text-[#085041] border-[#12B8B0]/30",
  "On-site": "bg-[#FFF3E6] text-[#7A4A0E] border-[#E07A5F]/30",
  Remote: "bg-[#EAF1FA] text-[#0A2E57] border-[#0A2E57]/20",
};

const HERO_STATS = [
  { k: "3–6", v: "Months duration" },
  { k: "1:1", v: "Mentor pairing" },
  { k: "100%", v: "Real project work" },
  { k: "PPO", v: "Possible for top performers" },
];

const revealUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const heroMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function CareersPage() {
  return (
    <main className="relative flex flex-1 flex-col mesh-bg">
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />

        <section className="relative container-premium pb-10 pt-12 lg:pb-12 lg:pt-16">
          <div className="pointer-events-none absolute right-8 top-8 z-10 hidden size={120}opacity-100 lg:block">
  <Image
    src="/images/illustrations/bug.png"
    alt=""
    width={300}
    height={300}
    className="h-auto w-full object-contain opacity-100"
    priority
  />
</div>

          <motion.h1
            {...heroMotion}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="type-display max-w-4xl text-balance text-[40px] text-[#0A2E57] sm:text-[54px] lg:text-[68px]"
          >
            Build your career with MontrixTech.
          </motion.h1>

          <motion.p
            {...heroMotion}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-7 text-[#5F5E5A] md:text-lg"
          >
            We're a fast-moving tech company solving real problems for real
            businesses. Join us as an intern and work on projects that actually
            ship.
          </motion.p>

          <motion.div
            {...heroMotion}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#open-positions"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium"
            >
              View open positions
              <ArrowDown size={16} strokeWidth={2.2} />
            </a>

            <Link
              href="/about"
              className="btn-outline inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium"
            >
              Learn about us
            </Link>
          </motion.div>
        </section>

        <section className="relative container-premium py-10 lg:py-14">
          <div className="pointer-events-none absolute left-10 top-4 z-10 hidden w-[260px] lg:block">
  <Image
    src="/images/illustrations/my-app.png"
    alt=""
    width={260}
    height={260}
    className="h-auto w-full object-contain opacity-100"
  />
</div>

          <SectionHeading
            eyebrow="Why join MontrixTech"
            title="A culture built around ownership, learning, and real-world impact."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {WHY_JOIN.map((w, i) => {
              const Icon = w.icon;

              return (
                <motion.div
                  key={w.title}
                  {...revealUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-cream-400 bg-cream-50 p-6 lift"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#12B8B0]/12 text-[#0F6E56]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mb-2 text-base font-medium text-[#0A2E57]">
                    {w.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#5F5E5A]">{w.body}</p>
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

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="type-h2 mb-5 text-balance text-3xl text-white lg:text-4xl">
                  Real work. Real mentorship. A real path forward.
                </h2>

                <p className="max-w-2xl text-[#B5D4F4] leading-7">
                  MontrixTech's internship program pairs you with a mentor,
                  places you on live client or product work, and gives you a
                  certificate and letter of recommendation on successful
                  completion. Most internships run 3–6 months with the
                  possibility of a full-time offer for strong performers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:col-span-5">
                {HERO_STATS.map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="type-display text-2xl text-white">{s.k}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-[#9FE1CB]">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="open-positions"
          className="relative container-premium scroll-mt-16 py-10 lg:py-14"
        >
          <div className="pointer-events-none absolute right-8 top-6 z-10 hidden w-[240px] lg:block">
  <Image
    src="/images/illustrations/mobile-app.png"
    alt=""
    width={240}
    height={240}
    className="h-auto w-full object-contain opacity-100"
  />
</div>

          <SectionHeading
            eyebrow="Open positions"
            title={
              <>
                Internship roles open across Engineering, Design, Marketing,
                and Business.
              </>
            }
            description="Click any role to apply. Reference codes pre-fill the application form."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {JOB_OPENINGS.map((job, i) => (
              <motion.div
                key={job.ref}
                {...revealUp}
                transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
                className="group flex min-h-[250px] flex-col rounded-2xl border border-cream-400 bg-cream-50 p-6 lift"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[11px] font-mono tracking-wider text-[#12B8B0]">
                        {job.ref}
                      </span>

                      <span
                        className={`pill border text-[10px] !px-2 !py-0.5 ${MODE_STYLE[job.mode]}`}
                      >
                        {job.mode}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium text-[#0A2E57]">
                      {job.title}
                    </h3>
                  </div>

                  <Briefcase className="mt-1 h-5 w-5 shrink-0 text-[#888780]" />
                </div>

                <p className="mb-5 text-sm leading-6 text-[#5F5E5A]">
                  {job.description}
                </p>

                <div className="mb-5 flex items-center gap-4 text-xs text-[#888780]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {job.location}
                  </span>

                  <span className="h-3 w-px bg-cream-400" />

                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {job.duration}
                  </span>
                </div>

                <Link
                  href={`/careers/apply?ref=${job.ref}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-[#0A2E57] transition-colors group-hover:text-[#12B8B0]"
                >
                  Apply now
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container-premium py-10 lg:py-14">
          <SectionHeading
            eyebrow="Hiring process"
            title="A simple, transparent path from application to offer."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {HIRING_STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                {...revealUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-cream-400 bg-cream-50 p-5 lift"
              >
                <div className="type-display mb-3 text-2xl text-[#12B8B0]">
                  {s.n}
                </div>

                <h3 className="mb-1.5 text-sm font-medium text-[#0A2E57]">
                  {s.title}
                </h3>

                <p className="text-[12px] leading-5 text-[#5F5E5A]">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container-premium py-10 lg:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions."
                description="Don't see your question here? Reach out at contact@montrixtech.in — we reply within a working day."
              />
            </div>

            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="space-y-3">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className="rounded-xl border border-cream-400 bg-cream-50 px-5 transition-colors data-[state=open]:bg-cream-100"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-medium text-[#0A2E57] hover:no-underline">
                      {f.q}
                    </AccordionTrigger>

                    <AccordionContent className="pb-5 text-sm leading-7 text-[#5F5E5A]">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="container-premium py-10 lg:py-14">
          <div className="relative overflow-hidden rounded-3xl bg-[#0A2E57] p-6 text-center text-white lg:p-14">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#12B8B0]/20 blur-3xl"
            />

            <div className="relative">
              <h2 className="type-h2 text-balance text-3xl text-white lg:text-4xl">
                Ready to get started?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-[#B5D4F4]">
                Explore open roles and submit your application today.
              </p>

              <a
                href="#open-positions"
                className="btn-primary mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium"
              >
                View open positions
                <ArrowRight size={16} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}