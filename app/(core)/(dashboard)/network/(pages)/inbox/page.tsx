'use client';
import {
  ContextForUserPrivateList,
  useControllerForUserPrivateList,
} from '@/(server)/controller/user/private-list';
import isAstralAuth from '@/utils/isAuth';
import { CreativeInboxView } from './view/view';

function Page() {
  const userListController = useControllerForUserPrivateList(false);

  return (
    <ContextForUserPrivateList.Provider value={userListController}>
      <CreativeInboxView />
    </ContextForUserPrivateList.Provider>
  );
}

export default isAstralAuth(Page);
