// app/page.tsx
import Hero from "@/Components/Hero";
import TrustSection from "@/Components/TrustSection";
import WhyDomani from "@/Components/WhyDomani";
import ServicesSection from "@/Components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <WhyDomani />
      <ServicesSection />
    </>
  );
}
