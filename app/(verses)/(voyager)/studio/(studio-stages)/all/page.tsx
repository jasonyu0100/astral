'use client';
import { createContext } from 'react';
import { SpaceTabStages } from '../../(studio-tabs)/main';
import { SpacesView } from '../../(studio-epic)/view';
import { SpaceObj } from '@/(ouros)/(model)/space/main';
import insideCosmos from '@/utils/isAuth';
import { useGlobalUser } from '@/(store)/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../../(modals)/space-modal/main';
import { SpacesHandler, useSpaces } from '@/(verses)/(handler)/spaces/main';
import { SpacesModalView } from '@/(verses)/(modals)/space-modal/view';

export interface SpacesContextObj {
  spaces: SpaceObj[];
  spacesHandler: SpacesHandler;
  type: SpaceTabStages;
}

export const SpacesContext = createContext<SpacesContextObj>(
  {} as SpacesContextObj,
);

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { spaces, _spacesHandler } = useSpaces(user.id);

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
