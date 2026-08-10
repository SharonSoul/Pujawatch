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
      className="relative min-h-dvh h-auto py-24 sm:py-0 sm:h-dvh bg-espresso flex items-center"
    >
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
        {/* Header on 1 single line on desktop/tablet, wraps only on mobile */}
        <h2 className="w-full font-display text-[clamp(1.45rem,3.2vw,3.8rem)] font-light leading-[1.15] sm:leading-[1.1] tracking-[0.02em] text-cream sm:whitespace-nowrap">
          Private Business &amp; Life Strategy Sessions
        </h2>
        <p className="mt-3 font-accent text-xs sm:text-sm uppercase tracking-[0.24em] text-gold md:text-base">
          Every meaningful change begins with a decision.
        </p>
        <div className="mt-6 sm:mt-8 max-w-3xl space-y-4 sm:space-y-5">
          <p className="font-body text-sm sm:text-base leading-relaxed text-cream/80">
            These private one-on-one strategy sessions are designed to help you
            gain clarity, make confident decisions, and create a plan for
            moving forward with purpose.
          </p>
          <p className="font-body text-sm sm:text-base leading-relaxed text-cream/80">
            Whether you&rsquo;re building a business, navigating a major life
            transition, feeling stuck, or striving for your next level of
            growth, every session is tailored to your unique goals and
            circumstances. Together, we&rsquo;ll challenge your problem, uncover
            new opportunities, and develop a strategy that aligns with the life
            you want to create.
          </p>
          <p className="font-body text-sm sm:text-base leading-relaxed text-cream/80">
            You&rsquo;ll leave with greater clarity, honest feedback, and three
            to five actionable next steps you can begin implementing
            immediately.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  During the Meeting (All 5 boxes in a single horizontal row on desktop) */
/* ------------------------------------------------------------------ */

const PROCESS_STEPS = [
  { num: "1", title: "Define the real issue." },
  { num: "2", title: "Identify what is not working." },
  { num: "3", title: "Challenge assumptions or avoidance." },
  { num: "4", title: "Decide on the strategy." },
  { num: "5", title: "Build 3–5 specific action steps." },
];

function ProcessSection() {
  return (
    <section id="process" className="bg-cream py-20 sm:py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14"
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-warm-gray/50">
            Method
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl">
            During the Meeting
          </h2>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-warm-gray">
            A structured, five-step approach designed to get to the heart of
            your situation and leave you with clear next steps.
          </p>
        </motion.div>

        {/* All 5 boxes on a single horizontal row on desktop (lg:grid-cols-5) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between bg-espresso p-6 sm:p-7 lg:p-6 xl:p-7 min-h-[180px] sm:min-h-[220px] transition-all duration-300 hover:bg-[#32201d]"
            >
              {/* Large watermark number */}
              <span className="absolute top-4 right-5 sm:top-5 sm:right-6 font-display text-5xl sm:text-6xl font-light text-cream/[0.06] select-none">
                {step.num}
              </span>

              <div>
                {/* Numbered badge */}
                <div className="mb-5 sm:mb-6 flex h-8 w-8 items-center justify-center rounded-full border border-cream/15">
                  <span className="font-display text-xs font-light text-cream/60">{step.num}</span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-light leading-snug tracking-[0.02em] text-cream xl:text-xl">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
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
    <section id="services" className="bg-espresso py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header on 1 clean line across */}
          <div className="mb-10 sm:mb-14">
            <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/35">
              Areas
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,4vw,3.75rem)] font-light leading-tight sm:leading-none tracking-[0.02em] text-cream">
              What You Can Bring to a Session
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
          {/* Left column: 1-4 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {left.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 sm:gap-5 border border-cream/10 bg-[rgba(255,255,255,0.03)] p-5 sm:p-6 transition-all duration-300 hover:border-gold/40 hover:bg-[rgba(255,255,255,0.06)] lg:p-7"
              >
                <span className="shrink-0 font-display text-xl sm:text-2xl font-light tracking-[0.02em] text-gold/60">
                  {i + 1}
                </span>
                <span className="font-display text-sm sm:text-base font-normal leading-snug tracking-[0.02em] text-cream">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right column: 5-8 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {right.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-4 sm:gap-5 border border-cream/10 bg-[rgba(255,255,255,0.03)] p-5 sm:p-6 transition-all duration-300 hover:border-gold/40 hover:bg-[rgba(255,255,255,0.06)] lg:p-7"
              >
                <span className="shrink-0 font-display text-xl sm:text-2xl font-light tracking-[0.02em] text-gold/60">
                  {i + 5}
                </span>
                <span className="font-display text-sm sm:text-base font-normal leading-snug tracking-[0.02em] text-cream">
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
    <section id="sessions" className="bg-cream py-20 sm:py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered header and single-line description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 text-center"
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-warm-gray/50">
            Tiers
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl">
            Choose Your Session
          </h2>
          <p className="mx-auto mt-4 max-w-4xl font-body text-sm sm:text-base leading-relaxed text-warm-gray lg:whitespace-nowrap">
            Both sessions provide the same personalized approach. Choose the amount of time based on how deeply you would like to explore your situation.
          </p>
        </motion.div>

        {/* Side-by-side cards with same-size dollar symbol */}
        <div className="grid gap-6 lg:grid-cols-2">
          {SESSIONS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex h-full flex-col justify-between bg-espresso p-7 sm:p-8 lg:p-10 transition-shadow duration-300 hover:shadow-[0_0_0_2px_var(--espresso)]"
            >
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-light tracking-[0.03em] text-cream">
                  {s.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-sans text-4xl sm:text-5xl font-light text-gold">$</span>
                  <span className="font-display text-4xl sm:text-5xl font-light tracking-[0.02em] text-cream">
                    {s.price}
                  </span>
                </div>
                <p className="mt-4 sm:mt-5 font-body text-sm sm:text-base leading-relaxed text-cream/60">
                  {s.desc}
                </p>
              </div>
              <MagneticLink
                href="/book"
                className="mt-8 sm:mt-10 inline-flex h-11 items-center gap-2 self-start rounded-sm bg-cream px-6 font-label text-[11px] uppercase tracking-[0.14em] text-espresso transition-all duration-300 hover:bg-gold active:translate-y-px active:scale-[0.98]"
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
/*  About Puja + Education (Side-by-side on desktop, vertical stack)   */
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
  "Born and raised in Dallas, Puja Dharod is a Texan Gujarati who earned her undergraduate degree from The University of Texas at Austin.",
  "She currently serves as Vice President of Investments at SSCP, where her work spans investing, real estate acquisitions and management, lease negotiations, financial management, business growth, marketing, brand strategy, strategic planning, and high-level decision-making.",
  "Puja\u2019s commitment to helping others began while she was still in high school. After witnessing a team member within her family\u2019s restaurant business experience a devastating personal hardship, she founded the Puja Foundation in 2011.",
  "The Puja Foundation is a nonprofit organization that provides financial assistance to team members and their families facing catastrophic and unexpected life events.",
  "She chose the name Puja Foundation because her name means \u201Cto pray,\u201D and she wanted the organization to represent the belief that prayers can be answered through compassion, generosity, and action.",
  "Since its founding, the foundation has supported families across companies including Cicis Pizza, Applebee\u2019s, Sonic Drive-In, Roy\u2019s Restaurants, Corner Bakery, and Logan\u2019s Roadhouse.",
  "Through her experience in business, investing, real estate, marketing, leadership, and philanthropy, Puja has developed a strong ability to identify opportunities, negotiate effectively, build brands, evaluate risk, solve complex problems, and guide others through important decisions.",
  "As a Business & Life Strategy Consultant, Puja brings that real-world experience into every session. Her approach is honest, practical, and personal. She helps clients gain clarity, recognize their blind spots, make stronger decisions, and create realistic strategies for moving forward in business, career, money, confidence, personal growth, and life.",
];

function AboutSection() {
  return (
    <section id="about" className="relative bg-espresso py-20 sm:py-28 lg:py-40">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* On large screens: 2 columns (Left: About bio + College, Right: Credentials boxes arranged vertically) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Bio Content */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 sm:mb-12"
            >
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/30">
                Bio
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-light leading-[1.06] tracking-[0.03em] text-cream lg:text-5xl">
                About Puja
              </h2>
            </motion.div>

            {/* Paragraphs in exact linear order */}
            <div className="space-y-5 sm:space-y-6 font-body text-sm sm:text-base leading-relaxed text-cream/80 sm:text-lg">
              {ABOUT_PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* University degree */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 sm:mt-12 border-t border-cream/10 pt-6 sm:pt-8"
            >
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/30">
                Education
              </span>
              <p className="mt-3 font-display text-lg sm:text-xl font-light tracking-[0.03em] text-cream">
                The University of Texas at Austin &mdash;{" "}
                <span className="font-body text-sm sm:text-base font-light text-cream/60">
                  B.S. in Advertising and Business, 2016
                </span>
              </p>
            </motion.div>
          </div>

          {/* Right Column: Credentials Boxes arranged vertically on desktop, responsive grid on mobile/tablet */}
          <div className="lg:col-span-5 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/30">
                Professional Development
              </span>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-light tracking-[0.03em] text-cream">
                Certificates &amp; Training
              </h3>
            </motion.div>

            {/* Vertical stack on desktop, responsive grid on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-3">
              {CERTIFICATES.map((c, i) => (
                <motion.div
                  key={c.prog}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex flex-col justify-between border border-cream/10 bg-[rgba(255,255,255,0.03)] p-4 sm:p-5 transition-all duration-300 hover:border-gold/40 hover:bg-[rgba(255,255,255,0.06)]"
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <h4 className="font-display text-sm sm:text-base font-medium leading-snug tracking-[0.02em] text-cream">
                      {c.inst}
                    </h4>
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-gold/70 shrink-0">
                      {c.year}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-xs sm:text-sm leading-relaxed text-cream/60">
                    {c.prog}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

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
    <section className="bg-cream py-20 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-light leading-[1.1] tracking-[0.02em] text-espresso lg:text-5xl">
            Ready to Make
            <br />
            Your Next Move?
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-xl font-body text-base sm:text-lg leading-relaxed text-warm-gray">
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
            className="mt-8 sm:mt-10 inline-flex h-12 items-center rounded-sm bg-espresso px-8 font-label text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-gold hover:text-espresso active:translate-y-px active:scale-[0.98]"
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
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
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
                href="mailto:puja@pujawatch.com"
                className="font-body text-sm text-warm-gray transition-colors hover:text-espresso"
              >
                puja@pujawatch.com
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
        <img src="/wings_logo.png" alt="PujaWatch" className="h-16 sm:h-20 w-auto md:h-28" />
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
