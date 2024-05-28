import React from 'react'

//component
import BrandCard from './BrandCard'

//data
import { BRANDS } from '@/app/data/brands'

const renderBrandCards = BRANDS.map(brand => (
    <li key={brand.brand}>
        <BrandCard brand={brand} />
    </li>
))

export default function BrandsSection() {
  return (
    <section className='max-w-[1200px] mx-auto pb-[50px] md:pb-[70px] lg:pb-[100px]'>
        <div className='mb-[30px] md:w-[80%] lg:w-[70%] text-center mx-auto'>
            <h2 className='mb-[10px] md:text-[48px] xl:text-[55px]'>
                Trusted by the world&apos;s best brands
            </h2>
        </div>
        <ul className='grid gap-[20px]  grid-cols-1 sm:grid-cols-2 sm-lg:grid-cols-3 lg:grid-cols-4'>
            {renderBrandCards}
        </ul>
    </section>
  )
}
