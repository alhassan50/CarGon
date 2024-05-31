import React from 'react'

import DetailsHero from '../components/service-details/DetailsHero'
import ContactInfo from '../components/service-details/ContactInfo'
import Details from '../components/service-details/Details'
import FreightServices from '../components/service-details/FreightServices'

export default function ServiceDetails() {
  return (
    <main>
        <div className='max-w-[1400px] mx-auto'>     
            <DetailsHero />       
            <div className='grid gap-[20px] sm-lg:gap-10 xl:gap-[70px] x-lg:gap-[100px] sm-lg:grid-cols-[1fr,.5fr]'>
                <Details />
                <ContactInfo />
            </div>
            <FreightServices />
        </div>        
    </main>
  )
}
