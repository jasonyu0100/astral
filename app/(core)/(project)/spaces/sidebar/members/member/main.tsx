import { userProfileMap } from '@/(core)/(public)/profile/[id]/map';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { useControllerForUserMain } from '@/server/controller/user/main';
import { ContextForSpaceMemberObj } from '@/server/model/space/member/main';
import { useContext } from 'react';

export function SpaceSidebarMembersListMember() {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const user = useControllerForUserMain(spaceMemberObj.userId);

  return (
    <a
      className='cursor-pointer'
      href={userProfileMap.account.link(user.state.objId)}
    >
      <UserDisplayPictureElement fileElem={user.state.obj?.dp} />
    </a>
  );
}
