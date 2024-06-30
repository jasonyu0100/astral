import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import { SpaceSessionEditPrev } from '../../(common)/icon/prev/main';

export function SpaceSessionUpdateLeft() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );

  return (
    <>
      {sessionUpdateListController.state.index > 0 ? (
        <SpaceSessionEditPrev
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
