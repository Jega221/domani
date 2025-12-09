"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const buttonRef = useRef(null);
  const calcButtonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(bodyRef.current, { y: 40, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(buttonRef.current, { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.6, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(calcButtonRef.current, { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.8, duration: 1, ease: "power3.out" }
    );
  }, []);

  const scrollToCalculator = () => {
    const section = document.getElementById("calculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col lg:flex-row justify-center lg:px-[140px] lg:justify-between items-center min-h-[90vh] w-full overflow-hidden px-4 sm:px-6 md:px-10 lg:px-[100px] py-30 gap-10">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/assets/global-logistics-network-concept.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Left Text Content */}
      <div className="relative z-20 w-full max-w-[650px] text-left text-white">
        <h2
          ref={titleRef}
          className="
            text-[2.3rem]
            sm:text-[2.8rem]
            md:text-[3.2rem]
            font-semibold 
            leading-[1.2] 
            mb-6
          "
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Clear Your Goods in Nigeria. Fast, Safe and Without Hidden Charges
        </h2>

        <p
          ref={bodyRef}
          className="text-base sm:text-lg text-[var(--color-light)] mb-8 max-w-md"
          style={{ fontFamily: "var(--font-body)" }}
        >
          We help importers avoid delays, demurrage, and documentation problems.
          From port arrival to final delivery, we handle everything.
        </p>

        <div className="flex flex-wrap items-center gap-4">

          {/* Contact button */}
          <Link href="/contact">
            <button
              ref={buttonRef}
              className="
                bg-emerald-600 
                text-white 
                px-6 py-3 
                cursor-pointer  
                rounded-full 
                shadow-md 
                text-base sm:text-lg 
                hover:bg-emerald-700 
                transition 
                flex 
                items-center 
                gap-2
              "
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get a Free Quote <span className="text-xl">→</span>
            </button>
          </Link>

          {/* Cost calculator scroll button */}
          <button
            ref={calcButtonRef}
            onClick={scrollToCalculator}
            className="
              bg-white/85 
              text-emerald-700
              px-6 py-3 
              cursor-pointer 
              rounded-full 
              shadow-md 
              text-base sm:text-lg 
              hover:bg-white 
              transition 
              flex 
              items-center 
              gap-2
              backdrop-blur
            "
            style={{ fontFamily: "var(--font-body)" }}
          >
            Check Cost Estimate <span className="text-xl">↓</span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;
