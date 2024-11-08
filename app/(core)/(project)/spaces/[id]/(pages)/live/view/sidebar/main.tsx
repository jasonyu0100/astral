import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesLive,
  SpacesLiveSidebarMode,
} from '../../controller/main';
import { SpacesLiveSidebarAttachments } from './attachments/main';
import { SpacesLiveSidebarChapters } from './chapters/main';
import { SpacesLiveSidebarHeader } from './header/main';

export function SpacesLiveSidebar() {
  const flightController = useContext(ContextForSpacesLive);
  return (
    <>
      <GlassAreaContainer
        name={SpacesLiveSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesLiveSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesLiveSidebarMode.CHAPTERS && <SpacesLiveSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesLiveSidebarMode.Attachments && <SpacesLiveSidebarAttachments />}
      </GlassAreaContainer>
    </>
  );
}
