'use client';
import { createContext } from 'react';
import { SpaceTabStages } from '../../tabs/main';
import { SpacesView } from '../../spaces-epic/view';
import { SpaceObj } from '@/tables/space/main';
import insideCosmos from '@/utils/isAuth';
import { useGlobalUser } from '@/state/main';
import {
  SpacesModalContext,
  useSpacesModalContext,
} from '../../spaces-epic/modal/main';
import { SpacesHandler, useSpaces } from '@/(cosmos)/handler/spaces/main';

interface SpacesContextObj {
  spaces: SpaceObj[];
  spacesHandler: SpacesHandler;
}

export const SpacesContext = createContext<SpacesContextObj>(
  {} as SpacesContextObj,
);
export interface SpaceViewProps {
  type: SpaceTabStages;
}

function Page() {
  const [state, actions] = useGlobalUser();
  const { spaces, _spacesHandler } = useSpaces(state.user.id);

  const modalContext = useSpacesModalContext();

  const context = {
    spaces,
    spacesHandler: _spacesHandler,
  };

  return (
    <SpacesContext.Provider value={context}>
      <SpacesModalContext.Provider value={modalContext}>
        <SpacesView type={SpaceTabStages.Then} />
      </SpacesModalContext.Provider>
    </SpacesContext.Provider>
  );
}

export default insideCosmos(Page);
