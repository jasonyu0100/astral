import { useContext } from 'react';
import { SpaceSessionEditPrev } from '../../(common)/icon/prev/main';
import { ContextForSpaceSessionController } from '../../../../../(controller)/space-session/main';

export function SpacesSessionSessionLeft() {
  const spaceSessionController = useContext(ContextForSpaceSessionController);

  return (
    <SpaceSessionEditPrev
      onClick={() => {
        spaceSessionController.updateSessionView(false);
      }}
    />
  );
}
