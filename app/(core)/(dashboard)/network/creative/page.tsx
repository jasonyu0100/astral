'use client';
import {
  ContextForUserPublicList,
  useControllerForUserPublicList,
} from '@/architecture/controller/user/list-from-allowed-public';
import {
  ContextForLoggedInUserObj,
  UserProfileVisibility,
} from '@/architecture/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import {
  ContextForNetworkCreative,
  useControllerForNetworkCreative,
} from './controller/main';
import { NetworkCreativeView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const userListController = useControllerForUserPublicList(
    UserProfileVisibility.PUBLIC,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForUserPublicList.Provider value={userListController}>
        <ControllerWrapper>
          <NetworkCreativeView />
        </ControllerWrapper>
      </ContextForUserPublicList.Provider>
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

export default PrivateAstralPage(Page);
