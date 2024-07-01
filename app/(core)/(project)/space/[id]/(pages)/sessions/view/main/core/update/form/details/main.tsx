import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForUpdateForm } from '../../../../../../(controller)/update-form/main';

export function SpaceSessionsUpdateFormDetails() {
  const updateFormController = useContext(ContextForUpdateForm);

  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      <p className='text-xs font-bold text-slate-300'>Comments</p>
      <GlassWindowFrame className='w-full'>
        <GlassWindowContents>
          <textarea
            className='h-full w-full resize-none bg-transparent p-[1rem] font-bold text-slate-500 outline-none'
            value={updateFormController.title}
            onChange={(e) => updateFormController.setTitle(e.target.value)}
          />
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
