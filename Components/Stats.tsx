"use client"

import { useRef } from "react"


const Stats = () => {
  const statRef = useRef<HTMLElement>(null)


    return (
      <section ref={statRef} className="py-20 px-6 bg-[#122741] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance">Our Track Record</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="stat-item text-center">
              <div className="stat-number text-5xl font-bold text-emerald-400 mb-2">1000+</div>
              <p className="text-gray-300">Containers Cleared Since 2020</p>
            </div>

            <div className="stat-item text-center">
              <div className="stat-number text-5xl font-bold text-emerald-400 mb-2">98%</div>
              <p className="text-gray-300">Clearance Success on First Submission</p>
            </div>

            <div className="stat-item text-center">
              <div className="stat-number text-5xl font-bold text-emerald-400 mb-2">20+</div>
              <p className="text-gray-300">Active Clients in Major Cities</p>
            </div>

            <div className="stat-item text-center">
              <div className="stat-number text-5xl font-bold text-emerald-400 mb-2">3-5</div>
              <p className="text-gray-300">Average Clearance Days</p>
            </div>

            <div className="stat-item text-center">
              <div className="stat-number text-5xl font-bold text-emerald-400 mb-2">100%</div>
              <p className="text-gray-300">Document Transparency</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Stats