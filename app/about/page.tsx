// File: app/about/page.tsx
"use server";

import Image from "next/image";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-[140px] py-28 bg-[var(--color-white)] text-[var(--color-primary)]">
      {/* Heading + Intro */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-24 items-center">
        {/* Left: Image */}
        <div>
          <Image
            src="/assets/about-img.png"
            alt="Domani team at work"
            width={500}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right: Heading + Paragraph */}
        <div>
          <h1
            className="text-3xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About Domani Transport Nig Ltd
          </h1>
          <p className="text-lg leading-relaxed text-[var(--color-gray)]" style={{ fontFamily: "var(--font-body)" }}>
            Established in 2019, Domani Transport Nig Ltd was founded with a clear vision: to revolutionize customs clearance and transportation services for businesses operating in Nigeria. We recognized the critical need for a reliable, transparent, and efficient partner who could navigate the complexities of local and international trade, ensuring seamless cargo movement from origin to final delivery.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-24 items-center">
        {/* Left: Mission + Vision */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Our Mission
          </h2>
          <p className="text-base mb-6 text-[var(--color-gray)]" style={{ fontFamily: "var(--font-body)" }}>
            To empower Nigerian businesses by delivering unparalleled customs clearance, freight forwarding, and haulage services, committed to minimizing delays, optimizing costs, and ensuring regulatory compliance.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Our Vision
          </h2>
          <p className="text-base text-[var(--color-gray)]" style={{ fontFamily: "var(--font-body)" }}>
            To be the leading and most trusted integrated logistics and customs clearance provider in Nigeria, renowned for our unwavering commitment to efficiency, transparency, and client success.
          </p>
        </div>

        {/* Right: Image */}
        <div>
          <Image
            src="/assets/mission-img.png"
            alt="Mission and vision"
            width={500}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-heading)" }}>
          Our Values
        </h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Integrity", desc: "Unwavering honesty and transparency." },
            { title: "Efficiency", desc: "Streamlined processes, swift results." },
            { title: "Expertise", desc: "Deep knowledge of Nigerian customs laws and logistics." },
            { title: "Client-Centricity", desc: "Personalized solutions, prioritizing your success." },
            { title: "Reliability", desc: "Delivering on promises, ensuring safe and timely cargo handling." },
          ].map((value, idx) => (
            <li key={idx} className="p-4 bg-[var(--color-light)] rounded shadow">
              <h3 className="font-bold mb-2 text-[var(--color-primary)]" style={{ fontFamily: "var(--font-heading)" }}>{value.title}</h3>
              <p className="text-sm text-[var(--color-gray)]" style={{ fontFamily: "var(--font-body)" }}>{value.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Advantage */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          What Makes Us Different
        </h2>
        <p className="text-base text-[var(--color-gray)]" style={{ fontFamily: "var(--font-body)" }}>
          At Domani Transport Nig Ltd, we go beyond basic service. Our proactive approach, meticulous attention to detail, and extensive network with shipping lines (Maersk, Cosco, PIL, MSC, etc.) and port authorities enable us to anticipate and mitigate challenges before they impact your operations. We leverage cutting-edge technology and experienced personnel to provide a truly seamless, end-to-end logistics solution.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/contact" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white font-medium rounded-full hover:bg-opacity-90 transition">
          Contact Our Experts
        </Link>
      </div>
    </section>
  );
};

export default AboutUsPage;
