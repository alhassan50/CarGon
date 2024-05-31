'use client'

import React from 'react'
import { motion } from 'framer-motion'

//data
import {STATS} from '@/app/data/stats' 

//framer variants
import { container, fadeIn, flipX, item } from '@/framerVariants'

const renderStats = STATS.map(stat => (
  <li key={stat.category}>
      <motion.div
        variants={item}
      >
          <h2 className='mb-[10px]'>
              {stat.value}
          </h2>
          <p>
              {stat.category}
          </p>
      </motion.div>
  </li>
))

export default function AboutHero() {
  return (
    <section className='contact-hero pt-[40px]'>
        <div className='text-center md-[10px] xl:max-w-[50%] mx-auto'>
            <motion.h1 
                className='leading-tight text-[26px] xsm:text-[40px] md:text-[60px] mb-[10px]'
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                Building <span className='text-primaryBlue'>connectivity</span>, delivering value
            </motion.h1>
        </div>
        <div>
          <div className='max-w-[1200px] mx-auto pb-[50px] md:pb-[70px] lg:pb-[100px]'>
              <div className='mt-5 grid justify-center items-center sm-lg:grid-cols-[1fr,1.25fr] gap-[30px] md:gap-[30px] xl:gap-[50px]'>
                  <div className='overflow-hidden h-[500px]'>

                      <motion.figure 
                          className='w-full h-[400px] md:h-[500px] object-cover bg-no-repeat'
                          style={{
                              backgroundImage: "url('/about-bg.jpg')",
                              backgroundPosition: "50%",
                              backgroundSize: "cover",
                          }}
                          variants={flipX}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                        >
                      </motion.figure>
                  </div>

                  <div className=''>
                      <div>
                          <motion.p 
                            className='text-lg'
                            variants={fadeIn("up", 0.5, 0)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                           >
                            A mastermind in crafting interconnected logistics systems, constructing pathways that bridge distances and deliver unparalleled value worldwide.
                          </motion.p>

                          <motion.ul 
                            className='my-[50px] grid gap-[50px] grid-cols-2'
                            variants={container}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                          >
                              {renderStats}
                          </motion.ul>

                        <motion.div
                            variants={fadeIn("up", 0.5, 0)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                        >
                          <button className='bg-[#282dad] py-3 px-[34px] text-[#f6f6f6]'>
                              View Services
                          </button>
                        </motion.div>
                      </div>
                  </div>
              </div>
              
          </div>
        </div>
    </section>
  )
}
