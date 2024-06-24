import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForUpdateForm } from '../../main';

export function SpaceSessionUpdateFormDetails() {
  const itemEditController = useContext(ContextForUpdateForm);

  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      <p className='text-xs font-bold text-slate-300'>Comments</p>
      <GlassWindowFrame className='w-full' roundedFx={roundedFx['rounded']}>
        <GlassWindowContents>
          <textarea
            className='h-full w-full resize-none bg-transparent p-[1rem] font-bold text-slate-500 outline-none'
            value={itemEditController.title}
            onChange={(e) => itemEditController.setTitle(e.target.value)}
          />
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
