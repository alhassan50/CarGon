'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

//data
import {BRANDS} from '@/app/data/brands'

//framer variants
import { fadeIn, container, item } from '@/framerVariants';
import HeroBanner from './HeroBanner';

const FEATURES = [
    "Safe Packing",
    "Ship Everywhere",
    "Zero Risk",
    "In Time Delivery",
    "Cost Saving",
    "Fastest Shipping"
];

const TRANSPORTATION_COMPANY_DATA = [
    {
        title: "Total Warehouses",
        value: "180",
        append: "+"
    },
    {
        title: "Total Vehicles",
        value: "75",
        append: "+"
    },
    {
        title: "Total Countries",
        value: "80",
        append: "+"
    },
    {
        title: "Customers Review",
        value: "2K",
        append: "+"
    }
];

export default function HeroSection() {
    const { scrollYProgress } = useScroll();

    // Map scroll progress (0 to 1) to x-axis movement (e.g., 0 to 500px)
    const x = useTransform(scrollYProgress, [0, 1], [0, 700]);

     return (
        <section className='relative pb-[0px] md:pb-[90px] pt-[50px] -mx-[15px] md:-mx-[20px] sm-lg:-mx-[30px] lg:-mx-[50px] x-lg:-mx-[70px]'>
            <div className='home-hero-content grid sm-lg:grid-cols-2 gap-[40px] xl:[70px] justify-center mb-5 xsm:mb-[40px] sm-lg:mb-[50px]'>
                <div className='order-2 sm-lg:order-1'>
                    <div className='grid gap-[50px] sm-lg:gap-[90px]'>
                        <div className=''>
                            <HeroBanner />

                            <div className='relative'>
                                <motion.figure 
                                    className='hidden -z-20 sm-lg:block absolute top-0 -ml-[30px] sm-lg:-ml-[50px]'
                                    variants={fadeIn("right", 0.5, 0)}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0 }}
                                >
                                    <Image 
                                        src={'/path.svg'}
                                        alt=''
                                        width={840}
                                        height={416}
                                        className='w-full h-auto'
                                    />

                                    <motion.figure
                                        style={{
                                            x, // Apply the x-axis transformation
                                        }}
                                        className='absolute top-[15%] left-[35%]'
                                    >
                                        <Image 
                                            src={'/pathfinder.svg'}
                                            alt=''
                                            width={(840-350)}
                                            height={(416-350)}
                                            className='w-[120px] h-auto'
                                        />
                                    </motion.figure>
                                    

                                    
                                </motion.figure>
                                <motion.div 
                                    className='sm-lg:pt-[120px]'
                                    variants={fadeIn("up", 0.5, 0)}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0 }}
                                >
                                    <h4 className='text-lg mb-5'>Trusted By</h4>
                                    <ul className='flex flex-wrap gap-[30px]'>
                                        {[...BRANDS].slice(0, 4).map(brand => (
                                            <li key={brand.brand}>
                                                <figure>
                                                    <Image 
                                                        src={brand.image}
                                                        alt=''
                                                        width={brand.width}
                                                        height={brand.height}
                                                        className='w-[100px] h-[25px]'
                                                    />
                                                </figure>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                        <div className='relative sm-lg:text-white'>
                            <motion.h2 
                                className='mb-5 lg:text-[48px] x-lg:text-[52px] sm-lg:text-white'
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                            >
                                Powering logistics across business
                            </motion.h2>
                            
                            <motion.ul 
                                className='grid items-start justify-start xsm:grid-cols-2 gap-3 mb-[30px] mt-[24px]'
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                            >
                                {FEATURES.map(feature => (
                                    <motion.li key={feature} className='flex gap-3 items-center'>
                                        <figure>
                                            <Image 
                                                src={'/dot.svg'}
                                                alt=''
                                                width={25}
                                                height={25}
                                                className='w-[25px] h-[25px] hidden sm-lg:block'
                                            />
                                        </figure>
                                        <div className='bg-primaryBlack sm-lg:hidden w-[6px] h-[6px] rounded-[50%]'></div>
                                        {feature}
                                    </motion.li>
                                ))}
                            </motion.ul>
                            
                            <motion.div 
                                className='flex gap-5 flex-wrap'
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                            >
                                <Link href='/about'>
                                    <button className='bg-primaryBlue hover:translate-y-3 border border-primaryBlack text-white px-[34px] py-3 md:text-lg'>
                                        Read more about
                                    </button>
                                </Link>
                                <div className='flex gap-2 items-center'>
                                    <figure className='bg-[#f6f6f6] w-[40px] h-[40px] flex justify-center items-center rounded-[50%]'>
                                        <Image 
                                            src={'/tel-blue.svg'}
                                            alt='tel icon'
                                            className='w-6'
                                            width={24}
                                            height={24}
                                        />
                                    </figure>
                                    <div>
                                        <p className='text-lg sm-lg:text-white text-primaryBlack'>+91 123 456 789</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
                
                <div className='z-30 order-1 sm-lg:order-2'>
                    <figure className='-mt-[120px] sm-lg:-ml-[50px] sm-lg:-mr-[40px] sticky top-[-10px] md:-mt-[140px] sm-lg:-mt-[170px]'>
                        <Image 
                            src={'/hero-img.png'}
                            alt='hero'
                            width={1250}
                            height={940}
                            className='w-full'
                        />
                    </figure>
                </div>
            </div>
            
            <div className='mb-[30px] relative px-[15px] md:px-[20px] sm-lg:px-[30px] lg:px-[50px] x-lg:px-[70px]'>
                <div className='sm-lg:max-w-[50%] sm-lg:ml-auto'>
                    <motion.h4 
                        className='mb-[10px] sm-lg:text-white'
                        variants={fadeIn("right", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        Transportation Company
                    </motion.h4>
                    <motion.ul 
                        className='grid xsm:grid-cols-2 sm-lg:grid-cols-4 gap-3 mt-[30px]'
                        variants={container}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        {TRANSPORTATION_COMPANY_DATA.map(data => (
                            <motion.li 
                                key={data.title} className='grid items-center'
                                variants={item}
                            >
                                <h2 className='mb-[10px] sm-lg:text-white'>
                                    {data.value}<span className='text-primaryBlue'>{data.append}</span>
                                </h2>
                                <p className='sm-lg:text-white'>
                                    {data.title}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
            
            <div className="hidden sm-lg:block hero-dark-bg-decoration absolute h-[620px]  bg-primaryBlack w-full -mx- bottom-[60px] -z-20"></div>

            <div className="hidden sm-lg:block feature-white-decoration absolute h-[120px] w-[45%] bottom-[10px] bg-white "></div>
        </section>
  )
}
