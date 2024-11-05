import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesTable,
  SpacesTableSidebarMode,
} from '../../controller/main';
import { SpacesTableSidebarAttachments } from './attachments/main';
import { SpacesTableSidebarChapters } from './chapters/main';
import { SpacesTableSidebarHeader } from './header/main';

export function SpacesTableSidebar() {
  const flightController = useContext(ContextForSpacesTable);
  return (
    <>
      <GlassAreaContainer
        name={SpacesTableSidebar.name}
        sizeFx='w-[360px] h-full'
        glassFx={glassFx['glass-10']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpacesTableSidebarHeader />
        {flightController.state.sidebarMode ===
          SpacesTableSidebarMode.CHAPTERS && <SpacesTableSidebarChapters />}

        {flightController.state.sidebarMode ===
          SpacesTableSidebarMode.Attachments && (
          <SpacesTableSidebarAttachments />
        )}
      </GlassAreaContainer>
    </>
  );
}
