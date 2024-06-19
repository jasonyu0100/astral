import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceSeaSidebarEntry } from './entry/main';

export function SpaceSeaSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceSeaSidebar.name}
      sizeFx='w-[300px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem] `}
      glassFx={glassFx['glass-5']}
    >
      <div className='flex w-full flex-col space-y-[1rem] overflow-auto'>
        <p className='text-lg font-bold text-slate-500'>5 day ago</p>
        <SpaceSeaSidebarEntry>
          <p className='text-xl font-bold text-slate-300'>Initial Work</p>
          <p className='font-bold text-slate-500'>Jun 15 to Jun 27</p>
        </SpaceSeaSidebarEntry>
        <SpaceSeaSidebarEntry>
          <p className='text-xl font-bold text-slate-300'>Initial Work</p>
          <p className='font-bold text-slate-500'>Jun 15 to Jun 27</p>
        </SpaceSeaSidebarEntry>
        <p className='text-lg font-bold text-slate-500'>20 day ago</p>
        <SpaceSeaSidebarEntry>
          <p className='text-xl font-bold text-slate-300'>Initial Work</p>
          <p className='font-bold text-slate-500'>Jun 15 to Jun 27</p>
        </SpaceSeaSidebarEntry>
      </div>
    </GlassAreaContainer>
  );
}
