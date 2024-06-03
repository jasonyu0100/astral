import React from 'react';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx } from '@/(style)/data';
import { NetworkSidebarPoint } from './point/main';

export function NetworkSidebar() {
  return (
    <GlassAreaContainer
      name={NetworkSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`flex flex-col overflow-auto p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <div className='flex flex-col  space-y-[1rem]'>
        <p className='text-lg font-bold text-slate-300'>12 days ago</p>
        <NetworkSidebarPoint />
        <NetworkSidebarPoint />
        <NetworkSidebarPoint />
        <p className='text-lg font-bold text-slate-300'>1 month ago</p>
        <NetworkSidebarPoint />
      </div>
    </GlassAreaContainer>
  );
}
