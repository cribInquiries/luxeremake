export interface Property {
  id: number
  title: string
  shortDescription: string
  description: string
  categories: string[]
  mainImage: string
  bedrooms: number
  bathrooms: number
  services?: string[]
  transformationStory?: {
    results: {
      occupancyRate: number
      annualGrossRevenue: number
    }
  }
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Beachside Villa",
    shortDescription: "Luxury property with ocean views and premium amenities",
    description:
      "Experience coastal living at its finest in this stunning beachside villa featuring ocean views, premium amenities, and luxurious finishes throughout.",
    categories: ["Property Management"],
    mainImage: "/modern-beachside-villa.jpg",
    bedrooms: 4,
    bathrooms: 3,
    services: ["Full Management", "Styling"],
  },
  {
    id: 2,
    title: "Contemporary Apartment",
    shortDescription: "Urban living with designer finishes and city views",
    description:
      "Modern urban apartment with designer finishes, city views, and premium location in the heart of the city.",
    categories: ["Styling", "Property Management"],
    mainImage: "/contemporary-apartment.jpg",
    bedrooms: 2,
    bathrooms: 2,
    services: ["Interior Design", "Styling"],
  },
  {
    id: 3,
    title: "Renovated Heritage Home",
    shortDescription: "Classic architecture with modern interior updates",
    description:
      "Beautifully renovated heritage home combining classic architecture with contemporary interior design and modern amenities.",
    categories: ["Renovation", "Styling"],
    mainImage: "/heritage-home.jpg",
    bedrooms: 3,
    bathrooms: 2,
    services: ["Renovation", "Interior Design"],
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    shortDescription: "Exclusive top-floor residence with panoramic views",
    description:
      "Exclusive penthouse offering panoramic city and ocean views, top-floor privacy, and world-class luxury amenities.",
    categories: ["Property Management", "Styling"],
    mainImage: "/luxury-penthouse.png",
    bedrooms: 3,
    bathrooms: 3,
    services: ["Property Management", "Styling"],
  },
  {
    id: 5,
    title: "Waterfront Estate",
    shortDescription: "Expansive property with private dock and landscaped gardens",
    description:
      "Magnificent waterfront estate featuring private dock, landscaped gardens, and unparalleled water views perfect for luxury living.",
    categories: ["Property Management"],
    mainImage: "/waterfront-estate.jpg",
    bedrooms: 5,
    bathrooms: 4,
    services: ["Full Management"],
  },
  {
    id: 6,
    title: "Minimalist Townhouse",
    shortDescription: "Clean lines and thoughtful design in a central location",
    description:
      "Contemporary townhouse with minimalist design, clean lines, and thoughtful architecture in a prime central location.",
    categories: ["Styling", "Renovation"],
    mainImage: "/minimalist-townhouse.jpg",
    bedrooms: 3,
    bathrooms: 2,
    services: ["Interior Design", "Renovation"],
  },
  {
    id: 7,
    title: "Coastal Retreat",
    shortDescription: "Coming Soon - Your property could be featured here",
    description:
      "Coming soon - This space is reserved for your property transformation success story with Luxe Managements.",
    categories: ["Property Management"],
    mainImage: "/coastal-retreat.png",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 8,
    title: "Urban Oasis",
    shortDescription: "Coming Soon - Your property could be featured here",
    description: "Coming soon - Let us showcase your property transformation and management success story.",
    categories: ["Styling"],
    mainImage: "/urban-oasis.jpg",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 9,
    title: "Future Transformation",
    shortDescription: "Let us showcase your success story",
    description: "This could be your property transformation story - Contact Luxe Managements to get started.",
    categories: ["Property Management"],
    mainImage: "/property-transformation.jpg",
    bedrooms: 0,
    bathrooms: 0,
  },
  {
    id: 10,
    title: "Future Transformation",
    shortDescription: "Let us showcase your success story",
    description: "This could be your property styling and management success story with Luxe Managements.",
    categories: ["Styling"],
    mainImage: "/property-styling.jpg",
    bedrooms: 0,
    bathrooms: 0,
  },
]

export function getPropertyById(id: number): Property | undefined {
  return properties.find((property) => property.id === id)
}
