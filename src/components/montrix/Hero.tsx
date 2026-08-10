"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroIllustration from "./illustrations/HeroIllustration";

import { services } from "@/data/services";
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
<section className="relative bg-[#FCFBF8] overflow-hidden">      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-36 top-16 h-[430px] w-[430px] rounded-full bg-[#12B8B0]/[0.035] blur-3xl" />
        <div className="absolute right-[17%] top-12 h-52 w-52 rounded-full bg-[#dceeff]/45 blur-3xl" />
        <div className="absolute right-20 top-12 hidden h-28 w-28 grid-cols-6 gap-2 opacity-40 lg:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#b8d8ec]"
            />
          ))}
        </div>
      </div>

<div className="container-premium relative pt-2 lg:pt-0">
  <div className="grid grid-cols-1 items-center gap-2 py-2 lg:grid-cols-[48%_52%]">
           <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-20 pb-1 lg:pr-4"
          >
            <motion.h1
  variants={itemVariants}
  className="
    type-display
    mt-0
    max-w-4xl
    text-balance
    text-[#0A2E57]
    text-[40px]
    sm:text-[52px]
    lg:text-[64px]
  "
>
<span className="block">
                We Build.You Grow.
              </span>

<span className="mt-2 block text-[#12B8B0]">
                Together.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
className="
mt-6
max-w-2xl
text-pretty
text-base
leading-7
text-[#5F5E5A]
md:text-lg
"         >
              We design and develop websites, mobile apps, cloud solutions,
              and custom software that help businesses grow through
              innovative digital solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-5 flex items-center">
              <Link
                href="/services"
                className="btn-primary group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl px-8 text-[15px] font-medium"
              >
                Our Services
                <ArrowRight
                  size={18}
                  strokeWidth={1.9}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 flex min-w-0 items-center justify-center overflow-visible lg:justify-end"
          >
<div className="w-[95%] xl:w-full">
<div className="-ml-10 xl:-ml-16">    <HeroIllustration />
</div>
</div>         
 </motion.div>
        </div>
      </div>
    </section>
  );
}