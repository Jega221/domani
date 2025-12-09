"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/Components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const Process = () => {

return (
<section id="how-we-work" className="py-20 px-6 lg:px-[140px] bg-[#122741]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center text-balance">
            How We Clear Your Goods <br/> Step by Step
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Card className="process-card bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1e4d7b] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Document Review</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You share your invoice, packing list & bill of lading. We verify HS codes and required documents.
                </p>
              </CardContent>
            </Card>

            <Card className="process-card bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1e4d7b] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Pre-Arrival Assessment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We file PAAR and prepare everything before the vessel arrives.
                </p>
              </CardContent>
            </Card>

            <Card className="process-card bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1e4d7b] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Customs Clearance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We handle duties, releases, shipping line charges, and terminal processes.
                </p>
              </CardContent>
            </Card>

            <Card className="process-card bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#1e4d7b] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Final Delivery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your goods are delivered to your location. You get updates at every step.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

export default Process