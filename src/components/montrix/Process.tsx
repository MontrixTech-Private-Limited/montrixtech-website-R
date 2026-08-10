"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import CornerIllustration from "./CornerIllustration";

const STEPS = [
  {
    n: "01",
    title: "Discuss",
    body: "We dig into your goals, users, and constraints. No assumptions, no fluff — just a clear shared understanding of the problem.",
  },
  {
    n: "02",
    title: "Design",
    body: "Wireframes, flows, and visual direction. You see the shape of the product before a single line of production code is written.",
  },
  {
    n: "03",
    title: "Develop",
    body: "Engineering against a tight feedback loop. Weekly demos, branches you can click, and decisions made in the open.",
  },
  {
    n: "04",
    title: "Deploy",
    body: "We ship to production with CI/CD, monitoring, and a handover that doesn't require us to stay forever to keep it alive.",
  },
];

export default function Process() {
  return (
    <section className="relative py-10 lg:py-14">
      <div className="container-premium relative">
        <CornerIllustration
          src="/images/illustrations/designing-components.png"
          alt=""
          position="top-right"
          size={260}
        />
        <SectionHeading
          eyebrow="How we work"
          title={<>A simple, transparent path from idea to shipped.</>}
          description="Four stages. No black boxes. You always know what's happening and why."
          align="center"
          className="mb-9"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-cream-400 bg-cream-50 p-6 lift"
            >
              <div className="type-display text-3xl text-[#12B8B0] mb-4">{s.n}</div>
              <h3 className="text-lg font-medium text-[#0A2E57] mb-2">{s.title}</h3>
              <p className="text-sm text-[#5F5E5A] leading-6">{s.body}</p>

              {/* connector */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-cream-400" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
