import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import { SpaceProgressEditDone } from '../../(common)/icon/done/main';
import {
  ContextForUpdateForm,
  useControllerForUpdateForm,
} from '../../../../../(controller)/complete-update-form/main';
import {
  ContextForSpaceProgressController,
  SpaceProgressPage,
} from '../../../../../(controller)/space-session/main';
import { SpaceProgressCompleteUpdateForm } from './form/main';
import { SpaceProgressCompleteUpdateNext } from './next/main';
import { SpaceProgressCompleteUpdatePanel } from './panel/main';

export function SpaceProgressCompleteUpdate() {
  const spaceProgressController = useContext(ContextForSpaceProgressController);
  const updateFormController = useControllerForUpdateForm();
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);

  return (
    <ContextForUpdateForm.Provider value={updateFormController}>
      <div className='flex h-full w-full flex-row items-center'>
        {updateListController.state.objs.length > 0 ? (
          <>
            <SpaceProgressCompleteUpdatePanel />
            <div className='flex flex-grow p-[2rem]'>
              <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
                {updateListController.state.objId !== '' && (
                  <SpaceProgressCompleteUpdateForm />
                )}
                {updateListController.state.index !==
                updateListController.state.objs.length - 1 ? (
                  <SpaceProgressCompleteUpdateNext />
                ) : (
                  <div className='w-[3rem]'>
                    <SpaceProgressEditDone
                      onClick={() => {
                        spaceProgressController.setPage(
                          SpaceProgressPage.COMPLETE_SESSION,
                        );
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className='h-full w-full p-[2rem]'>
            <p className='text-bold text-xl text-slate-700'>
              No updates to complete
            </p>
          </div>
        )}
      </div>
    </ContextForUpdateForm.Provider>
  );
}
