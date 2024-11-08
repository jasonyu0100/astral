import { profileMap } from '@/(core)/(dashboard)/profile/[id]/map';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForSpaceMemberObj } from '@/architecture/model/space/member/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { useContext } from 'react';

export function SpaceSidebarMembersListMember() {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const user = useControllerForUserMain(spaceMemberObj.userId);

  return (
    <a
      className='cursor-pointer'
      href={profileMap.account.link(user.state.objId)}
    >
      <UserDisplayPictureElement fileElem={user.state.obj?.dp} />
    </a>
  );
}
