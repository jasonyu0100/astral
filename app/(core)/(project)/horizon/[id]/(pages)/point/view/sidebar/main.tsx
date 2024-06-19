import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { HorizonPointSidebarEntry } from './entry/main';

export function HorizonPointSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonPointSidebar.name}
      sizeFx='w-[300px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <p className='text-sm font-bold text-slate-500'>21 hours ago</p>
      <HorizonPointSidebarEntry />
      <p className='text-sm font-bold text-slate-500'>2 days ago</p>
      <HorizonPointSidebarEntry />
      <HorizonPointSidebarEntry />
      <HorizonPointSidebarEntry />
      <HorizonPointSidebarEntry />
      <p className='text-sm font-bold text-slate-500'>7 days ago</p>
      <HorizonPointSidebarEntry />
      <HorizonPointSidebarEntry />
      <p className='text-sm font-bold text-slate-500'>1 month ago</p>
      <HorizonPointSidebarEntry />
      <HorizonPointSidebarEntry />
    </GlassAreaContainer>
  );
}
