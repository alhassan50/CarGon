'use client'

import React from 'react'
import { motion } from 'framer-motion'

//components
import TeamCard from './TeamCard';

//data
import {TEAM_MEMBERS} from '@/app/data/team' 

//famer variants
import { fadeIn } from '@/framerVariants'

const renderTeam = [...TEAM_MEMBERS].slice(0,4).map(member => (
    <li key={member.name} className='group overflow-hidden'>
        <TeamCard member={member} />
    </li>
))

export default function AboutTeam() {
  return (
    <section className='max-w-[1200px] mx-auto pb-[50px] md:pb-[70px] lg:pb-[100px]'>
        <div className='mb-[30px] md:w-[80%] lg:w-[70%] text-center mx-auto'>
            <motion.h2 
                className='mb-[10px] md:text-[48px] xl:text-[55px]'
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                Our incredible team
            </motion.h2>
        </div>
        <motion.ul 
            className='grid gap-[20px] md:grid-cols-2 sm-lg:grid-cols-4'
            variants={fadeIn("up", 0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            {renderTeam}
        </motion.ul>
    </section>
  )
}
