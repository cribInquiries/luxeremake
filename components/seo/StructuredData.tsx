import Script from "next/script"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.luxemanagements.com/#organization",
    name: "Luxe Managements",
    url: "https://www.luxemanagements.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.luxemanagements.com/logo.png",
      width: 300,
      height: 100,
    },
    image: "https://www.luxemanagements.com/logo.png",
    description: "Professional Airbnb Property Management in Adelaide, South Australia",
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Luxe Managements Team",
      },
    ],
    sameAs: [
      "https://www.facebook.com/luxemanagements",
      "https://www.instagram.com/luxemanagements",
      "https://www.tiktok.com/@luxe_managements",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-123-456-789",
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "Adelaide, South Australia",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.luxemanagements.com/#localbusiness",
    name: "Luxe Managements",
    image: "https://www.luxemanagements.com/logo.png",
    url: "https://www.luxemanagements.com",
    telephone: "+61 123 456 789",
    priceRange: "$$",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
    parentOrganization: {
      "@id": "https://www.luxemanagements.com/#organization",
    },
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Property Management",
    provider: {
      "@id": "https://www.luxemanagements.com/#localbusiness",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
      containedInPlace: {
        "@type": "State",
        name: "South Australia",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Property Management Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airbnb Property Management",
            description:
              "Complete Airbnb property management including guest communication, cleaning coordination, and listing optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property Styling & Furnishing",
            description: "Professional interior styling and furnishing services for short-term rental properties",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Photography",
            description: "High-quality property photography to showcase your rental listing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cleaning & Linen Services",
            description: "Professional cleaning and linen management for rental properties",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.luxemanagements.com/#website",
    url: "https://www.luxemanagements.com",
    name: "Luxe Managements",
    description: "Professional Airbnb Property Management in Adelaide",
    publisher: {
      "@id": "https://www.luxemanagements.com/#organization",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.luxemanagements.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
