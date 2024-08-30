import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceChatSidebarChapters } from './chapters/main';
import { SpaceChatSidebarChaptersSearch } from './search/main';

export function SpaceChatSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceChatSidebar.name}
      sizeFx='w-[300px] h-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col items-center`}
    >
      <SpaceChatSidebarChaptersSearch />
      <SpaceChatSidebarChapters />
    </GlassAreaContainer>
  );
}
