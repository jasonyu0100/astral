import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { useContext } from 'react';
import { ContextForSpacesSidebarModals } from '../../modal/controller/main';

export function SpaceSidebarMembersListMember() {
  const spacesSidebarModals = useContext(ContextForSpacesSidebarModals);
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const user = useControllerForUserMain(spaceMemberObj.userId);

  return (
    <div
      onClick={() => {
        spacesSidebarModals.memberConversationController.open();
        console.log('clicked');
      }}
    >
      <UserDisplayPictureElement fileElem={user.state.obj.dp} />
    </div>
  );
}
