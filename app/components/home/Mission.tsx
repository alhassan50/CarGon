'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

//framer variants
import { fadeIn, flipX, scaleCenter } from '@/framerVariants'

export default function Mission() {
  return (
    <section className='max-w-[1280px] mx-auto pb-[50px] md:pb-[70px] lg:pb-[100px]'>
        <div className='grid sm-lg:grid-cols-2 gap-[40px] xl:[70px] justify-center'>
            <figure>
                <Image 
                    src={'/mission.jpg'}
                    alt=''
                    width={800}
                    height={800}
                    className='w-auto h-full'
                />
            </figure>

            <div className=''>
                <motion.h2 
                    className='text-left mb-[10px] text-[36px] xsm:text-[40px] md:text-[48px] xl:text-[52px]'
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    Seamless transport service connected to the world
                </motion.h2>

                <motion.p 
                    className='my-5'
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    At Corgon, we are driven by a steadfast commitment to revolutionize the transportation industry and deliver unparalleled services to our customers. Our overarching goal is to.
                </motion.p>

                <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] mb-5'>
                    <motion.div 
                        className='p-5 xsm:p-[30px] bg-[#f6f6f6]'
                        variants={flipX}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure>
                            <Image 
                                src={'/mission-icon.svg'}
                                alt=''
                                width={50}
                                height={50}
                                className='mb-[34px]'
                            />
                        </figure>

                        <h3 className="mb-[10px] text-lg xsm:text-[20px] md:text-[24px] font-medium">Our Mission</h3>

                        <p className='mb-[10px]'>Our mission is to consistently exceed expectations by providing reliable, efficient, and innovative transport solutions.</p>
                    </motion.div>
                    
                    <motion.div 
                        className='p-5 xsm:p-[30px] bg-[#f6f6f6]'
                        variants={flipX}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure>
                            <Image 
                                src={'/goal.svg'}
                                alt=''
                                width={50}
                                height={50}
                                className='mb-[34px]'
                            />
                        </figure>

                        <h3 className="'mb-[10px] text-lg xsm:text-[20px] md:text-[24px] font-medium">Our Goal</h3>

                        <p className='mb-[10px]'>From advanced tracking systems to smart logistics solutions, we are dedicated to pushing.</p>
                    </motion.div>
                </div>

                <Link href={'/about'}>
                    <motion.div
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <button 
                            className='bg-[#282dad] hover:translate-y-3 py-3 px-[34px] text-[#f6f6f6]'
                        >
                            Know more about us
                        </button>
                    </motion.div>
                </Link>
            </div>
        </div>
    </section>
  )
}
