import { ContextForSpacesView } from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForCollectionResourceList } from '@/server/controller/gallery/collection/resource/list';
import { FileElementVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { ContextForGalleryCollectionObj } from '@/server/model/gallery/collection/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesViewCollectionItem() {
  const collection = useContext(ContextForGalleryCollectionObj);
  const resourceListController = useControllerForCollectionResourceList(
    collection.id,
  );
  const {
    actions: { goToCollection },
  } = useContext(ContextForSpacesView);

  return (
    <GlassWindowFrame
      className='aspect-[3/2] w-full flex-shrink-0'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-b']}
    >
      <GlassWindowContents
        onClick={() => goToCollection(collection)}
        className='flex h-full w-full flex-col'
      >
        <p className='w-full px-[1rem] py-[0.5rem] text-center text-sm font-bold text-slate-300'>
          {collection.title?.trim() || 'Untitled'}
        </p>
        <div className='grid w-full grid-cols-3 gap-[1rem] p-[1rem]'>
          {resourceListController.state.objs
            .filter((resource) => resource.variant === ElementVariant.FILE)
            .filter(
              (resource) =>
                resource.fileElem?.variant === FileElementVariant.IMAGE,
            )
            .slice(0, 6)
            .map((resource) => (
              <div className='w-full'>
                {resource.fileElem?.variant === FileElementVariant.IMAGE && (
                  <img
                    src={resource.fileElem?.src}
                    className='h-full w-full object-contain'
                  />
                )}
              </div>
            ))}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
