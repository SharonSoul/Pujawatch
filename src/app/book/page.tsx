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
    label: "Your Full Name",
    detail: "Please provide your first and last name.",
  },
  {
    label: "Session",
    detail: "30-Minute Clarity Call ($222) or 60-Minute Power Session ($444)",
  },
  {
    label: "What You'd Like to Focus On",
    detail:
      "A brief overview of the topics, questions, challenges, or goals you want to cover during our time together.",
  },
  {
    label: "Anything Helpful for Puja to Know Before the Session (Optional)",
    detail:
      "Any background context, current business status, or specific circumstances that would help Puja prepare for your call.",
  },
  {
    label: "2–3 Available Times (Central Time)",
    detail:
      "A few dates and time windows that work best for your schedule in US Central Time (CT).",
  },
];

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh bg-cream">
        {/* Hero Header — Centered */}
        <section className="bg-espresso px-6 pt-28 pb-16 md:px-14 lg:px-20 md:pt-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-5 sm:mb-6 inline-flex items-center gap-3">
              <div className="relative h-2 w-2 rounded-full bg-gold">
                <div className="absolute inset-0 animate-ping rounded-full bg-gold opacity-30" />
              </div>
              <span className="font-accent text-[10px] uppercase tracking-[0.28em] text-cream/40">
                Book a Session
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-light leading-[1.06] tracking-[0.03em] text-cream lg:text-6xl">
              Let&rsquo;s Work Together
            </h1>
            <p className="mx-auto mt-4 sm:mt-5 max-w-xl font-body text-sm sm:text-base leading-relaxed text-cream/75 sm:text-lg">
              To book a private session with Puja, email the details below. Every
              inquiry is reviewed personally, and you&rsquo;ll receive a response
              within 1–2 business days.
            </p>
          </motion.div>
        </section>

        {/* Choose session */}
        <section className="px-6 py-16 sm:py-20 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-warm-gray/50">
                Tiers
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-light tracking-[0.03em] text-espresso lg:text-4xl">
                Choose Your Session
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-body text-sm sm:text-base leading-relaxed text-warm-gray">
                Both sessions offer the same personalized experience. Choose the session length that best fits the depth of guidance you&rsquo;re looking for.
              </p>
            </motion.div>

            <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2">
              {SESSION_DETAILS.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col justify-between bg-espresso p-7 sm:p-8 md:p-10"
                >
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-light tracking-[0.03em] text-cream">
                      {s.name}
                    </h3>
                    <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                      <span className="font-sans text-3xl sm:text-4xl font-light text-cream">$</span>
                      <span className="font-display text-3xl sm:text-4xl font-light tracking-[0.02em] text-cream">
                        {s.price.replace("$", "")}
                      </span>
                    </div>
                    <p className="mt-3 sm:mt-4 font-body text-xs sm:text-sm leading-relaxed text-cream/60">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What to include */}
        <section className="border-t border-rule bg-mid-bg px-6 py-16 sm:py-20 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-warm-gray/50">
                To Book:
              </span>
              <h2 className="mt-2 font-body text-base sm:text-lg font-normal text-espresso leading-relaxed">
                Please email{" "}
                <a
                  href="mailto:puja@pujawatch.com"
                  className="text-espresso font-semibold hover:text-warm-gray transition-colors cursor-pointer"
                >
                  puja@pujawatch.com
                </a>{" "}
                and include the following in your email:
              </h2>
            </motion.div>

            <div className="mt-8 sm:mt-10 flex flex-col divide-y divide-rule/60 border-y border-rule/60">
              {WHAT_TO_INCLUDE.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex flex-col gap-1.5 sm:gap-2 py-5 sm:py-6 sm:flex-row sm:gap-10 sm:items-baseline"
                >
                  <div className="w-full shrink-0 sm:w-72">
                    <span className="font-body text-sm sm:text-base font-semibold text-espresso tracking-normal">
                      {item.label}
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm leading-relaxed text-warm-gray">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream border-t border-rule px-6 py-20 sm:py-28 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.02em] text-espresso">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-md font-body text-sm sm:text-base leading-relaxed text-warm-gray">
                Click below to open your email client with the details pre-filled.
              </p>
              <a
                href="mailto:puja@pujawatch.com?subject=Private%20Session%20Booking%20Request&body=Hi%20Puja%2C%0A%0AI%20would%20like%20to%20book%20a%20private%20strategy%20session%20with%20you.%0A%0A1.%20Your%20Full%20Name%3A%0A%0A2.%20Session%3A%20%5B30-Minute%20Clarity%20Call%20(%24222)%20%2F%2060-Minute%20Power%20Session%20(%24444)%5D%0A%0A3.%20What%20You'd%20Like%20to%20Focus%20On%3A%0A%0A4.%20Anything%20Helpful%20for%20Puja%20to%20Know%20Before%20the%20Session%20(Optional)%3A%0A%0A5.%202%E2%80%933%20Available%20Times%20(Central%20Time)%3A%0A%0AThank%20you!"
                className="mt-8 sm:mt-10 inline-flex h-12 items-center justify-center gap-3 rounded-sm bg-espresso px-8 font-label text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-gold hover:text-espresso active:translate-y-px active:scale-[0.98] w-full sm:w-auto"
              >
                Contact Me &rarr;
              </a>
              <p className="mt-5 sm:mt-6 font-body text-xs sm:text-sm text-warm-gray/60">
                puja@pujawatch.com
              </p>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-cream px-6 py-10 sm:py-12 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl border-t border-rule pt-8 sm:pt-10">
            <h3 className="font-accent text-[10px] font-medium uppercase tracking-[0.2em] text-warm-gray">
              Important Information
            </h3>
            <p className="mt-3 font-body text-xs sm:text-sm leading-relaxed text-warm-gray">
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
