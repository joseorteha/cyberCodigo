import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import QuoteCalculator from "@/components/QuoteCalculator";
import Process from "@/components/Process";
import Extras from "@/components/Extras";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import('@/components/Testimonials'), { 
  ssr: false,
  // Opcional: puedes mostrar un esqueleto diferente o más simple aquí si quieres
  // loading: () => <p>Cargando testimonios...</p> 
});

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
