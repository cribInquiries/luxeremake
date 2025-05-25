import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
// app/about/page.tsx
import { Metadata } from "next";

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "About Us | Luxe Managements",
  description:
    "Discover the team behind Luxe Managements, Adelaide’s trusted Airbnb property management experts.",
  keywords: [
    "Airbnb",
    "Property Management",
    "Adelaide",
    "Luxe Managements",
    "About Us",
  ],
  openGraph: {
    title: "About Us | Luxe Managements",
    description:
      "Meet the team and learn why Luxe Managements is Adelaide’s top choice for Airbnb hosts.",
    url: "/about",
    images: [
      {
        url: "/about/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team at Luxe Managements office",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Luxe Managements",
    description:
      "Meet the team and learn why Luxe Managements is Adelaide’s top choice for Airbnb hosts.",
    images: ["/about/og-image.jpg"],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>

      <FAQ type="general" />
      <Footer />
    </>
  );
};

export default Layout;
