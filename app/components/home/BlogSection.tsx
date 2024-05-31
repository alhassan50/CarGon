'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

//components
import BlogCard from './BlogCard'

//data
import {BLOGS} from '@/app/data/blog'

//framer variants
import { fadeIn } from '@/framerVariants'

const renderBlogs = [...BLOGS].slice(0,3).map(blog => (
    <Link href='#' key={blog.title}>
        <li 
            className='group cursor-pointer'
        >
            <BlogCard blog={blog} />
        </li>
    </Link>
))

export default function Blog() {
  return (
    <section className='max-w-[1280px] mx-auto py-[50px] md:py-[70px] lg:py-[100px]'>
        <div className='mb-[50px]'>
            <motion.h2 
                className='text-center mb-[10px] text-[36px] xsm:text-[40x] md:text-[48px] xl:text-[52px]'
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                Our latest blog
            </motion.h2>
        </div>

        <motion.ul 
            className='grid gap-[20px] xl:gap-[50px] md:grid-cols-2 lg:grid-cols-3'
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            {renderBlogs}
        </motion.ul>
    </section>
  )
}
