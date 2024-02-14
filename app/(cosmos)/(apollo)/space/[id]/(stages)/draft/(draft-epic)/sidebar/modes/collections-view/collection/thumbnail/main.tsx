import { useContext } from 'react';
import { DraftSidebarContext } from '../../../../main';
import { useCollectionResources } from '@/(cosmos)/(handler)/explorer/resources/main';
import { CollectionContext } from '@/(ouros)/(model)/gallery/collection/main';

export function GalleryCollectionThumbnail() {
  const collection = useContext(CollectionContext);
  const { sidebarHandler } = useContext(DraftSidebarContext);
  const { resources } = useCollectionResources(collection.id);

  return (
    <div
      className='aspect-square h-full cursor-pointer bg-black overflow-hidden'
      onClick={() => {
        sidebarHandler.goToCollection(collection);
      }}
    >
      <div className='flex h-full w-full flex-row flex-wrap'>
        {resources.slice(0, 4).map((resource) => (
          // eslint-disable-next-line react/jsx-key
          <img className='aspect-square h-1/2' src={resource?.file?.src} />
        ))}
      </div>
    </div>
  );
}
