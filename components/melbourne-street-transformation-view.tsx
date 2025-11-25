"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Property } from "@/lib/properties"

interface MelbourneStreetTransformationViewProps {
  property: Property
}

export function MelbourneStreetTransformationView({ property }: MelbourneStreetTransformationViewProps) {
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

        <h1 className="text-5xl font-bold text-black mb-4">{property.title}</h1>
        <p className="text-xl text-gray-600 mb-12">Melbourne Street Transformation</p>

        <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src={property.mainImage || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  )
}
