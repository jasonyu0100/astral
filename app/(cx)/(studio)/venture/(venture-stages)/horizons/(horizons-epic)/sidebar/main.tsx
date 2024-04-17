import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(design)/(fx)/data';
import { HorizonsSidebarDegree } from './degree/main';
import { HorizonsSidebarModal } from './modal/main';
import { HorizonsSidebarScale } from './scale/main';

export function HorizonsSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsSidebar.name}
      sizeFx='max-w-[400px] min-w-[250px] w-1/4 h-full p-[1rem]'
      borderFx={borderFx['border-l']}
      glassFx={glassFx['glass-5']}
      className='flex flex-col space-y-[2rem] overflow-auto p-[1rem]'
    >
    <div className='flex h-full w-full flex-col overflow-auto pr-[1rem]'>
      <div className='flex w-full flex-col space-y-[1rem]'>
      </div>
    </div>
      <HorizonsSidebarScale />
      <HorizonsSidebarModal />
      <HorizonsSidebarDegree />
    </GlassAreaContainer>
  );
}
