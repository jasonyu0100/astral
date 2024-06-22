'use client';
import {
  ContextForUserPrivateList,
  useControllerForUserPrivateList,
} from '@/(server)/(controller)/user/private-list';
import isVerseAuth from '@/(utils)/isAuth';
import { CreativeNetworkView } from './view/view';

function Page() {
  const userListController = useControllerForUserPrivateList(false);

  console.log(userListController);

  return (
    <ContextForUserPrivateList.Provider value={userListController}>
      <CreativeNetworkView />
    </ContextForUserPrivateList.Provider>
  );
}

export default isVerseAuth(Page);
