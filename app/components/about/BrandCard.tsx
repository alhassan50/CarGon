import React from 'react'
import Image from 'next/image'

export default function BrandCard({brand}: {brand: Brand}) {
  return (
    <div className='bg-[#f6f6f6] py-[10px] px-5 x-lg:py-[20px] x-lg:px-5 flex justify-center items-center'>
        <figure>
            <Image 
                src={brand.image}
                alt={brand.brand}
                width={brand.width}
                height={brand.height}
                className='w-[150px] h-[36px]'
            />
        </figure>
    </div>
  )
}
