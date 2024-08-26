import { borderFx, glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { HorizonAreaSidebarEntry } from './entry/main';

export function HorizonAreaSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonAreaSidebar.name}
      sizeFx='w-[300px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <HorizonAreaSidebarEntry />
      <HorizonAreaSidebarEntry />
      <HorizonAreaSidebarEntry />
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <HorizonAreaSidebarEntry />
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <HorizonAreaSidebarEntry />
    </GlassAreaContainer>
  );
}
