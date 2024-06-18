import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { useContext } from 'react';
import { SpaceDraftSidebarContext } from '../../../main';

export function SpaceDraftResourcesBreadcrumbs() {
  const galleryListController = useContext(ContextForGalleryList);
  const collectionsListController = useContext(ContextForGalleryCollectionList);
  const sidebarController = useContext(SpaceDraftSidebarContext);

  return (
    <GlassWindowFrame className='h-[3rem] w-full flex-shrink-0'>
      <GlassWindowContents className='flex h-full w-full items-center px-[1rem]'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-500'
          onClick={() => {
            galleryListController.state.currentObj &&
              sidebarController.actions.goToGallery(
                galleryListController.state.currentObj,
              );
          }}
        >
          Gallerys / {galleryListController.state.currentObj?.title} /{' '}
          {collectionsListController.state.currentObj?.title}
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
