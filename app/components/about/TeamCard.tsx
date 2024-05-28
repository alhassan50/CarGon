import React from 'react'
import Image from 'next/image';

export default function TeamCard({member}) {
  return (
    <div>
        <figure className='relative'>
            <Image 
                src={member.image}
                alt={member.name}
                width={800}
                height={800}
                className=''
            />
            <div className='absolute group-hover:opacity-100 opacity-0 transition-all duration-200 w-full h-full bg-[#282cadb4] top-0 left-0 p-[30px] flex items-end'>
                <div className=''>
                    <p className='text-white text-[14px]'>{member.role}</p>
                    <h4 className='text-white text-[24px]'>{member.name}</h4>
                </div>
            </div>
        </figure>
    </div>
  )
}
