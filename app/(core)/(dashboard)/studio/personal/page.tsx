'use client';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/server/controller/space/list';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useContext, useEffect } from 'react';
import {
  ContextForSpacesPersonalModals,
  SpacesPersonalModals,
} from './(modal)/controller/main';
import { StudioSpacesView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(loggedInUser?.id);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceList.Provider value={spaceListController}>
        <SpacesPersonalModals>
          <EffectWrapper>
            <StudioSpacesView />
          </EffectWrapper>
        </SpacesPersonalModals>
      </ContextForSpaceList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const spacesPersonalModalController = useContext(
    ContextForSpacesPersonalModals,
  );
  const spaceListController = useContext(ContextForSpaceList);
  useEffect(() => {
    spacesPersonalModalController.showNoticeController.open();
  }, []);
  return <>{children}</>;
}

export default protectedUnderAstralAuth(Page);
