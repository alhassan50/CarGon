import React from 'react'
import Image from 'next/image'

export default function BlogCard({blog}: {blog: Blog}) {
  return (
    <div>
        <figure className='mb-[20px]'>
            <Image 
                src={blog.image}
                alt={blog.title}
                width={500}
                height={336}
            />
        </figure>
        <div>
            <p className='text-primaryBlue text-lg mb-[5px]'>{blog.date}</p>
            <h3 className='text-[20px] xl:text-[24px]'>{blog.title}</h3>
        </div>
    </div>
  )
}
