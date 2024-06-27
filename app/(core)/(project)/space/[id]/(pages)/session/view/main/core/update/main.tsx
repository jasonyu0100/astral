import {
  ContextForUpdateForm,
  useControllerForUpdateForm,
} from '../../../../(controller)/update-form/main';
import { SpaceSessionUpdateForm } from './form/main';
import { SpaceSessionUpdateLeft } from './left/main';
import { SpaceSessionUpdateRight } from './right/main';

export function SpaceSessionUpdateMain() {
  const updateFormController = useControllerForUpdateForm();

  return (
    <ContextForUpdateForm.Provider value={updateFormController}>
      <div className='flex h-full w-full flex-row items-center justify-between'>
        <SpaceSessionUpdateLeft />
        <SpaceSessionUpdateForm />
        <SpaceSessionUpdateRight />
      </div>
    </ContextForUpdateForm.Provider>
  );
}
