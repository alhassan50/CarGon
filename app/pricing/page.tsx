import React from 'react'
import { Metadata } from 'next';

//components
import PricingHero from '../components/pricing/PricingHero'
import FreightDetails from '../components/pricing/FreightDetails';

//data
export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page"
};

export default function Pricing() {
  return (
    <main>
        <div>
            <PricingHero />
            <FreightDetails />
            
        </div>
    </main>
  )
}
