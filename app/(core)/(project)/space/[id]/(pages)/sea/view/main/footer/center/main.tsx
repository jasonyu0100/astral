import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { roundedFx } from '@/(style)/data';
import { SpaceSeaAddUpdateModal } from '../../../../(modal)/add/entry/main';

export function SpaceSeaFooterCenter() {
  const openableController = useControllerForOpenable();
  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSeaAddUpdateModal />
      </ContextForOpenable.Provider>
      <div className='flex w-1/3 flex-row justify-center space-x-[1rem] '>
        <GlassWindowFrame
          className='aspect-square h-[3rem] w-[3rem]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center bg-blue-500'
            onClick={() => {
              openableController.open();
            }}
          >
            <p className='text-3xl font-bold text-slate-300'>+</p>
          </GlassWindowContents>
        </GlassWindowFrame>
      </div>
    </>
  );
}
