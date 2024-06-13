import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import React from 'react';
import { SidebarEntry } from './entry/main';

export function HorizonViewSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonViewSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <p className='text-sm font-bold text-slate-500'>21 hours ago</p>
      <SidebarEntry/>
      <p className='text-sm font-bold text-slate-500'>2 days ago</p>
      <SidebarEntry/>
      <SidebarEntry/>
      <SidebarEntry/>
      <SidebarEntry/>
      <p className='text-sm font-bold text-slate-500'>7 days ago</p>
      <SidebarEntry/>
      <SidebarEntry/>
      <p className='text-sm font-bold text-slate-500'>1 month ago</p>
      <SidebarEntry/>
      <SidebarEntry/>
    </GlassAreaContainer>
  );
}
