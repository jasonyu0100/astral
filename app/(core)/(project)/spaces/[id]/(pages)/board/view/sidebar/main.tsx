import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesBoardSidebarHeader } from './header/main';
import { SpacesBoardSidebarLinkList } from './list/main';

export function SpacesBoardSidebar() {
  return (
    <GlassAreaContainer
      name={SpacesBoardSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesBoardSidebarHeader />
      <SpacesBoardSidebarLinkList />
    </GlassAreaContainer>
  );
}
