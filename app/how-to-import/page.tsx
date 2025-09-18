// File: app/how-to-import/page.tsx
import { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Import & Export Customs Clearance Services — The Clearing Agent Nigeria',
  description: 'Comprehensive customs clearance services for import & export in Nigeria. We handle documentation, duty assessments, terminal deliveries & more —for vehicles, polyester, industrial, agricultural, energy sectors.',
  keywords: 'customs clearance Nigeria, import Nigeria, logistics Nigeria, Domani Transport',
  openGraph: {
    title: 'Domani Transport | Customs & Logistics in Nigeria',
    description: 'Hassle-free customs clearance, freight, and logistics services across Nigeria. Fast, reliable and efficient.',
    url: 'https://domanitransport.com/how-to-import',
    images: [{
      url: '/opengraph-image.png',
    }],
  }
}



const HowToImportPage = () => {
  return (
    <>
      {/* SEO for the How-To-Import page */}

      {/* Main content section */}
      <section className="bg-[var(--color-light)] px-6 sm:px-10 lg:px-[140px] py-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <h1
            className="text-3xl sm:text-4xl font-bold mb-16"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How to Import Goods to Nigeria
          </h1>

          {/* Introductory Paragraph */}
          <div className="space-y-6 text-[var(--color-black)]/80 text-left">
            <p>
              Navigating the import process into Nigeria can be complex due to various regulations and documentation. At Domani Transport, we simplify this journey for you, acting as your expert partner every step of the way. We handle the challenges so you can focus on your business.
            </p>
          </div>
          
          {/* Key Documents and Registrations Section */}
          <div className="mt-12 space-y-6 text-[var(--color-black)]/80 text-left">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Key Documents and Registrations
            </h2>
            <p>
              Before any goods can be imported, certain key registrations and documents are required to ensure full compliance with Nigerian law. Our team guides you through these essential steps:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>TIN (Tax Identification Number):</strong> A unique number for tracking and managing your business for tax purposes.
              </li>
              <li>
                <strong>Form M and PAAR:</strong> The Central Bank of Nigeria requires a Form M for all imports. We help you obtain this and the Pre-Arrival Assessment Report (PAAR) by submitting the necessary documents to the bank.
              </li>
              <li>
                <strong>SONCAP (Standards Organisation of Nigeria Conformity Assessment Programme):</strong> This certificate is mandatory for most regulated goods to ensure quality and safety. We assist with the registration and product certification process.
              </li>
            </ul>
          </div>

          {/* Specialized Importation Procedures Section */}
          <div className="mt-12 space-y-6 text-[var(--color-black)]/80 text-left">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Specialized Importation Procedures
            </h2>
            <p>
              The required documentation and permits can vary significantly depending on the type of goods you are importing. We provide tailored support for a range of products, ensuring a smooth and compliant process.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Polyester and Textiles:</strong> We guide you through the required SONCAP and other certifications for fabrics and textiles, ensuring a smooth process.
              </li>              
              <li>
                <strong>Vehicles and Automobiles:</strong> We assist with obtaining necessary registrations such as the VREG and SONCAP, ensuring all documentation is in order for swift clearance.
              </li>
              <li>
                <strong>Pharmaceuticals and Food Items:</strong> Our team guides you through specific requirements, including obtaining NAFDAC registration and Drug Sample Import Permits.
              </li>
              <li>
                <strong>Industrial Machinery and Technology:</strong> We handle the required certifications and permits for industrial, agricultural, and technological equipment.
              </li>
            </ul>
          </div>

          {/* Our Role Section */}
          <div className="mt-12 space-y-6 text-[var(--color-black)]/80 text-left">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Our Role: From Start to Finish
            </h2>
            <p>
              Our expertise covers a wide range of goods, from personal effects to large industrial machinery. We handle your customs clearance needs at major Nigerian ports like Apapa and Tincan Island in Lagos. We work closely with customs officials and stay updated on the latest regulations, using our knowledge to expedite the clearance process, minimize delays, and avoid unnecessary costs.
            </p>
          </div>

          {/* CTA at the bottom */}
          <div className="mt-16 text-center">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Simplify Your Import Process?
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
    </>
  );
};

export default HowToImportPage;
