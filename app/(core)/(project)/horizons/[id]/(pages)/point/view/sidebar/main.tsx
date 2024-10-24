import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { HorizonsFieldSidebarHeader } from './header/main';

export function HorizonPointSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonPointSidebar.name}
      sizeFx='w-[360px] h-full flex-shrink-0'
      className={`flex flex-col`}
      glassFx={glassFx['glass-10']}
    >
      <HorizonsFieldSidebarHeader />
      <div className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
        <p className='font-bold text-slate-300'>I'm not sure about this</p>
        <p className='font-bold text-slate-300'>
          What are your thoughts on this Jeff?
        </p>
        <p className='font-bold text-slate-300'>
          Looks like each quadrant decision is a text channel
        </p>
        <p className='font-bold text-slate-300'>
          So you're alternating between chat and previous decisions
        </p>
      </div>
    </GlassAreaContainer>
  );
}
