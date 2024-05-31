import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import CTASection from '../components/services/CTASection'
import Pricing from '../components/services/Pricing'
import HowItWorks from '../components/services/HowItWorks'
import Freights from '../components/services/Freights'

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Services",
  description: "Services page"
};

export default function Services() {
  return (
    <main>
        <ServicesHero />
        <HowItWorks />
        <Freights />
        <Pricing />
        <CTASection />
    </main>
  )
}
