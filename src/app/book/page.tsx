"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";

const SESSION_DETAILS = [
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

const WHAT_TO_INCLUDE = [
  {
    label: "Your Name",
    detail: "So Puja can address you personally.",
  },
  {
    label: "Your Email Address",
    detail: "Where your confirmation and any follow-up will be sent.",
  },
  {
    label: "Session Type",
    detail: "Let Puja know whether you'd like the 30-Minute Clarity Call ($222) or the 60-Minute Power Session ($444).",
  },
  {
    label: "What You'd Like to Focus On",
    detail:
      "Briefly describe the main topic, challenge, or goal you'd like to address. There's no need to write an essay — a few sentences is enough to help Puja prepare.",
  },
  {
    label: "Any Relevant Context",
    detail:
      "Optional: share any background that would help Puja understand your situation before the session (e.g., industry, current role, specific decisions you're weighing).",
  },
  {
    label: "Your Availability",
    detail:
      "Provide 2–3 windows of time that work for you, including your timezone. Puja will confirm a time that works.",
  },
];

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh bg-cream">
        {/* Hero strip */}
        <section className="bg-espresso px-6 pt-32 pb-20 md:px-14 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="relative h-2 w-2 rounded-full bg-gold">
                <div className="absolute inset-0 animate-ping rounded-full bg-gold opacity-30" />
              </div>
              <span className="font-accent text-[10px] uppercase tracking-[0.28em] text-cream/40">
                Book a Session
              </span>
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.06] tracking-[0.03em] text-cream lg:text-6xl">
              Let&rsquo;s Work Together
            </h1>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-cream/55">
              To book a private session with Puja, send an email with the
              details below. Puja will review your message personally and
              confirm your session within 1–2 business days.
            </p>
          </motion.div>
        </section>

        {/* Choose session */}
        <section className="px-6 py-20 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-light tracking-[0.03em] text-espresso">
                Choose Your Session
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-warm-gray">
                Both sessions provide the same personalized approach. Choose the
                amount of time based on how deeply you would like to explore
                your situation.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SESSION_DETAILS.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col bg-espresso p-8"
                >
                  <h3 className="font-display text-xl font-light tracking-[0.03em] text-cream">
                    {s.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-accent text-base font-light text-gold">$</span>
                    <span className="font-display text-4xl font-light tracking-[0.02em] text-cream">
                      {s.price.replace("$", "")}
                    </span>
                  </div>
                  <p className="mt-4 font-body text-sm leading-relaxed text-cream/55">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What to include */}
        <section className="border-t border-rule bg-mid-bg px-6 py-20 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-light tracking-[0.03em] text-espresso">
                What to Include in Your Email
              </h2>
              <p className="mt-2 font-body text-sm leading-relaxed text-warm-gray">
                Please include the following details when you reach out, so Puja
                can prepare for your session.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-col gap-0 divide-y divide-rule">
              {WHAT_TO_INCLUDE.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-10"
                >
                  <div className="w-full shrink-0 sm:w-52">
                    <span className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-espresso">
                      {item.label}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-warm-gray">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-espresso px-6 py-24 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-3xl font-light tracking-[0.03em] text-cream lg:text-4xl">
                Ready to Book?
              </h2>
              <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-cream/55">
                Send Puja an email with the details above and she will get back
                to you within 1–2 business days to confirm your session.
              </p>
              <a
                href="mailto:pdharod@sscpmanagement.com?subject=Session%20Booking%20Request&body=Hi%20Puja%2C%0A%0AI%20would%20like%20to%20book%20a%20session%20with%20you.%0A%0AName%3A%0ASession%20Type%3A%20(30-Minute%20Clarity%20Call%20%2F%2060-Minute%20Power%20Session)%0AWhat%20I%20want%20to%20focus%20on%3A%0ARelevant%20context%3A%0AAvailability%3A%0A%0AThank%20you!"
                className="mt-10 inline-flex h-12 items-center gap-3 rounded-sm bg-gold px-8 font-label text-[12px] font-medium uppercase tracking-[0.16em] text-espresso transition-all duration-300 hover:bg-cream active:translate-y-px active:scale-[0.98]"
              >
                Contact Me &rarr;
              </a>
              <p className="mt-6 font-body text-xs text-cream/30">
                pdharod@sscpmanagement.com
              </p>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-cream px-6 py-12 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl border-t border-rule pt-10">
            <h3 className="font-accent text-[10px] font-medium uppercase tracking-[0.2em] text-warm-gray">
              Important Information
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-warm-gray">
              Puja provides business and life strategy consulting, general
              financial education, and general investing education. Sessions do
              not include individualized investment recommendations, legal
              advice, tax advice, medical advice, or mental-health treatment.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
