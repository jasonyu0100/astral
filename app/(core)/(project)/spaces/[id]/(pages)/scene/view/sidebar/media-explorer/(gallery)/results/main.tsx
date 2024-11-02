import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesSceneGalleryCollectionsBack } from '../back/main';
import { SpacesSceneCollectionAdd } from './add/main';
import { SpacesSceneCollectionItem } from './item/main';

export function SpacesSceneGalleryCollectionsResults() {
  const collectionsListController = useContext(ContextForGalleryCollectionList);

  return (
    <div
      className='flex w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpacesSceneGalleryCollectionsBack />
      {collectionsListController.state.more.queryResults.map((collection) => (
        <ContextForGalleryCollectionObj.Provider value={collection}>
          <SpacesSceneCollectionItem />
        </ContextForGalleryCollectionObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesSceneCollectionAdd />
    </div>
  );
}
