import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { ContextForSpaceSpace } from '../../../../../controller/main';

export function SpaceSpaceResourcesBack() {
  const galleryListController = useContext(ContextForGalleryList);
  const spaceSpaceController = useContext(ContextForSpaceSpace);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-500'
          onClick={() => {
            galleryListController.state.currentObj &&
              spaceSpaceController.actions.goToGallery(
                galleryListController.state.currentObj,
              );
          }}
        >
          Back to Gallery
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
