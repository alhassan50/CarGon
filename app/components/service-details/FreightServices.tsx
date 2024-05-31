import React from 'react'
import Image from 'next/image'

import { SERVICES } from '@/app/data/services'

export default function FreightServices() {
  return (
    <section className='py-[50px] md:py-[70px] lg:py-[100px]'>
            <div>
                <h2 className='text-center mb-[10px]'>
                    Related services
                </h2>

                <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3 '>
                    {
                        [...SERVICES].slice(0,3).map(service => (
                            <div className='p-[30px] relative group overflow-hidden flex justify-between flex-col bg-[#f6f6f6] cursor-pointer' key={service.title}>
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
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
  )
}
