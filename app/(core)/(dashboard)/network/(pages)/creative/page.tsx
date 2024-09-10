'use client';
import {
  ContextForUserPrivateList,
  useControllerForUserPrivateList,
} from '@/(server)/controller/user/private-list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import {
  ContextForNetworkCreative,
  useControllerForNetworkCreative,
} from './controller/main';
import { NetworkCreativeView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const userListController = useControllerForUserPrivateList(false);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForUserPrivateList.Provider value={userListController}>
        <ControllerWrapper>
          <NetworkCreativeView />
        </ControllerWrapper>
      </ContextForUserPrivateList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const networkCreativeController = useControllerForNetworkCreative();

  return (
    <ContextForNetworkCreative.Provider value={networkCreativeController}>
      {children}
    </ContextForNetworkCreative.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
