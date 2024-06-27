'use client';

import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForUserBackerList,
  useControllerForUserBackerList,
} from '@/(server)/(controller)/user/backer/list';
import {
  ContextForUserConnectionList,
  useControllerForUserConnectionList,
} from '@/(server)/(controller)/user/connection/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/(server)/(controller)/user/main';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/(model)/user/main';
import isVerseAuth from '@/(utils)/isAuth';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { ContextForProfile } from '../../layout';
import { UserProfileView } from './view/main';

export enum ProfilePage {
  Backers = 'Backers',
  Connections = 'Connections',
  General = 'General',
}

interface Controller {
  page: ProfilePage;
  setPage: Dispatch<SetStateAction<ProfilePage>>;
  admin: boolean;
}

export const ContextForProfilePage = createContext({} as Controller);

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const profileContext = useContext(ContextForProfile);
  const userController = useControllerForUserMain(profileContext.userId);
  const profileUser = userController.state.obj;
  const admin = loggedInUser.id === profileUser.id;
  const profileConnectionListController = useControllerForUserConnectionList(
    profileUser.id,
  );
  const profilebackerListController = useControllerForUserBackerList(
    profileUser.id,
  );
  const [page, setPage] = useState(ProfilePage.General);

  const context = {
    page,
    setPage,
    admin,
  };

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForProfileUserObj.Provider value={profileUser}>
        <ContextForProfilePage.Provider value={context}>
          <ContextForUserMain.Provider value={userController}>
            <ContextForUserConnectionList.Provider
              value={profileConnectionListController}
            >
              <ContextForUserBackerList.Provider
                value={profilebackerListController}
              >
                <UserProfileView />
              </ContextForUserBackerList.Provider>
            </ContextForUserConnectionList.Provider>
          </ContextForUserMain.Provider>
        </ContextForProfilePage.Provider>
      </ContextForProfileUserObj.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isVerseAuth(Page);
