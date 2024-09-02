import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { ContextForSpaceMapSidebar } from '../../../../../page';

export function SpaceMapResourcesBack() {
  const galleryListController = useContext(ContextForGalleryList);
  const sidebarController = useContext(ContextForSpaceMapSidebar);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-500'
          onClick={() => {
            galleryListController.state.currentObj &&
              sidebarController.actions.goToGallery(
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
