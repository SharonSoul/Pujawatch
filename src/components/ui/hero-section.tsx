"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealRef.current,
        { filter: "blur(24px)", opacity: 0, scale: 1.02 },
        {
          filter: "blur(0px)",
          opacity: 1,
          scale: 1,
          duration: 2.2,
          ease: "expo.out",
        }
      );

      const handleMouseMove = (e: MouseEvent) => {
        if (!ctaRef.current) return;
        const rect = ctaRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        if (dist < 150) {
          gsap.to(ctaRef.current, {
            x: (e.clientX - centerX) * 0.4,
            y: (e.clientY - centerY) * 0.4,
            duration: 0.6,
          });
        } else {
          gsap.to(ctaRef.current, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
          });
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex w-full flex-col overflow-hidden bg-cream selection:bg-espresso selection:text-espresso"
    >
      <div
        ref={revealRef}
        className="relative z-10 flex w-full flex-col px-5 pt-14 pb-16 md:min-h-dvh md:flex-row md:items-center md:px-14 md:pt-24 md:pb-12 lg:px-20"
      >
        <div className="flex min-w-0 flex-1 flex-col justify-center md:justify-between md:pb-8">
          <div className="flex items-center gap-3">
            <div className="relative h-2.5 w-2.5 rounded-full bg-gold">
              <div className="absolute inset-0 animate-ping rounded-full bg-gold opacity-30" />
            </div>
          </div>

          <div className="mt-14 md:mt-0 md:flex-1 md:flex md:flex-col md:justify-center lg:-translate-y-8">
            <h1 className="font-display text-[clamp(4rem,18vw,7.5rem)] font-bold uppercase leading-[0.82] tracking-[0.02em] text-espresso md:text-[clamp(1.75rem,6.5vw,8.5rem)] md:leading-[0.84]">
              PUJA
              <br />
              <span>WATCH</span>
            </h1>
            <p className="mt-2 font-accent text-[13px] font-light uppercase tracking-[0.24em] text-warm-gray/70 md:mt-3 md:text-sm md:tracking-[0.28em]">
              Business &amp; Life Strategy Consultant
            </p>
            <p className="mt-5 max-w-xs font-body text-[12px] uppercase leading-relaxed tracking-[0.28em] text-espresso md:mt-8 md:max-w-xl md:text-[13px] md:leading-relaxed md:tracking-[0.3em]">
              Gain clarity.<br className="hidden md:inline" /> Make stronger decisions.<br className="hidden md:inline" /> Create a life and business
              that reflect what you are truly capable of.
            </p>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-espresso md:mt-5 md:max-w-lg">
              Puja offers personalized one-on-one strategy sessions for
              individuals who are ready to move forward with greater
              confidence, direction, and intention.
            </p>
          </div>

          <Link
            href="/book"
            ref={ctaRef}
            className="group mt-10 flex w-fit items-center gap-6 md:mt-0 lg:-translate-y-20"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-rule transition-all duration-500 group-hover:bg-espresso">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-espresso transition-colors duration-500 group-hover:stroke-cream"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-label text-[11px] font-medium uppercase tracking-[0.2em] text-espresso">
              Book a Session
            </span>
          </Link>
        </div>

        {/* Portrait image — desktop only */}
        <div className="hidden md:flex md:w-[45%] lg:w-[50%] shrink-0 items-end justify-end">
          <img
            src="/hero-portrait.jpg"
            alt="Puja Dharod"
            className="h-[calc(100dvh-6rem)] w-full object-cover object-top"
            style={{
              filter: "drop-shadow(12px 12px 24px rgba(59, 38, 35, 0.45))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
