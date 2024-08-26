import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
              className='fill-slate-300'
            >
              <path d='M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z' />
            </svg>
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
              className='fill-slate-300'
            >
              <path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
