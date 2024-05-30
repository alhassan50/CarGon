import React from 'react'
import Image from 'next/image'

import {PRICING_PLANS} from '@/app/data/pricing'

export default function Pricing() {
  return (
    <section className='pb-[40px] md:pb-[50px] sm-lg:pb-[70px] xl:pb-[100px] x-lg:pb-[150px]'>
        <div>
            <div className='mb-[40px]'>
                <h1 className='mb-[10px] text-center'>Pricing plans</h1>
            </div>

            <div>
                <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                    {
                        PRICING_PLANS.map(plan => (
                            <li className={`p-5 flex justify-between ${plan.plan === 'Advance' ? 'bg-primaryBlue lg:mb-[50px]' : 'bg-[#f6f6f6] lg:mt-[50px]'}`} key={plan.plan}>
                                <div className='grid gap-[20px] w-full'>
                                    <div>
                                        <h3 className={`text-[30px] mb-[20px] font-semibold ${plan.plan === 'Advance' ? 'text-white' : 'text-primaryBlack'}`}>
                                            {plan.plan}
                                        </h3>

                                        <h2 className={`mb-[10px] ${plan.plan === 'Advance' ? 'text-white' : 'text-primaryBlack'}`}>
                                            {plan.price}<span className='font-medium text-lg'>{plan.duration}</span>
                                        </h2>

                                        <hr className='bg-[#282dad] my-[20px]' />

                                        <ul className='grid gap-5'>
                                            {
                                                plan.features.map(feature => (
                                                    <li className='flex gap-2' key={feature}>
                                                        <figure>
                                                            <Image 
                                                                src={'/check.svg'}
                                                                alt=''
                                                                width={25}
                                                                height={25}
                                                                className={`w-[25px] h-[25px] ${plan.plan === 'Advance' ? 'hidden' : 'block'}`}
                                                            />

                                                            <Image 
                                                                src={'/dot.svg'}
                                                                alt=''
                                                                width={25}
                                                                height={25}
                                                                className={`w-[25px] h-[25px] ${plan.plan === 'Advance' ? 'block' : 'hidden'}`}
                                                            />
                                                        </figure>
                                                        <p className={`text-lg ${plan.plan === 'Advance' ? 'text-white' : 'text-primaryBlack'}`}>
                                                            {feature}
                                                        </p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <button className={`sm-lg:mt-[30px] w-full py-3 px-[34px] text-[#f6f6f6] ${plan.plan === 'Advance' ? 'bg-white text-primaryBlack' : 'bg-primaryBlack'}`}>
                                        Get Started
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}
