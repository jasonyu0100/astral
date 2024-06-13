import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { HorizonsSidebarDegree } from './degree/main';
import { HorizonsSidebarGuild } from './guild/main';
import { HorizonsSidebarScale } from './scale/main';

export function HorizonsSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
      className='flex flex-col p-[1rem]'
    >
      <div className='flex h-full w-full flex-col overflow-auto pr-[1rem]'>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsSidebarScale />
          <HorizonsSidebarGuild />
          <HorizonsSidebarDegree />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
