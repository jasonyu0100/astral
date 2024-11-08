import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function UploadsDailyFooter() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex h-[4rem] w-full flex-shrink-0 flex-col items-center px-[2rem] shadow-glow'>
      <div className='grid h-full w-full grid-cols-3 items-center'>
        <div className='flex flex-row space-x-[1rem] justify-self-start'>
          <p className='text-md whitespace-nowrap font-light text-white'>
            {resourceListController.state.objs.length} entries
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
