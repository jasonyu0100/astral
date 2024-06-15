import { useContext } from 'react';
import { SpaceDraftSidebarContext, SpaceDraftSidebarMode } from '../main';
import { SpaceDraftGalleryCollectionsMode } from './(gallery)/main';
import { SpaceDraftSidebarHomeGallerysMode } from './(home)/main';
import { SpaceDraftCollectionResourcesMode } from './(resources)/main';

export function SpaceDraftSidebarBody() {
  const { sidebarMode } = useContext(SpaceDraftSidebarContext);
  return (
    <>
      {sidebarMode === SpaceDraftSidebarMode.Gallerys && (
        <SpaceDraftSidebarHomeGallerysMode />
      )}
      {sidebarMode === SpaceDraftSidebarMode.Collections && (
        <SpaceDraftGalleryCollectionsMode />
      )}
      {sidebarMode === SpaceDraftSidebarMode.Resources && (
        <SpaceDraftCollectionResourcesMode />
      )}
    </>
  );
}
