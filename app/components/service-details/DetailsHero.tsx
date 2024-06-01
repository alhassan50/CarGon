'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//framer variants
import { scaleCenter, fadeIn } from '@/framerVariants'

export default function DetailsHero() {
  return (
    <section className='pt-[20px] pb-[40px] xl:pt-[30px] xl:pb-[60px]'>
        <motion.div 
            className='relative bg-primaryBlack px-5 xsm:px-10 xl:px-[50px] py-[60px] x-lg:px-[80px] sm-lg:py-[0px]'
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}    
        >
            <div className='flex flex-wrap items-center justify-center xsm:justify-between'>
                <motion.h1 
                    className='text-white text-center'
                    variants={scaleCenter(0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                        Air freight
                </motion.h1>

                <motion.figure 
                    className='h-[150px] w-auto md:h-[200px] sm-lg:h-[240px]'
                    variants={fadeIn("left", .5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    <Image 
                        src={'/air.svg'}
                        alt=''
                        width={483}
                        height={331}
                        className='transform scale-x-[-1] w-auto h-full'
                    />
                </motion.figure>
            </div>

        </motion.div>
    </section>
  )
}
