import { useContext } from 'react';
import { SpaceSessionsEditPrev } from '../../(common)/icon/prev/main';
import { ContextForSpaceSessionsController } from '../../../../../(controller)/space-session/main';

export function SpacesSessionSessionLeft() {
  const spaceSessionController = useContext(ContextForSpaceSessionsController);

  return (
    <SpaceSessionsEditPrev
      onClick={() => {
        spaceSessionController.updateSessionView(false);
      }}
    />
  );
}
