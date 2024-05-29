import React from 'react'
import Image from 'next/image'

import {BRANDS} from '@/app/data/brands'

export default function HeroSection() {
  return (
    <section className=' mx-auto pb-[0px] md:pb-[90px] pt-[50px]'>
        <div className='grid sm-lg:grid-cols-2 gap-[40px] xl:[70px] justify-center '>
            <div className='order-2 sm-lg:order-1'>
                <h2 className='mb-5 lg:text-[48px]'>
                    FLEXIBLE L<span className="hero-span-image inline-block w-[60px] h-[25px] md:h-[30px] md:w-[80px] rounded-full overflow-hidden"></span>GISTICS & CARGO SERVICES
                </h2>

                <p className='text-lg mb-5 sm-lg:w-[90%]'>
                    Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.
                </p>

                <div className='flex gap-3 flex-wrap mb-5 sm-lg:mb-[40px]'>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Your tracking number'
                        className='bg-[#f6f6f6] mb-0'
                    />

                    <button className='bg-primaryBlack py-3 px-[34px] text-[#f6f6f6] mb-0'>
                        Track your order
                    </button>
                </div>

                <div className='relative'>
                    <figure className='hidden sm-lg:block absolute top-0 -ml-[30px] sm-lg:-ml-[50px]'>
                        <Image 
                            src={'/path.svg'}
                            alt=''
                            width={840}
                            height={416}
                            className='w-full h-auto'
                        />
                    </figure>
                    <div className='pt-[120px]'>
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
                    </div>
                </div>

            </div>
            
            <div className='z-30 order-1 sm-lg:order-2'>
                <figure className='-mt-[120px] -ml-[50px] -mr-[40px] sticky top-[-10px] md:-mt-[140px] sm-lg:-mt-[170px]'>
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
    </section>
  )
}
