import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { useGlobalUser } from '@/logic/store/user/main';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function JournalRecordHeader() {
  const user = useGlobalUser((state) => state.user);
  const collectionListController = useContext(ContextForGalleryCollectionList);

  return (
    <div className='flex h-[4rem] w-full flex-shrink-0 flex-col items-center px-[2rem] shadow-glow'>
      <div className='grid h-full w-full grid-cols-3 items-center'>
        <div className='flex flex-row space-x-[1rem] justify-self-start'>
          <p className='text-md whitespace-nowrap font-bold text-white'>
            {getFormattedAMPM(
              new Date(
                collectionListController.state?.currentObj?.created || '',
              ),
            )}
          </p>
        </div>
        <div className='flex flex-col items-center justify-self-center'>
          <p className='text-md whitespace-nowrap font-light text-white'>
            {collectionListController.state.currentObj?.title || 'untitled'}
          </p>
        </div>
        <div className='justify-self-end'>
          <p className='text-md whitespace-nowrap font-light text-white'>
            {getFormattedDate(
              new Date(
                collectionListController.state?.currentObj?.created || '',
              ),
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
