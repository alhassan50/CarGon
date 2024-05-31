'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//framer variants
import { fadeIn } from '@/framerVariants'

export default function ServicesHero() {
  return (
    <section className='xsm:pt-[10px] md:pt-[20px] lg:pt-[40px] xl-pt-[60px] x-lg:pt-[80px]'>
        <div className='grid gap-[60px] sm-lg:gap-[30px] sm-lg:grid-cols-2 xl:gap-[80px]'>
            <motion.div 
                className='grid gap-5'
                variants={fadeIn("right", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <div>
                    <h1 className='mb-[10px]'>
                        Service <span className='text-primaryBlue'>excellence</span> achievers
                    </h1>

                    <p className='text-lg mb-[10px]'>
                        Their dedication, empathy, and commitment to service excellence make them the backbone of our organization, creating memorable moments that resonate with our customers.
                    </p>
                </div>

                <button className='bg-primaryBlue max-w-[200px] py-3 px-[34px] text-[#f6f6f6]'>
                    Contact Us
                </button>
            </motion.div>
            <motion.figure
                variants={fadeIn("left", 1, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <Image 
                    src={'/service-truck.png'}
                    alt='truck'
                    width={800}
                    height={362}
                    className='w-fill h-auto'
                />
            </motion.figure>
        </div>
    </section>
  )
}
