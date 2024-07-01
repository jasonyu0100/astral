import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import {
  ContextForUpdateForm,
  useControllerForUpdateForm,
} from '../../../../../(controller)/complete-update-form/main';
import { SpaceProgressCompleteUpdateForm } from './form/main';
import { SpaceProgressCompleteUpdateNext } from './next/main';
import { SpaceProgressCompleteUpdatePanel } from './panel/main';

export function SpaceProgressCompleteUpdate() {
  const updateFormController = useControllerForUpdateForm();
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);

  return (
    <ContextForUpdateForm.Provider value={updateFormController}>
      <div className='flex h-full w-full flex-row items-center'>
        <SpaceProgressCompleteUpdatePanel />
        <div className='flex flex-grow p-[2rem]'>
          <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
            <SpaceProgressCompleteUpdateForm />
            {updateListController.state.index !==
              updateListController.state.objs.length - 1 && (
              <SpaceProgressCompleteUpdateNext />
            )}
          </div>
        </div>
      </div>
    </ContextForUpdateForm.Provider>
  );
}
