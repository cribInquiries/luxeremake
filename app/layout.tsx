// app/layout.tsx
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Loading from "./loading";
import LuxeAiAssistance from "@/components/luxeComponents/LuxeAiAssistance";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ClientProviderWithFallback = dynamic(
  () => import("@/components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> },
);

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "Luxe Managements | AirBnB Property Management in Adelaide",
  description:
    "Comprehensive AirBnB management services designed to maximize your rental income in Adelaide.",
  metadataBase: new URL("https://www.luxemanagements.com"),
  alternates: {
    canonical: "https://www.luxemanagements.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Luxe Managements | AirBnB Property Management Adelaide",
    description:
      "Expert AirBnB property management services in Adelaide – full hosting, cleaning, styling, and guest care.",
    url: "https://www.luxemanagements.com",
    siteName: "Luxe Managements",
    images: [
      {
        url: "https://www.luxemanagements.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Managements AirBnB property management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Managements | AirBnB Property Management Adelaide",
    description: "Expert AirBnB management – cleaning, styling & guest care.",
    images: ["https://www.luxemanagements.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// eslint-disable-next-line import/no-unused-modules
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        {/* Accessibility: Skip‐to‐Content */}

        {/* Performance: load non‐critical analytics after hydration */}
        <Analytics />
        <SpeedInsights />

        <ClientProviderWithFallback>
          <LuxeAiAssistance />

          {children}
        </ClientProviderWithFallback>
      </body>
    </html>
  );
}
