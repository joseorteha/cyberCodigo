import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Methodology from "@/components/Methodology";
import FAQ from "@/components/FAQ";
import Extras from "@/components/Extras";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import('@/components/Testimonials'), { 
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Packages />
      <Portfolio />
      <Methodology />
      <Process />
      <FAQ />
      <Extras />
      <Testimonials />
    </>
  );
}
