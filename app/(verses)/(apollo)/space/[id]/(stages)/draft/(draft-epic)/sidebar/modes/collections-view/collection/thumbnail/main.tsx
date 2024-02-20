import { useContext } from 'react';
import { DraftSidebarContext } from '../../../../main';
import { useCollectionResources } from '@/(verses)/(handler)/explorer/resources/main';
import { CollectionContext } from '@/(ouros)/(model)/gallery/collection/main';
import { FileVariant } from '@/(ouros)/(model)/resource/file/main';

export function GalleryCollectionThumbnail() {
  const collection = useContext(CollectionContext);
  const { sidebarHandler } = useContext(DraftSidebarContext);
  const { resources } = useCollectionResources(collection.id);
  const visualResources = resources.filter(
    (resource) =>
      resource.file?.variant === FileVariant.IMAGE ||
      resource.file?.variant === FileVariant.VIDEO,
  );

  console.log(visualResources);

  return (
    <div
      className='aspect-square h-full cursor-pointer overflow-hidden bg-black'
      onClick={() => {
        sidebarHandler.goToCollection(collection);
      }}
    >
      <div className='flex h-full w-full flex-row flex-wrap'>
        {visualResources.slice(0, 4).map((resource) => (
          // eslint-disable-next-line react/jsx-key
          <>
            {resource.file?.variant === FileVariant.IMAGE && (
              <img
                className='aspect-square h-1/2 object-fill'
                src={resource?.file?.src}
              />
            )}
            {resource.file?.variant === FileVariant.VIDEO && (
              <video
                className='aspect-square h-1/2 object-fill'
                src={resource?.file?.src}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
