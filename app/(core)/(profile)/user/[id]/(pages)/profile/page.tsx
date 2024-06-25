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
  const connectListController = useControllerForUserConnectionList(
    loggedInUser.id,
  );
  const backerListController = useControllerForUserBackerList(loggedInUser.id);
  const profileContext = useContext(ContextForProfile);
  const userController = useControllerForUserMain(profileContext.userId);
  const user = userController.state.obj;
  const admin = loggedInUser.id === user.id;
  const [page, setPage] = useState(ProfilePage.General);

  const context = {
    page,
    setPage,
    admin,
  };

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForProfileUserObj.Provider value={user}>
        <ContextForProfilePage.Provider value={context}>
          <ContextForUserMain.Provider value={userController}>
            <ContextForUserConnectionList.Provider
              value={connectListController}
            >
              <ContextForUserBackerList.Provider value={backerListController}>
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
