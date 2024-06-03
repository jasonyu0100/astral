import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx } from '@/(style)/data';
import React from 'react';
import { FieldSidebarPoint } from './point/main';

export function BaseSidebar() {
  return (
    <GlassAreaContainer
      name={BaseSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <FieldSidebarPoint/>
      <FieldSidebarPoint/>
      <FieldSidebarPoint/>
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <FieldSidebarPoint/>
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <FieldSidebarPoint/>
    </GlassAreaContainer>
  );
}
