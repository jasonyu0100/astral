import { useContext } from 'react';
import { CollectionContext, CollectionResourcesContext } from '@/(ouros)/(model)/gallery/collection/main';

export function CollectionThumbnail() {
  const collection = useContext(CollectionContext);
  const resources = useContext(CollectionResourcesContext);

  return (
    <div className='aspect-square h-full bg-black overflow-hidden'>
      <div className='flex h-full w-full flex-row flex-wrap'>
        {resources.slice(0, 4).map((resource) => (
          // eslint-disable-next-line react/jsx-key
          <img className='aspect-square h-1/2' src={resource?.file?.src} />
        ))}
      </div>
    </div>
  );
}
