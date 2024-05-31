import BlogSection from "./components/home/BlogSection";
import HeroSection from "./components/home/HeroSection";
import HowItWorks from "./components/home/HowItWorks";
import Mission from "./components/home/Mission";
import ServicesSection from "./components/home/ServicesSection";

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Home",
  description: "Home page"
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Mission />
      <HowItWorks />
      <BlogSection />
    </main>
  );
}
