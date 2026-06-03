import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Industries from "@/components/Industries";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#06060A]">
      <Navbar />
      <Hero />
      <ServicesTicker />
      <Products />
      <Services />
      <Stats />
      <Industries />
      <CTASection />
      <Footer />
    </main>
  );
}
