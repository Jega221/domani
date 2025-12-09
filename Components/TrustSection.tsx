// File: components/TrustSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const logos = [
  "/assets/cosco.svg",
  "/assets/maersk.svg",
  "/assets/cma.svg",
  "/assets/msc.svg",
  "/assets/pil.svg",
];

const TrustSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      y:  50,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 sm:px-10 lg:px-[140px] py-15 bg-[var(--color-white)] text-[var(--color-primary)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Text and avatars */}
        <div className="md:flex justify-between items-center mb-12 gap-10">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Experience the best logistics & <br className="hidden sm:block" /> stress-free customs clearance <br /> across Nigeria.
            </h2>

            <div className="flex items-center space-x-[-12px] mb-4">
              <Image src="/assets/avatar1.png" alt="User 1" width={40} height={40} className="rounded-full border-2 border-white" />
              <Image src="/assets/avatar2.png" alt="User 2" width={40} height={40} className="rounded-full border-2 border-white" />
              <Image src="/assets/avatar3.png" alt="User 3" width={40} height={40} className="rounded-full border-2 border-white" />
            </div>

            <p
              className="text-base text-[var(--color-gray)] max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Join hundreds of businesses who rely on us for there customs clearance  
              and transportation of goods.
            </p>
          </div>

          {/* CTA */}
          <Link href="/services">
            <button
              className="mt-8 lg:mt-16 border border-[var(--color-accent)] text-[var(--color-gray)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--color-accent)] hover:text-white transition cursor-pointer "
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore Services →
            </button>
          </Link>
        </div>

        <div className="mb-10">
          <h2>We clear shipments from ALL major shipping lines</h2>
        </div>

        {/* Logos centered under paragraph */}
        <div className="flex flex-wrap justify-center md:justify-center lg:justify-between gap-8 lg:gap-[50px]">
          {logos.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Partner ${idx + 1}`}
              width={35}
              height={35}
              className="object-contain sm:w-10 sm:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
