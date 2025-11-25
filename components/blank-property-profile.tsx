"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export function BlankPropertyProfile() {
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

        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <Home className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Property Could Be Here</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This slot is reserved for our next transformation success story. Contact us to feature your property.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
