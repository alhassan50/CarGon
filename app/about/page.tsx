import React from 'react'
import Image from 'next/image';

//components
import AboutHero from '../components/about/AboutHero'
import ValuesSection from '../components/about/ValuesSection'; 
import BrandsSection from '../components/about/BrandsSection';

export default function About() {
  return (
    <main className='about-page '>
        <AboutHero />
        <ValuesSection />
        <BrandsSection />
    </main>
  )
}
