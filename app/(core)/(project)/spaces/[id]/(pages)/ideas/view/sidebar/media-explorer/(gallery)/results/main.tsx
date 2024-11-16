import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesIdeasGalleryCollectionsBack } from '../back/main';
import { SpacesIdeasCollectionAdd } from './add/main';
import { SpacesIdeasCollectionItem } from './item/main';

export function SpacesIdeasGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);

  return (
    <div
      className='flex w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpacesIdeasGalleryCollectionsBack />
      {collectionsListController.state.more.queryResults.map((collection) => (
        <ContextForGalleryCollectionObj.Provider value={collection}>
          <SpacesIdeasCollectionItem />
        </ContextForGalleryCollectionObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesIdeasCollectionAdd />
    </div>
  );
}
