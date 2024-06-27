'use client';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForUserPrivateList,
  useControllerForUserPrivateList,
} from '@/(server)/(controller)/user/private-list';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import isVerseAuth from '@/(utils)/isAuth';
import { CreativeNetworkView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const userListController = useControllerForUserPrivateList(false);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForUserPrivateList.Provider value={userListController}>
        <CreativeNetworkView />
      </ContextForUserPrivateList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isVerseAuth(Page);
