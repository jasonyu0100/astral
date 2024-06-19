import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { SpaceDraftAddSceneModal } from '../../../../../(modal)/add/scene/main';

export function SpaceDraftHeaderLeft() {
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceDraftAddSceneModal />
      </ContextForOpenable.Provider>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <GlassWindowFrame roundedFx={roundedFx['rounded-full']}>
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center px-[1rem]'
            onClick={openableController.open}
          >
            <p className='text-xl font-bold text-slate-500'>new scene</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </>
  );
}
