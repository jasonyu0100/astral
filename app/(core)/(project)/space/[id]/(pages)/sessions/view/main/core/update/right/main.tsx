import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import { SpaceSessionsEditNext } from '../../(common)/icon/next/main';
import { ContextForSpaceSessionsController } from '../../../../../(controller)/space-session/main';

export function SpaceSessionsUpdateRight() {
  const spaceSessionController = useContext(ContextForSpaceSessionsController);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );

  return (
    <>
      {sessionUpdateListController.state.index !==
      sessionUpdateListController.state.objs.length - 1 ? (
        <SpaceSessionsEditNext
          onClick={() => {
            sessionUpdateListController.actions.stateActions.goNext();
          }}
        />
      ) : (
        <SpaceSessionsEditNext
          onClick={() => {
            spaceSessionController.updateSessionView(true);
          }}
        />
      )}
    </>
  );
}
