import { ContextForGalleryCollectionMain } from '@/(server)/controller/gallery/collection/main';
import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { useContext } from 'react';

export function CollectionThumbnail({ empty }: { empty?: boolean }) {
  const collection = useContext(ContextForGalleryCollectionMain);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const resources = resourceListController.state.objs;

  const visualResources = resources?.filter(
    (resource) =>
      resource.fileElem?.variant === FileElemVariant.IMAGE ||
      resource.fileElem?.variant === FileElemVariant.VIDEO,
  );

  return (
    <GlassWindowFrame
      className='aspect-[4/3] w-full'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-all']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col'>
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
          <>
            <div className='text-md p-[1rem] font-bold text-slate-300'>
              {collection.state.obj.title || 'Untitled'}
            </div>
            <div className='flex h-full w-full flex-row flex-wrap items-center justify-center'>
              {visualResources.map((resource) => (
                <div className='aspect-square h-1/2' style={{ padding: '2%' }}>
                  {resource.fileElem?.variant === FileElemVariant.IMAGE && (
                    <img
                      alt='thumbnail'
                      className='h-full w-full object-contain'
                      src={resource?.fileElem?.src}
                    />
                  )}
                  {resource.fileElem?.variant === FileElemVariant.VIDEO && (
                    <video
                      className='h-full w-full object-contain'
                      src={resource?.fileElem?.src}
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
