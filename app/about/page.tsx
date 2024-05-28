import React from 'react'

//components
import AboutHero from '../components/about/AboutHero'
import ValuesSection from '../components/about/ValuesSection'; 
import BrandsSection from '../components/about/BrandsSection';
import AboutTeam from '../components/about/AboutTeam';



export default function About() {
  return (
    <main className='about-page '>
        <AboutHero />
        <ValuesSection />
        <AboutTeam />
        <BrandsSection />
    </main>
  )
}
