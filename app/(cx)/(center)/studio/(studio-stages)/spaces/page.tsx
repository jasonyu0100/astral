'use client';
import insideVerse from '@/(lgx)/utils/isAuth';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../../(modals)/(studio)/studio/main';
import { SpacesHandlerContext, useSpacesHandler } from '@/(lgx)/internal/handler/spaces/main';
import { SpacesModalView } from '@/(cx)/(modals)/(studio)/studio/view';
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
