import { useContext } from 'react';
import { GalleryCollectionAdd } from '../../../../../../../../../../(components)/(media)/(collection-folder)/explorer/add/main';
import { ExplorerCollection } from '../../../../../../../../../../(components)/(media)/(collection-folder)/explorer/main';
import { GalleryCollectionContext } from '@/(model)/gallery/resource/collection/main';
import { ArchiveExplorerCreateModalContext } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { CollectionsHandlerContext } from '@/(controller)/explorer/collections/main';

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
          <GalleryCollectionContext.Provider value={collection} key={collection.id}>
            <ExplorerCollection key={collection.id} />
          </GalleryCollectionContext.Provider>
        ))}
        <GalleryCollectionAdd
          onClick={() => modalContext.createCollection.open()}
        />
      </div>
    </div>
  );
}
