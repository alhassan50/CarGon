import React from 'react'

import TeamCard from '../components/about/TeamCard'

//data
import {TEAM_MEMBERS} from '@/app/data/team' 

const renderTeam = TEAM_MEMBERS.map(member => (
    <li key={member.name} className='group overflow-hidden'>
        <TeamCard member={member} />
    </li>
))

export default function Team() {
  return (
    <main>
        <div className='mb-10 md:mb-[50px] sm-lg:mb-[70px] xl:mb-[100px]'>
            <h1 className='text-center my-[30px] xsm:my-20 md:my-[50px] sm-lg:my-[90px]'>
                Meet <span className='text-primaryBlue'> Cargon </span>team
            </h1>

            <section className=''>
                <ul className='grid gap-[20px] md:grid-cols-2 sm-lg:grid-cols-3'>
                    {renderTeam}
                </ul>
            </section>
        </div>
    </main>
  )
}
