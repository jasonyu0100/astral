import { HorizontalDivider } from '@/(components)/(indicator)/divider/horizontal/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function JournalRecordHeader() {
  const collectionListController = useContext(ContextForGalleryCollectionList);

  return (
    <div className='flex w-full flex-col items-center'>
      <p className='text-3xl font-bold text-white'>
        {collectionListController.state.currentObj?.title}
      </p>
      <p className='mt-[0.5rem] text-xl font-light text-white'>
        {getFormattedDate(
          new Date(collectionListController.state?.currentObj?.created || ''),
        )}
      </p>
      <br />
      <HorizontalDivider />
    </div>
  );
}
