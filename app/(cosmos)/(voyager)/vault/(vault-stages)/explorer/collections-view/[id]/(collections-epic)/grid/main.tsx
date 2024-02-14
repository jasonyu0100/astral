import { CollectionsModalContext } from '@/(cosmos)/(modals)/collections-modal/main';
import { useContext } from 'react';
import { ExploreGalleryContext } from '../../page';
import { GalleryCollectionAdd } from '../add-collection/main';
import { GalleryCollection } from '../collection/main';
import { CollectionContext } from '@/(ouros)/(model)/gallery/collection/main';

export function GalleryCollectionGrid() {
  const { collections } = useContext(ExploreGalleryContext);
  const modalContext = useContext(CollectionsModalContext);

  return (
    <div className='flex-grow ' style={{ height: '100%' }}>
      <div className='flex w-full flex-row flex-wrap gap-[50px] overflow-auto'>
        {collections.map((collection) => (
          // eslint-disable-next-line react/jsx-key
          <CollectionContext.Provider value={collection}>
            <GalleryCollection />
          </CollectionContext.Provider>
        ))}
        <GalleryCollectionAdd
          onClick={() => modalContext.explorerCreateCollectionModal.open()}
        />
      </div>
    </div>
  );
}
