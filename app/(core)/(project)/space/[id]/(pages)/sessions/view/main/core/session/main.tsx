import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { borderFx, glassFx } from '@/(style)/data';
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
      <div className='flex h-full w-full flex-row items-center justify-between space-x-[3rem] pr-[4rem]'>
        <GlassWindowFrame
          className='h-full w-[18rem]'
          borderFx={borderFx['border-r']}
        >
          <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
            <div className='flex flex-col space-y-[1rem] py-[1rem]'>
              <p className='font-bold text-slate-300'>Tracked Work</p>
              <HorizontalDivider />
              <p className='font-bold text-slate-300'>1. Update A</p>
              <p className='font-bold text-slate-300'>2. Update A</p>
              <p className='font-bold text-slate-300'>3. Update A</p>
              <p className='font-bold text-slate-300'>4. Update A</p>
              <p className='font-bold text-slate-300'>5. Update A</p>
            </div>
            <div className='flex flex-col py-[1rem]'>
              <p className='mt-auto rounded bg-blue-500 p-[1rem] font-bold text-slate-300'>
                Complete Session
              </p>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        {/* <SpacesSessionSessionLeft /> */}
        <SpaceSessionsSessionUpdateForm />
        <SpaceSessionsSessionRight />
      </div>
    </ContextForSessionForm.Provider>
  );
}
