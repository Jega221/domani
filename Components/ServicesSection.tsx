// File: components/ServicesSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";


const services = [
  {
    icon: "/assets/service1.png",
    title: "Custom Clearance",
    description: "Ensure legal compliance and reduce clearance times.",
  },
  {
    icon: "/assets/service2.png",
    title: "Clearance and Forwarding",
    description: "Get your cargo to its destination efficiently.",
  },
  {
    icon: "/assets/service3.png",
    title: "Consultancy",
    description: "We help you optimize logistics and avoid costly mistakes.",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-[140px] py-20 bg-[var(--color-white)]">
      <div className="max-w-6xl mx-auto">
        {/* Title & Paragraph */}
        <div className="mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Comprehensive Services
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl text-[var(--color-gray)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We offer a full spectrum of integrated logistics services, ensuring your cargo moves efficiently and compliantly through every stage of its journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#122741] flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "#000" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[var(--color-gray)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>
              <Link
                href="/services"
                className="mt-auto font-medium text-[var(--color-black)] hover:text-[var(--color-accent)] transition cursor-pointer inline-block"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Read more →
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
