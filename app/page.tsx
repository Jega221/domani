// app/page.tsx
import Hero from "@/Components/Hero";
import TrustSection from "@/Components/TrustSection";
import WhyDomani from "@/Components/WhyDomani";
import ServicesSection from "@/Components/ServicesSection";
import SEOHead from "@/Components/SEOHead";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Domani Transport | Customs & Logistics in Nigeria"
        description="Hassle-free customs clearance, freight, and logistics services across Nigeria. Fast, reliable and efficient."
        keywords="customs clearance Nigeria, import Nigeria, logistics Nigeria, Domani Transport"
        url="https://domanitransport.com"
        image="/opengraph-image.png"
      />
      <Hero />
      <TrustSection />
      <WhyDomani />
      <ServicesSection />
    </>
  );
}
