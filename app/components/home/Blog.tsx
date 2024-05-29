import React from 'react'
import BlogCard from './BlogCard'

import {BLOGS} from '@/app/data/blog'

const renderBlogs = BLOGS.map(blog => (
    <li
        key={blog.title} 
        className=''
    >
        <BlogCard blog={blog} />
    </li>
))

export default function Blog() {
  return (
    <section className='max-w-[1280px] mx-auto py-[50px] md:py-[70px] lg:py-[100px]'>
        <div className='mb-[50px]'>
            <h2 className='text-center mb-[10px] text-[36px] xsm:text-[40x] md:text-[48px] xl:text-[52px]'>
                Our latest blog
            </h2>
        </div>
        <ul className='grid gap-[20px] xl:gap-[50px] md:grid-cols-2 lg:grid-cols-3'>
            {renderBlogs}
        </ul>
    </section>
  )
}
