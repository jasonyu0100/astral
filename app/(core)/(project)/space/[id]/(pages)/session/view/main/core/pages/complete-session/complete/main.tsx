import { useContext } from 'react';
import { SpaceSessionEditDone } from '../../../(common)/icon/done/main';
import { ContextForSessionForm } from '../../../../../../controller/complete-session-form/main';
import {
  ContextForSpaceSessionController,
  SpaceSessionPage,
} from '../../../../../../controller/space-session/main';

export function SpaceSessionCompleteSessionComplete() {
  const spaceProgressController = useContext(ContextForSpaceSessionController);
  const sessionFormController = useContext(ContextForSessionForm);

  return (
    <>
      <div className='w-[3rem]'>
        <SpaceSessionEditDone
          onClick={() => {
            sessionFormController.saveUpdate().then(() => {
              spaceProgressController.setPage(
                SpaceSessionPage.COMPLETE_SESSION,
              );
            });
          }}
        />
      </div>
    </>
  );
}
