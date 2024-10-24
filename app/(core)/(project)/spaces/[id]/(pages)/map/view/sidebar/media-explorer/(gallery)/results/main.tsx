import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesMapCollectionAdd } from './add/main';
import { SpacesMapCollectionItem } from './item/main';

export function SpacesMapGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);

  return (
    <div
      className='flex w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      {/* <SpacesMapGalleryCollectionsBack /> */}
      {collectionsListController.state.more.queryResults.map((collection) => (
        <ContextForGalleryCollectionObj.Provider value={collection}>
          <SpacesMapCollectionItem />
        </ContextForGalleryCollectionObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesMapCollectionAdd />
    </div>
  );
}
