import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { NetworkSidebarDegree } from './degree/main';
import { NetworkSidebarScale } from './relevance/main';
import { NetworkSidebarState } from './state/main';

export function NetworkCreativeSidebar() {
  return (
    <GlassAreaContainer
      name={NetworkCreativeSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className='flex flex-col p-[1rem]'
    >
      <div className='flex h-full w-full flex-col overflow-auto'>
        <div className='flex w-full flex-col space-y-[1rem] pr-[1rem]'>
          <NetworkSidebarScale />
          <NetworkSidebarState />
          <NetworkSidebarDegree />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
