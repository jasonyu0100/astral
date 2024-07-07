import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import {
  ContextForSessionForm,
  useControllerForSessionForm,
} from '../../../../../(controller)/complete-session-form/main';
import { SpaceProgressCompleteSessionComplete } from './complete/main';
import { SpaceProgressCompleteSessionForm } from './form/main';
import { SpaceProgressCompleteSessionPanel } from './panel/main';

export function SpaceProgressCompleteSession() {
  const sessionFormController = useControllerForSessionForm();
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);

  return (
    <ContextForSessionForm.Provider value={sessionFormController}>
      <div className='flex h-full w-full flex-row items-center'>
        {updateListController.state.objs.length > 0 ? (
          <>
            <SpaceProgressCompleteSessionPanel />
            <div className='flex flex-grow p-[2rem]'>
              <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
                <>
                  <SpaceProgressCompleteSessionForm />
                  <SpaceProgressCompleteSessionComplete />
                </>
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
    </ContextForSessionForm.Provider>
  );
}
