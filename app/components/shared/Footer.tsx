import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MAIN_PAGES = [
    {
        title: 'Home',
        to: '/',
    },
    
    {
        title: 'Home 2',
        to: '/home-2',
    },
    
    {
        title: 'About',
        to: '/about',
    },
    
    {
        title: 'Services',
        to: '/services',
    },
    
    {
        title: 'Service Details',
        to: '/service-details',
    },
    
    {
        title: 'Team',
        to: '/team',
    },
    
    {
        title: 'Contact',
        to: '/contact',
    },
    
    {
        title: 'Blog',
        to: '/blog',
    },
]

const UTIL_PAGES = [
    {
        title: 'Style Guide',
        to: '/style-guide',
    },
    
    {
        title: 'Instructions',
        to: '/instructions',
    },
    
    {
        title: 'Licenses',
        to: '/licenses',
    },
    
    {
        title: 'Changelog',
        to: '/changelog',
    },
    
    {
        title: 'Coming Soon',
        to: '/coming-soon',
    },
    
    {
        title: 'Link in Bio',
        to: '/link-in-bio',
    },
    
    {
        title: 'Password Protected',
        to: '/password-protected',
    },
    {
        title: 'Error 404',
        to: '/error-404',
    },
]

const renderFooterLinks = (pages: PageList) => {
    return pages.map(page => (
        <li key={page.to} className='text-lg '>
            <Link href={page.to}>
                {page.title}
            </Link>
        </li>
    ))
}

export default function Footer() {
  return (
    <footer className='bg-[#18192e] text-[#b9b9b9] pt-[90px] pb-[40px]'>
        <div className='mx-[15px] md:mx-[30px] lg:mx-[50px]'>
            <div className='grid gap-[50px] md-lg:grid-cols-[1.75fr,1fr]'>
                <div className='grid gap-[20px] md:grid-cols-3'>
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
                            <div>
                                <p className='text-[#b9b9b9]'>Chicago HQ Estica Cop.</p>
                                <p className='text-[#b9b9b9]'>Macomb, MI 48042</p>
                            </div>
                            
                            <div>
                                <p className='text-[#b9b9b9]'>+91 123 456 789</p>
                            </div>
                        </div>

                        <div>
                            <h4 className='text-[20px] text-white mb-[20px]'>Follow us on</h4>

                            <div className='flex gap-[15px]'>
                                <Link href={'#'}>
                                    <Image 
                                        src={'/dark-fb.svg'}
                                        alt='facebook logo'
                                        className=''
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                                <Link href={'#'}>
                                    <Image 
                                        src={'/dark-yt.svg'}
                                        alt='facebook logo'
                                        className=''
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                                <Link href={'#'}>
                                    <Image 
                                        src={'/dark-linkedIn.svg'}
                                        alt='facebook logo'
                                        className=''
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                                <Link href={'#'}>
                                    <Image 
                                        src={'/dark-tw.svg'}
                                        alt='facebook logo'
                                        className=''
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                                <Link href={'#'}>
                                    <Image 
                                        src={'/dark-ig.svg'}
                                        alt='facebook logo'
                                        className=''
                                        width={30}
                                        height={30}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mb-[60px] '>
                        <h2 className='text-white mb-[30px]'> 
                            We ship worldwide. Ready to ship with us?
                        </h2>

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
            <div></div>
        </div>
    </footer>
  )
}
