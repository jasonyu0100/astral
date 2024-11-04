import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesDirection,
  SpacesDirectionSidebarMode,
} from '../../controller/main';
import { SpacesDirectionSidebarBacklog } from './backlog/main';
import { SpacesDirectionSidebarChapters } from './chapters/main';
import { SpacesDirectionSidebarHeader } from './header/main';

export function SpacesDirectionSidebar() {
  const spacesDirectionController = useContext(ContextForSpacesDirection);
  return (
    <GlassAreaContainer
      name={SpacesDirectionSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesDirectionSidebarHeader />
      {spacesDirectionController.state.sidebarMode ===
        SpacesDirectionSidebarMode.CHAPTERS && (
        <SpacesDirectionSidebarChapters />
      )}
      {spacesDirectionController.state.sidebarMode ===
        SpacesDirectionSidebarMode.BACKLOG && <SpacesDirectionSidebarBacklog />}
    </GlassAreaContainer>
  );
}
