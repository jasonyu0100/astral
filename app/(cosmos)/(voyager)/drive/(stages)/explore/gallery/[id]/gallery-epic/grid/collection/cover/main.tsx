import { useContext, useEffect, useState } from 'react';
import { GalleryCollectionContext } from '../main';
import { ExploreGalleryContext } from '../../../../page';
import { ResourceObj } from '@/tables/resource/main';

export function CollectionCover() {
  const { getResources } = useContext(ExploreGalleryContext);
  const { collection } = useContext(GalleryCollectionContext);
  const [resources, changeResources] = useState<ResourceObj[]>([]);

  useEffect(() => {
    getResources(collection).then((resources) => changeResources(resources));
  }, [])

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
