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
      // Blur-in reveal
      gsap.fromTo(
        revealRef.current,
        { filter: "blur(16px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, duration: 2, ease: "expo.out" }
      );

      // Magnetic mouse-follow on CTA
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
      className="relative flex min-h-dvh w-full overflow-hidden bg-espresso"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-espresso/45" />

      {/* Content */}
      <div
        ref={revealRef}
        className="relative z-10 flex w-full flex-col justify-center px-6 md:px-14 lg:px-20"
      >
        <div className="max-w-xl lg:max-w-2xl">
          {/* Pulsing dot */}
          <div className="mb-6 flex items-center gap-3">
            <div className="relative h-2.5 w-2.5 rounded-full bg-gold">
              <div className="absolute inset-0 animate-ping rounded-full bg-gold opacity-30" />
            </div>
          </div>

          {/* Big Logo replacing PujaWatch text */}
          <div className="mb-6">
            <img
              src="/wings_logo.png"
              alt="PujaWatch"
              className="h-28 w-auto md:h-36 lg:h-44 object-contain drop-shadow-md"
            />
          </div>

          <p className="mt-6 max-w-lg font-body text-sm uppercase leading-relaxed tracking-[0.28em] text-cream/75 md:text-[14px]">
            GAIN CLARITY.<br />
            OVERCOME YOURSELF.<br />
            CREATE THE LIFE YOU&rsquo;RE CAPABLE OF.
          </p>

          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/60">
            Puja offers personalized one-on-one strategy sessions for
            individuals who are ready to think bigger, make stronger decisions,
            and move forward with confidence.
          </p>

          {/* Magnetic CTA */}
          <Link
            href="/book"
            ref={ctaRef}
            className="group mt-10 inline-flex w-fit items-center gap-6"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/20 transition-all duration-500 group-hover:bg-cream">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-cream transition-colors duration-500 group-hover:stroke-espresso"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-label text-[11px] font-medium uppercase tracking-[0.2em] text-cream">
              Book a Session
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
