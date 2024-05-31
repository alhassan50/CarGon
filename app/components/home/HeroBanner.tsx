'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '@/framerVariants'

export default function HeroBanner() {
  return (
    <motion.div
        variants={fadeIn("up", 0.5, 0)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
    >
        <h2 className='mb-5 lg:text-[48px] x-lg:text-[52px]'>
            FLEXIBLE <span className='no whitespace-nowrap'>L<span className="hero-span-image inline-block w-[60px] h-[25px] md:h-[38px] md:w-[80px] rounded-full overflow-hidden"></span>GISTICS</span> & CARGO SERVICES
        </h2>

        <p className='text-lg mb-5 sm-lg:w-[90%]'>
            Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.
        </p>

        <form className='flex flex-wrap sm:flex-nowrap gap-3 mb-5 sm-lg:mb-[40px]'>
            <input 
                type='text'
                name='name'
                placeholder='Your tracking number'
                className='bg-[#f6f6f6] w-full mb-0 min-w-[100px]'
            />

            <button className='bg-primaryBlack hover:bg-white hover:text-primaryBlack border border-primaryBlack py-3 px-[34px] min-w-[200px] text-[#f6f6f6] mb-0'>
                Track your order
            </button>
        </form>
    </motion.div>
  )
}
