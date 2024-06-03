'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../(modals)/studio/main';
import { SpacesHandlerContext, useSpacesHandler } from '@/(controller)/spaces/main';
import { SpacesModalView } from '@/(core)/(board)/(modals)/studio/view';
import { StudioSpacesView } from './view/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const spacesHandler = useSpacesHandler(user.id);

  const modalContext = useSpacesModal();

  return (
      <SpacesHandlerContext.Provider value={spacesHandler}>
        <SpacesModalContext.Provider value={modalContext}>
          <SpacesModalView />
          <StudioSpacesView />
        </SpacesModalContext.Provider>
      </SpacesHandlerContext.Provider>
  );
}

export default isVerseAuth(Page);
