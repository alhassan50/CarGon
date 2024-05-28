import Blog from "./components/home/Blog";
import Mission from "./components/home/Mission";
import ServicesSection from "./components/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <ServicesSection />
      <Mission />
      <Blog />
    </main>
  );
}
