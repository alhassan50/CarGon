'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

//data
import {SERVICES} from '@/app/data/services'
import Service from './Service'

//framer variant
import { ScaleUp, Scale } from '@/framerVariants'

const renderServices = SERVICES.map((service, index) => (
    <Link href={'/service-details'} key={service.title}>
        <li  
            className='border-b-[#18192e] border-b-2 cursor-pointer group opacity-50 hover:opacity-[100%] transition-all duration-300'
        >
            <Service index={index} service={service} />
        </li>
    </Link>
))

export default function ServicesSection() {
  return (
    <div className='-mx-[15px] md:-mx-[20px] sm-lg:-mx-[30px] lg:-mx-[50px] x-lg:-mx-[70px]'>
            <figure className='hidden sm-lg:block relative ml-auto -mt-[130px] mb-20 w-[75%]'>
                <Image 
                    src={'/path2.svg'}
                    alt=''
                    width={840}
                    height={416}
                    className='w-full h-auto right-0'
                />
            </figure>
        <section className='services-section-content pb-[50px] md:pb-[70px] lg:pb-[100px]'>
            <div className='mb-[30px]'>
                <motion.h2 
                    className='mb-[10px] text-[36px] xsm:text-[40x] md:text-[48px] xl:text-[52px]'
                    variants={Scale(0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    Shipping and Logistic services
                </motion.h2>
            </div>
            <motion.ul 
                className='grid gap-[30px] sm-lg:gap-[60px]'
                variants={ScaleUp(0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                {renderServices}
            </motion.ul>

        </section>
    </div>
  )
}
