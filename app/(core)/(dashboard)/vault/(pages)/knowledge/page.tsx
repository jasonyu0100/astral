'use client';
import {
  ContextForUserPublicList,
  useControllerForUserPublicList,
} from '@/(server)/controller/user/list-from-allowed-public';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { VaultKnowledgeView } from './view/view';

function Page() {
  const userListController = useControllerForUserPublicList(false);

  return (
    <ContextForUserPublicList.Provider value={userListController}>
      <VaultKnowledgeView />
    </ContextForUserPublicList.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
