"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    step: "SERVICE 01",
    icon: "/assets/customs-icon.png",
    title: "Expert Customs Clearance",
    desc: "We handle every aspect of customs—from tariff classification to duty management—ensuring fast, compliant cargo clearance with zero surprises.",
  },
  {
    step: "SERVICE 02",
    icon: "/assets/logistics.png",
    title: "Reliable Logistics & Transportation",
    desc: "Whether road, air, or sea, we deliver flexible, tracked freight services across Nigeria with unmatched efficiency and safety.",
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Need a tailored logistics solution?
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contact Our Experts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
