import { ContextForSpacesSidebarModals } from '@/(core)/(project)/spaces/sidebar/modal/controller/main';
import { ContextForSpaceMemberList } from '@/architecture/controller/space/member/list';
import { ContextForSpaceMemberObj } from '@/architecture/model/space/member/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { SpacesChatSidebarAi } from './ai/main';
import { SpacesChatSidebarLoggedIn } from './loggedIn/main';
import { SpacesChatSidebarMember } from './member/main';

export function SpacesChatSidebarMembers() {
  const spaceMemberListController = useContext(ContextForSpaceMemberList);
  const spacesSidebarModalController = useContext(
    ContextForSpacesSidebarModals,
  );

  return (
    <div className='flex w-full flex-col items-center space-y-[1rem] p-[1rem]'>
      <SpacesChatSidebarLoggedIn />
      <SpacesChatSidebarAi />
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
  );
}
