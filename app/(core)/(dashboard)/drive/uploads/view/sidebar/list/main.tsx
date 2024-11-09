import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { useContext } from 'react';
import { DriveUploadsDailySidebarListItem } from './item/main';

export function DriveUploadsDailySidebarList() {
  const collectionListController = useContext(ContextForGalleryCollectionList);

  return (
    <div
      className='flex flex-col overflow-auto'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <div className='flex w-full flex-col space-y-[1rem] p-[1rem] text-slate-300'>
        {collectionListController.state.more.queryResults.map((collection) => (
          <ContextForGalleryCollectionObj.Provider value={collection}>
            <DriveUploadsDailySidebarListItem />
          </ContextForGalleryCollectionObj.Provider>
        ))}
      </div>
    </div>
  );
}
