import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { useContext } from 'react';
import { SpaceMapCollectionThumbnail } from './thumbnail/main';

export function SpaceMapGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);

  return (
    <div
      className='flex w-full flex-col overflow-auto px-[1rem]'
      style={{ height: 'calc(100% - 4rem - 80px)' }}
    >
      <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
        {collectionsListController.state.objs.map((collection) => (
          <ContextForGalleryCollectionObj.Provider value={collection}>
            <p className='w-full text-lg font-bold text-slate-300'>
              {collection.title}
            </p>
            <SpaceMapCollectionThumbnail />
          </ContextForGalleryCollectionObj.Provider>
        ))}
      </div>
    </div>
  );
}
