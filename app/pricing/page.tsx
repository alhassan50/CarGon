import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { SERVICES } from '../data/services'

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page"
};

export default function Pricing() {
  return (
    <main>
        <div>
            <section className='pt-[60px]'>
                <div className='relative bg-primaryBlack p-5 xsm:p-10 xl:px-[50px] xl:py-[60px] x-lg:px-[80px] x-lg:py-[70px]'>
                    <div>
                        <h1 className='text-white text-center'>
                                Affordable transportation rates
                        </h1>

                        <p className='text-white text-lg text-center'>
                            Enjoy our pocket-friendly rates, delivering reliable transportation solutions without breaking the bank.
                        </p>
                    </div>

                    <div className='absolute hidden xsm:block bottom-0 left-0 h-[40px] w-[100] sm-lg:w-[150px] xl:w-[160px] xl:h-[60px] x-lg:w-[180px] bg-white'></div>
                </div>
            </section>

            <section className='py-[40px] md:py-[50px] sm-lg:py-[70px] xl:py-[100px] x-lg:py-[150px]'>
                <div>
                    <ul className='grid items-stretch md:grid-cols-2 gap-5 sm-lg:gap-10 xlg:gap-[70px]'>
                        {
                            SERVICES.map(service => (
                                <Link href='/contact' key={service.title}>
                                    <li className='group bg-[#f6f6f6] h-full'>
                                        <div className='grid justify-between h-full gap-[50px]'>
                                            <div>
                                                <figure className='relative overflow-hidden'>
                                                    <Image 
                                                        src={service.servicePricingImage}
                                                        alt={service.title}
                                                        width={805}
                                                        height={740}
                                                        className='w-full h-auto group-hover:scale-[1.3] transition-all duration-500'
                                                    />

                                                    <div className='absolute w-full scale-x-0 h-full bg-[#18192e77] top-0 left-0 group-hover:scale-x-100 transition-all duration-500 origin-left'></div>
                                                </figure>

                                                <div className='px-10 pt-10'>
                                                    <div className='mb-10'>
                                                        <h2>
                                                            {service.title}
                                                        </h2>

                                                        <p className='text-lg text-[#545454]'>
                                                            {service.desc}
                                                        </p>
                                                    </div>
                                                    <ul className='grid gap-5'>
                                                        {
                                                            service.features.map(feature => (
                                                                <li key={feature} className='flex gap-2 items-center'>
                                                                    <figure>
                                                                        <Image 
                                                                            src={'/check.svg'}
                                                                            alt=''
                                                                            width={25}
                                                                            height={25}
                                                                            className=''
                                                                        />
                                                                    </figure>

                                                                    <p className='text-lg text-[#545454]'>
                                                                        {feature}
                                                                    </p>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                    
                                                </div>
                                            </div>

                                            <div className='flex items-end justify-between'>
                                                <button className='text-white font-medium text-xl py-[8px] px-[10px] xsm:p-[14px] xsm:text-[26px] md:px-[16px] sm-lg:text-[32px] xl:text-[38px] bg-primaryBlue'>
                                                    ${service.pricing.amount}<span className='text-lg'>{service.pricing.unit}</span>
                                                </button>

                                                <div className='bg-white w-[50px] h-[50px] sm-lg:w-[100px] sm-lg:h-[100px] flex justify-center items-center'>
                                                    <figure>
                                                        <Image 
                                                            src={'/arrow.svg'}
                                                            alt='black arrow'
                                                            width={50}
                                                            height={50}
                                                            className='w-[30px] h-auto sm-lg:w-[50px] group-hover:-rotate-45 transition-all duration-500'
                                                        />
                                                    </figure>
                                                </div>

                                            </div>

                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    </main>
  )
}
