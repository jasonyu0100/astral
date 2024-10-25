import { ContextForSpacesSidebarModals } from '@/(core)/(project)/spaces/sidebar/modal/controller/main';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralAddIcon } from '@/icons/add/main';
import { ContextForSpaceMemberList } from '@/server/controller/space/member/list';
import { ContextForSpaceMemberObj } from '@/server/model/space/member/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesChat,
  SpacesChatSidebarContentMode,
} from '../../controller/main';
import { SpacesChatSidebarChapters } from './chapters/main';
import { SpacesChatSidebarHeader } from './header/main';
import { SpacesChatSidebarLoggedIn } from './members/loggedIn/main';
import { SpacesChatSidebarMember } from './members/member/main';

export function SpacesChatSidebar() {
  const spacesConversationController = useContext(ContextForSpacesChat);
  const spaceMemberListController = useContext(ContextForSpaceMemberList);
  const spacesSidebarModalController = useContext(
    ContextForSpacesSidebarModals,
  );

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
        SpacesChatSidebarContentMode.MEMBERS && (
        <div className='flex w-full flex-col items-center space-y-[1rem] p-[1rem]'>
          <SpacesChatSidebarLoggedIn />
          {spaceMemberListController.state.objs.map((member) => (
            <ContextForSpaceMemberObj.Provider value={member}>
              <SpacesChatSidebarMember />
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
