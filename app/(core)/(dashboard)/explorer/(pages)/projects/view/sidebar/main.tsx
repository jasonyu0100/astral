import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { VentureHorizonsSidebarDegree } from './degree/main';
import { VentureHorizonsSidebarGuild } from './guild/main';
import { VentureHorizonsSidebarScale } from './scale/main';

export function HorizonsSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsSidebar.name}
      sizeFx='w-[300px] h-full'
      glassFx={glassFx['glass-5']}
      className='flex flex-col'
    >
      <div className='flex h-full w-full flex-col overflow-auto'>
        <div className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
          <VentureHorizonsSidebarScale />
          <VentureHorizonsSidebarGuild />
          <VentureHorizonsSidebarDegree />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
