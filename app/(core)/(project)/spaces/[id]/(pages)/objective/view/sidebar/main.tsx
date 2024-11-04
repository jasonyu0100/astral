import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesObjective,
  SpacesObjectiveSidebarMode,
} from '../../controller/main';
import { SpacesObjectiveSidebarBacklog } from './backlog/main';
import { SpacesObjectiveSidebarChapters } from './chapters/main';
import { SpacesObjectiveSidebarHeader } from './header/main';

export function SpacesObjectiveSidebar() {
  const spacesObjectiveController = useContext(ContextForSpacesObjective);
  return (
    <GlassAreaContainer
      name={SpacesObjectiveSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesObjectiveSidebarHeader />
      {spacesObjectiveController.state.sidebarMode ===
        SpacesObjectiveSidebarMode.CHAPTERS && (
        <SpacesObjectiveSidebarChapters />
      )}
      {spacesObjectiveController.state.sidebarMode ===
        SpacesObjectiveSidebarMode.BACKLOG && <SpacesObjectiveSidebarBacklog />}
    </GlassAreaContainer>
  );
}
