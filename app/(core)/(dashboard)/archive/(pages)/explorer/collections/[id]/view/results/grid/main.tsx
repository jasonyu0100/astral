import { useContext } from 'react';
import { GalleryCollectionAdd } from '../../../../../../../../../../(components)/(media)/(collection-folder)/explorer/add/main';
import { ExplorerCollection } from '../../../../../../../../../../(components)/(media)/(collection-folder)/explorer/main';
import { ContextForGalleryCollectionObj } from '@/(model)/gallery/collection/main';
import { ArchiveExplorerCreateModalContext } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { CollectionsHandlerContext } from '@/(model)/(controller)/(archive)/explorer/collections/main';

export function CollectionsGrid() {
  const collectionsHandler = useContext(CollectionsHandlerContext);
  const modalContext = useContext(ArchiveExplorerCreateModalContext);
  const collections = collectionsHandler.collections;

  return (
    <div
      className='flex-grow overflow-auto'
      style={{ height: '100%' }}
    >
      <div className='flex w-full flex-row flex-wrap gap-[2rem]'>
        {collections.map((collection) => (
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
