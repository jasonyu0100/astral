import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesSpaceSidebarChapters } from './chapters/main';
import { SpacesSpaceSidebarChaptersSearch } from './search/main';

export function SpacesSpaceSidebar() {
  return (
    <GlassAreaContainer
      name={SpacesSpaceSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center`}
    >
      <SpacesSpaceSidebarChaptersSearch />
      <SpacesSpaceSidebarChapters />
    </GlassAreaContainer>
  );
}
