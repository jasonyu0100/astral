import { ContextForDashboardJournalModals } from '@/(core)/(dashboard)/journal/modal/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function JournalDailyFooterRight() {
  const modalController = useContext(ContextForDashboardJournalModals);

  return (
    <>
      <div className='flex h-full w-full items-center justify-end'>
        <GlassWindowFrame
          className='aspect-square h-[2.5rem] w-[2.5rem]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() => {
              modalController.addResourceModal.open();
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
