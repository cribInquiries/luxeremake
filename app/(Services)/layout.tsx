import type React from "react"

import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer"
// app/services/page.tsx
import type { Metadata } from "next"
import Script from "next/script"

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "Our Services | Luxe Managements",
  description:
    "Explore our full suite of Airbnb property management services in Adelaide: hosting, styling, cleaning, guest care and more.",
  keywords: ["Airbnb Services", "Property Management Services", "Adelaide", "Luxe Managements"],
  openGraph: {
    title: "Our Services | Luxe Managements",
    description: "Hosting, styling, cleaning, and guest care—see how we maximise your Airbnb returns.",
    url: "/services",
    images: [
      {
        url: "/services/og-image.png",
        width: 1200,
        height: 630,
        alt: "Styled Airbnb interior by Luxe Managements",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Luxe Managements",
    description: "Hosting, styling, cleaning, and guest care—see how we maximise your Airbnb returns.",
    images: ["/services/og-image.png"],
  },
}
;<Script
  id="ld-service"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: ["Airbnb Management", "Airbnb Cleaning", "Short-Term Rental Management"],
      provider: {
        "@type": "LocalBusiness",
        name: "Luxe Managements",
        url: "https://www.luxemanagements.com",
      },
      areaServed: { "@type": "City", name: "Adelaide" },
      description: "Full-service Airbnb management, cleaning, photography & guest support in Adelaide.",
    }),
  }}
/>

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>

      <Footer />
    </>
  )
}

export default Layout
