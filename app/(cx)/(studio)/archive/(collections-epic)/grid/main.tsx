import { useContext } from 'react';
import { ExplorerGalleryContext } from '../../(archive-stages)/explorer/collections-view/[id]/page';
import { GalleryCollectionAdd } from '../collection/explorer/add/main';
import { ExplorerCollection } from '../collection/explorer/main';
import { CollectionContext } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import { ArchiveExplorerCreateModalContext } from '@/(modals)/(studio)/archive/explorer/create/main';

export function CollectionsGrid() {
  const { collections } = useContext(ExplorerGalleryContext);
  const modalContext = useContext(ArchiveExplorerCreateModalContext);

  return (
    <div className='flex-grow ' style={{ height: '100%' }}>
      <div className='flex w-full flex-row flex-wrap gap-[50px] overflow-auto'>
        {collections.map((collection) => (
          // eslint-disable-next-line react/jsx-key
          <CollectionContext.Provider value={collection}>
            <ExplorerCollection />
          </CollectionContext.Provider>
        ))}
        <GalleryCollectionAdd
          onClick={() => modalContext.createCollection.open()}
        />
      </div>
    </div>
  );
}
