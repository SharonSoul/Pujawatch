"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 h-16 transition-colors duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-sm" : "bg-transparent"
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
          className="flex h-9 w-9 items-center justify-center rounded-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="relative h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-espresso transition-all duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-5 bg-espresso transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-5 bg-espresso transition-all duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-rule bg-cream md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="py-3 font-label text-[13px] uppercase tracking-[0.16em] text-warm-gray transition-colors hover:text-espresso"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#book"
              onClick={close}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-sm bg-espresso px-6 font-label text-[12px] uppercase tracking-[0.14em] text-cream transition-all duration-300 active:translate-y-px active:scale-[0.98]"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
