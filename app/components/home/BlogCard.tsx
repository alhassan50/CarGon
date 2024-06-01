import React from 'react'
import Image from 'next/image'

export default function BlogCard({blog}: {blog: Blog}) {
  return (
    <div>
        <figure className='mb-[20px] relative'>
            <Image 
                src={blog.image}
                alt={blog.title}
                width={500}
                height={336}
                className='w-full h-auto'
            />
            <div className='absolute w-full scale-x-0 h-full bg-[#18192e77] top-0 left-0 group-hover:scale-x-100 transition-all duration-500 origin-left'></div>
        </figure>
        <div>
            <p className='text-primaryBlue text-lg mb-[5px]'>{blog.date}</p>
            <h3 className='text-[20px] xl:text-[24px]'>{blog.title}</h3>
        </div>
    </div>
  )
}
