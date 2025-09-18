import { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'How We Work – Customs Clearance Made Simple in Nigeria',
  description: 'Discover our step-by-step process for customs clearance, import, export & logistics in Nigeria. Transparent, reliable & compliant solutions tailored to your needs.',
  keywords: 'customs clearance Nigeria, import Nigeria, logistics Nigeria, freight forwarding, clearance agent, clearance services, Domani Transport',
  openGraph: {
    title: 'Domani Transport | Customs & Logistics in Nigeria',
    description: 'Hassle-free customs clearance, freight, and logistics services across Nigeria. Fast, reliable and efficient.',
    url: 'https://domanitransport.com/how-we-work',
    images: [{
      url: '/opengraph-image.png',
    }],
  }
}


const steps = [
  {
    step: "STEP 01",
    icon: "/assets/consultation.png",
    title: "Initial Consultation",
    desc: "We assess your cargo needs, destination, and delivery goals with expert guidance.",
  },
  {
    step: "STEP 02",
    icon: "/assets/document.png",
    title: "Documentation & Compliance",
    desc: "We handle all required paperwork, ensuring legal and smooth customs clearance.",
  },
  {
    step: "STEP 03",
    icon: "/assets/customs.png",
    title: "Swift Customs Clearance",
    desc: "Your cargo is processed efficiently with no delays or surprise charges.",
  },
  {
    step: "STEP 04",
    icon: "/assets/delivery.png",
    title: "Optimized Transport",
    desc: "We move your goods nationwide.",
  },
  {
    step: "STEP 05",
    icon: "/assets/tracking.png",
    title: "Tracking & Support",
    desc: "Real-time updates and support until your cargo safely arrives.",
  },
];

const HowWeWork = () => {
  return (

    <section className="bg-[var(--color-light)] px-6 sm:px-10 lg:px-[140px] py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold mb-16"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          How We Work
        </h2>

        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-3 text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-4">
              <p className="uppercase text-sm tracking-widest text-[var(--color-black)]/70">
                {step.step}
              </p>
              <Image
                src={step.icon}
                alt={step.title}
                width={48}
                height={48}
                className="mb-2"
              />
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm text-[var(--color-black)]/80 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h3
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Streamline Your Logistics?
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get Started →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
