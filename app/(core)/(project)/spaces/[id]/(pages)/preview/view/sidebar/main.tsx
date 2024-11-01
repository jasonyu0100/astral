import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesPreview,
  SpacesPreviewSidebarMode,
} from '../../controller/main';
import { SpacesPreviewSidebarAttachments } from './attachments/main';
import { SpacesPreviewSidebarChapters } from './chapters/main';
import { SpacesPreviewSidebarHeader } from './header/main';

export function SpacesPreviewSidebar() {
  const flightController = useContext(ContextForSpacesPreview);
  return (
    <>
      <GlassAreaContainer
        name={SpacesPreviewSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesPreviewSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesPreviewSidebarMode.CHAPTERS && <SpacesPreviewSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesPreviewSidebarMode.Attachments && (
          <SpacesPreviewSidebarAttachments />
        )}
      </GlassAreaContainer>
    </>
  );
}
