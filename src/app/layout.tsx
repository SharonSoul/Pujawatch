import type { Metadata } from "next";
import { Gantari, Montserrat } from "next/font/google";
import "./globals.css";

const gantari = Gantari({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-gantari",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pujawatch.com"),
  title: "PujaWatch | Business & Life Strategy Consultant",
  description:
    "Gain clarity. Make stronger decisions. Create a life and business that reflect what you are truly capable of.",
  keywords: [
    "business strategy consulting",
    "life coach",
    "executive coaching",
    "Puja Dharod",
    "PujaWatch",
  ],
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/icon.png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "PujaWatch | Business & Life Strategy Consultant",
    description:
      "Gain clarity. Make stronger decisions. Create a life and business that reflect what you are truly capable of.",
    type: "website",
    siteName: "PujaWatch",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${gantari.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PujaWatch",
              "url": "https://pujawatch.com",
              "logo": "https://pujawatch.com/logo.png",
              "image": "https://pujawatch.com/logo.png",
              "description": "Private Business & Life Strategy Sessions with Puja Dharod."
            })
          }}
        />
      </head>
      <body className="font-body text-espresso bg-cream min-h-dvh">
        {children}
      </body>
    </html>
  );
}
