import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import React from 'react';
import { SidebarEntry } from './entry/main';

export function HorizonViewSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonViewSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <SidebarEntry/>
      <SidebarEntry/>
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <SidebarEntry/>
      <SidebarEntry/>
      <SidebarEntry/>
    </GlassAreaContainer>
  );
}
