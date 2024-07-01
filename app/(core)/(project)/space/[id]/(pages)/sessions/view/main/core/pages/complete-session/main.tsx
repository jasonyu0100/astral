import {
  ContextForSessionForm,
  useControllerForSessionForm,
} from '../../../../../(controller)/complete-session-form/main';
import { SpaceSessionsCompleteSessionComplete } from './complete/main';
import { SpaceSessionsCompleteSessionForm } from './form/main';
import { SpaceSessionsCompleteSessionPanel } from './panel/main';

export function SpaceSessionsCompleteSession() {
  const sessionFormController = useControllerForSessionForm();

  return (
    <ContextForSessionForm.Provider value={sessionFormController}>
      <div className='flex h-full w-full flex-row items-center'>
        <SpaceSessionsCompleteSessionPanel />
        <div className='flex flex-grow p-[2rem]'>
          <div className='flex flex-grow items-center justify-center space-x-[2rem]'>
            <SpaceSessionsCompleteSessionForm />
            <SpaceSessionsCompleteSessionComplete />
          </div>
        </div>
      </div>
    </ContextForSessionForm.Provider>
  );
}
