import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesBoardSidebarHeader } from './header/main';
import { SpacesBoardSidebarList } from './links/list/main';

export function SpacesBoardSidebar() {
  return (
    <GlassAreaContainer
      name={SpacesBoardSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesBoardSidebarHeader />
      <SpacesBoardSidebarList />
    </GlassAreaContainer>
  );
}
