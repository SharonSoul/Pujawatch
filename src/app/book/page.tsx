"use client";

import { useState } from "react";
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
        their situation, work through multiple factors, and develop a detailed
        plan of action.
      </>
    ),
  },
];

export default function BookPage() {
  const [name, setName] = useState("");
  const [session, setSession] = useState("30-Minute Clarity Call ($444)");
  const [times, setTimes] = useState("");
  const [focus, setFocus] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Private Session Request";
    const body = `Hi Puja,

I would like to book a private strategy session with you.

1. Your Full Name:
${name}

2. Session:
${session}

3. 2–3 Available Times (CST):
${times}

4. What You'd Like to Focus On:
${focus}

5. Anything Helpful for Puja to Know Before the Session (Optional):
${notes || "None"}

Thank you!`;

    const mailtoUrl = `mailto:puja@pujawatch.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

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
              fill out the details below.
            </p>
            <p className="mx-auto mt-2 sm:mt-2.5 max-w-lg font-body text-xs sm:text-sm leading-relaxed text-cream/55">
              Every inquiry is reviewed personally, and you&rsquo;ll receive<br />
              a response within 1–2 business days.
            </p>
          </motion.div>
        </section>

        {/* Choose session (Tiers info) */}
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
                  className="flex flex-col justify-between bg-espresso p-5 sm:p-6 md:p-8"
                >
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-light tracking-[0.03em] text-[#cca049]">
                      {s.name}
                    </h3>
                    <div className="mt-3 sm:mt-4 flex items-baseline gap-1">
                      <span className="font-sans text-xl sm:text-2xl font-light text-cream">$</span>
                      <span className="font-display text-xl sm:text-2xl font-light tracking-[0.02em] text-cream">
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

        {/* Interactive Booking Form */}
        <section className="border-t border-cream/10 bg-espresso px-6 py-20 sm:py-28 md:px-14 lg:px-20">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/40">
                Booking Request
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-light text-cream">
                Submit Your Details
              </h2>
              <p className="mx-auto mt-3 max-w-md font-body text-sm text-cream/65">
                Fill out the fields below, and click submit to generate your pre-filled email booking request.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Name */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-accent text-[10px] uppercase tracking-[0.2em] text-cream/60">
                  1. Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-sm border border-cream/15 bg-transparent px-4 py-3 font-body text-sm text-cream transition-all duration-300 placeholder:text-cream/30 focus:border-[#cca049] focus:outline-none"
                />
              </div>

              {/* Session Select */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-accent text-[10px] uppercase tracking-[0.2em] text-cream/60">
                  2. Choose Your Session
                </label>
                <div className="grid gap-4 sm:grid-cols-2 mt-1">
                  <div
                    onClick={() => setSession("30-Minute Clarity Call ($444)")}
                    className={`cursor-pointer border p-4 flex flex-col justify-center rounded-sm transition-all duration-300 ${
                      session === "30-Minute Clarity Call ($444)"
                        ? "border-[#cca049] bg-cream/5"
                        : "border-cream/10 bg-transparent hover:border-cream/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-light text-cream">30-Minute Clarity Call</span>
                      <div className={`h-3 w-3 rounded-full border flex items-center justify-center ${session === "30-Minute Clarity Call ($444)" ? "border-[#cca049]" : "border-cream/30"}`}>
                        {session === "30-Minute Clarity Call ($444)" && <div className="h-1.5 w-1.5 rounded-full bg-[#cca049]" />}
                      </div>
                    </div>
                    <span className="font-body text-xs text-[#cca049] mt-1">$444</span>
                  </div>

                  <div
                    onClick={() => setSession("60-Minute Power Session ($888)")}
                    className={`cursor-pointer border p-4 flex flex-col justify-center rounded-sm transition-all duration-300 ${
                      session === "60-Minute Power Session ($888)"
                        ? "border-[#cca049] bg-cream/5"
                        : "border-cream/10 bg-transparent hover:border-cream/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-light text-cream">60-Minute Power Session</span>
                      <div className={`h-3 w-3 rounded-full border flex items-center justify-center ${session === "60-Minute Power Session ($888)" ? "border-[#cca049]" : "border-cream/30"}`}>
                        {session === "60-Minute Power Session ($888)" && <div className="h-1.5 w-1.5 rounded-full bg-[#cca049]" />}
                      </div>
                    </div>
                    <span className="font-body text-xs text-[#cca049] mt-1">$888</span>
                  </div>
                </div>
              </div>

              {/* Times */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-accent text-[10px] uppercase tracking-[0.2em] text-cream/60">
                  3. 2–3 Available Times (CST)
                </label>
                <input
                  type="text"
                  required
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}
                  placeholder="e.g. Mon 2pm CST, Wed 10am CST"
                  className="w-full rounded-sm border border-cream/15 bg-transparent px-4 py-3 font-body text-sm text-cream transition-all duration-300 placeholder:text-cream/30 focus:border-[#cca049] focus:outline-none"
                />
              </div>

              {/* Focus Area */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-accent text-[10px] uppercase tracking-[0.2em] text-cream/60">
                  4. What You'd Like to Focus On
                </label>
                <textarea
                  required
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  placeholder="e.g. Business growth, lease negotiations, strategic marketing planning..."
                  className="w-full rounded-sm border border-cream/15 bg-transparent px-4 py-3 font-body text-sm text-cream transition-all duration-300 placeholder:text-cream/30 focus:border-[#cca049] focus:outline-none min-h-[100px] resize-y"
                />
              </div>

              {/* Optional Notes */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-accent text-[10px] uppercase tracking-[0.2em] text-cream/60">
                  5. Anything Helpful for Puja to Know Before the Session (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any background information, goals, or notes..."
                  className="w-full rounded-sm border border-cream/15 bg-transparent px-4 py-3 font-body text-sm text-cream transition-all duration-300 placeholder:text-cream/30 focus:border-[#cca049] focus:outline-none min-h-[100px] resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-3 rounded-sm bg-[#cca049] px-8 font-label text-[12px] font-medium uppercase tracking-[0.16em] text-espresso transition-all duration-300 hover:bg-cream hover:text-espresso active:translate-y-px active:scale-[0.98] w-full sm:w-auto cursor-pointer"
                >
                  Contact Me &rarr;
                </button>
                <p className="mt-5 font-body text-xs text-cream/55">
                  Clicking submits and pre-fills your email to: puja@pujawatch.com
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <FooterSection hideNav dark />
    </>
  );
}
