"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Property } from "@/lib/properties"

interface PropertyDetailViewProps {
  property: Property
}

export function PropertyDetailView({ property }: PropertyDetailViewProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/gallery"
          className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden">
            <Image
              src={property.mainImage || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-black mb-4">{property.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{property.shortDescription}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Bedrooms:</span>
                <span className="text-black">{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Bathrooms:</span>
                <span className="text-black">{property.bathrooms}</span>
              </div>
            </div>

            {property.services && property.services.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-black mb-4">Services</h2>
                <div className="flex flex-wrap gap-2">
                  {property.services.map((service, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-black mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {property.categories.map((category, index) => (
                  <span key={index} className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
