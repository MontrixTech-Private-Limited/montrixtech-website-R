"use client";

import {
  FaGlobe,
  FaMobileAlt,
  FaLaptopCode,
  FaCloud,
  FaChartLine,
  FaPalette,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Service } from "@/lib/montrix-data";

type Props = {
  icon: Service["icon"];
  className?: string;
  size?: number;
  animate?: boolean;
};

/**
 * ServiceIcon — lucide-react based, no AI-looking "sparkles".
 * The AI service uses BrainCircuit (a professional neural-network icon).
 */
export default function ServiceIcon({
  icon,
  className = "",
  size = 22,
  animate = false,
}: Props) {
  const common = {
    size,
    strokeWidth: 1.6,
    className: `text-[#0F6E56] ${className}`,
  };

  const node = (() => {
  switch (icon) {
  case "code":
    return <FaGlobe size={size} className={`text-[#0F6E56] ${className}`} />;

  case "mobile":
    return <FaMobileAlt size={size} className={`text-[#0F6E56] ${className}`} />;

  case "software":
    return <FaLaptopCode size={size} className={`text-[#0F6E56] ${className}`} />;

  case "cloud":
    return <FaCloud size={size} className={`text-[#0F6E56] ${className}`} />;

  case "ai":
    return <FaChartLine size={size} className={`text-[#0F6E56] ${className}`} />;

  case "design":
    return <FaPalette size={size} className={`text-[#0F6E56] ${className}`} />;

  default:
    return null;
}
  })();

  if (!animate) return node;

  return (
    <motion.span
      whileHover={{ rotate: -6, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="inline-flex"
    >
      {node}
    </motion.span>
  );
}
