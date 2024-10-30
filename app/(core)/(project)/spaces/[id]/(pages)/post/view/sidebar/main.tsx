import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPost,
  SpacesPostSidebarMode,
} from '../../controller/main';
import { SpacesPostSidebarAttachments } from './attachments/main';
import { SpacesPostSidebarChapters } from './chapters/main';
import { SpacesPostSidebarHeader } from './header/main';

export function SpacesPostSidebar() {
  const flightController = useContext(ContextForSpacesPost);
  return (
    <>
      <GlassAreaContainer
        name={SpacesPostSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesPostSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesPostSidebarMode.CHAPTERS && <SpacesPostSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesPostSidebarMode.Attachments && <SpacesPostSidebarAttachments />}
      </GlassAreaContainer>
    </>
  );
}
