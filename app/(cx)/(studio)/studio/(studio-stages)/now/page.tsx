'use client';
import insideVerses from '@/(logic)/utils/isAuth';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../../../(modals)/(studio)/studio/main';
import { SpacesHandlerContext, useSpacesHandler } from '@/(logic)/internal/handler/spaces/main';
import { SpacesModalView } from '@/(modals)/(studio)/studio/view';
import { StudioSpaces } from '../../(studio-epic)/main';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const spacesHandler = useSpacesHandler(user.id);

  const modalContext = useSpacesModal();

  return (
      <SpacesHandlerContext.Provider value={spacesHandler}>
        <SpacesModalContext.Provider value={modalContext}>
          <SpacesModalView />
          <StudioSpaces />
        </SpacesModalContext.Provider>
      </SpacesHandlerContext.Provider>
  );
}

export default insideVerses(Page);
