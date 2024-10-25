import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { ContextForSpacesView } from '../../../../../controller/main';

export function SpacesViewResourcesBack() {
  const galleryListController = useContext(ContextForGalleryList);
  const {
    actions: { goToGallery },
  } = useContext(ContextForSpacesView);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-500'
          onClick={() => {
            galleryListController.state.currentObj &&
              goToGallery(galleryListController.state.currentObj);
          }}
        >
          Back to Gallery
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
