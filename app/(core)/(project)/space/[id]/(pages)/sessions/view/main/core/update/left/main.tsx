import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import { SpaceSessionsEditPrev } from '../../(common)/icon/prev/main';

export function SpaceSessionsUpdateLeft() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );

  return (
    <>
      {sessionUpdateListController.state.index > 0 ? (
        <SpaceSessionsEditPrev
          onClick={() => {
            if (sessionUpdateListController.state.index === 0) {
              chapterListController.actions.stateActions.goPrev();
            } else {
              sessionUpdateListController.actions.stateActions.goPrev();
            }
          }}
        />
      ) : (
        <div className='w-[3rem]'></div>
      )}
    </>
  );
}
