import React from 'react'
import Image from 'next/image'

export default function DetailsHero() {
  return (
    <section className='pt-[20px] pb-[40px] xl:pt-[30px] xl:pb-[60px]'>
        <div className='relative bg-primaryBlack px-5 xsm:px-10 xl:px-[50px] py-[60px] x-lg:px-[80px] sm-lg:py-[0px]'>
            <div className='flex flex-wrap items-center justify-between'>
                <h1 className='text-white text-center'>
                        Air freight
                </h1>

                <figure className='h-[150px] w-auto md:h-[200px] sm-lg:h-[240px]'>
                    <Image 
                        src={'/air.svg'}
                        alt=''
                        width={483}
                        height={331}
                        className='transform scale-x-[-1] w-auto h-full'
                    />
                </figure>
            </div>

        </div>
    </section>
  )
}
