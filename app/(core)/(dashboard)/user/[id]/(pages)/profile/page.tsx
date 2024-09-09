'use client';

import {
  ContextForUserBackerList,
  useControllerForUserBackerList,
} from '@/(server)/controller/user/backer/list';
import {
  ContextForUserConnectionList,
  useControllerForUserConnectionList,
} from '@/(server)/controller/user/connection/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/controller/user/main';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import isAstralAuth from '@/utils/isAuth';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { UserProfileModals } from './(modals)/controller/main';
import {
  ContextForUserProfile,
  useControllerForUserProfile,
} from './controller/main';
import { UserProfileView } from './view/main';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const profileContext = useContext(ContextForProfile);
  const userController = useControllerForUserMain(profileContext.userId);
  const profileUser = userController.state.obj;
  const profileConnectionListController = useControllerForUserConnectionList(
    profileUser.id,
  );
  const profilebackerListController = useControllerForUserBackerList(
    profileUser.id,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForProfileUserObj.Provider value={profileUser}>
        <ContextForUserMain.Provider value={userController}>
          <ContextForUserConnectionList.Provider
            value={profileConnectionListController}
          >
            <ContextForUserBackerList.Provider
              value={profilebackerListController}
            >
              <UserProfileModals>
                <ProfileControllerWrapper>
                  <UserProfileView />
                </ProfileControllerWrapper>
              </UserProfileModals>
            </ContextForUserBackerList.Provider>
          </ContextForUserConnectionList.Provider>
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

export default isAstralAuth(Page);
