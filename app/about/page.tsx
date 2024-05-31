import React from 'react'
import { Metadata } from 'next';

//components
import AboutHero from '../components/about/AboutHero'
import ValuesSection from '../components/about/ValuesSection'; 
import BrandsSection from '../components/about/BrandsSection';
import AboutTeam from '../components/about/AboutTeam';

export const metadata: Metadata = {
  title: "About",
  description: "About page"
};


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
