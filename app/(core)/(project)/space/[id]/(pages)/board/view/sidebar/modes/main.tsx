import { useContext } from 'react';
import { SpaceBoardSidebarContext, SpaceBoardSidebarMode } from '../main';
import { SpaceBoardGalleryCollectionsMode } from './(gallery)/main';
import { SpaceBoardSidebarHomeGallerysMode } from './(home)/main';
import { SpaceBoardCollectionResourcesMode } from './(resources)/main';

export function SpaceBoardSidebarBody() {
  const { sidebarMode } = useContext(SpaceBoardSidebarContext);
  return (
    <div className='flex h-full w-full flex-col pt-[1rem]'>
      {sidebarMode === SpaceBoardSidebarMode.Gallerys && (
        <SpaceBoardSidebarHomeGallerysMode />
      )}
      {sidebarMode === SpaceBoardSidebarMode.Collections && (
        <SpaceBoardGalleryCollectionsMode />
      )}
      {sidebarMode === SpaceBoardSidebarMode.Resources && (
        <SpaceBoardCollectionResourcesMode />
      )}
    </div>
  );
}
