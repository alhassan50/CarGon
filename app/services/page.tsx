import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import CTASection from '../components/services/CTASection'
import Pricing from '../components/services/Pricing'
import HowItWorks from '../components/services/HowItWorks'
import Freights from '../components/services/Freights'

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
