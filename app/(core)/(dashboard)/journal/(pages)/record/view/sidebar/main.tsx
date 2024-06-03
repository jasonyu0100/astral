import React from 'react';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { JournalSidebarPoint } from './point/main';

export function JournalSidebar() {
  return (
    <GlassAreaContainer
      name={JournalSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem] pt-[2rem]`}
      glassFx={glassFx['glass-5']}
    >
      <p className='text-lg font-bold text-slate-500'>1 day ago</p>
      <JournalSidebarPoint>Image Space</JournalSidebarPoint>
      <JournalSidebarPoint />
      <p className='text-lg font-bold text-slate-500'>1 week ago</p>
      <JournalSidebarPoint />
      <p className='text-lg font-bold text-slate-500'>1 month ago</p>
      <JournalSidebarPoint />
      <JournalSidebarPoint />
    </GlassAreaContainer>
  );
}
