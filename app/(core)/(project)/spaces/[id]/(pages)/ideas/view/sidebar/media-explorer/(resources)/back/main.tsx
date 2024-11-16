import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { ContextForSpacesIdeas } from '../../../../../controller/main';

export function SpacesIdeasResourcesBack() {
  const galleryListController = useContext(ContextForGalleryList);
  const spacesSpaceController = useContext(ContextForSpacesIdeas);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-400'
          onClick={() => {
            galleryListController.state.currentObj &&
              spacesSpaceController.actions.goToGallery(
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
