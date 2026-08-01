"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

/* ------------------------------------------------------------------ */
/*  Right-deck card                                                    */
/* ------------------------------------------------------------------ */

interface DeckCard {
  id: string;
  title: string;
  val: string;
  type: "progress" | "data" | "text";
}

function DeckCardItem({ item }: { item: DeckCard }) {
  return (
    <div className="command-cell border border-rule bg-cream p-6 sm:p-7 backdrop-blur-sm">
      <span className="font-label block text-[9px] uppercase tracking-[0.24em] text-warm-gray/50">
        {item.id} &mdash; {item.title}
      </span>
      {item.type === "progress" ? (
        <div className="mt-2 flex items-end justify-between">
          <h4 className="font-display text-2xl tracking-[0.04em] text-espresso sm:text-3xl">
            {item.val}
          </h4>
            <div className="mb-1 h-[2px] w-20 overflow-hidden rounded-full bg-rule">
            <div className="h-full w-[60%] bg-gold" />
          </div>
        </div>
      ) : item.type === "data" ? (
        <div className="mt-4 flex flex-col gap-3">
          {[
            { label: "60-Minute Power Session", val: "$444" },
            { label: "30-Minute Clarity Call", val: "$222" },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex justify-between font-label text-[10px] uppercase tracking-[0.14em] text-warm-gray">
                <span>{row.label}</span>
                <span className="text-espresso">{row.val}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="mt-3 font-body text-sm leading-snug text-warm-gray">
          Direct, practical guidance from{" "}
          <span className="italic text-espresso">real-world experience</span>.
        </h3>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero section                                                       */
/* ------------------------------------------------------------------ */

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

      gsap.from(".command-cell", {
        x: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        delay: 1,
      });

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

  const cards: DeckCard[] = [
    { id: "001", title: "Booking", val: "Open", type: "progress" },
    { id: "002", title: "Session Tiers", val: "Details", type: "data" },
    { id: "003", title: "Approach", val: "Strategy", type: "text" },
  ];

  const textOutlineStyle = {
    WebkitTextStroke: "1px var(--espresso)",
    WebkitTextFillColor: "transparent",
  } as React.CSSProperties;

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-cream selection:bg-espresso selection:text-espresso"
    >
      <div
        ref={revealRef}
        className="relative z-10 flex w-full min-h-dvh flex-col gap-8 pt-24 pb-12 px-6 md:flex-row md:items-stretch md:gap-10 md:p-14 lg:p-20"
      >
        <div className="flex min-w-0 flex-1 flex-col justify-between pb-12 md:pb-8">
          <div className="flex items-center gap-3">
            <div className="relative h-2.5 w-2.5 rounded-full bg-gold">
              <div className="absolute inset-0 animate-ping rounded-full bg-gold opacity-30" />
            </div>
          </div>

          <div className="max-w-4xl lg:-translate-y-8">
            <h1 className="font-display text-[clamp(2.5rem,9.5vw,12rem)] font-bold uppercase leading-[0.84] tracking-[0.02em] text-espresso">
              PUJA
              <br />
              <span style={textOutlineStyle}>WATCH</span>
            </h1>
            <p className="mt-10 font-body text-[13px] uppercase leading-relaxed tracking-[0.3em] text-warm-gray/60 md:mt-8">
              Gain clarity. Make stronger decisions. Create a life and business
              that reflect what you are truly capable of.
            </p>
            <p className="mt-5 max-w-lg font-body text-sm leading-relaxed text-warm-gray/60">
              Puja offers personalized one-on-one strategy sessions for
              individuals who are ready to move forward with greater
              confidence, direction, and intention.
            </p>
          </div>

          <Link
            href="/book"
            ref={ctaRef}
            className="group mt-8 flex w-fit items-center gap-6 md:mt-0 lg:-translate-y-20"
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

        <div className="z-20 flex w-full flex-shrink-0 flex-col gap-4 md:w-80 lg:w-96">
          {cards.map((item) => (
            <DeckCardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
