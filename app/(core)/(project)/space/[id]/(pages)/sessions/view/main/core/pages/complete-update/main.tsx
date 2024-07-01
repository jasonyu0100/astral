import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import {
  ContextForUpdateForm,
  useControllerForUpdateForm,
} from '../../../../../(controller)/complete-update-form/main';
import { SpaceSessionsCompleteUpdateForm } from './form/main';
import { SpaceSessionsCompleteUpdateNext } from './next/main';
import { SpaceSessionsCompleteUpdatePanel } from './panel/main';

export function SpaceSessionsCompleteUpdate() {
  const updateFormController = useControllerForUpdateForm();
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);

  return (
    <ContextForUpdateForm.Provider value={updateFormController}>
      <div className='flex h-full w-full flex-row items-center'>
        <SpaceSessionsCompleteUpdatePanel />
        <div className='flex flex-grow p-[2rem]'>
          <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
            <SpaceSessionsCompleteUpdateForm />
            {updateListController.state.index !==
              updateListController.state.objs.length - 1 && (
              <SpaceSessionsCompleteUpdateNext />
            )}
          </div>
        </div>
      </div>
    </ContextForUpdateForm.Provider>
  );
}
