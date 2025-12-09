// app/page.tsx
import Hero from "@/Components/Hero";
import TrustSection from "@/Components/TrustSection";
import WhyDomani from "@/Components/WhyDomani";
import ServicesSection from "@/Components/ServicesSection";
import Solution from "@/Components/Solution";
import Process from "@/Components/Process";
import CaseStudy from "@/Components/CaseStudy";
import Stats from "@/Components/Stats";
import CTA from "@/Components/CTA";
import ImportCalculator from "@/Components/ImportCalculator";


export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <WhyDomani />
      <Solution/>      
      <Process/>
      <CaseStudy/>
      <Stats/>
      <ImportCalculator />
    </>
  );
}
