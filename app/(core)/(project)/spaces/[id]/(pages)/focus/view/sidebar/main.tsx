import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesFocus,
  SpacesFocusSidebarMode,
} from '../../controller/main';
import { SpacesFocusSidebarArchive } from './archive/main';
import { SpacesFocusSidebarChapters } from './chapters/main';
import { SpacesFocusSidebarHeader } from './header/main';

export function SpacesFocusSidebar() {
  const spacesFocusController = useContext(ContextForSpacesFocus);
  return (
    <GlassAreaContainer
      name={SpacesFocusSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesFocusSidebarHeader />
      {spacesFocusController.state.sidebarMode ===
        SpacesFocusSidebarMode.CHAPTERS && <SpacesFocusSidebarChapters />}
      {spacesFocusController.state.sidebarMode ===
        SpacesFocusSidebarMode.ARCHIVE && <SpacesFocusSidebarArchive />}
    </GlassAreaContainer>
  );
}
