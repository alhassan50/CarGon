import React from 'react'
import Image from 'next/image'

//data
import {SERVICES} from '@/app/data/services'
import Service from './Service'

const renderServices = SERVICES.map((service, index) => (
    <li 
        key={service.title} 
        className='border-b-[#18192e] border-b-2 cursor-pointer group opacity-50 hover:opacity-[100%] transition-all duration-300'
    >
        <Service index={index} service={service} />
    </li>
))

export default function ServicesSection() {
  return (
    <div className='-mx-[15px] md:-mx-[20px] sm-lg:-mx-[30px] lg:-mx-[50px] x-lg:-mx-[70px]'>
            <figure className='hidden sm-lg:block relative ml-auto -mt-[130px] mb-20 w-[85%]'>
                <Image 
                    src={'/path2.svg'}
                    alt=''
                    width={840}
                    height={416}
                    className='w-full h-auto right-0'
                />
            </figure>
        <section className='services-section-content max-w-[1280px] mx-auto pb-[50px] md:pb-[70px] lg:pb-[100px]'>
            <div className='mb-[30px]'>
                <h2 className='mb-[10px] text-[36px] xsm:text-[40x] md:text-[48px] xl:text-[52px]'>
                    Shipping and Logistic services
                </h2>
            </div>
            <ul className='grid gap-[30px] sm-lg:gap-[60px]'>
                {renderServices}
            </ul>

        </section>
    </div>
  )
}
