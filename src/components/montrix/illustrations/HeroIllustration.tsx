"use client";

import { motion } from "framer-motion";

import LaptopIllustration from "./LaptopIllustration";
import PhoneIllustration from "./PhoneIllustration";
import CloudIllustration from "./CloudIllustration";
import DashboardIllustration from "./DashboardIllustration";

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[760px] overflow-visible sm:h-[360px] lg:h-[400px] lg:max-w-none">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="absolute left-[2%] top-[8%] h-[80%] w-[96%] rounded-[45%] bg-gradient-to-br from-[#f1f9fd] via-white to-[#eaf5fb] opacity-90 blur-2xl"
      />

      {/* Background decorative circle */}
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-[6%] h-[146px] w-[146px] rounded-full bg-[#eaf3f8]/70 blur-xl"
      />

      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="absolute right-[4%] top-[4%] hidden grid-cols-6 gap-2 opacity-45 sm:grid"
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#b8d8ec]"
          />
        ))}
      </div>

      {/* Complete illustration composition */}
<div className="absolute left-1/2 top-1/2 h-[540px] w-[920px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.42] sm:scale-[0.54] lg:scale-[0.64] xl:scale-[0.69]">        <div className="relative h-full w-full">
          {/* Laptop — left */}
          <motion.div
className="absolute bottom-[48px] left-[40px] z-10"            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <LaptopIllustration />
          </motion.div>

          {/* Phone — in front of laptop, between laptop and dashboard */}
          <motion.div
className="absolute bottom-[12px] left-[370px] z-40"            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <PhoneIllustration className="h-[400px] w-[195px]" />
          </motion.div>

          {/* Cloud and servers — upper right */}
          <motion.div
className="absolute right-[118px] top-[56px] z-20"            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <CloudIllustration />
          </motion.div>

          {/* Dashboard — lower right */}
          <motion.div
className="absolute bottom-[18px] right-[32px] z-30 h-[235px] w-[325px]"            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <DashboardIllustration className="h-full w-full drop-shadow-[0_18px_24px_rgba(10,46,87,0.18)]" />
          </motion.div>

          {/* Ground shadow */}
          <div
            aria-hidden="true"
className="absolute bottom-[8px] left-[55px] h-[24px] w-[760px] rounded-full bg-[#668da8]/15 blur-xl"          />
        </div>
      </div>
    </div>
  );
}