import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import { SpaceSessionEditDone } from '../../(common)/icon/done/main';
import {
  ContextForUpdateForm,
  useControllerForUpdateForm,
} from '../../../../../(controller)/complete-update-form/main';
import {
  ContextForSpaceSessionController,
  SpaceSessionPage,
} from '../../../../../(controller)/space-session/main';
import { SpaceSessionCompleteUpdateForm } from './form/main';
import { SpaceSessionCompleteUpdateNext } from './next/main';
import { SpaceSessionCompleteUpdatePanel } from './panel/main';

export function SpaceSessionCompleteUpdate() {
  const spaceProgressController = useContext(ContextForSpaceSessionController);
  const updateFormController = useControllerForUpdateForm();
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);

  return (
    <ContextForUpdateForm.Provider value={updateFormController}>
      <div className='flex h-full w-full flex-row items-center'>
        {updateListController.state.objs.length > 0 ? (
          <>
            <SpaceSessionCompleteUpdatePanel />
            <div className='flex flex-grow p-[2rem]'>
              <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
                {updateListController.state.objId !== '' && (
                  <SpaceSessionCompleteUpdateForm />
                )}
                {updateListController.state.index !==
                updateListController.state.objs.length - 1 ? (
                  <SpaceSessionCompleteUpdateNext />
                ) : (
                  <div className='w-[3rem]'>
                    <SpaceSessionEditDone
                      onClick={() => {
                        spaceProgressController.setPage(
                          SpaceSessionPage.COMPLETE_SESSION,
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
            <p className='text-bold text-xl text-slate-300'>
              No updates to complete
            </p>
          </div>
        )}
      </div>
    </ContextForUpdateForm.Provider>
  );
}
