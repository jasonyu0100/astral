import {
  ContextForSessionForm,
  useControllerForSessionForm,
} from '../../../../../(controller)/complete-session-form/main';
import { SpaceProgressCompleteSessionComplete } from './complete/main';
import { SpaceProgressCompleteSessionForm } from './form/main';
import { SpaceProgressCompleteSessionPanel } from './panel/main';

export function SpaceProgressCompleteSession() {
  const sessionFormController = useControllerForSessionForm();

  return (
    <ContextForSessionForm.Provider value={sessionFormController}>
      <div className='flex h-full w-full flex-row items-center'>
        <SpaceProgressCompleteSessionPanel />
        <div className='flex flex-grow p-[2rem]'>
          <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
            <SpaceProgressCompleteSessionForm />
            <SpaceProgressCompleteSessionComplete />
          </div>
        </div>
      </div>
    </ContextForSessionForm.Provider>
  );
}
