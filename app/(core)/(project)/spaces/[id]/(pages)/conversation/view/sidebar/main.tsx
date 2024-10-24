import { ContextForSpacesSidebarModals } from '@/(core)/(project)/spaces/sidebar/modal/controller/main';
import { ContextForSpaceMemberList } from '@/(server)/controller/space/member/list';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralAddIcon } from '@/icons/add/main';
import { glassFx } from '@/style/data';
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
  const spacesSidebarModalController = useContext(
    ContextForSpacesSidebarModals,
  );

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
        <div className='flex w-full flex-col items-center space-y-[1rem] p-[1rem]'>
          <SpacesConversationSidebarLoggedIn />
          {spaceMemberListController.state.objs.map((member) => (
            <ContextForSpaceMemberObj.Provider value={member}>
              <SpacesConversationSidebarMember />
            </ContextForSpaceMemberObj.Provider>
          ))}
          <HorizontalDivider />
          <div
            className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
            onClick={() => {
              spacesSidebarModalController.addMemberController.open();
            }}
          >
            <AstralAddIcon />
          </div>
        </div>
      )}
    </GlassAreaContainer>
  );
}
