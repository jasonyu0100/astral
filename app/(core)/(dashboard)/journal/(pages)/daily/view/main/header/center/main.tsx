import { DashboardJournalAddResourceModal } from '@/(core)/(dashboard)/journal/modal/add/entry/main';
import { AstralAddIcon } from '@/icons/add/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function JournalDailyFooterRight() {
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <DashboardJournalAddResourceModal />
      </ContextForOpenable.Provider>
      <div className='flex h-full w-full items-center justify-end'>
        <GlassWindowFrame
          className='aspect-square h-[2.5rem] w-[2.5rem]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() => {
              openableController.open();
            }}
          >
            <AstralAddIcon />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
    </>
  );
}
