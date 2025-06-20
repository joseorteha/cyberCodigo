import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import QuoteCalculator from "@/components/QuoteCalculator";
import Process from "@/components/Process";
import Extras from "@/components/Extras";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Packages />
      <Portfolio />
      <FAQ />
      <QuoteCalculator />
      <Extras />
      <Process />
      <Testimonials />
    </>
  );
}
