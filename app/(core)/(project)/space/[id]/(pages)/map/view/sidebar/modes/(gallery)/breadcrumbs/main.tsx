import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { useContext } from 'react';
import { SpaceMapSidebarContext } from '../../../main';

export function SpaceMapGalleryCollectionsBreadcrumbs() {
  const sidebarController = useContext(SpaceMapSidebarContext);
  const galleryListController = useContext(ContextForGalleryList);

  return (
    <GlassWindowFrame className='h-[3rem] w-full flex-shrink-0'>
      <GlassWindowContents className='flex h-full w-full items-center px-[1rem]'>
        <p
          className='cursor-pointer text-xs font-bold text-slate-500'
          onClick={() => {
            sidebarController.actions.goToHome();
          }}
        >
          Folders / {galleryListController.state.currentObj?.title}
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
