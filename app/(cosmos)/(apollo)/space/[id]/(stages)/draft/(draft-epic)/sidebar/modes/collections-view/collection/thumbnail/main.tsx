import { CollectionObj } from '@/(ouros)/(model)/gallery/collection/main';
import { useContext } from 'react';
import { DraftSidebarContext } from '../../../../main';
import { useCollectionResources } from '@/(cosmos)/(handler)/explorer/resources/main';

export function GalleryCollectionThumbnail({
  collection,
}: {
  collection: CollectionObj;
}) {
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
          <img className='aspect-square h-1/2' src={resource?.file?.src} />
        ))}
      </div>
    </div>
  );
}
