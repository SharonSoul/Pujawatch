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
      {/* Background image — adjusted focal point on mobile */}
      <div
        className="absolute inset-0 bg-cover bg-[position:80%_center] md:bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-espresso/50 md:bg-espresso/45" />

      {/* Content */}
      <div
        ref={revealRef}
        className="relative z-10 flex min-h-dvh w-full flex-col justify-between pt-28 pb-10 px-6 sm:justify-center sm:py-0 md:px-14 lg:px-20"
      >
        {/* Top block: Dot & Logo — completely independent, at top on mobile */}
        <div className="max-w-xl lg:max-w-2xl">
          {/* Pulsing dot */}
          <div className="mb-4 sm:mb-6 flex items-center gap-3">
            <div className="relative h-2.5 w-2.5 rounded-full bg-[#cca049]">
              <div className="absolute inset-0 animate-ping rounded-full bg-[#cca049] opacity-30" />
            </div>
          </div>

          {/* Big Logo — nudged downwards more on mobile */}
          <div className="mb-0 sm:mb-6 mt-7 sm:mt-0 "> 
            
            <img
              src="/wings_logo.png"
              alt="PujaWatch"
              className="h-20 w-auto sm:h-28 md:h-36 lg:h-44 object-contain"
            />
          </div>
        </div>

        {/* Bottom block: Text & CTA — completely independent, anchored to bottom on mobile */}
        <div className="max-w-xl lg:max-w-2xl mt-auto sm:mt-0">
          <p className="max-w-lg font-body text-xs sm:text-sm uppercase leading-relaxed tracking-[0.2em] sm:tracking-[0.28em] text-cream/80 md:text-[14px]">
            GAIN CLARITY.<br />
            OVERCOME YOURSELF.<br />
            CREATE THE LIFE YOU&rsquo;RE CAPABLE OF.
          </p>

          <p className="mt-4 sm:mt-5 max-w-md font-body text-sm sm:text-base leading-relaxed text-cream/65">
            Puja offers personalized one-on-one strategy<br className="sm:hidden" />
            {" "}sessions for individuals who are ready to<br className="sm:hidden" />
            {" "}think bigger, make stronger decisions, and<br className="sm:hidden" />
            {" "}move forward with confidence.
          </p>

          {/* Magnetic CTA */}
          <Link
            href="/book"
            ref={ctaRef}
            className="group mt-6 sm:mt-10 inline-flex w-fit items-center gap-5 sm:gap-6"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-cream/20 transition-all duration-500 group-hover:bg-cream">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-cream transition-colors duration-500 group-hover:stroke-espresso sm:w-[18px] sm:h-[18px]"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-label text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-cream">
              Book a Session
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
