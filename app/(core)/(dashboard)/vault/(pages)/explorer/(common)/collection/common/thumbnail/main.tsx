import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function CollectionThumbnail({ empty }: { empty?: boolean }) {
  const resourceListController = useContext(ContextForCollectionResourceList);
  const resources = resourceListController.state.objs;

  const visualResources = resources?.filter(
    (resource) =>
      resource.fileElem?.variant === FileElemVariant.IMAGE ||
      resource.fileElem?.variant === FileElemVariant.VIDEO,
  );

  return (
    <GlassWindowFrame
      className='aspect-[3/2] w-full'
      roundedFx={roundedFx['rounded-xs']}
    >
      <GlassWindowPane glassFx={glassFx['glass-10']} />
      <GlassWindowContents>
        {empty === true ? (
          <div className='flex h-full w-full items-center justify-center'>
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
            {visualResources.map((resource) => (
              <>
                {resource.fileElem?.variant === FileElemVariant.IMAGE && (
                  <img
                    alt='thumbnail'
                    className='aspect-square h-1/2 object-cover'
                    src={resource?.fileElem?.src}
                  />
                )}
                {resource.fileElem?.variant === FileElemVariant.VIDEO && (
                  <video
                    className='aspect-square h-1/2 object-cover'
                    src={resource?.fileElem?.src}
                  />
                )}
              </>
            ))}
          </div>
        )}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
