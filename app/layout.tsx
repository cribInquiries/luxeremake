/* eslint-disable import/no-unused-modules */

/// if seo becomes that bad go back to the previous version of this file
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Metadata, type Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Loading from "./loading";
import LuxeAiAssistance from "@/components/luxeComponents/LuxeAiAssistance";

// Load Inter font with swap for performance and FOIT avoidance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Client-only Chakra provider with a loading fallback (SSR enabled)
const ClientProvider = dynamic(
  () => import("@/components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> },
);

// Define responsive viewport separately (Next.js 15+)

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Best Airbnb Management Adelaide | Luxe Managements",
  keywords: [
   "Airbnb Management Adelaide",
    "Short-Term Rentals",
    "Property Management",
    "Luxe Managements",
    "Guest Experience",
    "Airbnb Hosting Solutions",
    "Cleaning Services",
    "Photography Services",
  ],
  description:
    "Luxe Managements delivers top-rated Airbnb property management, housekeeping & guest support in Adelaide. Boost your rental income with expert hosting, professional photos, styling & 5 stars service.",
  metadataBase: new URL("https://www.luxemanagements.com"),
  alternates: { canonical: "https://www.luxemanagements.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: "https://www.luxemanagements.com",
    title: "Airbnb Property Management Adelaide",
    description:
  "Luxe Managements delivers top-rated Airbnb property management, housekeeping & guest support in Adelaide. Boost your rental income with expert hosting, professional photos, styling & 5 stars service.",
    siteName: "Luxe Managements",
    images: [
      {
        url: "https://www.luxemanagements.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luxe Managements Airbnb property management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb Property Management Adelaide",
    description:
  "Luxe Managements delivers top-rated Airbnb property management, housekeeping & guest support in Adelaide. Boost your rental income with expert hosting, professional photos, styling & 5 stars service.",
    images: ["https://www.luxemanagements.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      {/* Next.js will inject <head> tags (charset, viewport, meta) based on `metadata` & `viewport` exports */}
      <head />
      <body>
        {/* Structured data: site navigation */}
        <Script
          id="ld-navigation"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.luxemanagements.com/",
              name: "Luxe Managements",
              hasPart: [
                {
                  "@type": "SiteNavigationElement",
                  name: "Home",
                  url: "https://www.luxemanagements.com/",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Services",
                  url: "https://www.luxemanagements.com/services",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "About Us",
                  url: "https://www.luxemanagements.com/about",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Testimonials",
                  url: "https://www.luxemanagements.com/testimonials",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Contact",
                  url: "https://www.luxemanagements.com/contact",
                },
              ],
            }),
          }}
        />

        {/* Structured data: LocalBusiness + breadcrumbs */}
        <Script
          id="ld-business-and-breadcrumbs"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: "Luxe Managements",
                  image: "https://www.luxemanagements.com/logo.png",
                  "@id": "https://www.luxemanagements.com",
                  url: "https://www.luxemanagements.com",
                  telephone: "+61 123 456 789",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Adelaide",
                    addressRegion: "SA",
                    addressCountry: "AU",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -34.9285,
                    longitude: 138.6007,
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "09:00",
                      closes: "17:00",
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/luxemanagements",
                    "https://www.instagram.com/luxemanagements",
                    "https://www.tiktok.com/@luxe_managements",
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.luxemanagements.com/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Services",
                      item: "https://www.luxemanagements.com/services",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Furnishing & Styling",
                      item: "https://www.luxemanagements.com/services/furnishing-and-styling",
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: "Property Management",
                      item: "https://www.luxemanagements.com/services/property-management",
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      name: "Photography",
                      item: "https://www.luxemanagements.com/services/photography",
                    },
                    {
                      "@type": "ListItem",
                      position: 6,
                      name: "Cleaning & Linen",
                      item: "https://www.luxemanagements.com/services/cleaning-and-linen",
                    },
                    {
                      "@type": "ListItem",
                      position: 7,
                      name: "About",
                      item: "https://www.luxemanagements.com/about",
                    },
                    {
                      "@type": "ListItem",
                      position: 8,
                      name: "Testimonials",
                      item: "https://www.luxemanagements.com/testimonials",
                    },
                    {
                      "@type": "ListItem",
                      position: 9,
                      name: "FAQ",
                      item: "https://www.luxemanagements.com/faq",
                    },
                    {
                      "@type": "ListItem",
                      position: 10,
                      name: "Contact",
                      item: "https://www.luxemanagements.com/contact",
                    },
                  ],
                },
              ],
            }),
          }}
        />
<Script id="vercel-analytics" strategy="lazyOnload">
  <Analytics />
        <SpeedInsights />

</Script>
      
        <ClientProvider>
          <LuxeAiAssistance />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
