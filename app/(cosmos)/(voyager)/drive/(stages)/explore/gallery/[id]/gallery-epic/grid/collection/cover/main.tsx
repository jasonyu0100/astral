import { useContext } from 'react';
import { GalleryCollectionContext } from '../main';
import { useResources } from '@/(cosmos)/handler/resources/main';

export function CollectionCover() {
  const { collection } = useContext(GalleryCollectionContext);
  const { resources } = useResources(collection.id);

  return (
    <div className='h-full aspect-square bg-black'>
      <div className='w-full h-full flex flex-row flex-wrap'>
        {resources.slice(0, 4).map((resource) => (
          <img className='h-1/2 aspect-square' src={resource.file.src} />
        ))}
      </div>
    </div>
  );
}
