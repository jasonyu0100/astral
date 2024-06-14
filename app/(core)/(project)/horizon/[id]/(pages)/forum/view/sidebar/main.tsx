import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { HorizonForumSidebarEntry } from './entry/main';

export function HorizonForumSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonForumSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <HorizonForumSidebarEntry />
      <HorizonForumSidebarEntry />
      <HorizonForumSidebarEntry />
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <HorizonForumSidebarEntry />
      <p className='text-lg font-bold text-slate-300'>12 days ago</p>
      <HorizonForumSidebarEntry />
    </GlassAreaContainer>
  );
}
