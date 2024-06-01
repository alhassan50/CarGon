'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//framer variants
import { fadeIn } from '@/framerVariants'

export default function BlogCard({blog}: {blog: Blog}) {
  return (
    <div>
        <motion.figure 
          className='mb-[20px] relative'
          variants={fadeIn("up", 0.5, 0)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
            <Image 
                src={blog.image}
                alt={blog.title}
                width={500}
                height={336}
                className='w-full h-auto'
            />
            <div className='absolute w-full scale-x-0 h-full bg-[#18192e77] top-0 left-0 group-hover:scale-x-100 transition-all duration-500 origin-left'></div>
        </motion.figure>
        
        <div>
            <motion.p 
              className='text-primaryBlue text-lg mb-[5px]'
              variants={fadeIn("up", 0.5, 0)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
            >
                {blog.date}
              </motion.p>
            <motion.h3 
              className='text-[20px] xl:text-[24px]'
              variants={fadeIn("up", 0.5, 0)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
            >
              {blog.title}
            </motion.h3>
        </div>
    </div>
  )
}
