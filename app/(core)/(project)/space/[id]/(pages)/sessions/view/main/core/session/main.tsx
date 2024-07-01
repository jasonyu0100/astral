import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import {
  ContextForSessionForm,
  useControllerForSessionForm,
} from '../../../../(controller)/session-form/main';
import { SpaceSessionsSessionUpdateForm } from './form/main';
import { SpaceSessionsSessionRight } from './right/main';

export function SpaceSessionsSessionMain() {
  const sessionFormController = useControllerForSessionForm();

  return (
    <ContextForSessionForm.Provider value={sessionFormController}>
      <div className='flex h-full w-full flex-row items-center justify-between'>
        <GlassWindowFrame className='h-full w-[15rem]'>
          <GlassWindowContents className='flex flex-col'></GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        {/* <SpacesSessionSessionLeft /> */}
        <SpaceSessionsSessionUpdateForm />
        <SpaceSessionsSessionRight />
      </div>
    </ContextForSessionForm.Provider>
  );
}
