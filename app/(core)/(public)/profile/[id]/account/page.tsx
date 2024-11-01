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
  ContextForUserPageRole,
  ContextForUserProfileVisibility,
  UserPageRole,
  UserProfileVisibility,
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
                <PermissionWrapper>
                  <ControllerWrapper>
                    <UserProfileView />
                  </ControllerWrapper>
                </PermissionWrapper>
              </UserProfileModals>
            </ContextForUserConnectionListFromDestination.Provider>
          </ContextForUserConnectionListFromSource.Provider>
        </ContextForUserMain.Provider>
      </ContextForProfileUserObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function PermissionWrapper({ children }: { children: React.ReactNode }) {
  const userMainController = useContext(ContextForUserMain);
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  const isOwner = loggedInUser?.id === userMainController.state.objId;

  const pageRole = isOwner
    ? UserPageRole.OWNER
    : userMainController.state.obj.visibility === UserProfileVisibility.PUBLIC
      ? UserPageRole.VIEWER
      : UserPageRole.NONE;

  return (
    <>
      <ContextForUserPageRole.Provider value={pageRole}>
        <ContextForUserProfileVisibility.Provider
          value={
            userMainController.state.obj.visibility as UserProfileVisibility
          }
        >
          {children}
        </ContextForUserProfileVisibility.Provider>
      </ContextForUserPageRole.Provider>
    </>
  );
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const controller = useControllerForUserProfile();

  return (
    <ContextForUserProfile.Provider value={controller}>
      {children}
    </ContextForUserProfile.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
