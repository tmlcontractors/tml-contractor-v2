import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Reviews from "@/components/home/Reviews";
import CallToAction from "@/components/home/CallToAction";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <FeaturedProjects />
      <Reviews />
      <Contact />
      <CallToAction />
      <Footer />
    </>
  );
}