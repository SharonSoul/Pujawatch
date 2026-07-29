# PujaWatch

Business & Life Strategy Consulting by **Puja Dharod**. A bespoke landing page for private one-on-one business and life strategy sessions.

## Stack

- **Next.js 16** — App Router, React Server Components, TypeScript
- **Tailwind CSS v4** — utility-first styling with brand design tokens
- **Motion** (Framer Motion) — scroll-driven hero animation, `whileInView` section reveals
- **GSAP** — entrance blur-reveal, staggered card fly-in, magnetic CTA
- **Three.js / React Three Fiber** — removed (kept plain brand background per client direction)
- **@phosphor-icons/react** — available (unused at current icon count)
- **Next Font** — Cormorant Garamond · Montserrat · Nunito Sans

## Brand

| Token | Hex |
|-------|-----|
| Cream (primary bg) | `#FFFDF6` |
| Espresso (text, contrast) | `#362923` |
| Warm Gray (body text) | `#8A7E74` |
| Mid (section bg) | `#F9F6EE` |
| Rule (hairlines) | `#EAE4D6` |

Typography: Cormorant Garamond (display), Montserrat (labels), Nunito Sans (body).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs to `.next/`.

## Deploy

Deployed on [Vercel](https://vercel.com). Connect the repo — no root-directory override needed since this is the repo root.
