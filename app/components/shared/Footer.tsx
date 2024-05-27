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
        <li key={page.to} className='text-lg hover:underline hover:text-white transition-all '>
            <Link href={page.to}>
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
        <div className='mx-[15px] md:mx-[30px] lg:mx-[50px]'>
            <div className='grid gap-[50px] md-lg:grid-cols-[1.75fr,1fr]'>
                <div>
                    <Logo theme='light' />
                    <div className='grid gap-[20px] md:grid-cols-3 mt-[30px]'>
                        <div>
                            <h4 className='text-[20px] text-white mb-[20px]'>Pages</h4>
                            <ul className='grid gap-[15px]'>
                                {renderFooterLinks(MAIN_PAGES)}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className='text-[20px] text-white mb-[20px]'>Utility Pages</h4>
                            <ul className='grid gap-[15px]'>
                                {renderFooterLinks(UTIL_PAGES)}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className='text-[20px] text-white mb-[20px]'>Contact info</h4>
                            
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
                                <h4 className='text-[20px] text-white mb-[20px]'>Follow us on</h4>

                                <ul className='flex gap-[15px]'>
                                    {renderSocialIcons}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mb-[60px] '>
                        <h1 className='text-white mb-[30px] leading-none md:text-[52px] lg:text-[52px]'> 
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
