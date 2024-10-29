import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPages,
  SpacesPagesSidebarMode,
} from '../../controller/main';
import { SpacesPagesSidebarAttachments } from './attachments/main';
import { SpacesPagesSidebarChapters } from './chapters/main';
import { SpacesPagesSidebarHeader } from './header/main';

export function SpacesPagesSidebar() {
  const flightController = useContext(ContextForSpacesPages);
  return (
    <>
      <GlassAreaContainer
        name={SpacesPagesSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesPagesSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesPagesSidebarMode.CHAPTERS && <SpacesPagesSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesPagesSidebarMode.Attachments && (
          <SpacesPagesSidebarAttachments />
        )}
      </GlassAreaContainer>
    </>
  );
}
