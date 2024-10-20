import { useControllerForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForGalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpacesMap } from '../../../../../../controller/main';

export function SpacesMapCollectionItem() {
  const collection = useContext(ContextForGalleryCollectionObj);
  const resourceListController = useControllerForCollectionResourceList(
    collection.id,
  );
  const {
    actions: { goToCollection },
  } = useContext(ContextForSpacesMap);

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
        <div className='flex h-full w-full cursor-pointer flex-row flex-wrap justify-center'>
          {resourceListController.state.objs
            .filter((resource) => resource.variant === ElementVariant.FILE)
            .filter(
              (resource) =>
                resource.fileElem?.variant === FileElemVariant.IMAGE,
            )
            .slice(0, 6)
            .map((resource) => (
              <div className='aspect-square h-1/2' style={{ padding: '2%' }}>
                <img
                  src={resource.fileElem?.src}
                  className='h-full w-full object-contain'
                />
              </div>
            ))}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
