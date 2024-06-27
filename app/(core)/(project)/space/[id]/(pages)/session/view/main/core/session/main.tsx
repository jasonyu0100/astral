import {
  ContextForSessionForm,
  useControllerForSessionForm,
} from '../../../../(controller)/session-form/main';
import { SpaceSessionSessionUpdateForm } from './form/main';
import { SpacesSessionSessionLeft } from './left/main';
import { SpaceSessionSessionRight } from './right/main';

export function SpaceSessionSessionMain() {
  const sessionFormController = useControllerForSessionForm();

  return (
    <ContextForSessionForm.Provider value={sessionFormController}>
      <div className='flex h-full w-full flex-row items-center justify-between'>
        <SpacesSessionSessionLeft />
        <SpaceSessionSessionUpdateForm />
        <SpaceSessionSessionRight />
      </div>
    </ContextForSessionForm.Provider>
  );
}
