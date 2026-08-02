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
        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-cream/45">
          These private sessions are designed to help you gain clarity, work
          through a challenge, make an important decision, or create a
          practical plan for your next move.
        </p>
        <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-cream/45">
          You can bring any area of your business or life that you want to
          improve. Whether you are building something new, navigating a
          transition, feeling stuck, or simply know you are capable of more,
          Puja will provide direct and personalized guidance based on your
          goals, challenges, and circumstances.
        </p>
        <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-cream/45">
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
  "Define the real issue",
  "Identify what is not working",
  "Challenge assumptions or avoidance",
  "Decide on the strategy",
  "Build 3-5 specific action steps",
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
              <span className="font-label text-[9px] uppercase tracking-[0.28em] !text-red-600">METHOD</span>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-5 border-b border-rule py-6 transition-colors hover:bg-mid-bg last:border-b-0 lg:gap-8 lg:py-7"
            >
              <span className="min-w-14 shrink-0 font-display text-3xl font-light tracking-[0.02em] text-warm-gray/40 lg:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-medium leading-snug tracking-[0.02em] text-espresso lg:text-2xl">
                {step}
              </h3>
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
              <span className="font-label text-[9px] uppercase tracking-[0.28em] !text-red-600">AREAS</span>
            </div>
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICE_AREAS.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-3 bg-cream p-6 transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--espresso)] lg:p-7"
            >
              <span className="font-display text-3xl font-light tracking-[0.02em] text-warm-gray/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-base font-medium leading-snug tracking-[0.02em] text-espresso">
                {area}
              </span>
            </motion.div>
          ))}
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
    name: "60-Minute Power Session",
    price: "$444",
    desc: "A deeper strategy session for clients who want time to fully explore their situation, work through multiple factors, and develop a detailed plan of action.",
    featured: true,
  },
  {
    name: "30-Minute Clarity Call",
    price: "$222",
    desc: "A focused strategy session for clients who want guidance on a specific question, challenge, decision, or goal.",
    featured: false,
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
              <span className="font-label text-[9px] uppercase tracking-[0.28em] !text-red-600">TIERS</span>
            </div>
          </div>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-[4fr,3fr]">
          {SESSIONS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex h-full flex-col justify-between p-10 transition-shadow duration-300 ${
                s.featured
                  ? "bg-espresso hover:shadow-[0_0_0_1px_var(--espresso)]"
                  : "bg-mid-bg hover:shadow-[0_0_0_1px_var(--espresso)]"
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className={`font-display text-2xl font-light tracking-[0.03em] ${
                      s.featured ? "text-cream" : "text-espresso"
                    }`}
                  >
                    {s.name}
                  </h3>
                  <span
                    className={`shrink-0 font-display text-3xl font-light tracking-[0.02em] ${
                      s.featured ? "text-gold" : "text-espresso"
                    }`}
                  >
                    {s.price}
                  </span>
                </div>
                <p
                  className={`mt-5 font-body leading-relaxed ${
                    s.featured ? "text-cream/55" : "text-warm-gray"
                  }`}
                >
                  {s.desc}
                </p>
              </div>
              <Link
                href="/book"
                className={`mt-8 inline-flex h-11 items-center gap-2 self-start rounded-sm px-6 font-label text-[11px] uppercase tracking-[0.14em] transition-all duration-300 active:translate-y-px active:scale-[0.98] ${
                  s.featured
                    ? "bg-cream text-espresso hover:bg-gold hover:text-espresso"
                    : "bg-espresso text-cream hover:bg-gold hover:text-espresso"
                }`}
              >
                <span className="!text-red-600">Select{" "}
                <span className={s.featured ? "!text-red-600" : "!text-red-600"}>&rarr;</span></span>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 font-body text-sm leading-relaxed text-warm-gray"
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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-cream lg:text-5xl">
              About Puja
            </h2>
            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-cream/15" />
              <span className="font-label text-[9px] uppercase tracking-[0.28em] !text-red-600">BIO</span>
            </div>
          </div>
        </motion.div>
        <div className="grid gap-16 lg:grid-cols-[5fr,3fr] lg:gap-20">
          <div className="flex flex-col gap-7 font-body leading-relaxed text-cream/55">
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

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="my-4 border-l-2 border-gold py-2 pl-6"
            >
              <p className="font-display text-xl italic leading-relaxed text-cream">
                She chose the name Puja Foundation because her name means
                &ldquo;to pray,&rdquo; and she wanted the organization to
                represent the belief that prayers can be answered through
                compassion, generosity, and action.
              </p>
            </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24">
              <div
                className="aspect-[4/5] w-full bg-cream/5"
                role="img"
                aria-label="Portrait of Puja Dharod (non-copy)"
              >
                <div className="flex h-full flex-col items-center justify-center gap-3">
                  <span className="font-display text-6xl italic !text-red-600">P</span>
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] !text-red-600">
                    Professional Portrait
                  </span>
                </div>
              </div>
              <p className="mt-4 font-label text-[10px] uppercase tracking-[0.18em] !text-red-600">
                Puja Dharod (non-copy caption)
              </p>
            </div>
          </motion.div>
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
            <h2 className="max-w-lg font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-espresso lg:text-5xl">
              Education and Professional Development
            </h2>
            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-rule" />
              <span className="font-label text-[9px] uppercase tracking-[0.28em] !text-red-600">CRED</span>
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
          <p className="mt-1 font-body text-sm leading-relaxed text-warm-gray">
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

        <div className="mt-8 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATES.map((c, i) => (
            <motion.div
              key={c.prog}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-cream p-6 transition-colors hover:bg-mid-bg lg:p-7"
            >
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-espresso">
                {c.year}
              </span>
              <h4 className="mt-2 font-display text-sm font-medium leading-snug tracking-[0.02em] text-espresso">
                {c.inst}
              </h4>
              <p className="mt-1 font-body text-xs leading-relaxed text-warm-gray">
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
            Ready to Make Your Next Move?
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
            <h4 className="font-label text-[11px] font-medium uppercase tracking-[0.18em] !text-red-600">
              Navigation
            </h4>
            <div className="mt-4 flex flex-col gap-2">
              {["About", "Services", "Sessions"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="font-body text-sm !text-red-600 transition-colors hover:text-red-800"
                >
                  {l}
                </a>
              ))}
              <Link
                href="/book"
                className="font-body text-sm !text-red-600 transition-colors hover:text-red-800"
              >
                Book
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-label text-[11px] font-medium uppercase tracking-[0.18em] !text-red-600">
              Connect
            </h4>
            <div className="mt-4">
              <a
                href="mailto:puja@pujawatch.com"
                className="font-body text-sm !text-red-600 transition-colors hover:text-red-800"
              >
                puja@pujawatch.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-label text-[11px] font-medium uppercase tracking-[0.18em] text-warm-gray">
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
          <span className="font-label text-[9px] uppercase tracking-[0.28em] !text-red-600">
            PW - {y}
          </span>
        </div>
        <span className="mt-2 block font-label text-[10px] uppercase tracking-[0.16em] !text-red-600">
          &copy; {y} PujaWatch. All rights reserved.
        </span>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex h-64 w-full items-center justify-center">
          <span className="font-display text-[clamp(4rem,12vw,14rem)] font-bold uppercase leading-none tracking-[0.02em] text-espresso">
            PujaWatch
          </span>
        </div>
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
