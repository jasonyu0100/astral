import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { glassFx, containerFx } from '@/(fx)/data';
import React from 'react';

export function RankSidebar() {
  return (
    <GlassAreaContainer
      name={RankSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full flex-shrink-0'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <div className='text-slate-300 flex flex-col space-y-[1rem] font-bold'>
        <p>Tribulations</p>
        <p>May 22 - Headphones</p>
        <p>June 1 - Guitar</p>
        <p>July 6 - iPad</p>
        <p>August 9 - Tonex</p>
        <p>September 23 - Monster</p>
      </div>
    </GlassAreaContainer>
  );
}
