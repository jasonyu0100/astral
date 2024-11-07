import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesWork,
  SpacesWorkSidebarMode,
} from '../../controller/main';
import { SpacesWorkSidebarArchive } from './archive/main';
import { SpacesWorkSidebarChapters } from './chapters/main';
import { SpacesWorkSidebarHeader } from './header/main';

export function SpacesWorkSidebar() {
  const spacesWorkController = useContext(ContextForSpacesWork);
  return (
    <GlassAreaContainer
      name={SpacesWorkSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesWorkSidebarHeader />
      {spacesWorkController.state.sidebarMode ===
        SpacesWorkSidebarMode.CHAPTERS && <SpacesWorkSidebarChapters />}
      {spacesWorkController.state.sidebarMode ===
        SpacesWorkSidebarMode.ARCHIVE && <SpacesWorkSidebarArchive />}
    </GlassAreaContainer>
  );
}
