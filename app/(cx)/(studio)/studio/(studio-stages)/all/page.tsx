'use client';
import { createContext } from 'react';
import { SpaceTabStages } from '../../(studio-tabs)/main';
import { SpacesView } from '../../(studio-epic)/view';
import { SpaceObj } from '@/(logic)/internal/data/infra/model/space/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../../../(modals)/(studio)/studio/main';
import { SpaceActions, useSpacesHandler } from '@/(logic)/internal/handler/spaces/main';
import { SpacesModalView } from '@/(modals)/(studio)/studio/view';

export interface SpacesContextObj {
  spaces: SpaceObj[];
  spacesHandler: SpaceActions;
  type: SpaceTabStages;
}

export const SpacesContext = createContext<SpacesContextObj>(
  {} as SpacesContextObj,
);

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { spaces, spaceActions: _spacesHandler } = useSpacesHandler(user.id);

  const modalContext = useSpacesModal();

  const context: SpacesContextObj = {
    spaces,
    spacesHandler: _spacesHandler,
    type: SpaceTabStages.All,
  };

  return (
    <SpacesContext.Provider value={context}>
      <SpacesModalContext.Provider value={modalContext}>
        <SpacesModalView />
        <SpacesView />
      </SpacesModalContext.Provider>
    </SpacesContext.Provider>
  );
}

export default insideCosmos(Page);
