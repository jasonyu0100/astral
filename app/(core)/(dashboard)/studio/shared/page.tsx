'use client';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForSpaceMemberListFromUser,
  useControllerForSpaceMemberListFromUser,
} from '@/server/controller/space/member/list-from-user';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { StudioSharedView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceMemberListController = useControllerForSpaceMemberListFromUser(
    loggedInUser?.id,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMemberListFromUser.Provider
        value={spaceMemberListController}
      >
        <StudioSharedView />
      </ContextForSpaceMemberListFromUser.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
