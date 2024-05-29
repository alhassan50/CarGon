import Blog from "./components/home/Blog";
import HeroSection from "./components/home/HeroSection";
import Mission from "./components/home/Mission";
import ServicesSection from "./components/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Mission />
      <Blog />
    </main>
  );
}
