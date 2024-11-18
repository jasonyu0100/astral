import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPosts,
  SpacesPostsSidebarMode,
} from '../../controller/main';
import { SpacesPostsSidebarAttachments } from './attachments/main';
import { SpacesPostsSidebarChapters } from './chapters/main';
import { SpacesPostsSidebarHeader } from './header/main';

export function SpacesPostsSidebar() {
  const flightController = useContext(ContextForSpacesPosts);
  return (
    <>
      <GlassAreaContainer
        name={SpacesPostsSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesPostsSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesPostsSidebarMode.CHAPTERS && <SpacesPostsSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesPostsSidebarMode.Attachments && (
          <SpacesPostsSidebarAttachments />
        )}
      </GlassAreaContainer>
    </>
  );
}
