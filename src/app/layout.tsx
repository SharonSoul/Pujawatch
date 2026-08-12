import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="antialiased">
      <body className="font-body text-espresso bg-cream min-h-dvh">
        {children}
      </body>
    </html>
  );
}
