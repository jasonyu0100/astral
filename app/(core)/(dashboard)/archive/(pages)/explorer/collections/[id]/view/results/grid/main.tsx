import { useContext } from 'react';
import { GalleryCollectionAdd } from '../../../../../../../../../../(components)/(media)/(collection-folder)/explorer/add/main';
import { ExplorerCollection } from '../../../../../../../../../../(components)/(media)/(collection-folder)/explorer/main';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { ContextForExplorerModals } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';

export function CollectionsGrid() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const modalContext = useContext(ContextForExplorerModals);

  return (
    <div
      className='flex-grow overflow-auto'
      style={{ height: '100%' }}
    >
      <div className='flex w-full flex-row flex-wrap gap-[2rem]'>
        {collectionListController.state.objs.map((collection) => (
          <ContextForGalleryCollectionObj.Provider value={collection} key={collection.id}>
            <ExplorerCollection key={collection.id} />
          </ContextForGalleryCollectionObj.Provider>
        ))}
        <GalleryCollectionAdd
          onClick={() => modalContext.createCollection.open()}
        />
      </div>
    </div>
  );
}
