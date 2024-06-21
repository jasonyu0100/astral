'use client';
import {
  ContextForUserList,
  useControllerForUserList,
} from '@/(server)/(controller)/user/list';
import isVerseAuth from '@/(utils)/isAuth';
import { CreativeNetworkView } from './view/view';

function Page() {
  const userListController = useControllerForUserList(false);

  return (
    <ContextForUserList.Provider value={userListController}>
      <CreativeNetworkView />;
    </ContextForUserList.Provider>
  );
}

export default isVerseAuth(Page);
