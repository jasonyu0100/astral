import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function JournalRecordHeader() {
  const collectionListController = useContext(ContextForGalleryCollectionList);

  return (
    <div className='flex w-full flex-col items-center p-[2rem] shadow-glow'>
      <div className='grid w-full grid-cols-3 items-center'>
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
        <div className='justify-self-center'>
          <p className='text-center text-3xl font-bold text-white'>
            {collectionListController.state.currentObj?.title || 'Untitled'}
          </p>
          <p className='mt-[0.5rem] text-xl font-light text-white'>
            {getFormattedDate(
              new Date(
                collectionListController.state?.currentObj?.created || '',
              ),
            )}
          </p>
        </div>
        <div className='justify-self-end'>
          <div
            className='cursor-pointer'
            onClick={() => {
              collectionListController.actions.stateActions.goNext();
            }}
          >
            <AstralChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
