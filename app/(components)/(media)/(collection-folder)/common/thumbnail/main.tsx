import { useContext } from 'react';
import { FileElemVariant } from '@/(model)/elements/file/main';
import { CollectionResourcesContext } from '@/(model)/gallery/collection/main';

export function CollectionThumbnail({ empty }: { empty?: boolean }) {
  const resources = useContext(CollectionResourcesContext);
  const visualResources = resources?.filter(
    (resource) =>
      resource.file?.variant === FileElemVariant.IMAGE ||
      resource.file?.variant === FileElemVariant.VIDEO,
  );

  return (
    <div className='aspect-square h-full overflow-hidden bg-black'>
      {empty === true ? (
        <div className='h-full w-full flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 25 25'
            className='h-1/2 w-1/2'
            fill='none'
          >
            <mask
              id='mask0_3140_7'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='25'
              height='25'
            >
              <rect
                x='0.777588'
                y='0.335144'
                width='24'
                height='24'
                fill='#D9D9D9'
              />
            </mask>
            <g mask='url(#mask0_3140_7)'>
              <path
                d='M11.7776 13.3351H5.77759V11.3351H11.7776V5.33514H13.7776V11.3351H19.7776V13.3351H13.7776V19.3351H11.7776V13.3351Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        </div>
      ) : (
        <div className='flex h-full w-full flex-row flex-wrap'>
          {visualResources.slice(0, 4).map((resource) => (
            // eslint-disable-next-line react/jsx-key
            <>
              {resource.file?.variant === FileElemVariant.IMAGE && (
                <img
                  className='aspect-square h-1/2 object-fill'
                  src={resource?.file?.src}
                />
              )}
              {resource.file?.variant === FileElemVariant.VIDEO && (
                <video
                  className='aspect-square h-1/2 object-fill'
                  src={resource?.file?.src}
                />
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
