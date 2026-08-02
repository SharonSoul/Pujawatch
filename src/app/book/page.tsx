import { CalendlyEmbed } from "@/components/CalendlyEmbed";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/pujawatch";

export default function BookPage() {
  return (
    <main className="min-h-dvh bg-cream">
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-24 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-light leading-[1.1] tracking-[0.02em] text-espresso lg:text-5xl">
            Book a Session
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-body leading-relaxed !text-red-600">
            Select a date and time below. You will receive a confirmation
            email with all the details.
          </p>
        </div>

        <CalendlyEmbed url={CALENDLY_URL} />

        <div className="mx-auto mt-16 max-w-lg border-t border-rule pt-10 text-center">
          <h3 className="font-label text-[11px] font-medium uppercase tracking-[0.18em] text-warm-gray">
            Important Information
          </h3>
          <p className="mt-3 font-body text-sm leading-relaxed text-warm-gray/70">
            Puja provides business and life strategy consulting, general
            financial education, and general investing education. Sessions do
            not include individualized investment recommendations, legal
            advice, tax advice, medical advice, or mental-health treatment.
          </p>
        </div>
      </div>
    </main>
  );
}
