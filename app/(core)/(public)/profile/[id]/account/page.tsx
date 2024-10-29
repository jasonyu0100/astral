'use client';

import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForUserConnectionListFromDestination,
  useControllerForUserConnectionListFromDestination,
} from '@/server/controller/user/connection/list-from-destination';
import {
  ContextForUserConnectionListFromSource,
  useControllerForUserConnectionListFromSource,
} from '@/server/controller/user/connection/list-from-source';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/server/controller/user/main';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/server/model/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useContext } from 'react';
import { ContextForProfileId } from '../layout';
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
  const fromSourceFollowingController =
    useControllerForUserConnectionListFromSource(profileUser?.id);
  const fromDestinationFollowingController =
    useControllerForUserConnectionListFromDestination(profileUser?.id);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForProfileUserObj.Provider value={profileUser}>
        <ContextForUserMain.Provider value={userController}>
          <ContextForUserConnectionListFromSource.Provider
            value={fromSourceFollowingController}
          >
            <ContextForUserConnectionListFromDestination.Provider
              value={fromDestinationFollowingController}
            >
              <UserProfileModals>
                <ProfileControllerWrapper>
                  <UserProfileView />
                </ProfileControllerWrapper>
              </UserProfileModals>
            </ContextForUserConnectionListFromDestination.Provider>
          </ContextForUserConnectionListFromSource.Provider>
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
