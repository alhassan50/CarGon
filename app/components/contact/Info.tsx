import React from 'react'
import Image from 'next/image'

export default function Info() {
  return (
    <div className='grid gap-[30px]'>
        <div>
            <h2>
                Need any help?
            </h2>

            <p className='text-lg'>
                Contact us today, and our dedicated team will provide swift and tailored assistance to meet your transportation needs.
            </p>
        </div>
        
        <div>
            <h4 className='mb-[10px]'>
                Opening Hours
            </h4>

            <p className='text-lg'>
                Monday to Friday: 9 pm to 6 pm
            </p>
            
            <p className='text-lg'>
                Sat-Sun: Close
            </p>
        </div>
        
        <div>
            <h4 className='mb-[10px]'>
                Address
            </h4>

            <p className='text-lg'>
                Chicago HQ Estica Cop. Macomb,
            </p>
            
            <p className='text-lg'>
                MI 48042
            </p>
        </div>
        
        <div>
            <h4 className='mb-[10px]'>
                Address
            </h4>

            <p className='text-lg'>
                +91 123 456 789
            </p>
            
            <p className='text-lg'>
                example@gmail.com
            </p>
        </div>
        
        <div className='flex gap-[15px]'>
            <figure>
                <Image 
                    src={'/ig.svg'}
                    alt='instagram logo'
                    width={24}
                    height={24}
                />
            </figure>
            
            <figure>
                <Image 
                    src={'/fb.svg'}
                    alt='instagram logo'
                    width={24}
                    height={24}
                />
            </figure>
            
            <figure>
                <Image 
                    src={'/dribble.svg'}
                    alt='instagram logo'
                    width={24}
                    height={24}
                />
            </figure>
            
            <figure>
                <Image 
                    src={'/tw.svg'}
                    alt='instagram logo'
                    width={24}
                    height={24}
                />
            </figure>
        </div>
    </div>
  )
}
