'use client';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
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
import {
  ContextForCreateSpace,
  useControllerForCreateSpace,
} from './(modal)/create-space/(controller)/create-space/main';
import { StudioSpacesView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(loggedInUser?.id);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceList.Provider value={spaceListController}>
        <SpacesPersonalModals>
          <ControllerWrapper>
            <EffectWrapper>
              <StudioSpacesView />
            </EffectWrapper>
          </ControllerWrapper>
        </SpacesPersonalModals>
      </ContextForSpaceList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForCreateSpace();
  return (
    <>
      <ContextForCreateSpace.Provider value={createSpaceController}>
        {children}
      </ContextForCreateSpace.Provider>
    </>
  );
}

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spacesPersonalModalController = useContext(
    ContextForSpacesPersonalModals,
  );
  const spaceListController = useContext(ContextForSpaceList);
  const createSpaceController = useContext(ContextForCreateSpace);

  useEffect(() => {
    if (spaceListController.state.objs.length === 0) {
      const created = new Date(loggedInUser.created);
      const now = new Date();
      const diff = now.getTime() - created.getTime();
      if (diff < 1000 * 60 * 5) {
        // HARD LOCK IN STARTER FOR 5 minutes
        createSpaceController.createSpace().then((space) => {
          window.location.href = spacesMap.spaces.id.board.link(space.id);
        });
      }
    }
    if (
      spaceListController.state.objs.length > 2 &&
      spaceListController.state.objs.length < 10
    ) {
      spacesPersonalModalController.showNoticeController.open();
    } else {
      spacesPersonalModalController.showNoticeController.close();
    }
  }, [spaceListController.state.objs.length, loggedInUser]);
  return <>{children}</>;
}

export default protectedUnderAstralAuth(Page);
