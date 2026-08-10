"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Simple per-route fade-in.
 *
 * Deliberately does NOT use AnimatePresence with mode="wait". That pattern
 * holds the outgoing page on screen until its exit animation resolves, and
 * when the outgoing/incoming route uses a Suspense boundary (contact,
 * careers/apply — both read useSearchParams) the exit can fail to resolve,
 * leaving the user on a blank page after navigating. A plain keyed fade-in
 * gives the same polished feel without ever blocking the next route from
 * mounting.
 *
 * Also intentionally animates `opacity` only (no `x`/`y`). Animating
 * position leaves a lingering inline `transform` on this wrapper, and a
 * transformed ancestor breaks `position: sticky`/`fixed` for any element
 * inside it (like the site navbar) — even after the animation finishes.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
