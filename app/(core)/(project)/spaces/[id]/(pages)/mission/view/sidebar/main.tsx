import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesMission,
  SpacesMissionSidebarMode,
} from '../../controller/main';
import { SpacesMissionSidebarBacklog } from './backlog/main';
import { SpacesMissionSidebarChapters } from './chapters/main';
import { SpacesMissionSidebarHeader } from './header/main';

export function SpacesMissionSidebar() {
  const spacesMissionController = useContext(ContextForSpacesMission);
  return (
    <GlassAreaContainer
      name={SpacesMissionSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesMissionSidebarHeader />
      {spacesMissionController.state.sidebarMode ===
        SpacesMissionSidebarMode.CHAPTERS && <SpacesMissionSidebarChapters />}
      {spacesMissionController.state.sidebarMode ===
        SpacesMissionSidebarMode.BACKLOG && <SpacesMissionSidebarBacklog />}
    </GlassAreaContainer>
  );
}
