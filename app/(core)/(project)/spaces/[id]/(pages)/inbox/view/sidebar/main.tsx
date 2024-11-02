import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpaceInbox,
  SpaceInboxSidebarMode,
} from '../../controller/main';
import { SpaceInboxSidebarAttachments } from './attachments/main';
import { SpaceInboxSidebarChapters } from './chapters/main';
import { SpaceInboxSidebarHeader } from './header/main';

export function SpaceInboxSidebar() {
  const flightController = useContext(ContextForSpaceInbox);
  return (
    <>
      <GlassAreaContainer
        name={SpaceInboxSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpaceInboxSidebarHeader />
        {flightController.state.sidebarMode ===
          SpaceInboxSidebarMode.CHAPTERS && <SpaceInboxSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpaceInboxSidebarMode.Attachments && <SpaceInboxSidebarAttachments />}
      </GlassAreaContainer>
    </>
  );
}
