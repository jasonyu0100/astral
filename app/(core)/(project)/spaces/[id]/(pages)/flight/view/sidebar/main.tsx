import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesFlightSidebarList } from './list/main';
import { SpacesFlightSidebarSearch } from './search/main';

export function SpacesFlightSidebar() {
  return (
    <>
      <GlassAreaContainer
        name={SpacesFlightSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesFlightSidebarSearch />
        <SpacesFlightSidebarList />
      </GlassAreaContainer>
    </>
  );
}
