"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Floating "back to top" button — fades in once the user scrolls past 480px.
 * Uses smooth-scroll and a soft teal pill on a navy circle.
 */
export default function BackToTop() {
  // Initialise from current scroll position so a refresh deep into the page
  // still shows the button without needing a scroll event first.
  const [visible, setVisible] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 480 : false
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-[#0A2E57] text-white shadow-[0_8px_24px_-6px_rgba(10,46,87,0.45)] flex items-center justify-center hover:bg-[#12B8B0] hover:text-[#04342C] transition-colors duration-300"
        >
          <ArrowUp size={18} strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
