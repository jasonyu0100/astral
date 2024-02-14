import { useContext } from 'react';
import { GalleryCollectionContext } from '../main';
import { useCollectionResources } from '@/(cosmos)/(handler)/explorer/resources/main';

export function CollectionThumbnail() {
  const { collection } = useContext(GalleryCollectionContext);
  const { resources } = useCollectionResources(collection.id);

  return (
    <div className='aspect-square h-full bg-black overflow-hidden'>
      <div className='flex h-full w-full flex-row flex-wrap'>
        {resources.slice(0, 4).map((resource) => (
          <img className='aspect-square h-1/2' src={resource?.file?.src} />
        ))}
      </div>
    </div>
  );
}
