import type { Metadata } from "next";
import { Gantari, Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "PujaWatch | Business & Life Strategy Consultant",
    description:
      "Gain clarity. Make stronger decisions. Create a life and business that reflect what you are truly capable of.",
    type: "website",
    siteName: "PujaWatch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gantari.variable} ${montserrat.variable} ${nunitoSans.variable} antialiased`}
    >
      <body className="font-body text-espresso bg-cream min-h-dvh">
        {children}
      </body>
    </html>
  );
}
