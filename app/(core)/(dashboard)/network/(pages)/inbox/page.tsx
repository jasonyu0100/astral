'use client';
import {
  ContextForUserPublicList,
  useControllerForUserPublicList,
} from '@/(server)/controller/user/list-from-allowed-public';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { CreativeInboxView } from './view/view';

function Page() {
  const userListController = useControllerForUserPublicList(false);

  return (
    <ContextForUserPublicList.Provider value={userListController}>
      <CreativeInboxView />
    </ContextForUserPublicList.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
