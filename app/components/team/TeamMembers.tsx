'use client'

import { motion } from 'framer-motion'

//framer variants
import { scaleCenter } from '@/framerVariants'

//components
import TeamCard from '../about/TeamCard';

//data
import {TEAM_MEMBERS} from '@/app/data/team' 

const renderTeam = TEAM_MEMBERS.map(member => (
    <li key={member.name} className='group overflow-hidden'>
        <TeamCard member={member} />
    </li>
))

export default function TeamMembers() {
  return (
    <motion.section 
        className=''
        variants={scaleCenter(0.5, 0)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
    >
        <ul className='grid gap-[20px] md:grid-cols-2 sm-lg:grid-cols-3'>
            {renderTeam}
        </ul>
    </motion.section>
  )
}
