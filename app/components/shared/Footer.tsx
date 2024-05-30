import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'

//data
import { MAIN_PAGES } from '@/app/data/mainPages'
import { UTIL_PAGES } from '@/app/data/utilsPages'
import { SOCIAL_ICONS } from '@/app/data/socialIcons'
  

const renderFooterLinks = (pages: PageList) => {
    return pages.map(page => (
        <li key={page.to} className='text-lg flex justify-start items-start'>
            <Link href={page.to} className='hover:underline hover:text-white transition-all duration-300'>
                {page.title}
            </Link>
        </li>
    ))
}

const renderSocialIcons = SOCIAL_ICONS.map(icon => (
    <li key={icon.to} className='hover:translate-y-1 transition-all duration-300'>
        <Link href={icon.to}>
            <Image 
                src={icon.src}
                alt={icon.alt}
                className=''
                width={30}
                height={30}
            />
        </Link>
    </li>
))

export default function Footer() {
  return (
    <footer className='bg-[#18192e] text-[#b9b9b9] pt-[90px] pb-[40px]'>
        <div className='mx-[15px] md:mx-[30px] lg:mx-[50px] x-lg:mx-[70px]'>
            <div className='grid gap-[50px] md-lg:grid-cols-[1.75fr,1fr]'>
                <div>
                    <Logo theme='light' />
                    <div className='grid gap-[20px] md:grid-cols-3 mt-[30px] md:mt-[70px] mb-[90px]'>
                        <div>
                            <h4 className='text-[20px] text-white mb-[20px] font-semibold'>Pages</h4>
                            <ul className='grid gap-[15px]'>
                                {renderFooterLinks(MAIN_PAGES)}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className='text-[20px] text-white mb-[20px] font-semibold'>Utility Pages</h4>
                            <ul className='grid gap-[15px]'>
                                {renderFooterLinks(UTIL_PAGES)}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className='text-[20px] text-white mb-[20px] font-semibold'>Contact info</h4>
                            
                            <div className='mb-[60px] grid gap-5'>
                                <div className='flex gap-2 items-start'>
                                    <figure>
                                        <Image 
                                            src={'/location.svg'}
                                            alt='location icon'
                                            className='w-6'
                                            width={15}
                                            height={15}
                                        />
                                    </figure>
                                    <div>
                                        <p className='font-medium text-white'>Chicago HQ Estica Cop.</p>
                                        <p className='font-medium text-white'>Macomb, MI</p>
                                        <p className='font-medium text-white'>48042</p>
                                    </div>
                                </div>
                                
                                <div className='flex gap-2 items-center'>
                                    <figure>
                                        <Image 
                                            src={'/tel.svg'}
                                            alt='tel icon'
                                            className='w-6'
                                            width={15}
                                            height={15}
                                        />
                                    </figure>
                                    <div>
                                        <p className='font-medium text-white'>+91 123 456 789</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className='text-[20px] text-white mb-[20px] font-semibold'>Follow us on</h4>

                                <ul className='flex gap-[15px]'>
                                    {renderSocialIcons}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-base text-white mb-[20px] font-medium'>
                            Developed by Alhassan,&nbsp;
                            <Link href={'https://github.com/alhassan50/cargon'} target='_blank' className='inline underline'>
                               View Source Code
                            </Link>
                        </h4>
                    </div>
                </div>

                <div>
                    <div className='mb-[60px] '>
                        <h1 className='text-white mb-[30px] leading-tight text-[30px] xsm:text-[40px] sm:text-[48px] md:text-[52px] lg:text-[55px]'> 
                            We ship worldwide.
                            Ready to ship with us?
                        </h1>

                        <button className='bg-[#282dad] py-3 px-[34px] text-[#f6f6f6]'>
                            Ship your package
                        </button>
                    </div>

                    <figure>
                        <Image 
                            src='/map.png'
                            className=''
                            alt='map'
                            width={722}
                            height={320}
                        />
                    </figure>
                </div>
            </div>
        </div>
    </footer>
  )
}
