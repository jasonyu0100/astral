import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesUpdates,
  SpacesUpdatesSidebarMode,
} from '../../controller/main';
import { SpacesUpdatesSidebarAttachments } from './attachments/main';
import { SpacesUpdatesSidebarChapters } from './chapters/main';
import { SpacesUpdatesSidebarHeader } from './header/main';

export function SpacesUpdatesSidebar() {
  const flightController = useContext(ContextForSpacesUpdates);
  return (
    <>
      <GlassAreaContainer
        name={SpacesUpdatesSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesUpdatesSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesUpdatesSidebarMode.CHAPTERS && <SpacesUpdatesSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesUpdatesSidebarMode.Attachments && (
          <SpacesUpdatesSidebarAttachments />
        )}
      </GlassAreaContainer>
    </>
  );
}
