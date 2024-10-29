import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPage,
  SpacesPageSidebarMode,
} from '../../controller/main';
import { SpacesPageSidebarAttachments } from './attachments/main';
import { SpacesPageSidebarChapters } from './chapters/main';
import { SpacesPageSidebarHeader } from './header/main';

export function SpacesPageSidebar() {
  const flightController = useContext(ContextForSpacesPage);
  return (
    <>
      <GlassAreaContainer
        name={SpacesPageSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesPageSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesPageSidebarMode.CHAPTERS && <SpacesPageSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesPageSidebarMode.Attachments && <SpacesPageSidebarAttachments />}
      </GlassAreaContainer>
    </>
  );
}
