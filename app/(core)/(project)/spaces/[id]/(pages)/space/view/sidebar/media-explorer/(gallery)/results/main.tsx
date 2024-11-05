import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesSpaceGalleryCollectionsBack } from '../back/main';
import { SpacesSpaceCollectionAdd } from './add/main';
import { SpacesSpaceCollectionItem } from './item/main';

export function SpacesSpaceGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);

  return (
    <div
      className='flex w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpacesSpaceGalleryCollectionsBack />
      {collectionsListController.state.more.queryResults.map((collection) => (
        <ContextForGalleryCollectionObj.Provider value={collection}>
          <SpacesSpaceCollectionItem />
        </ContextForGalleryCollectionObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesSpaceCollectionAdd />
    </div>
  );
}
