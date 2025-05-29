/* eslint-disable import/no-unused-modules */
// app/services/page.tsx

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airbnb Property Management & Housekeeping in Adelaide | Luxe Managements",
  description:
    "Explore Luxe Managements’ full suite of Airbnb services in Adelaide—property management, housekeeping, photography, styling & guest care—to maximize your rental income and 5★ reviews.",
  keywords: [
    "Airbnb property management",
    "Airbnb housekeeping",
    "short-term rental management",
    "airbnb photography",
    "airbnb styling",
    "guest communication",
    "Adelaide",
    "Luxe Managements",
  ],
  alternates: { canonical: "https://www.luxemanagements.com/services" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Airbnb Property Management & Housekeeping in Adelaide | Luxe Managements",
    description:
      "Explore Luxe Managements’ full suite of Airbnb services in Adelaide—property management, housekeeping, photography, styling & guest care—to maximize your rental income and 5★ reviews.",
    url: "https://www.luxemanagements.com/services",
    siteName: "Luxe Managements",
    type: "website",
    images: [
      {
        url: "https://www.luxemanagements.com/services/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beautifully styled Airbnb living room by Luxe Managements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb Property Management & Housekeeping in Adelaide | Luxe Managements",
    description:
      "Explore Luxe Managements’ full suite of Airbnb services in Adelaide—property management, housekeeping, photography, styling & guest care—to maximize your rental income and 5★ reviews.",
    images: ["https://www.luxemanagements.com/services/og-image.png"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl py-12">
        {/* Page Heading */}
        <h1 className="mb-4 text-3xl font-bold">
          Airbnb Property Management & Housekeeping in Adelaide
        </h1>
        <p className="mb-8">
          Luxe Managements offers end-to-end Airbnb solutions—property management, turnover & housekeeping, professional photography, interior styling, and 5★ guest care—to help you earn more and stress less.
        </p>

        {/* Children could be a list of service cards, etc. */}
        <section className="grid gap-8 md:grid-cols-2">
          {children}
        </section>
      </main>

      {/* Structured Data: Service Schema */}
      <Script
        id="ld-service"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: [
              "Airbnb Property Management",
              "Airbnb Housekeeping",
              "Short-Term Rental Management",
              "Airbnb Photography",
              "Airbnb Styling",
              "Guest Communication",
            ],
            provider: {
              "@type": "LocalBusiness",
              name: "Luxe Managements",
              url: "https://www.luxemanagements.com",
            },
            areaServed: { "@type": "City", name: "Adelaide" },
            description:
              "Full-service Airbnb property management, housekeeping, photography, styling & guest support in Adelaide.",
          }),
        }}
      />

      <FAQ type="general" />
      <Footer />
    </>
  );
}
