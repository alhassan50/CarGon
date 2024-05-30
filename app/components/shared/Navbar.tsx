'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

//icons
import { CgMenu } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from './Logo';

//data
import { MENU_ITEMS } from '@/app/data/menuitems';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isNavLinksVisible, setIsNavLinksVisible] = useState(false)
    const pathname = usePathname()

    const toggleNavLinksVisibility = ():void => {
        setIsNavLinksVisible(prevValue => !prevValue)
    }


    const renderMenuItems = MENU_ITEMS.map(item => (
        <li 
            key={item.to}
            className={`${item.to &&'my-[10px]'} flex justify-start items-start group text-lg hover:text-[#282dad] transition-all duration-300`}
        >
            {
                item.to ?
                <Link 
                    className={`z-50 pb-[3px] navbar-links max-w-full ${item.to === pathname ? 'active-link' : null}`} 
                    href={item.to}
                >
                    {item.title}
                </Link>
                :
                <div className='z-50 relative pb-[3px] min-w-full flex flex-col justify-between items-start gap-1 group cursor-pointer'>
                    <div className='flex gap-1 justify-between w-full'>
                        {item.title}
                        <MdOutlineKeyboardArrowDown className='text-[24px]' />
                    </div>
                    <div className='sm-lg:absolute top-full left-0 min-w-full bg-[#282dad] py-2 px-5 group-hover:block translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden sm-lg:block border border-[#18192e] z-50'>
                        <ul> 
                            {item.dropdownItems?.map(dropdownItem => (
                                <li 
                                    className='text-white h-full flex justify-start items-start'
                                    key={dropdownItem.to} 
                                >
                                    {
                                        dropdownItem.to &&
                                        <Link 
                                            href={dropdownItem.to} 
                                            className='whitespace-nowrap py-1 hover:underline'
                                        >
                                            {dropdownItem.title}
                                        </Link>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </li>
    ))

  return (
    <div className='relative'>
        <div className='py-[10px] md:pt-[30px] sm-lg:pt-[40px] sm-lg:pb-[20px] bg-white'>
            <div className='z-50 flex justify-between items-center px-[15px] md:px-[30px] xl:px-[5%]'>
                <Logo theme='dark' />

                <nav className='hidden sm-lg:block'>
                    <ul className='flex items-center justify-center gap-[30px]'>
                        {renderMenuItems}
                    </ul>
                </nav>

                <div className='flex gap-3'>
                    <button className='z-50 bg-[#282dad] py-3 px-[34px] text-[#f6f6f6] hidden xsm:block'>
                        Get a quote
                    </button>

                    <figure 
                        className={`z-50 w-[48px] h-[48px] flex justify-center items-center bg-[#18192e] cursor-pointer ${isNavLinksVisible && 'bg-[#282dad]'} sm-lg:hidden`}
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
                    className='absolute top-0 left-0 w-full h-screen -z-10 sm-lg:hidden'
                    onClick={toggleNavLinksVisibility}
                >
                </div>
                
                <nav className='z-50 absolute w-full sm-lg:hidden'>
                    <ul className='w-[93%] mx-[auto] top-16 left-0 p-[20px] pt-[10px] bg-[#f6f6f6] border border-[#b9b9b9]'>
                        {renderMenuItems}
                    </ul>
                </nav>
            </>
        }
    </div>
  )
}
