import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { VentureHorizonsSidebarDegree } from './degree/main';
import { VentureHorizonsSidebarGuild } from './guild/main';
import { VentureHorizonsSidebarScale } from './scale/main';

export function VentureHorizonsSidebar() {
  return (
    <GlassAreaContainer
      name={VentureHorizonsSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
      className='flex flex-col p-[1rem]'
    >
      <div className='flex h-full w-full flex-col overflow-auto pr-[1rem]'>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <VentureHorizonsSidebarScale />
          <VentureHorizonsSidebarGuild />
          <VentureHorizonsSidebarDegree />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
