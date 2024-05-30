import React from 'react'
import TeamCard from './TeamCard';

//data
import {TEAM_MEMBERS} from '@/app/data/team' 

const renderTeam = [...TEAM_MEMBERS].slice(0,4).map(member => (
    <li key={member.name} className='group'>
        <TeamCard member={member} />
    </li>
))

export default function AboutTeam() {
  return (
    <section className='max-w-[1200px] mx-auto pb-[50px] md:pb-[70px] lg:pb-[100px]'>
        <div className='mb-[30px] md:w-[80%] lg:w-[70%] text-center mx-auto'>
            <h2 className='mb-[10px] md:text-[48px] xl:text-[55px]'>
                Our incredible team
            </h2>
        </div>
        <ul className='grid gap-[20px] md:grid-cols-2 sm-lg:grid-cols-4'>
            {renderTeam}
        </ul>
    </section>
  )
}
