import { DashboardJournalAddResourceModal } from '@/(core)/(dashboard)/journal/(modal)/add/entry/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function JournalRecordFooterCenter() {
  const openableController = useControllerForOpenable();
  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <DashboardJournalAddResourceModal />
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
