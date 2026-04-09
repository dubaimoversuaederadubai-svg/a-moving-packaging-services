import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import PricingCalculator from "@/components/pricing-calculator";
import HowItWorks from "@/components/how-it-works";
import WhyChooseUs from "@/components/why-choose-us";
import Gallery from "@/components/gallery";
import Fleet from "@/components/fleet";
import PackingMaterials from "@/components/packing-materials";
import MapSection from "@/components/map-section";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <PricingCalculator />
        <HowItWorks />
        <PackingMaterials />
        <WhyChooseUs />
        <Gallery />
        <Fleet />
        <MapSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
