import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { ContextForSpaceMapSidebar } from '../../../../../page';

export function SpaceMapGalleryCollectionsBack() {
  const sidebarController = useContext(ContextForSpaceMapSidebar);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-500'
          onClick={() => {
            sidebarController.actions.goToHome();
          }}
        >
          Back to Home
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
