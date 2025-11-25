"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function NorwoodEstateView() {
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

        <h1 className="text-5xl font-bold text-black mb-4">Norwood Estate</h1>
        <p className="text-xl text-gray-600 mb-12">A Premium Transformation</p>
      </div>
    </div>
  )
}
