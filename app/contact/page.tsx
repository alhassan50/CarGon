import React from 'react'
import { Metadata } from 'next'

//components
import ContactHero from '../components/contact/ContactHero'
import ContactInfo from '../components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact | Cargon',
}

export default function Contact() {
  return (
    <main className='contact-page '>
        <ContactHero />
        <ContactInfo />
    </main>
  )
}
