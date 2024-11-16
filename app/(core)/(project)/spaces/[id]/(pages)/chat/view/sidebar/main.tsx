import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesChat,
  SpacesChatSidebarContentMode,
} from '../../controller/main';
import { SpacesChatSidebarChapters } from './chapters/main';
import { SpacesChatSidebarHeader } from './header/main';
import { SpacesChatSidebarMembers } from './members/main';

export function SpacesChatSidebar() {
  const spacesConversationController = useContext(ContextForSpacesChat);

  return (
    <GlassAreaContainer
      name={SpacesChatSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center`}
    >
      <SpacesChatSidebarHeader />
      {spacesConversationController.state.sidebarContentMode ===
        SpacesChatSidebarContentMode.CHAPTERS && <SpacesChatSidebarChapters />}
      {spacesConversationController.state.sidebarContentMode ===
        SpacesChatSidebarContentMode.MEMBERS && <SpacesChatSidebarMembers />}
    </GlassAreaContainer>
  );
}
