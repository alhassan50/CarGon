'use client'

import React from 'react'
import { motion } from 'framer-motion'

//framer variants
import { scaleCenter } from '@/framerVariants'

export default function HeadarText() {
  return (
        <motion.h1 
            className='text-center my-[30px] xsm:my-20 md:my-[50px] sm-lg:my-[90px]'
            variants={scaleCenter(0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            Meet <span className='text-primaryBlue'> Cargon </span>team
        </motion.h1>
  )
}
