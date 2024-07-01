import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useContext } from 'react';
import { SpaceProgressEditDone } from '../../../(common)/icon/done/main';
import { ContextForSessionForm } from '../../../../../../(controller)/complete-session-form/main';

export function SpaceProgressCompleteSessionComplete() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionFormController = useContext(ContextForSessionForm);

  return (
    <>
      <div className='w-[3rem]'>
        <SpaceProgressEditDone
          onClick={() => {
            sessionFormController.saveUpdate().then(() => {
              if (
                chapterListController.state.index ===
                chapterListController.state.objs.length - 1
              ) {
                chapterListController.actions.stateActions.goStart();
              } else {
                chapterListController.actions.stateActions.goNext();
              }
            });
          }}
        />
      </div>
    </>
  );
}
