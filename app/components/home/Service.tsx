import React from 'react'
import Image from 'next/image'

export default function Service({service, index}: {service: Service, index: number}) {
  return (
    <div className='grid justify-center items-center gap-5 md:grid-cols-[1fr,2fr,1fr,.25fr] pb-5 lg:pb-[40px]'>
        <div>
            <span className='mb-[16px] block text-[26px] text-primaryBlue font-semibold'>
                0{index} 
            </span>

            <p className='text-xl mb-[10px]'>
                {service.desc}
            </p>
        </div>

        <h2 className='text-center'>
            {service.title}
        </h2>

        <figure className=''>
            <Image 
                src={service.image}
                alt='arrow'
                width={205}
                height={140}
                className='w-[146px] h-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-[.6s]'
            />
        </figure>
            
        <figure className='flex justify-end'>
            <Image 
                src={'/arrow.svg'}
                alt='arrow'
                width={56}
                height={20}
            />
        </figure>
    </div>
  )
}
