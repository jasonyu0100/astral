import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { borderFx, glassFx } from '@/(fx)/data';
import { HorizonsSidebarDegree } from './degree/main';
import { HorizonsSidebarModal } from './modal/main';
import { HorizonsSidebarScale } from './scale/main';

export function HorizonsSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      glassFx={glassFx['glass-5']}
      className='flex flex-col p-[1rem]'
    >
      <div className='flex h-full w-full flex-col overflow-auto pr-[1rem]'>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsSidebarScale />
          <HorizonsSidebarModal />
          <HorizonsSidebarDegree />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
