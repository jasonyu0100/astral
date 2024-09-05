import { ContextForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { useContext } from 'react';
import { SpaceSessionEditNext } from '../../../(common)/icon/next/main';
import { ContextForSpaceSessionController } from '../../../../../../controller/space-session/main';

export function SpaceSessionCompleteUpdateNext() {
  const spaceSessionController = useContext(ContextForSpaceSessionController);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateListFromChapter,
  );

  return (
    <>
      {sessionUpdateListController.state.index !==
      sessionUpdateListController.state.objs.length - 1 ? (
        <SpaceSessionEditNext
          onClick={() => {
            sessionUpdateListController.actions.stateActions.goNext();
          }}
        />
      ) : (
        <SpaceSessionEditNext
          onClick={() => {
            spaceSessionController.updateSessionView(true);
          }}
        />
      )}
    </>
  );
}
