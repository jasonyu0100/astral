import { ContextForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { useContext } from 'react';
import {
  ContextForSessionForm,
  useControllerForSessionForm,
} from '../../../../../controller/complete-session-form/main';
import { SpaceSessionCompleteSessionComplete } from './complete/main';
import { SpaceSessionCompleteSessionForm } from './form/main';
import { SpaceSessionCompleteSessionPanel } from './panel/main';

export function SpaceSessionCompleteSession() {
  const sessionFormController = useControllerForSessionForm();
  const updateListController = useContext(
    ContextForSessionUpdateListFromChapter,
  );

  return (
    <ContextForSessionForm.Provider value={sessionFormController}>
      <div className='flex h-full w-full flex-row items-center'>
        {updateListController.state.objs.length > 0 ? (
          <>
            <SpaceSessionCompleteSessionPanel />
            <div className='flex flex-grow p-[2rem]'>
              <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
                <>
                  <SpaceSessionCompleteSessionForm />
                  <SpaceSessionCompleteSessionComplete />
                </>
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
    </ContextForSessionForm.Provider>
  );
}
