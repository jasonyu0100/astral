'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../(modals)/studio/main';
import { SpacesModalView } from '@/(core)/(dashboard)/(modals)/studio/view';
import { StudioSpacesView } from './view/view';
import { ContextForSpaceList, useControllerForSpaceList } from '@/(model)/(controller)/space/list';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(user.id);

  const modalContext = useSpacesModal();

  return (
      <ContextForSpaceList.Provider value={spaceListController}>
        <SpacesModalContext.Provider value={modalContext}>
          <SpacesModalView />
          <StudioSpacesView />
        </SpacesModalContext.Provider>
      </ContextForSpaceList.Provider>
  );
}

export default isVerseAuth(Page);
