import { userProfileMap } from '@/(core)/(dashboard)/users/[id]/map';
import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { useContext } from 'react';

export function SpaceSidebarMembersListMember() {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const user = useControllerForUserMain(spaceMemberObj.userId);

  return (
    <div
      onClick={() => {
        window.location.href = userProfileMap.profile.link(user.state.objId);
      }}
    >
      <UserDisplayPictureElement fileElem={user.state.obj.dp} />
    </div>
  );
}
