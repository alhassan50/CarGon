import React from 'react'
import Image from 'next/image'

export default function ContactInfo() {
  return (
    <aside className='h-full relative'>
        <div className='top-[50px] left-0 w-full sticky grid p-[30px] bg-[#f6f6f6] mt-10 sm-lg:mt-0'>
            <h3 className="mb-[10px] text-lg xsm:text-[20px] md:text-[24px] font-semibold">For additional information contact one of our agent</h3>

            <div className='mt-5 mb-10 grid gap-[30px]'>
                <div>
                    <figure className='bg-primaryBlue rounded-[50%] w-10 h-10 flex justify-center items-center mb-[12px]'>
                        <Image 
                            src={'/tel-blue-bg.svg'}
                            alt=''
                            width={24}
                            height={24}
                            className=''
                        />
                    </figure>

                    <p className='text-lg text-[#545454]'>Support center 24/7</p>
                    <div className='grid gap-[10px]'>
                        <p className='text-lg mt-[10px] font-medium text-primaryBlack'>+91 123 456 789,</p>
                        <p className='text-lg font-medium text-primaryBlack'>+91 123 456 789</p>
                    </div>
                </div>
                
                <div>
                    <figure className='bg-primaryBlue rounded-[50%] w-10 h-10 flex justify-center items-center mb-[12px]'>
                        <Image 
                            src={'/mail-blue-bg.svg'}
                            alt=''
                            width={24}
                            height={24}
                            className=''
                        />
                    </figure>

                    <p className='text-lg text-[#545454]'>Email us on:</p>
                    <div className='grid gap-[10px]'>
                        <p className='text-lg mt-[10px] font-medium text-primaryBlack'>example@gmail.com</p>
                    </div>
                </div>

                <button className='bg-primaryBlue max-w-[200px] py-3 px-[34px] text-[#f6f6f6]'>
                    Contact Us
                </button>
            </div>
        </div>
    </aside>
  )
}
