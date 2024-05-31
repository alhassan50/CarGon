import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//framer variants
import { item } from '@/framerVariants'


export default function ValuesCard({value}: {value: Value}) {
  return (
    <motion.div 
        key={value.title} 
        className='bg-[#f6f6f6] p-5 md:p-[30px]'
        variants={item}
    >
        <figure className='mb-[30px]'>
            <Image 
                src={value.image}
                alt={value.title}
                width={40} 
                height={40}
            />
        </figure>

        <h4 className='mb-[10px]'>
            {value.title}
        </h4>

        <p className='mb-[10px] text-lg'>
            {value.desc}
        </p>
    </motion.div>
  )
}
