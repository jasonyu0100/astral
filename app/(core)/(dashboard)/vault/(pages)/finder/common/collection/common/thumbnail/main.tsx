import { ContextForGalleryCollectionMain } from '@/(server)/controller/gallery/collection/main';
import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
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
      className='aspect-[3/2] w-full'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-all']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col  p-[1rem]'>
        {empty === true ? (
          <div className='flex h-full w-full items-center justify-center'>
            <AstralAddIcon className='h-1/2 w-1/2' />
          </div>
        ) : (
          <>
            <div className='pb-[1rem] text-lg font-bold text-slate-500'>
              {collection.state.obj.title?.trim() || 'Untitled'}
            </div>
            <div className='grid w-full grid-cols-3 gap-[1rem]'>
              {visualResources
                .filter((resource) => resource.variant === ElementVariant.FILE)
                .filter(
                  (resource) =>
                    resource.fileElem?.variant === FileElemVariant.IMAGE,
                )
                .slice(0, 6)
                .map((resource) => (
                  <div className='w-full'>
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
