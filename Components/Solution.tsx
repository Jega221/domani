"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Solution = () => {

    

  return (
    <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e4d7b] mb-8 text-center text-balance">
            Importing into Nigeria Shouldn't Be Stressful
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="problem-card bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
              <p className="text-xl font-semibold text-gray-800 mb-6">Most importers struggle with:</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Delayed clearance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Hidden charges</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Wrong HS code classification</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Poor communication</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Customs queries</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Demurrage eating profits</span>
                </div>
              </div>
            </div>

            <div className="problem-card bg-emerald-50 border-2 border-emerald-600 rounded-2xl p-8 md:p-12">
              <p className="text-xl font-bold text-gray-800 mb-4">The Solution:</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Domani Transport handles the entire process with transparency, accuracy, and speed, so you can focus on
                your business.
              </p>
            </div>
              </div>
            </div>
          </section>
        )
    }
    
    export default Solution
