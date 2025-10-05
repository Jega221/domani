"use client";

import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      bodyRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.6, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative flex items-center min-h-[90vh] w-full overflow-hidden px-4 sm:px-6 md:px-10 lg:px-[140px]">
      {/* Optimized background image */}
      <Image
        src="/assets/hero-bg.png"
        alt="Cargo ship and containers representing international logistics"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
      />

      {/* Overlay (optional for contrast) */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[700px] text-left mx-auto lg:mx-0 text-white">
        <h2
          ref={titleRef}
          className="text-[3rem] sm:text-[2.5rem] md:text-[3rem] font-semibold leading-[1.2] mb-6 whitespace-pre-line break-words"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {`Imports Goods into Nigeria\nWithout Delays.`}
        </h2>

        <p
          ref={bodyRef}
          className="text-base sm:text-lg text-[var(--color-light)] mb-10 max-w-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          At Domani Transport, we specialize in efficient and compliant customs clearance and comprehensive logistics services across Nigeria.
        </p>

        <Link href="/contact">
          <button
            ref={buttonRef}
            className="bg-[var(--color-accent)] text-[var(--color-white)] px-6 py-3 rounded-full shadow-md text-base sm:text-lg hover:bg-opacity-90 transition flex items-center gap-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Let&apos;s talk now <span className="text-xl">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
