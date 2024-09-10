'use client';
import {
  ContextForUserPrivateList,
  useControllerForUserPrivateList,
} from '@/(server)/controller/user/private-list';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { StudioBackedView } from './view/view';

function Page() {
  const userListController = useControllerForUserPrivateList(false);

  return (
    <ContextForUserPrivateList.Provider value={userListController}>
      <StudioBackedView />
    </ContextForUserPrivateList.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
