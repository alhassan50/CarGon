'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//icons
import { CgMenu } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
    const [isNavLinksVisible, setIsNavLinksVisible] = useState(false)

    const toggleNavLinksVisibility = ():void => {
        setIsNavLinksVisible(prevValue => !prevValue)
    }

    useEffect(() => {
        console.log("isNavLinksVisible: ", isNavLinksVisible)
    }, [isNavLinksVisible])

  return (
    <div className='relative'>
        <div className='py-[10px] md:pt-[30px] sm-lg:pt-[40px] sm-lg:pb-[20px] bg-white'>
            <div className='flex justify-between items-center px-[15px] md:px-[30px] xl:px-[5%]'>
                <Link href={'/'}>
                    <figure className='w-[160px] h-[30px] pl-[10px] md:pl-0 sm-lg:w-[202px] sm-lg:h-auto'>
                        <Image 
                            src={'/cargon_nav_logo.svg'}
                            alt='cargon logo'
                            width={219}
                            height={41}
                            className=''
                        />
                    </figure>
                </Link>

                <nav className='hidden sm-lg:block'>
                    <ul className='flex items-center justify-center gap-[30px]'>
                        <li className='my-[10px] text-lg hover:text-[#282dad] transition-all'>
                            <Link className='pb-[3px] max-w-full' href={'/'}>
                                Home
                            </Link>
                        </li>
                        
                        <li className='my-[10px] text-lg'>
                            <Link className='pb-[3px] max-w-full' href={'/about'}>
                                About
                            </Link>
                        </li>
                        
                        <li className='my-[10px] text-lg'>
                            <Link className='pb-[3px] max-w-full' href={'/contact'}>
                                Contact
                            </Link>
                        </li>
                        
                        <li className='text-lg'>
                            <div className='pb-[3px] max-w-full flex justify-between items-center gap-1'>
                                Pages
                                <MdOutlineKeyboardArrowDown className='text-[24px]' />
                            </div>

                        </li>
                    </ul>
                </nav>

                <div className='flex gap-3'>
                    <button className='bg-[#282dad] py-3 px-[34px] text-[#f6f6f6] hidden xsm:block'>
                        Get a quote
                    </button>

                    <figure 
                        className={`w-[48px] h-[48px] flex justify-center items-center bg-[#18192e] cursor-pointer ${isNavLinksVisible && 'bg-[#282dad]'} sm-lg:hidden`}
                        onClick={toggleNavLinksVisibility}
                    >
                        <CgMenu className='text-white text-[24px]'/>
                    </figure>
                </div>
            </div>
        </div>
        
        {
            isNavLinksVisible &&
            <>
                <div 
                    className='absolute top-0 left-0 w-full h-screen -z-10'
                    onClick={toggleNavLinksVisibility}
                >
                </div>
                
                <nav className='absolute w-full'>
                    <ul className='w-[93%] mx-[auto] top-16 left-0 p-[20px] pt-[10px] bg-[#f6f6f6] border border-[#b9b9b9]'>
                        <li className='my-[10px] text-lg'>
                            <Link className='pb-[3px] max-w-full' href={'/'}>
                                Home
                            </Link>
                        </li>
                        
                        <li className='my-[10px] text-lg'>
                            <Link className='pb-[3px] max-w-full' href={'/about'}>
                                About
                            </Link>
                        </li>
                        
                        <li className='my-[10px] text-lg'>
                            <Link className='pb-[3px] max-w-full' href={'/contact'}>
                                Contact
                            </Link>
                        </li>
                        
                        <li className='text-lg'>
                            <div className='pb-[3px] max-w-full flex justify-between items-center gap-4'>
                                Pages
                                <MdOutlineKeyboardArrowDown className='text-[24px]' />
                            </div>

                        </li>
                    </ul>
                </nav>
            </>
        }
    </div>
  )
}
