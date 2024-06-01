import React from 'react'
import { Metadata } from 'next';

//components
import HeadarText from '../components/team/HeaderText';
import TeamMembers from '../components/team/TeamMembers';

export const metadata: Metadata = {
  title: "Team",
  description: "Team page"
};

export default function Team() {
  return (
    <main>
        <div className='mb-10 md:mb-[50px] sm-lg:mb-[70px] xl:mb-[100px]'>
            <HeadarText />
            <TeamMembers />
        </div>
    </main>
  )
}
