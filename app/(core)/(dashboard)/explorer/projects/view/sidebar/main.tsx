import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { ExplorerProjectsSidebarDegree } from './degree/main';
import { ExplorerProjectsSidebarGuild } from './guild/main';
import { ExplorerProjectsSidebarScope } from './scope/main';

export function ExplorerProjectsSidebar() {
  return (
    <GlassAreaContainer
      name={ExplorerProjectsSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className='flex flex-col'
    >
      <div className='flex h-full w-full flex-col overflow-auto'>
        <div className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
          <ExplorerProjectsSidebarScope />
          <ExplorerProjectsSidebarGuild />
          <ExplorerProjectsSidebarDegree />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
