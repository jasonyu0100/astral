'use client';

import { portalMap } from '@/(portal)/map';
import {
  ContextForUserConnectionListFromDestination,
  useControllerForUserConnectionListFromDestination,
} from '@/architecture/controller/user/connection/list-from-destination';
import {
  ContextForUserConnectionListFromSource,
  useControllerForUserConnectionListFromSource,
} from '@/architecture/controller/user/connection/list-from-source';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/architecture/controller/user/main';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
  ContextForUserPageRole,
  ContextForUserProfileVisibility,
  UserPageRole,
  UserProfileVisibility,
} from '@/architecture/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PublicAstralPage from '@/utils/public-astral-page';
import { useContext, useEffect } from 'react';
import { ContextForProfileId } from '../layout';
import { ContextForProfile, useControllerForProfile } from './controller/main';
import { ProfileModals } from './modals/controller/main';
import { ProfileView } from './view/main';

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
              <ProfileModals>
                <PermissionWrapper>
                  <RedirectWrapper>
                    <ControllerWrapper>
                      <ProfileView />
                    </ControllerWrapper>
                  </RedirectWrapper>
                </PermissionWrapper>
              </ProfileModals>
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
      : userMainController.state.obj.visibility === UserProfileVisibility.NONE
        ? UserPageRole.NONE
        : UserPageRole.UNDEFINED;

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

function RedirectWrapper({ children }: { children: React.ReactNode }) {
  const pageRole = useContext(ContextForUserPageRole);
  const userMainController = useContext(ContextForUserMain);
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  useEffect(() => {
    if (userMainController.state.objId && loggedInUser.id) {
      if (pageRole === UserPageRole.NONE) {
        window.location.href = `${portalMap.portal.register.link}?redirect=${window.location.href}`;
      }
    }
  }, [userMainController.state.objId, pageRole]);

  return <>{children}</>;
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const controller = useControllerForProfile();

  return (
    <ContextForProfile.Provider value={controller}>
      {children}
    </ContextForProfile.Provider>
  );
}

export default PublicAstralPage(Page);
