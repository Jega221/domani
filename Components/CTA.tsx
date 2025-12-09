"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const CTA = () => {
  const ctaRef = useRef<HTMLElement>(null)

   
  return (
    <section ref={ctaRef} className="py-10 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Clear Your Goods?</h2>
        <p className="text-xl mb-10 text-emerald-50">We reply within 30 minutes during working hours.</p>
      </div>
    </section>
  )
}

export default CTA
