import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpaceSpaceGalleryCollectionsBack } from '../back/main';
import { SpaceSpaceCollectionAdd } from './add/main';
import { SpaceSpaceCollectionItem } from './item/main';

export function SpaceSpaceGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);

  return (
    <div
      className='flex w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpaceSpaceGalleryCollectionsBack />
      {collectionsListController.state.more.queryResults.map((collection) => (
        <ContextForGalleryCollectionObj.Provider value={collection}>
          <SpaceSpaceCollectionItem />
        </ContextForGalleryCollectionObj.Provider>
      ))}
      <HorizontalDivider />
      <SpaceSpaceCollectionAdd />
    </div>
  );
}
