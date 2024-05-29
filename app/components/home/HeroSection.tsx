import React from 'react'
import Image from 'next/image'

import {BRANDS} from '@/app/data/brands'

const FEATURES = [
    "Safe Packing",
    "Ship Everywhere",
    "Zero Risk",
    "In Time Delivery",
    "Cost Saving",
    "Fastest Shipping"
];

const TRANSPORTATION_COMPANY_DATA = [
    {
        title: "Total Warehouses",
        value: "180",
        append: "+"
    },
    {
        title: "Total Vehicles",
        value: "75",
        append: "+"
    },
    {
        title: "Total Countries",
        value: "80",
        append: "+"
    },
    {
        title: "Customers Review",
        value: "2K",
        append: "+"
    }
];

export default function HeroSection() {
  return (
    <section className='relative mx-auto pb-[0px] md:pb-[90px] pt-[50px] -mx-[15px] md:-mx-[20px] sm-lg:-mx-[30px] lg:-mx-[50px] x-lg:-mx-[70px]'>
        <div className='home-hero-content grid sm-lg:grid-cols-2 gap-[40px] xl:[70px] justify-center mb-5 xsm:mb-[40px] sm-lg:mb-[50px]'>
            <div className='order-2 sm-lg:order-1'>
                <div className='grid gap-[50px] sm-lg:gap-[90px]'>
                    <div className=''>
                        <h2 className='mb-5 lg:text-[48px] x-lg:text-[52px]'>
                            FLEXIBLE <span className='no whitespace-nowrap'>L<span className="hero-span-image inline-block w-[60px] h-[25px] md:h-[38px] md:w-[80px] rounded-full overflow-hidden"></span>GISTICS</span> & CARGO SERVICES
                        </h2>

                        <p className='text-lg mb-5 sm-lg:w-[90%]'>
                            Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.
                        </p>

                        <form className='flex flex-wrap sm:flex-nowrap gap-3 mb-5 sm-lg:mb-[40px]'>
                            <input 
                                type='text'
                                name='name'
                                placeholder='Your tracking number'
                                className='bg-[#f6f6f6] w-full mb-0 min-w-[100px]'
                            />

                            <button className='bg-primaryBlack py-3 px-[34px] min-w-[200px] text-[#f6f6f6] mb-0'>
                                Track your order
                            </button>
                        </form>

                        <div className='relative'>
                            <figure className='hidden -z-20 sm-lg:block absolute top-0 -ml-[30px] sm-lg:-ml-[50px]'>
                                <Image 
                                    src={'/path.svg'}
                                    alt=''
                                    width={840}
                                    height={416}
                                    className='w-full h-auto'
                                />
                            </figure>
                            <div className='sm-lg:pt-[120px]'>
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
                    <div className='relative sm-lg:text-white'>
                        <h2 className='mb-5 lg:text-[48px] x-lg:text-[52px] sm-lg:text-white'>
                            Powering logistics across business
                        </h2>
                        
                        <ul className='grid items-start justify-start xsm:grid-cols-2 gap-3 mb-[30px] mt-[24px]'>
                            {FEATURES.map(feature => (
                                <li key={feature} className='flex gap-3 items-center'>
                                    <figure>
                                        <Image 
                                            src={'/dot.svg'}
                                            alt=''
                                            width={25}
                                            height={25}
                                            className='w-[25px] h-[25px] hidden sm-lg:block'
                                        />
                                    </figure>
                                    <div className='bg-primaryBlack sm-lg:hidden w-[6px] h-[6px] rounded-[50%]'></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        <div className='flex gap-5 flex-wrap'>
                            <button className='bg-primaryBlue border border-primaryBlack text-white px-[34px] py-3 md:text-lg'>
                                Read more about
                            </button>
                            <div className='flex gap-2 items-center'>
                                <figure className='bg-[#f6f6f6] w-[40px] h-[40px] flex justify-center items-center rounded-[50%]'>
                                    <Image 
                                        src={'/tel-blue.svg'}
                                        alt='tel icon'
                                        className='w-6'
                                        width={24}
                                        height={24}
                                    />
                                </figure>
                                <div>
                                    <p className='text-lg sm-lg:text-white text-primaryBlack'>+91 123 456 789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className='z-30 order-1 sm-lg:order-2'>
                <figure className='-mt-[120px] sm-lg:-ml-[50px] sm-lg:-mr-[40px] sticky top-[-10px] md:-mt-[140px] sm-lg:-mt-[170px]'>
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
        
        <div className='mb-[30px] relative'>
            <div className='sm-lg:max-w-[70%] sm-lg:ml-auto'>
                <h4 className='mb-[10px] sm-lg:text-white'>
                    Transportation Company
                </h4>
                <ul className='grid xsm:grid-cols-2 sm-lg:grid-cols-4 gap-3 mt-[30px]'>
                    {TRANSPORTATION_COMPANY_DATA.map(data => (
                        <li key={data.title} className='grid items-center'>
                            <h2 className='mb-[10px] sm-lg:text-white'>
                                {data.value}<span className='text-primaryBlue'>{data.append}</span>
                            </h2>
                            <p className='sm-lg:text-white'>
                                {data.title}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
        <div className="hidden sm-lg:block hero-dark-bg-decoration absolute h-[620px]  bg-primaryBlack w-full -mx- bottom-[60px] -z-20"></div>

        <div className="hidden sm-lg:block feature-white-decoration absolute h-[120px] w-[21%] bottom-[10px] bg-white "></div>
    </section>
  )
}
