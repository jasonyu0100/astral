import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceFlightSidebarList } from './list/main';
import { SpaceFlightSidebarSearch } from './search/main';

export function SpaceFlightSidebar() {
  return (
    <>
      <GlassAreaContainer
        name={SpaceFlightSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpaceFlightSidebarSearch />
        <SpaceFlightSidebarList />
      </GlassAreaContainer>
    </>
  );
}
