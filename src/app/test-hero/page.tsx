"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Navbar } from "@/components/Navbar";

export default function TestHeroPage() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealRef.current,
        { filter: "blur(16px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, duration: 2, ease: "expo.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-dvh bg-cream">
      <section className="relative flex min-h-dvh w-full overflow-hidden bg-espresso">
        {/* Background image — Puja is on the right, space on the left */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-bg.png)" }}
        />
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-espresso/40" />

        {/* Content on the left */}
        <div
          ref={revealRef}
          className="relative z-10 flex w-full flex-col justify-center px-6 md:px-14 lg:px-20"
        >
          <div className="max-w-xl lg:max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="relative h-2.5 w-2.5 rounded-full bg-gold">
                <div className="absolute inset-0 animate-ping rounded-full bg-gold opacity-30" />
              </div>
            </div>

            <h1 className="font-display text-[clamp(3.5rem,14vw,8rem)] font-bold uppercase leading-[0.82] tracking-[0.02em] text-cream">
              PUJA
              <br />
              <span>WATCH</span>
            </h1>

            <p className="mt-3 font-accent text-sm font-light uppercase tracking-[0.24em] text-cream/70">
              Business &amp; Life Strategy Consultant
            </p>

            <p className="mt-6 max-w-md font-body text-sm uppercase leading-relaxed tracking-[0.28em] text-cream/60 md:text-[13px]">
              Gain clarity.<br /> Make stronger decisions.<br /> Create a life and business
              that reflect what you are truly capable of.
            </p>

            <p className="mt-4 max-w-md font-body text-base leading-relaxed text-cream/50">
              Puja offers personalized one-on-one strategy sessions for
              individuals who are ready to move forward with greater
              confidence, direction, and intention.
            </p>

            <Link
              href="/book"
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
    </main>
    </>
  );
}
