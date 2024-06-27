import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import { SpaceSessionEditNext } from '../../(common)/icon/next/main';
import { EditContext } from '../../main';

export function SpaceSessionUpdateRight() {
  const { updateComplete } = useContext(EditContext);
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
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
            updateComplete(true);
          }}
        />
      )}
    </>
  );
}
