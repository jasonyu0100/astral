import { ContextForSpaceMemberList } from '@/(server)/controller/space/member/list';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForSpacesConversation,
  SpacesConversationSidebarContentMode,
} from '../../controller/main';
import { SpacesConversationSidebarChapters } from './chapters/main';
import { SpacesConversationSidebarHeader } from './header/main';
import { SpacesConversationSidebarLoggedIn } from './members/loggedIn/main';
import { SpacesConversationSidebarMember } from './members/member/main';

export function SpacesConversationSidebar() {
  const spacesConversationController = useContext(ContextForSpacesConversation);
  const spaceMemberListController = useContext(ContextForSpaceMemberList);

  return (
    <GlassAreaContainer
      name={SpacesConversationSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center`}
    >
      <SpacesConversationSidebarHeader />
      {spacesConversationController.state.sidebarContentMode ===
        SpacesConversationSidebarContentMode.CHAPTERS && (
        <SpacesConversationSidebarChapters />
      )}
      {spacesConversationController.state.sidebarContentMode ===
        SpacesConversationSidebarContentMode.MEMBERS && (
        <div className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
          <p className='font-bold text-slate-300'>Members</p>
          <SpacesConversationSidebarLoggedIn />
          <HorizontalDivider />
          {spaceMemberListController.state.objs.map((member) => (
            <ContextForSpaceMemberObj.Provider value={member}>
              <SpacesConversationSidebarMember />
            </ContextForSpaceMemberObj.Provider>
          ))}
        </div>
      )}
    </GlassAreaContainer>
  );
}
