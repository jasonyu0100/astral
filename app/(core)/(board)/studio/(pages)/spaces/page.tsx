'use client';
import insideVerse from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../(modals)/studio/main';
import { SpacesHandlerContext, useSpacesHandler } from '@/(types)/handler/spaces/main';
import { SpacesModalView } from '@/(core)/(board)/(modals)/studio/view';
import { StudioSpacesView } from './(spaces-epic)/view';

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

export default insideVerse(Page);
