"use client";

import Image from "next/image";

interface CornerIllustrationProps {
  src: string;
  alt?: string;
  /** Which corner of the nearest `relative` ancestor to sit in. */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Rendered width/height in px (square). */
  size?: number;
  /** Extra offset classes if a section needs custom placement. */
  className?: string;
}
const POSITION_CLASSES: Record<string, string> = {
  "top-right": "right-8 top-8 lg:right-10 lg:top-10",

  "top-left": "left-3 top-3 lg:left-5 lg:top-5",

  "bottom-left": "left-3 bottom-3 lg:left-5 lg:bottom-5",
  "bottom-right": "right-3 bottom-3 lg:right-5 lg:bottom-5",
};

/**
 * Small, purely decorative illustration tucked into a corner of a section.
 * Hidden below lg so it never competes with content on mobile/tablet,
 * and never intercepts clicks.
 */
export default function CornerIllustration({
  src,
  alt = "",
  position = "top-right",
  size = 260,
  className = "",
}: CornerIllustrationProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-[1] hidden select-none opacity-100 drop-shadow-[0_6px_16px_rgba(10,46,87,0.10)] lg:block ${POSITION_CLASSES[position]} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </div>
  );
}
