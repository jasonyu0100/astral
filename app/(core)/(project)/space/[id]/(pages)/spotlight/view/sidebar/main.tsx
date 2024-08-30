import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceSpotlightSidebarList } from './list/main';
import { SpaceSpotlightSidebarSearch } from './search/main';

export function SpaceSpotlightSidebar() {
  return (
    <>
      <GlassAreaContainer
        name={SpaceSpotlightSidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-5']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpaceSpotlightSidebarSearch />
        <SpaceSpotlightSidebarList />
      </GlassAreaContainer>
    </>
  );
}
