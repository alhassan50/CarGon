import React from 'react'

const HOW_IT_WORKS = [
    {
        step: "01",
        title: "Get an estimate to plan",
        description: "From advanced tracking systems to smart logistics"
    },
    {
        step: "02",
        title: "Ongoing support",
        description: "We integrate sustainable practices into our"
    },
    {
        step: "03",
        title: "Relax while you move",
        description: "Empowering businesses and individuals alike to"
    }
];

export default function HowItWorks() {
  return (
    <section className='relative bg-primaryBlack pb-[0px] md:pb-[300px] pt-[50px] mt:pt-[80px] -mx-[15px] md:-mx-[20px] sm-lg:-mx-[30px] lg:-mx-[50px] x-lg:-mx-[70px]'>
        <div className='grid gap-10 sm-lg:grid-cols-2 px-[15px] md:px-[20px] sm-lg:px-[30px] lg:px-[50px] x-lg:px-[70px]'>
            <div className='relative sm-lg:absolute sm-lg:bottom-[50px]'>
                <div className='w-[50%]'>
                    <h2 className='mb-[40px] sm-lg:text-white'>
                        How It Works
                    </h2>

                    <ul className='grid gap-[30px] sm-lg:grid-cols-3'>
                        {
                            HOW_IT_WORKS.map(level => (
                                <li key={level.step} className=''>
                                    <div className='mb-[30px] w-10 h-10 bg-[rgba(255,255,255,.1)] flex justify-center items-center rounded-[50%]'>
                                        <p className='text-white text-lg font-medium '>{level.step}</p>
                                    </div>
                                    
                                    <h4 className='text-white mb-[10px]'>{level.title}</h4>
                                    <p className='text-[#b9b9b9] text-lg mb-[10px]'>{level.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                    
                </div>
            </div>

            <div className='hidden sm-lg:block'></div>

            <div>
                <div>
                    <h2 className='text-white mb-[10px]'>
                        Request a quote
                    </h2>
                </div>
                
                <form>
                    <div className='grid md:grid-cols-2 md:gap-5'>
                        <div className='input-section quote-form'>
                            <input 
                                type='text'
                                name='name'
                                placeholder='Enter name'
                                className='bg-transparent placeholder:text-white border-b-2 border-b-[#545454] outline-none focus:border-b-white'
                            />
                        </div>

                        <div className='input-section quote-form'>
                            <input 
                                type='text'
                                name='name'
                                placeholder='Enter email'
                            />
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 md:gap-5'>
                        <div className='input-section quote-form'>
                            <input 
                                type='text'
                                name='name'
                                placeholder='Enter phone no'
                            />
                        </div>
                        
                        <div className='input-section quote-form'>
                            <input 
                                type='text'
                                name='name'
                                placeholder='Departure city'
                                className='bg-transparent placeholder:text-white border-b-2 border-b-[#545454] outline-none focus:border-b-white'
                            />
                        </div>
                    </div>
                        
                    <div className='grid md:grid-cols-2 md:gap-5'>
                        <div className='input-section quote-form'>
                            <select
                                id={'freight'}
                                name='freight'
                                className='text-white'
                                title='freight'
                            >
                                <option value='air'>
                                    Freight type
                                </option>
                                
                                <option value='air'>
                                    Air
                                </option>

                                <option value='road'>
                                    Road
                                </option>

                                <option value='ocean'>
                                    Ocean
                                </option>

                                <option value='rail'>
                                    Rail
                                </option>
                            </select>
                        </div>


                        <div className='input-section quote-form'>
                            <input 
                                type='text'
                                name='name'
                                placeholder='Delivery city'
                            />
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 md:gap-5'>
                        <div className='input-section quote-form'>
                            <input 
                                type='text'
                                name='name'
                                placeholder='Weight'
                            />
                        </div>
                        
                        <div className='input-section quote-form'>
                            <input 
                                type='text'
                                name='name'
                                placeholder='Height'
                            />
                        </div>
                    </div>


                    <button className='bg-primaryBlue max-w-[200px] border mt-[30px] border-primaryBlack text-white px-[34px] py-3 w-full md:text-lg'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
        
        
        {/* <div className="absolute h-[620px]  bg-primaryBlack w-full -mx- bottom-[60px] -z-20"></div> */}

        <div className="absolute h-[120px] w-[43%] bottom-[0px] right-0 bg-white "></div>
    </section>
  )
}
