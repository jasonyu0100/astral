import { DashboardJournalAddResourceModal } from '@/(core)/(dashboard)/journal/(modal)/add/entry/main';
import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';

export function JournalRecordFooterCenter() {
  const openableController = useControllerForOpenable();
  const collectionListController = useContext(ContextForGalleryCollectionList);

  console.log(collectionListController.state.objs);

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <DashboardJournalAddResourceModal />
      </ContextForOpenable.Provider>
      <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
        <div className='justify-self-start'>
          <div
            className='cursor-pointer'
            onClick={() => {
              collectionListController.actions.stateActions.goPrev();
            }}
          >
            <AstralChevronLeftIcon />
          </div>
        </div>
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
        <div
          className='cursor-pointer'
          onClick={() => {
            collectionListController.actions.stateActions.goNext();
          }}
        >
          <AstralChevronRightIcon />
        </div>
      </div>
    </>
  );
}
