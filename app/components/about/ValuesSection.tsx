import React from 'react'

//components
import ValuesCard from './ValuesCard'

//data
import { OUR_VALUES } from '@/app/data/ourValues'

const renderValuesCards = OUR_VALUES.map(value => (
    <li key={value.title}>
        <ValuesCard value={value} />
    </li>
))

export default function ValuesSection() {
  return (
    <section className='max-w-[1280px] mx-auto pb-[50px] md:pb-[70px] lg:pb-[100px]'>
        <div className='mb-[30px] grid gap-[10px] md:grid-cols-2 md:gap-[30px] sm-lg:gap-[40px] xl:gap-[100px]'>
            <h2 className='mb-[10px] md:text-[48px] xl:text-[55px]'>
                The values steering every decision
            </h2>

            <p className='mb-[10px] text-lg'>
                These values drive our actions, decisions, and interactions daily, ensuring that every step we take aligns with our core principles. They are more than just guidelines; they are the essence of who we are and the driving force behind everything we do.
            </p>
        </div>
        <ul className='grid gap-[20px] md:grid-cols-2 sm-lg:grid-cols-3'>
            {renderValuesCards}
        </ul>
    </section>
  )
}
