import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpaceMapGalleryCollectionsBack } from '../back/main';
import { SpaceMapCollectionAdd } from './add/main';
import { SpaceMapCollectionThumbnail } from './thumbnail/main';

export function SpaceMapGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);

  return (
    <div className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'>
      <SpaceMapGalleryCollectionsBack />
      {collectionsListController.state.more.queryResults.map((collection) => (
        <ContextForGalleryCollectionObj.Provider value={collection}>
          <SpaceMapCollectionThumbnail />
        </ContextForGalleryCollectionObj.Provider>
      ))}
      <HorizontalDivider />
      <SpaceMapCollectionAdd />
    </div>
  );
}
