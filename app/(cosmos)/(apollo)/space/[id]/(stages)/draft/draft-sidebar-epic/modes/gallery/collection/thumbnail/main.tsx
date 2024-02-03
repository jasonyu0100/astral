import { CollectionObj } from '@/tables/gallery/collection/main';
import { useContext } from 'react';
import { DraftSidebarContext } from '../../../../main';
import { useResources } from '@/(cosmos)/handler/resources/main';

export function GalleryCollectionThumbnail({
  collection,
}: {
  collection: CollectionObj;
}) {
  const { sidebarHandler } = useContext(DraftSidebarContext);
  const { resources } = useResources(collection.id);

  return (
    <div
      className='h-full aspect-square bg-black cursor-pointer'
      onClick={() => {
        sidebarHandler.goToCollection(collection);
      }}
    >
      <div className='w-full h-full flex flex-row flex-wrap'>
        {resources.slice(0, 4).map((resource) => (
          <img className='h-1/2 aspect-square' src={resource?.file?.src} />
        ))}
      </div>
    </div>
  );
}
