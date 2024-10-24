import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesFlight,
  SpacesFlightSidebarMode,
} from '../../controller/main';
import { SpacesFlightSidebarChapters } from './chapters/main';
import { SpacesFlightSidebarHeader } from './header/main';
import { SpacesFlightSidebarPosts } from './posts/main';

export function SpacesFlightSidebar() {
  const flightController = useContext(ContextForSpacesFlight);
  return (
    <>
      <GlassAreaContainer
        name={SpacesFlightSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesFlightSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesFlightSidebarMode.CHAPTERS && <SpacesFlightSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesFlightSidebarMode.POSTS && <SpacesFlightSidebarPosts />}
      </GlassAreaContainer>
    </>
  );
}
