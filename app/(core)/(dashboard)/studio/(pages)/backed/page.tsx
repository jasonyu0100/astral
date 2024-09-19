'use client';
import {
  ContextForUserPublicList,
  useControllerForUserPublicList,
} from '@/(server)/controller/user/private-list';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { StudioBackedView } from './view/view';

function Page() {
  const userListController = useControllerForUserPublicList(false);

  return (
    <ContextForUserPublicList.Provider value={userListController}>
      <StudioBackedView />
    </ContextForUserPublicList.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
