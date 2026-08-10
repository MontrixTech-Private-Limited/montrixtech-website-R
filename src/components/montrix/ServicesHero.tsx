"use client";

import { motion } from "framer-motion";
import CornerIllustration from "./CornerIllustration";

export default function ServicesHero() {
  return (
    <section className="relative container-premium pt-12 pb-8 lg:pt-16 lg:pb-10">
      <CornerIllustration
  src="/images/illustrations/code-snippets.png"
  alt=""
  position="top-right"
  size={260}
  className="right-6 top-6 lg:right-10 lg:top-8"
/>

      {/* <motion.span
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="inline-flex rounded-full bg-[#12B8B0]/10 px-4 py-2 text-sm font-medium text-[#12B8B0]"
      >
        Our Services
      </motion.span> */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, delay: .1 }}
        className="mt-6 max-w-4xl type-display
max-w-3xl
text-[40px]
sm:text-[52px]
lg:text-[64px]
leading-[1.05] font-bold leading-tight text-[#0A2E57]"
      >
        Digital solutions
      
        built for modern businesses.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, delay: .2 }}
        className="mt-6 max-w-2xl text-lg leading-8 text-[#5F5E5A]"
      >
        From websites and mobile applications to cloud infrastructure,
        AI-powered automation, and custom enterprise software,
        MontrixTech helps businesses transform ideas into scalable digital products.
      </motion.p>

    </section>
  );
}