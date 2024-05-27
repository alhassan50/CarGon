import React from 'react'

//components
import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'

export default function Contact() {
  return (
    <main className='contact-page '>
        <ContactHero />
        <ContactInfo />
    </main>
  )
}
