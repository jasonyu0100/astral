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
  ContextForCurrentUserObj,
  ContextForUserObj,
} from '@/(server)/(model)/user/main';
import isVerseAuth from '@/(utils)/isAuth';
import { useContext } from 'react';
import { ContextForProfile } from '../../layout';
import { UserProfileView } from './view/main';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const profileContext = useContext(ContextForProfile);
  const userController = useControllerForUserMain(profileContext.userId);
  const user = userController.state.obj;
  const connectListController = useControllerForUserConnectionList(
    loggedInUser.id,
  );
  const backerListController = useControllerForUserBackerList(user.id);

  return (
    <ContextForUserMain.Provider value={userController}>
      <ContextForCurrentUserObj.Provider value={loggedInUser}>
        <ContextForUserObj.Provider value={user}>
          <ContextForUserConnectionList.Provider value={connectListController}>
            <ContextForUserBackerList.Provider value={backerListController}>
              <UserProfileView />
            </ContextForUserBackerList.Provider>
          </ContextForUserConnectionList.Provider>
        </ContextForUserObj.Provider>
      </ContextForCurrentUserObj.Provider>
    </ContextForUserMain.Provider>
  );
}

export default isVerseAuth(Page);
