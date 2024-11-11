import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPublic,
  SpacesPublicSidebarMode,
} from '../../controller/main';
import { SpacesPublicSidebarAttachments } from './attachments/main';
import { SpacesPublicSidebarChapters } from './chapters/main';
import { SpacesPublicSidebarHeader } from './header/main';

export function SpacesPublicSidebar() {
  const flightController = useContext(ContextForSpacesPublic);
  return (
    <>
      <GlassAreaContainer
        name={SpacesPublicSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesPublicSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesPublicSidebarMode.CHAPTERS && <SpacesPublicSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesPublicSidebarMode.Attachments && (
          <SpacesPublicSidebarAttachments />
        )}
      </GlassAreaContainer>
    </>
  );
}
