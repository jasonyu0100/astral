import { useContext } from 'react';
import { SpaceProgressEditDone } from '../../../(common)/icon/done/main';
import { ContextForSessionForm } from '../../../../../../(controller)/complete-session-form/main';
import {
  ContextForSpaceProgressController,
  SpaceProgressPage,
} from '../../../../../../(controller)/space-session/main';

export function SpaceProgressCompleteSessionComplete() {
  const spaceProgressController = useContext(ContextForSpaceProgressController);
  const sessionFormController = useContext(ContextForSessionForm);

  return (
    <>
      <div className='w-[3rem]'>
        <SpaceProgressEditDone
          onClick={() => {
            sessionFormController.saveUpdate().then(() => {
              spaceProgressController.setPage(
                SpaceProgressPage.COMPLETE_SESSION,
              );
            });
          }}
        />
      </div>
    </>
  );
}
