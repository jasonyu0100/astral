import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesProgress,
  SpacesProgressSidebarMode,
} from '../../controller/main';
import { SpacesProgressSidebarBacklog } from './backlog/main';
import { SpacesProgressSidebarChapters } from './chapters/main';
import { SpacesProgressSidebarHeader } from './header/main';

export function SpacesProgressSidebar() {
  const spacesProgressController = useContext(ContextForSpacesProgress);
  return (
    <GlassAreaContainer
      name={SpacesProgressSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesProgressSidebarHeader />
      {spacesProgressController.state.sidebarMode ===
        SpacesProgressSidebarMode.CHAPTERS && <SpacesProgressSidebarChapters />}
      {spacesProgressController.state.sidebarMode ===
        SpacesProgressSidebarMode.BACKLOG && <SpacesProgressSidebarBacklog />}
    </GlassAreaContainer>
  );
}
