// File: components/WhyDomani.tsx
"use server";

import Image from "next/image";

const features = [
  {
    icon: "/assets/speed.png",
    title: "Speed & Efficiency",
    description: "Minimize Demurrage, Accelerate Delivery",
  },
  {
    icon: "/assets/trust.png",
    title: "Transparency & Trust",
    description: "Clear Costs, Real-time Updates, No Surprises",
  },
  {
    icon: "/assets/expart.png",
    title: "Expert Compliance",
    description: "Navigate Regulations Flawlessly.",
  },
  {
    icon: "/assets/end.png",
    title: "End-to-End Solutions",
    description: "From Clearance to Nationwide Delivery.",
  },
];

const WhyDomani = () => {
  return (
    <section className="bg-[#122741] px-6 sm:px-10 lg:px-[140px] py-20">
      <div className="max-w-6xl mx-auto">
        <h2
  className="text-3xl sm:text-4xl text-white font-bold mb-12 max-w-2xl leading-snug">
  Why Domani Transport is Your <br className="hidden md:block" /> Best Choice
</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-white)] p-6 sm:p-10 flex flex-col items-start"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={320}
                height={160}
                className="mb-6 object-contain mx-auto"
              />
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#0047AB", fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-base text-[var(--color-gray)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDomani;
