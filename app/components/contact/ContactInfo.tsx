import React from 'react'

//components
import Info from './Info'
import ContactForm from './ContactForm'

export default function ContactInfo() {
  return (
    <section className='pb-[50px] md:pb-[70px] lg:pb-[100px]'>
        <div className='grid sm-lg:grid-cols-[.75fr,1fr]  gap-[50px] mb-[10px]'>
            <Info />
            <ContactForm />
        </div>
    </section>
  )
}
