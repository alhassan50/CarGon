import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo({theme}: {theme: 'dark' | 'light'}) {
  return (
    <Link href={'/'}>
        <figure className='w-[160px] h-[30px] pl-[10px] md:pl-0 sm-lg:w-[202px] sm-lg:h-auto'>
            <Image 
                src={`${theme === 'light' ? '/logo-dark.svg' : '/cargon_nav_logo.svg'}`}
                alt='cargon logo'
                width={219}
                height={41}
                className=''
            />
        </figure>
    </Link>
  )
}
