import { userMap } from '@/(core)/(dashboard)/user/[id]/map';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForSpaceMemberObj } from '@/architecture/model/space/member/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import Link from 'next/link';
import { useContext } from 'react';

export function SpaceSidebarMembersListMember() {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const user = useControllerForUserMain(spaceMemberObj.userId);

  return (
    <Link
      className='cursor-pointer'
      href={userMap.profile.link(user.state.objId)}
    >
      <UserDisplayPictureElement fileElem={user.state.obj?.dp} />
    </Link>
  );
}
