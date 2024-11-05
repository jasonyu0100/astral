import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesChannel,
  SpacesChannelSidebarContentMode,
} from '../../controller/main';
import { SpacesChannelSidebarChapters } from './chapters/main';
import { SpacesChannelSidebarHeader } from './header/main';
import { SpacesChannelSidebarMembers } from './members/main';

export function SpacesChannelSidebar() {
  const spacesConversationController = useContext(ContextForSpacesChannel);

  return (
    <GlassAreaContainer
      name={SpacesChannelSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center`}
    >
      <SpacesChannelSidebarHeader />
      {spacesConversationController.state.sidebarContentMode ===
        SpacesChannelSidebarContentMode.CHAPTERS && (
        <SpacesChannelSidebarChapters />
      )}
      {spacesConversationController.state.sidebarContentMode ===
        SpacesChannelSidebarContentMode.MEMBERS && (
        <SpacesChannelSidebarMembers />
      )}
    </GlassAreaContainer>
  );
}
