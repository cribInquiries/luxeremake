import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg"
import houseTwoImg10 from "@/public/images/dalts/houseTwo/WEB/10.jpg"
import houseThreeImg10 from "@/public/images/dalts/houseThree/WEB/10.jpg"
import houseFourImg10 from "@/public/images/dalts/houseFour/WEB/10.jpg"
import houseFiveImg1 from "@/public/images/dalts/houseFive/WEB/1.jpg"
import houseSixImg1 from "@/public/images/dalts/houseSix/WEB/1.jpg"

export interface Property {
  id: number
  title: string
  shortDescription: string
  categories: string[]
  mainImage: string
  bedrooms: number
  bathrooms: number
  services?: string[]
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Beachside Villa",
    shortDescription: "Luxury property with ocean views and premium amenities",
    categories: ["Property Management"],
    mainImage: houseOneImg10.src,
    bedrooms: 4,
    bathrooms: 3,
    services: ["Full Management", "Styling"],
  },
  {
    id: 2,
    title: "Contemporary Apartment",
    shortDescription: "Urban living with designer finishes and city views",
    categories: ["Styling", "Property Management"],
    mainImage: houseTwoImg10.src,
    bedrooms: 2,
    bathrooms: 2,
    services: ["Interior Design", "Styling"],
  },
  {
    id: 3,
    title: "Renovated Heritage Home",
    shortDescription: "Classic architecture with modern interior updates",
    categories: ["Renovation", "Styling"],
    mainImage: houseThreeImg10.src,
    bedrooms: 3,
    bathrooms: 2,
    services: ["Renovation", "Interior Design"],
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    shortDescription: "Exclusive top-floor residence with panoramic views",
    categories: ["Property Management", "Styling"],
    mainImage: houseFourImg10.src,
    bedrooms: 3,
    bathrooms: 3,
    services: ["Property Management", "Styling"],
  },
  {
    id: 5,
    title: "Waterfront Estate",
    shortDescription: "Expansive property with private dock and landscaped gardens",
    categories: ["Property Management"],
    mainImage: houseFiveImg1.src,
    bedrooms: 5,
    bathrooms: 4,
    services: ["Full Management"],
  },
  {
    id: 6,
    title: "Minimalist Townhouse",
    shortDescription: "Clean lines and thoughtful design in a central location",
    categories: ["Styling", "Renovation"],
    mainImage: houseSixImg1.src,
    bedrooms: 3,
    bathrooms: 2,
    services: ["Interior Design", "Renovation"],
  },
  {
    id: 7,
    title: "Coastal Retreat",
    shortDescription: "Coming Soon - Your property could be featured here",
    categories: ["Property Management"],
    mainImage: "",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 8,
    title: "Urban Oasis",
    shortDescription: "Coming Soon - Your property could be featured here",
    categories: ["Styling"],
    mainImage: "",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 9,
    title: "Future Transformation",
    shortDescription: "Let us showcase your success story",
    categories: ["Property Management"],
    mainImage: "",
    bedrooms: 0,
    bathrooms: 0,
  },
  {
    id: 10,
    title: "Future Transformation",
    shortDescription: "Let us showcase your success story",
    categories: ["Styling"],
    mainImage: "",
    bedrooms: 0,
    bathrooms: 0,
  },
]
