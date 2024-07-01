import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import { SpaceProgressEditNext } from '../../../(common)/icon/next/main';
import { ContextForSpaceProgressController } from '../../../../../../(controller)/space-session/main';

export function SpaceProgressCompleteUpdateNext() {
  const spaceSessionController = useContext(ContextForSpaceProgressController);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );

  return (
    <>
      {sessionUpdateListController.state.index !==
      sessionUpdateListController.state.objs.length - 1 ? (
        <SpaceProgressEditNext
          onClick={() => {
            sessionUpdateListController.actions.stateActions.goNext();
          }}
        />
      ) : (
        <SpaceProgressEditNext
          onClick={() => {
            spaceSessionController.updateSessionView(true);
          }}
        />
      )}
    </>
  );
}
