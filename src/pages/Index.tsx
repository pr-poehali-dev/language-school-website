import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import Approach from "@/components/Approach";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProcessSteps />
        <Approach />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
