"use server";

import { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Our Services – Customs Clearance, Freight Forwarding & Logistics in Nigeria',
  description: 'Explore our services: import/export customs clearance, freight forwarding, ocean & air cargo handling, warehousing & logistics support across Nigeria.',
  keywords: 'customs clearance Nigeria, import Nigeria, logistics Nigeria, freight forwarding, clearance agent, clearance services, Domani Transport',
  openGraph: {
    title: 'Domani Transport | Customs & Logistics in Nigeria',
    description: 'Hassle-free customs clearance, freight, and logistics services across Nigeria. Fast, reliable and efficient.',
    url: 'https://domanitransport.com/services',
    images: [{
      url: '/opengraph-image.png',
    }],
  }
}


const services = [
  {
    step: "SERVICE 01",
    icon: "/assets/customs-icon.png",
    title: "Expert Customs Clearance",
    desc: "Domani Transport is your trusted partner for quick and legal customs clearance. With nearly ten years of experience, we handle all the complicated paperwork and rules to get your goods moving quickly and smoothly. Our team works hard to avoid delays and extra costs, ensuring your business gets the speed and compliance it needs. Whether you're importing or exporting, we have the expertise to make your shipping easier and give you peace of mind.",
    features: [
      "Accurate Tariff Classification & Valuation",
      "Efficient Duty & Tax Management",
      "Full Compliance with SONCAP, NAFDAC, and More",
      "Pre-Arrival Clearance and Fast Release",
    ],
  },
  {
    step: "SERVICE 02",
    icon: "/assets/logistics.png",
    title: "Reliable Logistics & Transportation",
    desc: "We offer reliable road freight services across Nigeria. We'll handle your deliveries from start to finish, ensuring your goods arrive safely and on time.",
    features: [
      "We prioritize the smooth and safe transit of your cargo.",
      "Our extensive reach covers all corners of Nigeria.",
      "We commit to the highest safety standards for all your goods.",
    ],
  },
];


const ServicesPage = () => {
  return (
    
    <section className="bg-[var(--color-light)] px-6 sm:px-10 lg:px-[140px] py-24">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Services
        </h2>

        {/* Service Grid */}
        <div className="grid gap-12 md:grid-cols-2 text-left">
          {services.map((service, idx) => (
            <div key={idx} className="space-y-4">
              <p className="uppercase text-sm tracking-widest text-[var(--color-black)]/70">
                {service.step}
              </p>
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="mb-2"
              />
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h3>
              <p
                  className="text-sm text-[var(--color-black)]/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.desc}
                </p>

                <ul className="list-disc list-inside text-sm text-[var(--color-black)]/80 space-y-1" style={{ fontFamily: "var(--font-body)" }}>
                  {service.features.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/how-to-import"
            className="inline-block bg-[var(--color-accent)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
            style={{ fontFamily: "var(--font-body)" }}
          >
            How to import →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
