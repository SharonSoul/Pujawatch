"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/LandingPage";

const SESSION_DETAILS = [
  {
    name: "30 Minute Clarity Call",
    price: "$444",
    desc: (
      <>
        A focused strategy session for clients who want guidance on a specific
        question, challenge, decision, or goal.
      </>
    ),
  },
  {
    name: "60 Minute Power Session",
    price: "$888",
    desc: (
      <>
        A deeper strategy session for clients who want time to fully explore
        their situation, work through multiple factors, and develop<br className="sm:hidden" />
        a detailed plan of action.
      </>
    ),
  },
];

const WHAT_TO_INCLUDE = [
  {
    title: "Your Full Name",
  },
  {
    title: "Pick Your Session:",
    bullets: [
      "30-Minute Clarity Call ($222)",
      "60-Minute Power Session ($444)",
    ],
  },
  {
    title: "2–3 Available Times (CST)",
  },
  {
    title: "What You'd Like to Focus On",
  },
  {
    title: (
      <>
        Anything Helpful for Puja to Know<br />
        Before the Session (Optional)
      </>
    ),
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
              <div className="relative h-2 w-2 rounded-full bg-[#cca049]">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#cca049] opacity-30" />
              </div>
              <span className="font-accent text-[10px] uppercase tracking-[0.28em] text-cream/40">
                Book a Session
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-light leading-[1.06] tracking-[0.03em] text-cream lg:text-6xl">
              Let&rsquo;s Work Together
            </h1>
            <p className="mx-auto mt-4 sm:mt-5 max-w-xl font-body text-sm sm:text-base leading-relaxed text-cream/80 sm:text-lg">
              To book a private session with Puja,<br />
              email the details below.
            </p>
            <p className="mx-auto mt-2 sm:mt-2.5 max-w-lg font-body text-xs sm:text-sm leading-relaxed text-cream/55">
              Every inquiry is reviewed personally, and you&rsquo;ll receive<br />
              a response within 1–2 business days.
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
                    <h3 className="font-display text-xl sm:text-2xl font-light tracking-[0.03em] text-[#cca049]">
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

        {/* What to include — Brown Background */}
        <section className="border-t border-cream/10 bg-espresso px-6 py-16 sm:py-20 md:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/40">
                To Book:
              </span>
              <h2 className="mt-2 font-body text-base sm:text-lg font-normal text-cream/90 leading-relaxed">
                Please include the following in your email:
              </h2>
            </motion.div>

            {/* List without sub-descriptions */}
            <div className="mx-auto mt-8 sm:mt-10 max-w-2xl flex flex-col divide-y divide-cream/15 border-y border-cream/15 text-left">
              {WHAT_TO_INCLUDE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex items-start gap-4 py-4 sm:py-5"
                >
                  <span className="font-accent text-xs sm:text-sm font-semibold text-cream/50 shrink-0 w-6 pt-0.5">
                    {i + 1}.
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-body text-sm sm:text-base font-semibold text-cream tracking-normal">
                      {item.title}
                    </span>
                    {item.bullets && (
                      <ul className="mt-1 flex flex-col gap-1 text-xs sm:text-sm font-medium text-cream/80">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#cca049] shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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
                Click below to open your email with<br />
                the details pre-filled.
              </p>
              <a
                href="mailto:puja@pujawatch.com?subject=Private%20Session%20Request&body=Hi%20Puja%2C%0A%0AI%20would%20like%20to%20book%20a%20private%20strategy%20session%20with%20you.%0A%0A1.%20Your%20Full%20Name%3A%0A%0A2.%20Session%3A%0A30-Minute%20Clarity%20Call%20(%24222)%20OR%0A60-Minute%20Power%20Session%20(%24444)%0A%0A3.%202%E2%80%933%20Available%20Times%20(CST)%3A%0A%0A4.%20What%20You'd%20Like%20to%20Focus%20On%3A%0A%0A5.%20Anything%20Helpful%20for%20Puja%20to%20Know%20Before%20the%20Session%20(Optional)%3A%0A%0AThank%20you!"
                className="mt-8 sm:mt-10 inline-flex h-12 items-center justify-center gap-3 rounded-sm bg-[#cca049] px-8 font-label text-[12px] font-medium uppercase tracking-[0.16em] text-espresso transition-all duration-300 hover:bg-espresso hover:text-cream active:translate-y-px active:scale-[0.98] w-full sm:w-auto"
              >
                Contact Me &rarr;
              </a>
              
              <p className="mt-5 sm:mt-6 font-body text-xs sm:text-sm text-warm-gray/60">
                puja@pujawatch.com
              </p>
            </motion.div>
          </div>
        </section>

      </main>
      <FooterSection hideNav dark />
    </>
  );
}
