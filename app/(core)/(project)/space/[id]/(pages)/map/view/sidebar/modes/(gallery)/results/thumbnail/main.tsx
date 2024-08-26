import { useControllerForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { ContextForGalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { useContext } from 'react';
import { ContextForSpaceMapSidebar } from '../../../../../../page';

export function SpaceMapCollectionThumbnail() {
  const collection = useContext(ContextForGalleryCollectionObj);
  const resourceListController = useControllerForCollectionResourceList(
    collection.id,
  );
  const sidebarController = useContext(ContextForSpaceMapSidebar);

  return (
    <GlassWindowFrame
      className='aspect-[5/3] w-full flex-shrink-0'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        onClick={() => sidebarController.actions.goToCollection(collection)}
        className='flex h-full w-full flex-col'
      >
        <p className='w-full px-[1rem] py-[0.5rem] text-sm font-bold text-slate-300'>
          {collection.title || 'Untitled'}
        </p>
        <div className='flex h-full w-full cursor-pointer flex-row flex-wrap'>
          {resourceListController.state.objs.slice(0, 6).map((resource) => (
            <div className='aspect-square h-1/2' style={{ padding: '2%' }}>
              <img
                src={resource.fileElem?.src}
                className='h-full w-full object-contain'
              />
            </div>
          ))}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
