"use client";

import { useScroll, useTransform, motion, MotionValue, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/ui/hero-section";
import { FooterBackgroundGradient } from "@/components/ui/text-hover-effect";
import { MagneticLink } from "@/components/ui/magnetic-link";

/* ------------------------------------------------------------------ */
/*  Reveal (fades up as hero scrolls out)                              */
/* ------------------------------------------------------------------ */

interface StageProps {
  scrollYProgress: MotionValue<number>;
}

function RevealStage({ scrollYProgress }: StageProps) {
  const reduce = useReducedMotion();
  const opacity = reduce ? 1 : useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = reduce ? 0 : useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="relative h-dvh bg-espresso"
    >
      {/* No grid background — clean */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
        {/* Full-width title */}
        <h2 className="w-full font-display text-[clamp(2.8rem,8vw,6rem)] font-light leading-[1.06] tracking-[0.03em] text-cream">
          One-on-One Business &amp; Life Strategy Consulting:
        </h2>
        {/* Centered, readable paragraphs */}
        <div className="mt-8 max-w-3xl space-y-5">
          <p className="font-body text-base leading-relaxed text-cream/75">
            These private sessions are designed to help you gain clarity, work
            through a challenge, make an important decision, or create a
            practical plan for your next move.
          </p>
          <p className="font-body text-base leading-relaxed text-cream/75">
            You can bring any area of your business or life that you want to
            improve. Whether you are building something new, navigating a
            transition, feeling stuck, or simply know you are capable of more,
            Puja will provide direct and personalized guidance based on your
            goals, challenges, and circumstances.
          </p>
          <p className="font-body text-base leading-relaxed text-cream/75">
            You will leave your session with a stronger sense of direction,
            honest feedback, and three to five specific action steps you can
            begin implementing immediately.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Process section — During the Call                                  */
/* ------------------------------------------------------------------ */

const PROCESS_STEPS = [
  { num: "1", title: "Define the real issue", desc: "We cut through the surface-level noise and identify the core problem that's really holding you back." },
  { num: "2", title: "Identify what is not working", desc: "A clear-eyed look at current patterns, systems, and assumptions that are blocking progress." },
  { num: "3", title: "Challenge assumptions or avoidance", desc: "Honest feedback on blind spots, limiting beliefs, and the stories you tell yourself." },
  { num: "4", title: "Decide on the strategy", desc: "Together we map the most direct path forward, weighing trade-offs with real-world pragmatism." },
  { num: "5", title: "Build 3–5 specific action steps", desc: "You leave with a concrete, sequenced list of moves you can begin executing immediately." },
];

function ProcessSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.querySelector<HTMLElement>("[data-card]");
    const cardW = firstCard?.offsetWidth ?? 400;
    trackRef.current.scrollBy({
      left: dir === "right" ? cardW + 24 : -(cardW + 24),
      behavior: "smooth",
    });
  };

  return (
    <section id="process" className="bg-cream py-24 overflow-hidden lg:py-40">
      {/* Header row: title left, arrows right */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-warm-gray/50">
              Method
            </span>
            <h2 className="mt-3 font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl">
              During the Call
            </h2>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-warm-gray">
              A structured, five-step approach designed to get to the heart of
              your situation and leave you with clear next steps.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-rule transition-colors duration-300 hover:bg-espresso"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                className="stroke-espresso transition-colors duration-300 group-hover:stroke-cream"
              >
                <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-rule transition-colors duration-300 hover:bg-espresso"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                className="stroke-espresso transition-colors duration-300 group-hover:stroke-cream"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/*
        Card track: extends all the way to the extreme right of the viewport (100vw).
        Left padding aligns with max-w-7xl content.
        Width is calculated so 3 full cards + 20% peek of the 4th card fills the viewport width to the extreme right edge.
      */}
      <div
        ref={trackRef}
        className="flex w-full gap-6 overflow-x-auto pb-4 pl-6 lg:pl-[calc(max(2rem,(100vw-80rem)/2+2rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            data-card
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex shrink-0 flex-col justify-between bg-espresso p-8
                       w-[calc((100vw-3rem)/1.25)]
                       md:w-[calc(((100vw-max(2rem,(100vw-80rem)/2+2rem))-48px)/2.25)]
                       lg:w-[calc(((100vw-max(2rem,(100vw-80rem)/2+2rem))-72px)/3.25)]"
          >
            {/* Large watermark number */}
            <span className="absolute top-6 right-8 font-display text-7xl font-light text-cream/[0.06] select-none">
              {step.num}
            </span>

            <div>
              {/* Numbered badge */}
              <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-full border border-cream/15">
                <span className="font-display text-sm font-light text-cream/60">{step.num}</span>
              </div>

              <h3 className="font-display text-xl font-light leading-snug tracking-[0.02em] text-cream">
                {step.title}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-cream/55">
                {step.desc}
              </p>
            </div>

            {/* Gold accent line — expands on hover */}
            <div className="mt-10 h-px w-12 bg-gold/50 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}

        {/* Trailing spacer so last card doesn't sit flush against viewport edge */}
        <div className="w-12 shrink-0 lg:w-20" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  What you can bring                                                 */
/* ------------------------------------------------------------------ */

const SERVICE_AREAS = [
  "Business strategy, growth, and strategic planning",
  "Branding, marketing, and positioning",
  "Real estate acquisitions, lease negotiations, and property management",
  "Career direction and decision-making",
  "Leadership, communication, and boundaries",
  "Confidence, mindset, and personal development",
  "Money mindset, financial education, and general investing education",
  "Life transitions, relationships, habits, and leveling up",
];

function ServicesSection() {
  const left = SERVICE_AREAS.slice(0, 4);
  const right = SERVICE_AREAS.slice(4, 8);

  return (
    <section id="services" className="bg-mid-bg py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Full-width title */}
          <div className="mb-16">
            <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-warm-gray/50">
              Areas
            </span>
            <h2 className="mt-3 w-full font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.06] tracking-[0.03em] text-espresso">
              What You Can Bring to a Session
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left column: 1-4 */}
          <div className="flex flex-col gap-4">
            {left.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 bg-cream p-6 transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--espresso)] lg:p-7"
              >
                <span className="shrink-0 font-display text-3xl font-light tracking-[0.02em] text-warm-gray/40">
                  {i + 1}
                </span>
                <span className="font-display text-base font-medium leading-snug tracking-[0.02em] text-espresso">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right column: 5-8 */}
          <div className="flex flex-col gap-4">
            {right.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 bg-cream p-6 transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--espresso)] lg:p-7"
              >
                <span className="shrink-0 font-display text-3xl font-light tracking-[0.02em] text-warm-gray/40">
                  {i + 5}
                </span>
                <span className="font-display text-base font-medium leading-snug tracking-[0.02em] text-espresso">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing                                                            */
/* ------------------------------------------------------------------ */

const SESSIONS = [
  {
    name: "30-Minute Clarity Call",
    price: "222",
    desc: "A focused strategy session for clients who want guidance on a specific question, challenge, decision, or goal.",
  },
  {
    name: "60-Minute Power Session",
    price: "444",
    desc: "A deeper strategy session for clients who want time to fully explore their situation, work through multiple factors, and develop a detailed plan of action.",
  },
];

function PricingSection() {
  return (
    <section id="sessions" className="bg-cream py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-warm-gray/50">
            Tiers
          </span>
          <h2 className="mt-3 font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl">
            Choose Your Session
          </h2>
        </motion.div>

        {/* Descriptor above the cards */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 max-w-2xl font-body text-base leading-relaxed text-warm-gray"
        >
          Both sessions provide the same personalized approach. Choose the
          amount of time based on how deeply you would like to explore your
          situation.
        </motion.p>

        {/* Side-by-side cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {SESSIONS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex h-full flex-col justify-between bg-espresso p-10 transition-shadow duration-300 hover:shadow-[0_0_0_2px_var(--espresso)]"
            >
              <div>
                <h3 className="font-display text-2xl font-light tracking-[0.03em] text-cream">
                  {s.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-body text-lg font-light text-gold">$</span>
                  <span className="font-display text-5xl font-light tracking-[0.02em] text-cream">
                    {s.price}
                  </span>
                </div>
                <p className="mt-5 font-body text-base leading-relaxed text-cream/60">
                  {s.desc}
                </p>
              </div>
              <MagneticLink
                href="/book"
                className="mt-10 inline-flex h-11 items-center gap-2 self-start rounded-sm bg-cream px-6 font-label text-[11px] uppercase tracking-[0.14em] text-espresso transition-all duration-300 hover:bg-gold active:translate-y-px active:scale-[0.98]"
              >
                Book a Session <span>&rarr;</span>
              </MagneticLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About Puja + Education combined                                    */
/* ------------------------------------------------------------------ */

const CERTIFICATES = [
  { inst: "Harvard University", prog: "Wealth Management", year: "2024" },
  { inst: "Rice University", prog: "Real Estate and Development", year: "2020" },
  { inst: "Keith J. Cunningham", prog: "Four-Day MBA Program", year: "2019" },
  { inst: "Dale Carnegie", prog: "Professional Development Program", year: "2019" },
  { inst: "Karrass", prog: "Effective Negotiating", year: "2018" },
  { inst: "Sonic", prog: "All-Stage Training", year: "2017" },
  { inst: "Roy\u2019s", prog: "Levels Training Program", year: "2017" },
];

const ABOUT_PARAGRAPHS = [
  "Born and raised in Dallas, Puja Dharod is a Texan Gujarati who earned her undergraduate degree from The University of Texas at Austin (B.S. in Advertising and Business, 2016).",
  "She currently serves as Vice President of Investments at SSCP, where her work spans investing, real estate acquisitions and management, lease negotiations, financial management, business growth, marketing, brand strategy, strategic planning, and high-level decision-making.",
  "Puja\u2019s commitment to helping others began while she was still in high school. After witnessing a team member within her family\u2019s restaurant business experience a devastating personal hardship, she founded the Puja Foundation in 2011.",
  "The Puja Foundation is a nonprofit organization that provides financial assistance to team members and their families facing catastrophic and unexpected life events.",
  "Since its founding, the foundation has supported families across companies including Cici\u2019s Pizza, Applebee\u2019s, Sonic Drive-In, Roy\u2019s Restaurants, Corner Bakery, and Logan\u2019s Roadhouse.",
  "Through her experience in business, investing, real estate, marketing, leadership, and philanthropy, Puja has developed a strong ability to identify opportunities, negotiate effectively, build brands, evaluate risk, solve complex problems, and guide others through important decisions.",
  "As a Business & Life Strategy Consultant, Puja brings that real-world experience into every session. Her approach is honest, practical, and personal. She helps clients gain clarity, recognize their blind spots, make stronger decisions, and create realistic strategies for moving forward in business, career, money, confidence, personal growth, and life.",
];

function AboutSection() {
  return (
    <section id="about" className="relative bg-espresso py-24 lg:py-40">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* About header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/30">
            Bio
          </span>
          <h2 className="mt-3 font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-cream lg:text-5xl">
            About Puja
          </h2>
        </motion.div>

        {/* Quote callout */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 border-l-2 border-gold pl-8"
        >
          <p className="font-display text-xl font-light italic leading-relaxed text-cream">
            She chose the name Puja Foundation because her name means &ldquo;to
            pray,&rdquo; and she wanted the organization to represent the belief
            that prayers can be answered through compassion, generosity, and
            action.
          </p>
        </motion.blockquote>

        {/* Uniform paragraphs */}
        <div className="grid gap-5 font-body text-base leading-relaxed text-cream/80 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
          {ABOUT_PARAGRAPHS.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 h-px w-full bg-cream/10" />

        {/* Education — combined, no section title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/30">
            Education &amp; Credentials
          </span>
          {/* College listed inline — no extra heading above it */}
          <p className="mt-4 font-display text-xl font-light tracking-[0.03em] text-cream">
            The University of Texas at Austin &mdash;{" "}
            <span className="font-body text-base font-light text-cream/60">
              B.S. in Advertising and Business, 2016
            </span>
          </p>
        </motion.div>

        {/* Certificate grid */}
        <div className="grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CERTIFICATES.map((c, i) => (
            <motion.div
              key={c.prog}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`flex flex-col bg-espresso p-6 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.04)] lg:p-7${
                i === CERTIFICATES.length - 1
                  ? " sm:col-span-2 lg:col-span-3 xl:col-span-2"
                  : ""
              }`}
            >
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-gold/70">
                {c.year}
              </span>
              <h4 className="mt-2 font-display text-sm font-medium leading-snug tracking-[0.02em] text-cream">
                {c.inst}
              </h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-cream/50">
                {c.prog}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA                                                          */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section className="bg-cream py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-[0.02em] text-espresso lg:text-5xl">
            Ready to Make
            <br />
            Your Next Move?
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-warm-gray">
            Book a private session with Puja to gain clarity, receive honest
            guidance, and create a practical strategy for moving forward.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Link
            href="/book"
            className="mt-10 inline-flex h-12 items-center rounded-sm bg-espresso px-8 font-label text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-gold hover:text-espresso active:translate-y-px active:scale-[0.98]"
          >
            Book a Session
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function FooterSection() {
  const y = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-cream pt-12 pb-0">
      <FooterBackgroundGradient />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h4 className="font-accent text-[11px] font-medium uppercase tracking-[0.18em] text-warm-gray">
              Navigation
            </h4>
            <div className="mt-4 flex flex-col gap-2">
              {["About", "Services", "Process"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="font-body text-sm text-warm-gray transition-colors hover:text-espresso"
                >
                  {l}
                </a>
              ))}
              <Link
                href="/book"
                className="font-body text-sm text-warm-gray transition-colors hover:text-espresso"
              >
                Book
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-accent text-[11px] font-medium uppercase tracking-[0.18em] text-warm-gray">
              Connect
            </h4>
            <div className="mt-4">
              <a
                href="mailto:pdharod@sscpmanagement.com"
                className="font-body text-sm text-warm-gray transition-colors hover:text-espresso"
              >
                pdharod@sscpmanagement.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-accent text-[11px] font-medium uppercase tracking-[0.18em] text-warm-gray">
              Important Information
            </h4>
            <p className="mt-4 font-body text-xs leading-relaxed text-warm-gray/60">
              Puja provides business and life strategy consulting, general
              financial education, and general investing education. Sessions do
              not include individualized investment recommendations, legal
              advice, tax advice, medical advice, or mental-health treatment.
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 border-t border-rule pt-6">
          <span className="block h-px w-10 bg-warm-gray/60" />
          <span className="font-accent text-[9px] uppercase tracking-[0.28em] text-warm-gray/60">
            PW &mdash; {y}
          </span>
        </div>
        <span className="mt-2 block font-accent text-[10px] uppercase tracking-[0.16em] text-warm-gray/50">
          &copy; {y} PujaWatch. All rights reserved.
        </span>
      </div>

      <div className="mt-8 flex w-full items-center justify-center pb-8">
        <img src="/wings_logo.png" alt="PujaWatch" className="h-20 w-auto md:h-28" />
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

export function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const reduce = useReducedMotion();
  const heroScale = reduce ? 1 : useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const heroOpacity = reduce ? 1 : useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <div ref={container} className="relative h-[200vh]">
        <motion.section
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="sticky top-0 h-dvh overflow-hidden"
        >
          <HeroSection />
        </motion.section>
        <RevealStage scrollYProgress={scrollYProgress} />
      </div>
      <ProcessSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
