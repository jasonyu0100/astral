'use client';
import { SpaceTabStages } from '../../(studio-tabs)/main';
import { SpacesView } from '../../(studio-epic)/view';
import insideCosmos from '@/utils/isAuth';
import { useGlobalUser } from '@/(store)/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../../(modals)/space-modal/main';
import { useSpaces } from '@/(verses)/(handler)/spaces/main';
import { SpacesContext, SpacesContextObj } from '../all/page';
import { SpacesModalView } from '@/(verses)/(modals)/space-modal/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { spaces, _spacesHandler } = useSpaces(user.id);
  const modalContext = useSpacesModal();

  const context: SpacesContextObj = {
    spaces,
    spacesHandler: _spacesHandler,
    type: SpaceTabStages.Now,
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
