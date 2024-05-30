import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import CTASection from '../components/services/CTASection'
import Pricing from '../components/services/Pricing'

export default function Services() {
  return (
    <main>
        <ServicesHero />
        <Pricing />
        <CTASection />
    </main>
  )
}
