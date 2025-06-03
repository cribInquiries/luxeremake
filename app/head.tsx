// app/head.tsx
import Script from "next/script";

export default function Head() {
  return (
    <>
      {/* === Charset & Viewport === */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="msvalidate.01" content="B0FAC79EC83471CFFCF9C038F16E0539" />

      {/* === Schema.org: Site Navigation === */}

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
                name: "Contact",
                url: "https://www.luxemanagements.com/contact",
              },
            ],
          }),
        }}
      />

      {/* === Schema.org: Organization, LocalBusiness, Services & BreadcrumbList === */}
      <Script
        id="ld-business-and-services"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                // Organization node for social profiles, logo, etc.
                "@type": "Organization",
                "@id": "https://www.luxemanagements.com/#organization",
                name: "Luxe Managements",
                url: "https://www.luxemanagements.com",
                logo: "https://www.luxemanagements.com/logo.png",
                sameAs: [
                  "https://www.facebook.com/luxemanagements",
                  "https://www.instagram.com/luxemanagements",
                  "https://www.tiktok.com/@luxe_managements",
                ],
              },
              {
                // LocalBusiness node with address, geo, hours
                "@type": "LocalBusiness",
                "@id": "https://www.luxemanagements.com/#localbusiness",
                name: "Luxe Managements",
                image: "https://www.luxemanagements.com/logo.png",
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
                parentOrganization: {
                  "@id": "https://www.luxemanagements.com/#organization",
                },
              },
              {
                // Service: Furnishing & Styling
                "@type": "Service",
                "@id":
                  "https://www.luxemanagements.com/services/furnishing-and-styling/#service",
                serviceType: "Furnishing & Styling",
                provider: {
                  "@id": "https://www.luxemanagements.com/#localbusiness",
                },
                url: "https://www.luxemanagements.com/services/furnishing-and-styling",
              },
              {
                // Service: Property Management
                "@type": "Service",
                "@id":
                  "https://www.luxemanagements.com/services/property-management/#service",
                serviceType: "Property Management",
                provider: {
                  "@id": "https://www.luxemanagements.com/#localbusiness",
                },
                url: "https://www.luxemanagements.com/services/property-management",
              },
              {
                // Service: Photography
                "@type": "Service",
                "@id":
                  "https://www.luxemanagements.com/services/photography/#service",
                serviceType: "Photography",
                provider: {
                  "@id": "https://www.luxemanagements.com/#localbusiness",
                },
                url: "https://www.luxemanagements.com/services/photography",
              },
              {
                // Service: Cleaning & Linen
                "@type": "Service",
                "@id":
                  "https://www.luxemanagements.com/services/cleaning-and-linen/#service",
                serviceType: "Cleaning & Linen",
                provider: {
                  "@id": "https://www.luxemanagements.com/#localbusiness",
                },
                url: "https://www.luxemanagements.com/services/cleaning-and-linen",
              },
              {
                // Generic BreadcrumbList (for site‐wide links). Consider overriding per page if you decide to scope breadcrumbs.
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
    </>
  );
}
