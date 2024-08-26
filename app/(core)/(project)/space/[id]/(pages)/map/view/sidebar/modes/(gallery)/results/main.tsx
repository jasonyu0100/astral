import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { HorizontalDivider } from '@/ui/(indicator)/divider/horizontal/main';
import { useContext } from 'react';
import { SpaceMapCollectionAdd } from './add/main';
import { SpaceMapCollectionThumbnail } from './thumbnail/main';

export function SpaceMapGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);

  return (
    <div
      className='flex w-full flex-col overflow-auto px-[1rem]'
      style={{ height: 'calc(100% - 4rem - 80px)' }}
    >
      <div className='flex w-full flex-row flex-wrap gap-[1rem] pt-[1rem]'>
        {collectionsListController.state.objs.map((collection) => (
          <ContextForGalleryCollectionObj.Provider value={collection}>
            <SpaceMapCollectionThumbnail />
          </ContextForGalleryCollectionObj.Provider>
        ))}
        <HorizontalDivider />
        <SpaceMapCollectionAdd />
      </div>
    </div>
  );
}
