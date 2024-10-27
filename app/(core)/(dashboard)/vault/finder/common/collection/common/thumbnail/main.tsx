import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { ContextForGalleryCollectionMain } from '@/server/controller/gallery/collection/main';
import { ContextForCollectionResourceList } from '@/server/controller/gallery/collection/resource/list';
import { FileElementVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function CollectionThumbnail({ empty }: { empty?: boolean }) {
  const collection = useContext(ContextForGalleryCollectionMain);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const resources = resourceListController.state.objs;

  const visualResources = resources?.filter(
    (resource) =>
      resource.fileElem?.variant === FileElementVariant.IMAGE ||
      resource.fileElem?.variant === FileElementVariant.VIDEO,
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
            <div className='grid w-full grid-cols-3 gap-[1rem] p-[1rem]'>
              {visualResources
                .filter((resource) => resource.variant === ElementVariant.FILE)
                .filter(
                  (resource) =>
                    resource.fileElem?.variant === FileElementVariant.IMAGE,
                )
                .slice(0, 6)
                .map((resource) => (
                  <div className='w-full'>
                    {resource.fileElem?.variant ===
                      FileElementVariant.IMAGE && (
                      <img
                        alt='thumbnail'
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
