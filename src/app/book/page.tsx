import { TallyEmbed } from "@/components/TallyEmbed";

const TALLY_FORM_ID =
  process.env.NEXT_PUBLIC_TALLY_FORM_ID || "n9jKjV";

export default function BookPage() {
  return (
    <main className="min-h-dvh bg-cream">
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-24 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 inline-block rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
            Demo Preview
          </div>
          <h1 className="font-display text-4xl font-light leading-[1.1] tracking-[0.02em] text-espresso lg:text-5xl">
            Book a Session
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-body leading-relaxed text-warm-gray">
            Fill out the form below so we can understand your needs. You will
            receive a confirmation email once submitted.
          </p>
        </div>

        <div className="relative rounded-sm border border-rule bg-white shadow-sm">
          <div className="border-b border-rule bg-cream px-6 py-4">
            <p className="font-accent text-[11px] font-medium uppercase tracking-[0.18em] text-warm-gray">
              Tally Form
            </p>
            <p className="mt-0.5 font-body text-xs leading-relaxed text-warm-gray/60">
              This is a sample Tally form embed. Replace{" "}
              <code className="rounded bg-warm-gray/10 px-1 py-px font-mono text-[11px]">
                NEXT_PUBLIC_TALLY_FORM_ID
              </code>{" "}
              in <code className="rounded bg-warm-gray/10 px-1 py-px font-mono text-[11px]">.env.local</code> with
              your real form ID to go live.
            </p>
          </div>
          <TallyEmbed formId={TALLY_FORM_ID} />
        </div>

        <div className="mx-auto mt-16 max-w-lg border-t border-rule pt-10 text-center">
          <h3 className="font-accent text-[11px] font-medium uppercase tracking-[0.18em] text-warm-gray">
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
