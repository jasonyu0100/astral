'use client';

import {
  ContextForUserConnectionListFromFollowing,
  useControllerForUserConnectionListFromFollowing,
} from '@/(server)/controller/user/connection/list-from-following';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/controller/user/main';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useContext } from 'react';
import { ContextForProfileId } from '../../layout';
import { UserProfileModals } from './(modals)/controller/main';
import {
  ContextForUserProfile,
  useControllerForUserProfile,
} from './controller/main';
import { UserProfileView } from './view/main';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const profileIdContext = useContext(ContextForProfileId);
  const userController = useControllerForUserMain(profileIdContext.userId);
  const profileUser = userController.state.obj;
  const connectionListController =
    useControllerForUserConnectionListFromFollowing(profileUser.id);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForProfileUserObj.Provider value={profileUser}>
        <ContextForUserMain.Provider value={userController}>
          <ContextForUserConnectionListFromFollowing.Provider
            value={connectionListController}
          >
            <UserProfileModals>
              <ProfileControllerWrapper>
                <UserProfileView />
              </ProfileControllerWrapper>
            </UserProfileModals>
          </ContextForUserConnectionListFromFollowing.Provider>
        </ContextForUserMain.Provider>
      </ContextForProfileUserObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ProfileControllerWrapper({ children }: { children: React.ReactNode }) {
  const controller = useControllerForUserProfile();

  return (
    <ContextForUserProfile.Provider value={controller}>
      {children}
    </ContextForUserProfile.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
