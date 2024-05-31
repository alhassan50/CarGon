'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//framer variants
import { flipX } from '@/framerVariants'

//data
import { SERVICES } from '@/app/data/services'

export default function Freights() {
  return (
    <section className='relative pb-[40px] md:pb-[50px] sm-lg:pb-[70px] xl:pb-[100px]'>
        <div className='grid gap-[30px] lg:gap-10 md:grid-cols-2 xl:grid-cols-3'>
            <motion.div
                variants={flipX}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <h2 className='mb-[10px]'>Transportation services hub</h2>
                <p className='mb-[10px] text-lg'>Explore our comprehensive range of transport services designed to move goods efficiently, reliably, and securely.</p>
            </motion.div>

            {
                SERVICES.map(service => (
                    <motion.div 
                        className='p-[30px] relative group overflow-hidden flex justify-between flex-col bg-[#f6f6f6] cursor-pointer' 
                        key={service.title}
                        variants={flipX}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure className='mb-[60px]'>
                            <Image 
                                src={service.image}
                                alt=''
                                width={483}
                                height={331}
                                className='transform scale-x-[-1] translate-x-32 -translate-y-32 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-500'
                            />
                        </figure>
                        <div>
                            <h4 className='mb-[10px] font-semibold text-[26px] xsm:text-[30px] md:text-[36px]'>
                                {service.title}
                            </h4>

                            <p className='text-lg'>
                                Weight: up to {service.weight}
                            </p>
                        </div>

                        <figure className='absolute flex justify-center items-center bg-white bottom-0 right-0 w-[80px] h-[80px]'>
                            <Image 
                                src={'/black-arrow.svg'}
                                alt='black arrow'
                                width={70}
                                height={70}
                                className='group-hover:-rotate-45 transition-all duration-500'
                            />
                        </figure>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}
