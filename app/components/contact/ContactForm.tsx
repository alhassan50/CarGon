import React from 'react'

export default function ContactForm() {
  return (
    <div className='bg-[#f6f6f6] p-5 md:p-10'>
        <form>
            <div className='input-section'>
                <label>
                    Name
                </label>
                <input 
                    type='text'
                    name='name'
                    placeholder='Enter name'
                />
            </div>
            <div className='grid md:grid-cols-2 md:gap-10'>
                <div className='input-section'>
                    <label>
                        Email
                    </label>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Enter email'
                    />
                </div>
                <div className='input-section'>
                    <label>
                        Phone No
                    </label>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Enter phone no'
                    />
                </div>
            </div>
            <div className='input-section'>
                <label>
                    Message
                </label>
                <textarea 
                    placeholder='Please type your message here...'
                    className='h-[212px]'
                />
            </div>

            <button className='bg-primaryBlue hover:translate-y-3 border border-primaryBlack text-white px-[34px] py-3 w-full md:text-lg'>
                Submit
            </button>
        </form>
    </div>
  )
}
