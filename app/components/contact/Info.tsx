'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

//framer variants
import { fadeIn } from '@/framerVariants'

export default function Info() {
  return (
    <div className='grid gap-[30px]'>
        <motion.div
            variants={fadeIn("right", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            <h2 className='mb-[10px]'>
                Need any help?
            </h2>

            <p className='text-lg'>
                Contact us today, and our dedicated team will provide swift and tailored assistance to meet your transportation needs.
            </p>
        </motion.div>
        
        <motion.div
            variants={fadeIn("right", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            <h4 className='mb-[10px] font-[600]'>
                Opening Hours
            </h4>

            <p className='text-lg'>
                Monday to Friday: 9 pm to 6 pm
            </p>
            
            <p className='text-lg'>
                Sat-Sun: Close
            </p>
        </motion.div>
        
        <motion.div
            variants={fadeIn("right", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            <h4 className='mb-[10px] font-[600]'>
                Address
            </h4>

            <p className='text-lg'>
                Chicago HQ Estica Cop. Macomb,
            </p>
            
            <p className='text-lg'>
                MI 48042
            </p>
        </motion.div>
        
        <motion.div
            variants={fadeIn("right", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            <h4 className='mb-[10px] font-[600]'>
                Address
            </h4>

            <p className='text-lg'>
                +91 123 456 789
            </p>
            
            <p className='text-lg'>
                example@gmail.com
            </p>
        </motion.div>
        
        <motion.div 
            className='flex gap-[15px]'
            variants={fadeIn("right", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}    
        >
            <Link href={'#'}>
                <figure className='hover:translate-y-1 transition-all duration-300'>
                    <Image 
                        src={'/ig.svg'}
                        alt='instagram logo'
                        width={24}
                        height={24}
                    />
                </figure>
            </Link>
            
            <Link href={'#'}>
                <figure className='hover:translate-y-1 transition-all duration-300'>
                    <Image 
                        src={'/fb.svg'}
                        alt='instagram logo'
                        width={24}
                        height={24}
                    />
                </figure>
            </Link>
            
            <Link href={'#'}>
                <figure className='hover:translate-y-1 transition-all duration-300'>
                    <Image 
                        src={'/dribble.svg'}
                        alt='instagram logo'
                        width={24}
                        height={24}
                    />
                </figure>
            </Link>
            
            <Link href={'#'}>
                <figure className='hover:translate-y-1 transition-all duration-300'>
                    <Image 
                        src={'/tw.svg'}
                        alt='instagram logo'
                        width={24}
                        height={24}
                    />
                </figure>
            </Link>
        </motion.div>
    </div>
  )
}
