'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//icons
import { CgMenu } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from './Logo';

//data
const MENU_ITEMS: MenuItems = [
    {
      title: 'Home',
      to: '/',
      isDropDown: false,
    },
    {
      title: 'About',
      to: '/about',
      isDropDown: false,
    },
    {
      title: 'Contact',
      to: '/contact',
      isDropDown: false,
    },
    {
      title: 'Pages',
      isDropDown: true,
      dropdownItems: [
        { title: 'Home', to: '/', isDropDown: false },
        { title: 'About', to: '/about', isDropDown: false },
        { title: 'Services', to: '/services', isDropDown: false },
        { title: 'Service Details', to: '/service-details', isDropDown: false },
        { title: 'Pricing', to: '/pricing', isDropDown: false },
        { title: 'Team', to: '/team', isDropDown: false },
        { title: 'Blog', to: '/blog', isDropDown: false },
        { title: 'Contact', to: '/contact', isDropDown: false },
        { title: 'FAQs', to: '/faqs', isDropDown: false },
        { title: 'Request a Quote', to: '/request-a-quote', isDropDown: false },
        { title: 'Privacy Policy', to: '/privacy-policy', isDropDown: false },
      ],
    },
];

export default function Navbar() {
    const [isNavLinksVisible, setIsNavLinksVisible] = useState(false)

    const toggleNavLinksVisibility = ():void => {
        setIsNavLinksVisible(prevValue => !prevValue)
    }

    useEffect(() => {
        console.log("isNavLinksVisible: ", isNavLinksVisible)
        console.log(MENU_ITEMS)
    }, [isNavLinksVisible])

    const renderMenuItems = MENU_ITEMS.map(item => (
        <li 
            className={`${item.to &&'my-[10px]'} group text-lg hover:text-[#282dad] transition-all`}
            key={item.to}
        >
            {
                item.to ?
                <Link className='pb-[3px] navbar-links max-w-full' href={item.to}>
                    {item.title}
                </Link>
                :
                <div className=' relative pb-[3px] max-w-full flex flex-col justify-between items-start gap-1 group'>
                    <div className='flex gap-1 justify-between w-full'>
                        {item.title}
                        <MdOutlineKeyboardArrowDown className='text-[24px]' />
                    </div>
                    <div className='sm-lg:absolute top-full left-0 min-w-full bg-[#282dad] py-2 px-5 hidden group-hover:block border border-[#18192e]'>
                        <ul> 
                            {item.dropdownItems?.map(dropdownItem => (
                                <li 
                                    className='text-white h-full'
                                    key={dropdownItem.to} 
                                >
                                    {
                                        dropdownItem.to &&
                                        <Link 
                                            href={dropdownItem.to} 
                                            className='whitespace-nowrap py-1'
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
            <div className='flex justify-between items-center px-[15px] md:px-[30px] xl:px-[5%]'>
                <Logo theme='dark' />

                <nav className='hidden sm-lg:block'>
                    <ul className='flex items-center justify-center gap-[30px]'>
                        {renderMenuItems}
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
                    className='absolute top-0 left-0 w-full h-screen -z-10 sm-lg:hidden'
                    onClick={toggleNavLinksVisibility}
                >
                </div>
                
                <nav className='absolute w-full sm-lg:hidden'>
                    <ul className='w-[93%] mx-[auto] top-16 left-0 p-[20px] pt-[10px] bg-[#f6f6f6] border border-[#b9b9b9]'>
                        {renderMenuItems}
                    </ul>
                </nav>
            </>
        }
    </div>
  )
}
