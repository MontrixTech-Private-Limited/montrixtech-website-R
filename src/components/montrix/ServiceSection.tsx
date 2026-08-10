"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceSectionProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  reverse?: boolean;
}

export default function ServiceSection({
  title,
  description,
  image,
  features,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section
      className={`py-10 lg:py-14 ${
        reverse ? "bg-[#FCFBF8]" : "bg-white"
      }`}
    >
<div className="container-premium">  <div
    className={`
      grid
      grid-cols-1
      lg:grid-cols-[45%_55%]
      items-center
      gap-8
      lg:min-h-[420px]
    `}
  >
        {/* IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? 40 : -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`
            w-full
            flex
            items-center
            ${reverse
              ? "lg:order-2 lg:justify-start"
              : "lg:order-1 lg:justify-end"
            }
          `}
        >
          <div className="relative h-[300px] w-full max-w-[560px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? -40 : 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className={`
            w-full
            ${reverse
              ? "lg:order-1 lg:pr-8"
              : "lg:order-2 lg:pl-8"
            }
          `}
        >
          <h2 className="text-4xl font-bold text-[#0A2E57]">
            {title}
          </h2>

          <p className="mt-3 text-lg leading-7 text-[#5F5E5A]">
            {description}
          </p>

          <div className="mt-5 space-y-1">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 py-1"
              >
                <CheckCircle2
                  size={22}
                  className="flex-shrink-0 text-[#12B8B0]"
                />

                <span className="text-base text-[#5F5E5A]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

  </div>
</section>
  );
}