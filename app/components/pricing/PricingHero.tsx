'use client'

import React from 'react'
import { motion } from 'framer-motion'

//framer variants
import { fadeIn } from '@/framerVariants'

export default function PricingHero() {
  return (
    <section className='pt-[60px]'>
        <motion.div 
            className='relative bg-primaryBlack p-5 xsm:p-10 xl:px-[50px] xl:py-[60px] x-lg:px-[80px] x-lg:py-[70px]'
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            <motion.div
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <h1 className='text-white text-center'>
                        Affordable transportation rates
                </h1>

                <p className='text-white text-lg text-center'>
                    Enjoy our pocket-friendly rates, delivering reliable transportation solutions without breaking the bank.
                </p>
            </motion.div>

            <div className='absolute hidden xsm:block bottom-0 left-0 h-[40px] w-[100] sm-lg:w-[150px] xl:w-[160px] xl:h-[60px] x-lg:w-[180px] bg-white'></div>
        </motion.div>
    </section>
  )
}
