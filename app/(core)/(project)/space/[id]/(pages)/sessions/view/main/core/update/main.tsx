import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { borderFx, glassFx } from '@/(style)/data';
import {
  ContextForUpdateForm,
  useControllerForUpdateForm,
} from '../../../../(controller)/update-form/main';
import { SpaceSessionsUpdateForm } from './form/main';
import { SpaceSessionsUpdateRight } from './right/main';

export function SpaceSessionsUpdateMain() {
  const updateFormController = useControllerForUpdateForm();

  return (
    <ContextForUpdateForm.Provider value={updateFormController}>
      <div className='flex h-full w-full flex-row items-center justify-between space-x-[3rem] pr-[4rem]'>
        <GlassWindowFrame
          className='h-full w-[18rem]'
          borderFx={borderFx['border-r']}
        >
          <GlassWindowContents className='flex flex-col space-y-[1rem] p-[2rem]'>
            <p className='font-bold text-slate-300'>Tracked Work</p>
            <HorizontalDivider />
            <p className='font-bold text-slate-300'>1. Update A</p>
            <p className='font-bold text-slate-300'>2. Update A</p>
            <p className='font-bold text-slate-300'>3. Update A</p>
            <p className='font-bold text-slate-300'>4. Update A</p>
            <p className='font-bold text-slate-300'>5. Update A</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        {/* <SpaceSessionsUpdateLeft /> */}
        <SpaceSessionsUpdateForm />
        <SpaceSessionsUpdateRight />
      </div>
    </ContextForUpdateForm.Provider>
  );
}
