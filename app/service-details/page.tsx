import React from 'react'
import Image from 'next/image'

export default function ServiceDetails() {
  return (
    <main>
        <div>
            <section className='pt-[20px] pb-[40px] xl:pt-[30px] xl:pb-[60px]'>
                <div className='relative bg-primaryBlack px-5 xsm:px-10 xl:px-[50px] py-[60px] x-lg:px-[80px] sm-lg:py-[0px]'>
                    <div className='flex flex-wrap items-center justify-between'>
                        <h1 className='text-white text-center'>
                                Air freight
                        </h1>

                        <figure className='h-[150px] w-auto md:h-[200px] sm-lg:h-[240px]'>
                            <Image 
                                src={'/air.svg'}
                                alt=''
                                width={483}
                                height={331}
                                className='transform scale-x-[-1] w-auto h-full'
                            />
                        </figure>
                    </div>

                </div>
            </section>
            
            <section>
                <div className='grid'>
                    <div></div>

                    <div className='grid p-[30px]'>
                        <h2 className='mb-[10px]'>For additional information contact one of our agent</h2>

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
                </div>
            </section>
        </div>
    </main>
  )
}
