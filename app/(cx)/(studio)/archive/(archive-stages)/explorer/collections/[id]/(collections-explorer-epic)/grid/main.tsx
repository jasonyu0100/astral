import { useContext } from 'react';
import { GalleryCollectionAdd } from '../../../../../../../../../(components)/(explorer)/(collection-assets-epic)/explorer/add/main';
import { ExplorerCollection } from '../../../../../../../../../(components)/(explorer)/(collection-assets-epic)/explorer/main';
import { CollectionContext } from '@/(logic)/internal/model/gallery/collection/main';
import { ArchiveExplorerCreateModalContext } from '@/(modals)/(studio)/archive/explorer/create/main';
import { CollectionsHandlerContext } from '@/(logic)/internal/handler/explorer/collections/main';

export function CollectionsGrid() {
  const collectionsHandler = useContext(CollectionsHandlerContext);
  const modalContext = useContext(ArchiveExplorerCreateModalContext);
  const collections = collectionsHandler.collections;

  return (
    <div
      className='flex-grow overflow-auto'
      style={{ height: '100%' }}
    >
      <div className='flex w-full flex-row flex-wrap gap-[2rem] py-[2rem]'>
        {collections.map((collection) => (
          <CollectionContext.Provider value={collection} key={collection.id}>
            <ExplorerCollection key={collection.id} />
          </CollectionContext.Provider>
        ))}
        <GalleryCollectionAdd
          onClick={() => modalContext.createCollection.open()}
        />
      </div>
    </div>
  );
}
