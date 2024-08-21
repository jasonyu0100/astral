import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { useContext } from 'react';
import { SpaceMapSidebarContext } from '../../../main';

export function SpaceMapGalleryCollectionsBreadcrumbs() {
  const sidebarController = useContext(SpaceMapSidebarContext);
  const galleryListController = useContext(ContextForGalleryList);

  return (
    <GlassWindowFrame className='w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-500'
          onClick={() => {
            sidebarController.actions.goToHome();
          }}
        >
          Gallerys / {galleryListController.state.currentObj?.title}
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
