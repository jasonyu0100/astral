'use client';
import {
  ContextForSpaceMemberOfUserList,
  useControllerForSpaceMemberOfUserList,
} from '@/(server)/controller/space/member/user-list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { StudioSharedView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const memberListController = useControllerForSpaceMemberOfUserList(
    loggedInUser.id,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMemberOfUserList.Provider value={memberListController}>
        <StudioSharedView />
      </ContextForSpaceMemberOfUserList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
