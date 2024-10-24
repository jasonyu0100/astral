import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { NetworkSidebarState } from './aura/main';
import { NetworkSidebarDomain } from './degree/main';
import { NetworkSidebarMeaning } from './relevance/main';

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
          <NetworkSidebarMeaning />
          <NetworkSidebarState />
          <NetworkSidebarDomain />
        </div>
      </div>
    </GlassAreaContainer>
  );
}
