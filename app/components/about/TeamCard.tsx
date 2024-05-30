import React from 'react'
import Image from 'next/image';

export default function TeamCard({member} : {member: Member}) {
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

            <div className='absolute w-full scale-x-0 h-full bg-[#282cadb4] top-0 left-0 group-hover:scale-x-100 transition-all duration-500 origin-left'>
            </div>
            
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-10 absolute bottom-0 left-[8%]'>
                <p className='text-white text-[14px]'>{member.role}</p>
                <h4 className='text-white text-[24px]'>{member.name}</h4>
            </div>

            <div className='absolute right-[8%] top-0 translate-y-[-125px] group-hover:delay-200 grid gap-2 transition-all duration-700 group-hover:translate-y-10'>
                <figure className='bg-primaryBlack p-2'>
                    <Image 
                        src={'x-black.svg'}
                        alt=''
                        width={20}
                        height={20}
                    />
                </figure>
                
                <figure className='bg-primaryBlack p-2'>
                    <Image 
                        src={'fb-black.svg'}
                        alt=''
                        width={20}
                        height={20}
                    />
                </figure>
                
                <figure className='bg-primaryBlack p-2'>
                    <Image 
                        src={'linkedin.svg'}
                        alt=''
                        width={20}
                        height={20}
                    />
                </figure>
            </div>
        </figure>
    </div>
  )
}
