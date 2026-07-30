"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#sessions", label: "Sessions" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-16 transition-colors duration-300 ${
          scrolled || open ? "bg-cream/95 backdrop-blur-sm" : "bg-cream/80"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 text-espresso no-underline"
            onClick={close}
          >
            <img src="/logo.png" alt="PujaWatch" className="h-8 w-8 object-contain" />
            <span className="font-display text-xl tracking-[0.12em]">PujaWatch</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-label text-[11px] uppercase tracking-[0.16em] text-warm-gray transition-colors hover:text-espresso"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#book"
              className="inline-flex h-9 items-center rounded-sm bg-espresso px-5 font-label text-[11px] uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:bg-cream hover:text-espresso active:translate-y-px active:scale-[0.98]"
            >
              Book a Session
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            <span className="relative h-3 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-espresso transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-5 bg-espresso transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-espresso transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-y-auto bg-cream md:hidden"
          >
            <div className="flex flex-col items-center gap-3 py-20">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={close}
                    className="block py-2 font-display text-4xl font-light tracking-[0.03em] text-espresso transition-colors hover:text-warm-gray"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <a
                href="#book"
                onClick={close}
                className="inline-flex h-12 items-center rounded-sm bg-espresso px-10 font-label text-[13px] font-medium uppercase tracking-[0.16em] text-cream transition-all duration-300 active:translate-y-px active:scale-[0.98]"
              >
                Book a Session
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute bottom-10 flex items-center gap-3"
            >
              <span className="block h-px w-10 bg-rule" />
              <span className="font-label text-[9px] uppercase tracking-[0.28em] text-rule">
                PW  CONSULT
              </span>
              <span className="block h-px w-10 bg-rule" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
