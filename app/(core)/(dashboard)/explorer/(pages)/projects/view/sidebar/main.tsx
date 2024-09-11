import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { ExplorerProjectsSidebarDegree } from './degree/main';
import { ExplorerProjectsSidebarGuild } from './guild/main';
import { ExplorerProjectsSidebarScale } from './scale/main';

export function ExplorerProjectsSidebar() {
  return (
    <GlassAreaContainer
      name={ExplorerProjectsSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-5']}
      className='flex flex-col'
    >
      <div className='flex h-full w-full flex-col overflow-auto'>
        <div className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
          <ExplorerProjectsSidebarScale />
          <ExplorerProjectsSidebarGuild />
          <ExplorerProjectsSidebarDegree />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
