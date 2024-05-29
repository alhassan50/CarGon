import Blog from "./components/home/Blog";
import HeroSection from "./components/home/HeroSection";
import HowItWorks from "./components/home/HowItWorks";
import Mission from "./components/home/Mission";
import ServicesSection from "./components/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Mission />
      <HowItWorks />
      <Blog />
    </main>
  );
}
