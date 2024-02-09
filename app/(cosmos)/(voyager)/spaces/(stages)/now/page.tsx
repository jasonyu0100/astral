'use client';
import { createContext } from 'react';
import { SpaceTabStages } from '../../tabs/main';
import { SpacesView } from '../../spaces-epic/view';
import insideCosmos from '@/utils/isAuth';
import { useGlobalUser } from '@/state/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../../(modals)/space-modal/main';
import { useSpaces } from '@/handler/spaces/main';
import { SpacesContextObj } from '../all/page';

export const SpacesContext = createContext<SpacesContextObj>(
  {} as SpacesContextObj,
);

function Page() {
  const [state, actions] = useGlobalUser();
  const { spaces, _spacesHandler } = useSpaces(state.user.id);

  const modalContext = useSpacesModal();

  const context: SpacesContextObj = {
    spaces,
    spacesHandler: _spacesHandler,
    type: SpaceTabStages.Now,
  };

  return (
    <SpacesContext.Provider value={context}>
      <SpacesModalContext.Provider value={modalContext}>
        <SpacesView />
      </SpacesModalContext.Provider>
    </SpacesContext.Provider>
  );
}

export default insideCosmos(Page);
