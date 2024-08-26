import { borderFx, glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { HorizonLeadSidebarEntry } from './entry/main';

export function HorizonLeadSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonLeadSidebar.name}
      sizeFx='w-[300px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <p className='text-sm font-bold text-slate-500'>21 hours ago</p>
      <HorizonLeadSidebarEntry />
      <p className='text-sm font-bold text-slate-500'>2 days ago</p>
      <HorizonLeadSidebarEntry />
      <HorizonLeadSidebarEntry />
      <HorizonLeadSidebarEntry />
      <HorizonLeadSidebarEntry />
      <p className='text-sm font-bold text-slate-500'>7 days ago</p>
      <HorizonLeadSidebarEntry />
      <HorizonLeadSidebarEntry />
      <p className='text-sm font-bold text-slate-500'>1 month ago</p>
      <HorizonLeadSidebarEntry />
      <HorizonLeadSidebarEntry />
    </GlassAreaContainer>
  );
}
