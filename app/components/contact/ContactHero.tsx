import React from 'react'

export default function ContactHero() {
  return (
    <section className='contact-hero py-[30px] xsm:py-[40px] md:py-[50px] sm-lg:py-[90px]'>
        <div className='text-center max-w-[1200px] mx-auto'>
            <h1 className='leading-tight mb-[10px]'>
                Get in touch for&nbsp;
                <span className='text-primaryBlue'>
                    logistics
                </span>
                &nbsp;needs
            </h1>

            <p className='text-[#545454] text-lg mb-[10px] leading-[1.4em]'>
                Have inquiries about our transport solutions or need assistance with logistics, freight, or deliveries?
            </p>
        </div>
    </section>
  )
}
