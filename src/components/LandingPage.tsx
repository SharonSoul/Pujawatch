"use client";

import { useScroll, useTransform, motion, MotionValue, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/ui/hero-section";
import { FooterBackgroundGradient } from "@/components/ui/text-hover-effect";

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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_45%,transparent_100%)]" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
        <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.08] tracking-[0.03em] text-cream lg:text-5xl">
          One-on-One Business &amp; Life Strategy Consulting:
        </h2>
        <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-cream/45">
          These private sessions are designed to help you gain clarity, work
          through a challenge, make an important decision, or create a
          practical plan for your next move.
        </p>
        <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-cream/45">
          You can bring any area of your business or life that you want to
          improve. Whether you are building something new, navigating a
          transition, feeling stuck, or simply know you are capable of more,
          Puja will provide direct and personalized guidance based on your
          goals, challenges, and circumstances.
        </p>
        <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-cream/45">
          You will leave your session with a stronger sense of direction,
          honest feedback, and three to five specific action steps you can
          begin implementing immediately.
        </p>
      </div>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Process section                                                    */
/* ------------------------------------------------------------------ */

const PROCESS_STEPS = [
  { num: "1", title: "Define the real issue", desc: "We cut through the surface-level noise and identify the core problem that's really holding you back." },
  { num: "2", title: "Identify what is not working", desc: "A clear-eyed look at current patterns, systems, and assumptions that are blocking progress." },
  { num: "3", title: "Challenge assumptions or avoidance", desc: "Honest feedback on blind spots, limiting beliefs, and the stories you tell yourself." },
  { num: "4", title: "Decide on the strategy", desc: "Together we map the most direct path forward, weighing trade-offs with real-world pragmatism." },
  { num: "5", title: "Build 3-5 specific action steps", desc: "You leave with a concrete, sequenced list of moves you can begin executing immediately." },
];

function ProcessSection() {
  return (
    <section id="process" className="bg-cream py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl">
              During the call:
            </h2>
            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-rule" />
              <span className="font-accent text-[9px] uppercase tracking-[0.28em] text-rule">METHOD</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-cream">
                <span className="font-display text-xl font-semibold">{step.num}</span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug tracking-[0.02em] text-espresso">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed !text-red-600">
                {step.desc}
              </p>
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
    <section id="services" className="bg-mid-bg py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl">
              What You Can Bring to a Session
            </h2>
            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-rule" />
              <span className="font-accent text-[9px] uppercase tracking-[0.28em] text-rule">AREAS</span>
            </div>
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
    price: "$222",
    desc: "A focused strategy session for clients who want guidance on a specific question, challenge, decision, or goal.",
  },
  {
    name: "60-Minute Power Session",
    price: "$444",
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
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl">
              Choose Your Session
            </h2>
            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-rule" />
              <span className="font-accent text-[9px] uppercase tracking-[0.28em] text-rule">TIERS</span>
            </div>
          </div>
        </motion.div>
         <div className="grid gap-6">
          {SESSIONS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex h-full flex-col justify-between bg-espresso p-10 transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--espresso)]"
            >
              <div>
                <h3 className="font-display text-2xl font-light tracking-[0.03em] text-cream">
                  {s.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-accent text-base font-light text-gold">$</span>
                  <span className="font-display text-4xl font-light tracking-[0.02em] text-cream">
                    {s.price.replace("$", "")}
                  </span>
                </div>
                <p className="mt-5 font-body text-base leading-relaxed text-cream/55">
                  {s.desc}
                </p>
              </div>
              <Link
                href="/book"
                className="mt-8 inline-flex h-11 items-center gap-2 self-start rounded-sm bg-cream px-6 font-label text-[11px] uppercase tracking-[0.14em] text-espresso transition-all duration-300 hover:bg-gold active:translate-y-px active:scale-[0.98]"
              >
                Book a Session <span>&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 font-body text-base leading-relaxed text-warm-gray"
        >
          Both sessions provide the same personalized approach. Choose the
          amount of time based on how deeply you would like to explore your
          situation.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About Puja                                                         */
/* ------------------------------------------------------------------ */

function AboutSection() {
  return (
    <section id="about" className="relative bg-espresso py-24 lg:py-40">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16 flex flex-col gap-4">
            <h2 className="font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-cream lg:text-5xl">
              About Puja
            </h2>
            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-cream/15" />
              <span className="font-accent text-[9px] uppercase tracking-[0.28em] text-cream/15">BIO</span>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl flex flex-col gap-7 font-body text-lg leading-relaxed text-cream/55">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Born and raised in Dallas, Puja Dharod is a Texan Gujarati who
            earned her undergraduate degree from The University of Texas at
            Austin.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            She currently serves as Vice President of Investments at SSCP,
            where her work spans investing, real estate acquisitions and
            management, lease negotiations, financial management, business
            growth, marketing, brand strategy, strategic planning, and
            high-level decision-making.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Puja&rsquo;s commitment to helping others began while she was
            still in high school. After witnessing a team member within her
            family&rsquo;s restaurant business experience a devastating
            personal hardship, she founded the Puja Foundation in 2011.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            The Puja Foundation is a nonprofit organization that provides
            financial assistance to team members and their families facing
            catastrophic and unexpected life events.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="font-display text-xl italic leading-relaxed text-cream"
          >
            She chose the name Puja Foundation because her name means
            &ldquo;to pray,&rdquo; and she wanted the organization to
            represent the belief that prayers can be answered through
            compassion, generosity, and action.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            Since its founding, the foundation has supported families across
            companies including Cicis Pizza, Applebee&rsquo;s, Sonic
            Drive-In, Roy&rsquo;s Restaurants, Corner Bakery, and
            Logan&rsquo;s Roadhouse.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            Through her experience in business, investing, real estate,
            marketing, leadership, and philanthropy, Puja has developed a
            strong ability to identify opportunities, negotiate effectively,
            build brands, evaluate risk, solve complex problems, and guide
            others through important decisions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            As a Business &amp; Life Strategy Consultant, Puja brings that
            real-world experience into every session. Her approach is honest,
            practical, and personal. She helps clients gain clarity,
            recognize their blind spots, make stronger decisions, and create
            realistic strategies for moving forward in business, career,
            money, confidence, personal growth, and life.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Education                                                          */
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

function EducationSection() {
  return (
    <section className="bg-cream py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl lg:whitespace-nowrap">
              Education and Professional Development
            </h2>
            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-rule" />
              <span className="font-accent text-[9px] uppercase tracking-[0.28em] text-rule">CRED</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h3 className="font-display text-2xl font-light tracking-[0.03em] text-espresso">
            The University of Texas at Austin
          </h3>
          <p className="mt-1 font-body text-base leading-relaxed text-warm-gray">
            B.S. in Advertising and Business, 2016
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <h3 className="font-display text-2xl font-light tracking-[0.03em] text-espresso">
            Professional Certificates and Training
          </h3>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <motion.div
              key={c.prog}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-rule p-6 transition-colors hover:bg-mid-bg lg:p-7"
            >
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-espresso">
                {c.year}
              </span>
              <h4 className="mt-2 font-display text-base font-medium leading-snug tracking-[0.02em] text-espresso">
                {c.inst}
              </h4>
              <p className="mt-1 font-body text-sm leading-relaxed text-warm-gray">
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
    <section className="bg-espresso py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-[0.02em] text-cream lg:text-5xl">
            Ready to Make
            <br />
            Your Next Move?
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-cream/45">
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
            className="mt-10 inline-flex h-12 items-center rounded-sm bg-cream px-8 font-label text-[12px] font-medium uppercase tracking-[0.16em] text-espresso transition-all duration-300 hover:bg-gold hover:text-espresso active:translate-y-px active:scale-[0.98]"
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
            PW - {y}
          </span>
        </div>
        <span className="mt-2 block font-accent text-[10px] uppercase tracking-[0.16em] text-warm-gray/50">
          &copy; {y} PujaWatch. All rights reserved.
        </span>
      </div>

      <div className="mt-8 flex w-full items-center justify-center pb-8">
        <Link
          href="/test-hero"
          className="inline-flex h-10 items-center rounded-sm bg-espresso px-6 font-label text-[11px] uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-gold hover:text-espresso"
        >
          Test Hero
        </Link>
      </div>
      <div className="flex w-full items-center justify-center pb-8">
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
  const heroScale = reduce ? 1 : useTransform(scrollYProgress, [0, 1], [1, 0.85]);
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
      <EducationSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
