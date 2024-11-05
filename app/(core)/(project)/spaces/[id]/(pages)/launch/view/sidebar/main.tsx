import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesLaunch,
  SpacesLaunchSidebarMode,
} from '../../controller/main';
import { SpacesLaunchSidebarAttachments } from './attachments/main';
import { SpacesLaunchSidebarChapters } from './chapters/main';
import { SpacesLaunchSidebarHeader } from './header/main';

export function SpacesLaunchSidebar() {
  const flightController = useContext(ContextForSpacesLaunch);
  return (
    <>
      <GlassAreaContainer
        name={SpacesLaunchSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesLaunchSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesLaunchSidebarMode.CHAPTERS && <SpacesLaunchSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesLaunchSidebarMode.Attachments && (
          <SpacesLaunchSidebarAttachments />
        )}
      </GlassAreaContainer>
    </>
  );
}
