// ...existing code...
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { NAV_LINKS } from "@/lib/montrix-data";

const Navbar = memo(function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const headerClassName = useMemo(
    () =>
      scrolled
        ? "bg-[#FBFAF7]/85 backdrop-blur-xl border-b border-cream-400 shadow-[0_4px_24px_-12px_rgba(10,46,87,0.18)]"
        : "bg-[#FBFAF7]/40 backdrop-blur-sm border-b border-transparent",
    [scrolled],
  );

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClassName}`}>
        <nav className="container-premium flex h-[74px] items-center justify-between lg:h-[78px]">
          <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="MontrixTech home"
        >
          <BrandLogo priority />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
className={`group relative px-5 py-2 text-[15px] font-semibold tracking-[0.01em] transition-all duration-300 ${                  active ? "text-[#0A2E57]" : "text-[#5F5E5A] hover:text-[#0A2E57]"
                }`}
              >
                {link.label}

                <span
                  className={`pointer-events-none absolute -bottom-0.5 left-4 right-4 h-[3px] rounded-full bg-[#12B8B0] origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />

                {active && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -top-0.5 left-1/2 h-1.5 w-1.5-translate-x-1/2 rounded-full bg-[#12B8B0]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="btn-primary group inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium"
          >
            Start a project
            <ArrowRight
              size={15}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#0A2E57] transition-colors hover:bg-cream-200 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key={pathname + "-sheet"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden border-t border-cream-400 bg-[#FBFAF7] md:hidden"
          >
            <div className="container-premium flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link, index) => {
                const active = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                        active
? "text-[#082E5B]"
: "text-[#64748B] hover:text-[#082E5B]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn-primary mt-3 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium"
              >
                Start a project
                <ArrowRight size={15} strokeWidth={2.2} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>

      {/* Spacer — keeps page content from sitting under the fixed header. */}
      <div className="h-[74px] lg:h-[78px]" aria-hidden="true" />
    </>
  );
});

export default Navbar;