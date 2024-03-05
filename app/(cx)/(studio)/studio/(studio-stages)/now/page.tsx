'use client';
import { SpaceTabStages } from '../../(studio-tabs)/main';
import { SpacesView } from '../../(studio-epic)/view';
import insideCosmos from '@/(logic)/utils/isAuth';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';
import {
  SpacesModalContext,
  useSpacesModal,
} from '../../../../../(modals)/(studio)/studio/main';
import { useSpacesHandler } from '@/(logic)/internal/handler/spaces/main';
import { SpacesContext, SpacesContextObj } from '../all/page';
import { SpacesModalView } from '@/(modals)/(studio)/studio/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { spaces, spaceActions: _spacesHandler } = useSpacesHandler(user.id);
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
