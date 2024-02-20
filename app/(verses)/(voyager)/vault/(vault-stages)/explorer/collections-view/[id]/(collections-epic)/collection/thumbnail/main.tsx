import { useContext } from 'react';
import {
  CollectionContext,
  CollectionResourcesContext,
} from '@/(ouros)/(model)/gallery/collection/main';
import { FileVariant } from '@/(ouros)/(model)/resource/file/main';

export function CollectionThumbnail() {
  const resources = useContext(CollectionResourcesContext);
  const visualResources = resources.filter(
    (resource) =>
      resource.file?.variant === FileVariant.IMAGE ||
      resource.file?.variant === FileVariant.VIDEO,
  );

  return (
    <div className='aspect-square h-full overflow-hidden bg-black'>
      <div className='flex h-full w-full flex-row flex-wrap'>
        {visualResources.slice(0, 4).map((resource) => (
          // eslint-disable-next-line react/jsx-key
          <>
            {resource.file?.variant === FileVariant.IMAGE && (
              <img className='aspect-square h-1/2 object-fill' src={resource?.file?.src} />
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
