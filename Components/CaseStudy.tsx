"use client"
import { Card, CardContent} from "@/Components/ui/card"

import {
  Package,
  Truck,
  Globe,
  
} from "lucide-react"

import { useRef } from "react"

const CaseStudy = () => {
  const CaseStudy = useRef<HTMLElement>(null)
  
  const caseStudiesRef = useRef<HTMLElement>(null)

  return (
    <section ref={caseStudiesRef} className="py-20 px-6 bg-white lg:px-[140px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1e4d7b] mb-12 text-center text-balance">
          Recent Clearance Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="case-study-card border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Electronics Importer — Lagos</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Issue:</span> Customs query & wrong HS code
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Solution:</span> Reclassified, resubmitted documents
                </p>
                <p className="text-emerald-600 font-semibold">Result: Cargo released in 48 hours</p>
              </div>
            </CardContent>
          </Card>

          <Card className="case-study-card border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Furniture Importer — Kano</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Issue:</span> Cargo stuck due to unpaid terminal
                  charges
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Solution:</span> Settled charges, expedited clearance
                </p>
                <p className="text-emerald-600 font-semibold">Result: Saved ₦210,000 in extra demurrage</p>
              </div>
            </CardContent>
          </Card>

          <Card className="case-study-card border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Auto Parts Importer — Abuja</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Issue:</span> Long clearance delays with previous
                  agent
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Solution:</span> Full document review + direct customs
                  coordination
                </p>
                <p className="text-emerald-600 font-semibold">
                  Result: Reduced clearance time from 10 days to 4 days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
