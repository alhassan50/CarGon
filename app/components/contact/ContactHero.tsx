'use client'

import React from 'react'
import { motion } from 'framer-motion'

//framer variants
import { fadeIn } from '@/framerVariants'

export default function ContactHero() {
  return (
    <section className='contact-hero py-[30px] xsm:py-[40px] md:py-[50px] sm-lg:py-[90px]'>
        <div className='text-center max-w-[1200px] mx-auto'>
            <motion.h1 
                className='leading-tight mb-[10px]'
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                Get in touch for&nbsp;
                <span className='text-primaryBlue'>
                    logistics
                </span>
                &nbsp;needs
            </motion.h1>

            <motion.p 
                className='text-[#545454] text-lg mb-[10px] leading-[1.4em]'
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                Have inquiries about our transport solutions or need assistance with logistics, freight, or deliveries?
            </motion.p>
        </div>
    </section>
  )
}
